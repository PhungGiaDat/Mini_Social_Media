import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FriendListScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Friend List</Text>
      <Text style={styles.subText}>List of friends will be displayed here...</Text>
    </View>
  );
};

export default FriendListScreen;

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
});// Danh sách bạn bè