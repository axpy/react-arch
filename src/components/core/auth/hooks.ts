import { useState, useEffect } from "react";
import { UserService } from "../../../services/UserService";
import { UserModel } from "../../../models/UserModels";

type AuthCheckStatus = {
  isAuthChecked: boolean,
  isAuthCheckInProcess: boolean
}

function useInitialAuthCheck(
  setUserData: (userData: UserModel | null) => void,
  userService: UserService
) {

  const [authCheckStatus, setAuthCheckStatus] = useState<AuthCheckStatus>({
    isAuthChecked: false,
    isAuthCheckInProcess: false
  });

  useEffect(() => {
    async function getUserInfo() {
      const {success, payload} = await userService.getUserInfo()
      if (success && payload instanceof UserModel) {
        setUserData(payload);
      }

      setAuthCheckStatus({
        isAuthChecked: true,
        isAuthCheckInProcess: false,
      });
    }
    setAuthCheckStatus({
      isAuthChecked: false,
      isAuthCheckInProcess: true,
    })
    getUserInfo();
  }, []);

  return authCheckStatus;
}

export {
  useInitialAuthCheck
}

export type {
  AuthCheckStatus
}