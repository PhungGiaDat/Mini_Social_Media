import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainTabs from './navigation/MainTabs'; // Đúng đường dẫn tới MainTabs.js
import { ThemeProvider } from './contexts/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <MainTabs />
      </NavigationContainer>
    </ThemeProvider>
  );
}
// // // MainTabs.js
// import React from 'react';