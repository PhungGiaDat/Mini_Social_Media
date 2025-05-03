import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* --------- Title --------- */}
      <Text style={styles.title}>Profile</Text>

      {/* --------- Nội dung hồ sơ --------- */}
      <Text style={styles.subText}>User profile information goes here...</Text>

      {/* --------- Nút điều hướng --------- */}
      <View style={styles.buttonContainer}>
        <Button
          title="View Friend List"
          onPress={() => navigation.navigate('FriendList')}
        />
        <Button
          title="Edit Profile"
          onPress={() => navigation.navigate('EditProfile')}
        />
      </View>
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
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
    width: '80%',
    justifyContent: 'space-between',
    height: 100,
  },
});