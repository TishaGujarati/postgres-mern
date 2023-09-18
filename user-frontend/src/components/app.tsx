import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './loginForm';
import RegisterPage from './registerForm';
import ProfilePage from './userProfile';
import UserListPage from './userList';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" Component={LoginPage} />
        <Route path="/register" Component={RegisterPage} />
        <Route path="/profile" Component={ProfilePage} />
        <Route path="/users" Component={UserListPage}/>
      </Routes>
    </Router>
  );  
};

export default App;