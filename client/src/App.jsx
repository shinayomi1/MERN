import './App.css';
import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';


import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Outlet />
    </ApolloProvider>
  );
};

export default App;
