import React, { ReactNode, createContext, useState, useContext, useMemo } from 'react';
import { SignInData } from '../../../models/AuthModels';
import { UserInfo } from '../../../models/UserModels';
import { useInitialAuthCheck } from './hooks';
import { useService } from '../services/ServicesContext';

type AuthContextData = {
  isAuth: boolean;
  isAuthChecked: boolean;
  isAuthCheckInProcess: boolean;
  signIn: (signInData: SignInData) => Promise<UserInfo | Error | null>;
  signOut: (userId: string) => Promise<boolean | Error>;
}

type Props = {
  children: ReactNode
};

const AuthContext = createContext<AuthContextData | null>(null);

const AuthProvider = ({children}: Props) => {
  const { authService } = useService()!;
  const [userData, setUserData] = useState<UserInfo | null>(null);
  const authCheckStatus = useInitialAuthCheck(setUserData);
  const isAuth = useMemo<boolean>(() => !!userData, [userData]);

  const signIn = async (signInData: SignInData): Promise<UserInfo | Error | null> => {
    const userInfo = await authService.signIn(signInData);
    if (!(userInfo instanceof Error)) {
      setUserData(userInfo);
    }

    return userInfo;
  };

  const signOut = async (userId: string): Promise<boolean | Error> => {
    const success = await authService.signOut(userId)
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
