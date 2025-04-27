// SearchScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// SearchScreen component
const SearchScreen = () => {
  return (
    <View style={styles.container}>
      {/* --------- Title --------- */}
      <Text style={styles.title}>Search</Text>

      {/* --------- Nội dung tìm kiếm ở đây --------- */}
      <Text style={styles.subText}>Search screen content goes here...</Text>
    </View>
  );
};

export default SearchScreen;

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
// Tìm kiếm người dùng hoặc bài viết