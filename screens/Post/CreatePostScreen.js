import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CreatePostScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create Post Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CreatePostScreen;// Tạo bài viết