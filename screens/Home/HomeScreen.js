// HomeScreen.js

import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native';
import favicon from '../../assets/favicon.png';
// Danh sách user story mẫu
const stories = [
  { id: 1, name: 'User1', image: require('../../assets/favicon.png') },
  { id: 2, name: 'User2', image: require('../../assets/favicon.png') },
  { id: 3, name: 'User3', image: require('../../assets/favicon.png') },
  { id: 4, name: 'User4', image: require('../../assets/favicon.png') },
  { id: 5, name: 'User5', image: require('../../assets/favicon.png') },
];

// HomeScreen component
const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>

      {/* ----------- Header "Fine" ------------ */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Fine</Text>
      </View>

      {/* ----------- Story Bar ------------ */}
      <View style={styles.storyContainer}>
        <FlatList
          data={stories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.storyItem}>
              <TouchableOpacity>
                <Image source={item.image} style={styles.storyImage} />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

      {/* ----------- Post Content ------------ */}
      <View style={styles.postContainer}>
        
        {/* User Info */}
        <View style={styles.userInfo}>
          <Image source={require('../../assets/favicon.png')} style={styles.userAvatar} />
          <View>
            <Text style={styles.userName}>joshua_l</Text>
            <Text style={styles.userLocation}>Tokyo, Japan</Text>
          </View>
        </View>

        {/* Post Image */}
        <Image source={require('../../assets/favicon.png')} style={styles.postImage} />

        {/* Post Caption */}
        <View style={styles.postCaption}>
          <Text><Text style={{ fontWeight: 'bold' }}>joshua_l </Text>The game in Japan was amazing and I want to share some photos</Text>
          <Text style={styles.postDate}>September 19</Text>
        </View>

      </View>

    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  storyContainer: {
    backgroundColor: '#f5c663', // nền vàng
    paddingVertical: 10,
  },
  storyItem: {
    marginHorizontal: 10,
    alignItems: 'center',
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'magenta',
  },
  postContainer: {
    marginTop: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    fontWeight: 'bold',
  },
  userLocation: {
    fontSize: 12,
    color: 'gray',
  },
  postImage: {
    width: '100%',
    height: 300,
    marginTop: 5,
  },
  postCaption: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  postDate: {
    fontSize: 12,
    color: 'gray',
    marginTop: 5,
  },
});
// Trang chủ Feed