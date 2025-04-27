import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../contexts/AuthContext';
import AuthStack from './AuthStack';
import MainTabs from './MainTabs';

export default function AppNavigator() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user ? <MainTabs /> : <AuthStack />}
    </NavigationContainer>
  );
}
// // MainTabs.js
// import React from 'react';