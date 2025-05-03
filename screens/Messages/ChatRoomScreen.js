// ChatRoomScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const ChatRoomScreen = () => {
  // State lưu danh sách tin nhắn
  const [messages, setMessages] = useState([
    { id: '1', text: 'Hello!', sender: 'other' },
    { id: '2', text: 'Hi there!', sender: 'me' },
  ]);

  // State cho nội dung người dùng đang gõ
  const [inputText, setInputText] = useState('');

  // Hàm gửi tin nhắn
  const handleSend = () => {
    if (inputText.trim() === '') return;

    const newMessage = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'me',
    };

    setMessages([...messages, newMessage]);
    setInputText('');
  };

  // Render từng item trong danh sách tin nhắn
  const renderMessage = ({ item }) => (
    <View
      style={[
        styles.messageBubble,
        item.sender === 'me' ? styles.myMessage : styles.theirMessage,
      ]}
    >
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={90}
    >
      {/* Danh sách tin nhắn */}
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messageList}
      />

      {/* Ô nhập tin nhắn */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
          <Text style={styles.sendText}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChatRoomScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  messageList: {
    padding: 16,
  },
  messageBubble: {
    padding: 10,
    marginBottom: 10,
    borderRadius: 16,
    maxWidth: '75%',
  },
  myMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
  },
  theirMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#E5E5EA',
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopColor: '#eee',
    borderTopWidth: 1,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: '#f2f2f2',
  },
  sendButton: {
    marginLeft: 10,
    alignSelf: 'center',
  },
  sendText: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
});
// Giao diện phòng chat