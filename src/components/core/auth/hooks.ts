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
  const { userService } = useService()!;
  const [authCheckStatus, setAuthCheckStatus] = useState<AuthCheckStatus>(authCheckStatuses.inProcess);

  useEffect(() => {
    async function getUserInfo() {
      const userInfo = await userService.getUserInfo()
      if (!(userInfo instanceof Error)) {
        setUserData(userInfo);
      }

      setAuthCheckStatus(authCheckStatuses.complete);
    }

    setAuthCheckStatus(authCheckStatuses.inProcess)
    getUserInfo();
  }, [setUserData]);

  return authCheckStatus;
}

export {
  useInitialAuthCheck
}
