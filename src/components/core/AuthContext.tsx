import React, { useState, useContext, useMemo, ReactChildren } from 'react';
import { authService } from '../../services/AuthService';
import { AuthCredentials } from '../../models/AuthModels';
import { UserModel } from '../../models/UserModels';
import { DataValidatorError } from '../../services/DataValidator';

type AuthContextData = {
  isAuth: boolean;
  signIn: (authCredentials: AuthCredentials) => Promise<UserModel | Array<DataValidatorError> | Error | null>;
  signOut: (userId: string) => Promise<boolean>;
}

type Props = {
  children: React.ReactNode
};

const AuthContext = React.createContext<AuthContextData | null>(null);

const AuthProvider = ({children}: Props) => {
  const [userData, setUserData] = useState<UserModel | null>(null);
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
      value={{isAuth, signIn, signOut}}
    >
      {children}
    </AuthContext.Provider>
  )
}

const useTheme = () => useContext(AuthContext);

export { AuthProvider, useTheme }
