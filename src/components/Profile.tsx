import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { getUserInfo } from '../store/user/selectors';

const Profile = () => {
  const userInfo = useSelector(getUserInfo, shallowEqual);
  
  return (
    <div>
      {
        userInfo && (
          <div>
            <p>id: {userInfo.id}</p>
            <p>name: {userInfo.name}</p>
          </div>
        )
      }
    </div>
  );
}

export default Profile;