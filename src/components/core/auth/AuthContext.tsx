import React, { ReactNode, createContext, useState, useContext, useMemo } from 'react';
import { SignInData } from '../../../models/AuthModels';
import { UserModel } from '../../../models/UserModels';
import { useInitialAuthCheck } from './hooks';
import { useService } from '../services/ServicesContext';

type AuthContextData = {
  isAuth: boolean;
  isAuthChecked: boolean;
  isAuthCheckInProcess: boolean;
  signIn: (signInData: SignInData) => Promise<UserModel | Error | null>;
  signOut: (userId: string) => Promise<boolean>;
}

type Props = {
  children: ReactNode
};

const AuthContext = createContext<AuthContextData | null>(null);

const AuthProvider = ({children}: Props) => {
  const { authService } = useService()!;
  const [userData, setUserData] = useState<UserModel | null>(null);
  const authCheckStatus = useInitialAuthCheck(setUserData);
  const isAuth = useMemo<boolean>(() => !!userData, [userData]);

  const signIn = async (signInData: SignInData): Promise<UserModel | Error | null> => {
    const {success, payload} = await authService.signIn(signInData);
    if (success && !(payload instanceof Error)) setUserData(payload);

    return payload;
  };

  const signOut = async (userId: string): Promise<boolean> => {
    const {success} = await authService.signOut(userId)
    success && setUserData(null);
    return success;
  };

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        isAuthChecked: authCheckStatus.isAuthChecked,
        isAuthCheckInProcess: authCheckStatus.isAuthCheckInProcess,
        signIn,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth }
