// MainTabs.js

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Import các màn hình
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import AddPostScreen from './AddPostScreen';
import NotificationScreen from './NotificationScreen';
import ProfileScreen from './ProfileScreen';

// Khởi tạo Bottom Tab Navigator
const Tab = createBottomTabNavigator();

// MainTabs component
const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // Custom icon cho từng tab
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          // Thiết lập icon theo từng route
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'AddPost') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if (route.name === 'Notifications') {
            iconName = focused ? 'notifications' : 'notifications-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          // Trả về icon tương ứng
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'black', // Màu icon khi active
        tabBarInactiveTintColor: 'gray', // Màu icon khi inactive
        headerShown: false, // Ẩn header
      })}
    >
      {/* Các tab screen */}
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="AddPost" component={AddPostScreen} />
      <Tab.Screen name="Notifications" component={NotificationScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default MainTabs;
