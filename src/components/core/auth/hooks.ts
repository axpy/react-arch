import { useState, useEffect } from "react";
import { UserInfo } from "../../../models/UserModels";
import { useService } from "../services/ServicesContext";

export type AuthCheckStatus = {
  isAuthChecked: boolean,
  isAuthCheckInProcess: boolean
}

const authCheckStatuses = {
  inProcess: {
    isAuthChecked: false,
    isAuthCheckInProcess: true
  },
  complete: {
    isAuthChecked: true,
    isAuthCheckInProcess: false
  },
};

function useInitialAuthCheck(setUserData: (userData: UserInfo | null) => void) {
  const { userService, authService, userStorageService } = useService()!;
  const [authCheckStatus, setAuthCheckStatus] = useState<AuthCheckStatus>(authCheckStatuses.inProcess);

  const getUserInfo = async () => {
    const userInfo = await userService.getUserInfo()
    if (!(userInfo instanceof Error)) {
      setUserData(userInfo);
      userStorageService.setUserInfo(userInfo);
    }

    setAuthCheckStatus(authCheckStatuses.complete);
  }

  useEffect(() => {
    if (!authService.isUserWasSignedIn()) {
      setAuthCheckStatus(authCheckStatuses.complete)
    } else {
      setAuthCheckStatus(authCheckStatuses.inProcess)
      getUserInfo();
    }
  }, []);

  return authCheckStatus;
}

export {
  useInitialAuthCheck
}
