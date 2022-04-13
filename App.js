import React from 'react'
import { AuthProvider } from './src/context/AuthContext';
// import LoginScreen from './src/LoginScree'
import Routes from './src/Routes'

export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}
