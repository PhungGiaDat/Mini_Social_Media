import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainTabs from './screens/MainTabs'; // Đúng đường dẫn tới MainTabs.js

export default function App() {
  return (
    <NavigationContainer>
      <MainTabs />
    </NavigationContainer>
  );
}
// // // MainTabs.js
// import React from 'react';