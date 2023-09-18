import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile } from '../store/actions/userAction';

const ProfilePage: React.FC = () => {
  const dispatch:any = useDispatch();
  const user = useSelector((state:any) => state.user.userProfile);

  useEffect(() => {
    dispatch(fetchUserProfile('email'));
  }, [dispatch]);

  return (
    <div>
      <h2>Profile</h2>
      {user && (
        <div>
          <p>Name: {user.firstname} {user.lastname}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;