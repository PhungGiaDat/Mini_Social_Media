// MainTabs.js

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Import các màn hình
import HomeScreen from '../screens/Home/HomeScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import AddPostScreen from '../screens/Post/CreatePostScreen';
import NotificationScreen from '../screens/Home/NotificationScreen'; // Nếu NotificationScreen không tồn tại, hãy kiểm tra lại
import ProfileScreen from '../screens/Profile/ProfileScreen';
import MessageStack from './MessageStack';
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
      <Tab.Screen name="Messages" component={MessageStack} />
    </Tab.Navigator>
  );
};

export default MainTabs;
