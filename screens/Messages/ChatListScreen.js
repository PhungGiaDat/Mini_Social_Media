import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, TextInput, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../contexts/ThemeContext';
// import { messageApi } from '../../services/api';

// =========================
// MOCK DATA & CHÚ THÍCH:
// Đoạn này dùng dữ liệu mẫu để test UI khi chưa có backend/API thực tế.
// Khi muốn dùng API thật, hãy bỏ comment import messageApi và thay fetchChatList bằng gọi API.
// =========================
const mockChatList = [
  { id: '1', name: 'Anna', avatar: 'https://randomuser.me/api/portraits/women/1.jpg', lastMessage: 'Hi there!', isRead: false },
  { id: '2', name: 'Mike', avatar: 'https://randomuser.me/api/portraits/men/2.jpg', lastMessage: 'How are you?', isRead: true },
  { id: '3', name: 'Lisa', avatar: 'https://randomuser.me/api/portraits/women/3.jpg', lastMessage: 'See you soon!', isRead: false },
];

const ChatListScreen = () => {
  const navigation = useNavigation();
  const [chatList, setChatList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { colors } = useTheme();

  // =========================
  // Khi mount component, gọi fetchChatList để lấy dữ liệu (mock hoặc API)
  // =========================
  useEffect(() => {
    fetchChatList();
  }, []);

  // =========================
  // Hàm lấy danh sách chat (mock)
  // Nếu dùng API thật, thay bằng gọi messageApi.getConversations()
  // =========================
  const fetchChatList = async () => {
    setLoading(true);
    setTimeout(() => {
      setChatList(mockChatList);
      setLoading(false);
      setError(null);
    }, 500);
  };

  // =========================
  // Lọc danh sách theo search
  // =========================
  const filteredChatList = chatList.filter(chat =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // =========================
  // Xóa một chat khỏi danh sách (mock)
  // =========================
  const handleDeleteChat = async (id) => {
    setChatList(chatList.filter(chat => chat.id !== id));
  };

  // =========================
  // Đánh dấu đã đọc/chưa đọc (mock)
  // =========================
  const handleMarkAsRead = async (id) => {
    setChatList(chatList.map(chat =>
      chat.id === id ? { ...chat, isRead: !chat.isRead } : chat
    ));
  };

  // =========================
  // Render từng item trong danh sách chat
  // =========================
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.chatItem, { borderBottomColor: colors.border }]}
      onPress={() => navigation.navigate('ChatRoom', { conversation: item })}
    >
      <Image source={{ uri: item.avatar }} style={[styles.avatar, { borderColor: colors.border }]} />
      <View style={[styles.chatInfo, { borderColor: colors.border }]}>
        <Text style={[styles.name, { color: colors.text }]}>{item.name}</Text>
        <Text style={[styles.message, { color: colors.secondary }]}>{item.lastMessage}</Text>
      </View>
      <TouchableOpacity onPress={() => handleMarkAsRead(item.id)} style={[styles.markButton, { borderColor: colors.primary }]}>
        <Text style={[styles.markButtonText, { color: colors.primary }]}>Mark as Unread</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleDeleteChat(item.id)} style={[styles.deleteButton, { borderColor: colors.primary }]}>
        <Text style={[styles.deleteButtonText, { color: colors.primary }]}>Delete</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  // =========================
  // UI loading/error/main
  // =========================
  if (loading) {
    return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={[styles.header, { backgroundColor: colors.card }]}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.backButton, { borderColor: colors.primary }]}>
            <Text style={[styles.backButtonText, { color: colors.primary }]}>Back</Text>
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: colors.text }]}>Chat List</Text>
        </View>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={[styles.header, { backgroundColor: colors.card }]}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.backButton, { borderColor: colors.primary }]}>
            <Text style={[styles.backButtonText, { color: colors.primary }]}>Back</Text>
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: colors.text }]}>Chat List</Text>
        </View>
        <View style={styles.errorContainer}>
          <Text style={[styles.errorText, { color: colors.text }]}>{error}</Text>
          <TouchableOpacity onPress={fetchChatList} style={[styles.retryButton, { backgroundColor: colors.primary }]}>
            <Text style={[styles.retryButtonText, { color: colors.text }]}>Retry</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  // =========================
  // UI chính
  // =========================
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { backgroundColor: colors.card }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.backButton, { borderColor: colors.primary }]}>
          <Text style={[styles.backButtonText, { color: colors.primary }]}>Back</Text>
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.text }]}>Chat List</Text>
      </View>
      <TextInput
        style={[styles.searchInput, { backgroundColor: colors.card, color: colors.text, borderColor: colors.border }]}
        placeholder="Search chats..."
        placeholderTextColor={colors.secondary}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filteredChatList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        refreshing={loading}
        onRefresh={fetchChatList}
      />
    </View>
  );
};

// =========================
// Styles cho màn hình ChatList
// =========================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  backButton: {
    marginRight: 15,
  },
  backButtonText: {
    color: colors.primary,
    fontSize: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  chatItem: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
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
    color: colors.text,
  },
  message: {
    color: colors.secondary,
    fontSize: 14,
    marginTop: 2,
  },
  markButton: {
    marginLeft: 10,
  },
  markButtonText: {
    color: colors.primary,
  },
  deleteButton: {
    marginLeft: 10,
  },
  deleteButtonText: {
    color: 'red',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
  retryButton: {
    padding: 10,
    borderRadius: 5,
  },
  retryButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ChatListScreen;
// Danh sách trò chuyện