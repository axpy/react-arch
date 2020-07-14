import React, { ReactNode, createContext, useState, useContext, useMemo } from 'react';
import { authService } from '../../../services/AuthService';
import { userService } from '../../../services/UserService';
import { AuthCredentials } from '../../../models/AuthModels';
import { UserModel } from '../../../models/UserModels';
import { DataValidatorError } from '../../../services/DataValidator';
import { useInitialAuthCheck, AuthCheckStatus } from './hooks';

type AuthContextData = {
  authCheckStatus: AuthCheckStatus;
  isAuth: boolean;
  signIn: (authCredentials: AuthCredentials) => Promise<UserModel | Array<DataValidatorError> | Error | null>;
  signOut: (userId: string) => Promise<boolean>;
}

type Props = {
  children: ReactNode
};

const AuthContext = createContext<AuthContextData | null>(null);

const AuthProvider = ({children}: Props) => {
  const [userData, setUserData] = useState<UserModel | null>(null);
  const authCheckStatus = useInitialAuthCheck(setUserData, userService);
  const isAuth = useMemo<boolean>(() => !!userData, [userData]);

  const signIn = async (authCredentials: AuthCredentials): Promise<UserModel | Array<DataValidatorError> | Error | null> => {
    const {success, payload} = await authService.signIn(authCredentials);
    if (success && payload instanceof UserModel) setUserData(payload);

    return payload;
  };

  const signOut = async (userId: string): Promise<boolean> => {
    const {success} = await authService.signOut(userId)
    return success;
  };

  return (
    <AuthContext.Provider
      value={{isAuth, authCheckStatus, signIn, signOut}}
    >
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth }
