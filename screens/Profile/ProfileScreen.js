// Hồ sơ người dùng
// ProfileScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// ProfileScreen component
const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* --------- Title --------- */}
      <Text style={styles.title}>Profile</Text>

      {/* --------- Nội dung hồ sơ ở đây --------- */}
      <Text style={styles.subText}>User profile information goes here...</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 16,
    color: 'gray',
    marginTop: 10,
  },
});

// // // // AuthStack.js
// import React from 'react';