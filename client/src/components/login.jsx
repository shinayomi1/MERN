import React from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

const LoginForm = () => {
  const [loginUser] = useMutation(LOGIN_USER);

  const handleLogin = async (userData) => {
    try {
      // Logic to login user
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  // Rest of the component code
};
