import React from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

const SignupForm = () => {
  const [addUser] = useMutation(ADD_USER);

  const handleSignup = async (userData) => {
    try {
      // Logic to signup user
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  // Rest of the component code
};
