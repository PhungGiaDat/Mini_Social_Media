import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';

// Dummy data giả lập cho danh sách chat
const chatList = [
  {
    id: '1',
    name: 'Anna Nguyen',
    lastMessage: 'Hẹn gặp chiều nay nhé!',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    id: '2',
    name: 'Minh Tran',
    lastMessage: 'Tối nay check lại file giùm tớ nha.',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    id: '3',
    name: 'Thảo Phạm',
    lastMessage: 'Được rồi, cảm ơn nhiều nhé!',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
];

const ChatListScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.chatItem}
      onPress={() => navigation.navigate('ChatRoom', { userId: item.id, userName: item.name })}
    >
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.chatInfo}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.message}>{item.lastMessage}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Danh sách các cuộc trò chuyện */}
      <FlatList
        data={chatList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default ChatListScreen;

// ================== STYLES ==================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  chatItem: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  chatInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontWeight: '600',
    fontSize: 16,
  },
  message: {
    color: '#888',
    fontSize: 14,
    marginTop: 2,
  },
});
// Danh sách trò chuyện