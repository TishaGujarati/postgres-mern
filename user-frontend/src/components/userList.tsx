import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserList } from '../store/actions/userAction';

const UserListPage: React.FC = () => {
  const dispatch:any = useDispatch();
  const userList = useSelector((state:any) => state.user.userList);

  useEffect(() => {
    dispatch(fetchUserList());
  }, [dispatch]);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {userList.map((user:any) => (
          <li key={user.id}>{user.firstname} {user.lastname}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserListPage;