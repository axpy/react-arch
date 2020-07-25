import React, { ReactNode, createContext, useState, useContext, useMemo } from 'react';
import { AuthCredentials } from '../../../models/AuthModels';
import { UserModel } from '../../../models/UserModels';
import { DataValidatorError } from '../../../services/DataValidator';
import { useInitialAuthCheck } from './hooks';
import { useService } from '../services/ServicesContext';

type AuthContextData = {
  isAuth: boolean;
  isAuthChecked: boolean;
  isAuthCheckInProcess: boolean;
  signIn: (authCredentials: AuthCredentials) => Promise<UserModel | Array<DataValidatorError> | Error | null>;
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

  const signIn = async (authCredentials: AuthCredentials): Promise<UserModel | Array<DataValidatorError> | Error | null> => {
    const {success, payload} = await authService.signIn(authCredentials);
    if (success && payload instanceof UserModel) setUserData(payload);

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
