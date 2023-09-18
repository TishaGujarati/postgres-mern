import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../store/actions/authAction';

const RegisterPage: React.FC = () => {
  const [userData, setUserData] = useState({
    id: 0,
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });
  const dispatch:any = useDispatch();
  const error = useSelector((state:any) => state.auth.error);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(registerUser(userData));
  };

  return (
    <div>
      <h2>Register</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            value={userData.firstname}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={userData.lastname}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={userData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={userData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;