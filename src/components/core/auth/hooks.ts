import { useState, useEffect } from "react";
import { UserModel } from "../../../models/UserModels";
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

function useInitialAuthCheck(setUserData: (userData: UserModel | null) => void) {
  const { userService } = useService()!;
  const [authCheckStatus, setAuthCheckStatus] = useState<AuthCheckStatus>(authCheckStatuses.inProcess);

  useEffect(() => {
    async function getUserInfo() {
      const {success, payload} = await userService.getUserInfo()
      if (success && !(payload instanceof Error)) {
        setUserData(payload);
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
