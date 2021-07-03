import React, { useState } from 'react';
import './User.css';
import {
  Avatar, Button,
} from '@chakra-ui/react';
import { useAuth, logout } from './Context/Authcontext';

function User() {
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch (err) {
      // console.log(err.message);
    }
    setLoading(false);
  }
  // console.log(currentUser.uid);
  return (
    <div className="user_main">
      <div className="user_avatar">
        <Avatar name={currentUser && currentUser.displayName} bg="blue.300" />
        <h2 className="user_details">{currentUser && currentUser.displayName}</h2>
        <h2 className="user_details">{currentUser && currentUser.email}</h2>
      </div>
      <div className="user_logout">
        <Button onClick={handleLogout} colorScheme="teal" variant="solid" isLoading={loading}>
          Logout
        </Button>
      </div>

    </div>
  );
}

export default User;
