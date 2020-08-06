import React, { useState, useEffect } from 'react';
import { store } from '../../store';
import { useService } from '../core/services/ServicesContext';

const EditProfile = () => {
  const { userStorageService } = useService()!;
  const [name, setName] = useState('');
  return (
    <div>
      <h1>EditProfile</h1>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      <button onClick={() => userStorageService.setUserInfo({id: '1', name})}>done</button>
    </div>
  );
}

export default EditProfile;