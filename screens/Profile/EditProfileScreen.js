import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EditProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>
      <Text style={styles.subText}>Profile editing options will be displayed here...</Text>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
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
});// Chỉnh sửa hồ sơ