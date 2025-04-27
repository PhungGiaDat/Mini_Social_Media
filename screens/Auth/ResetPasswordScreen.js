// ResetPasswordScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Bắt đầu component
const ResetPasswordScreen = () => {
  const navigation = useNavigation();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleReset = () => {
    if (newPassword === confirmPassword) {
      // Xử lý logic Reset Password ở đây
      alert('Password reset successfully!');
      navigation.navigate('Login'); // Điều hướng về Login sau khi reset
    } else {
      alert('Passwords do not match!');
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require('../../assets/favicon.png')} style={styles.logo} />

      {/* Tiêu đề */}
      <Text style={styles.title}>Reset Password</Text>

      {/* Ô nhập mật khẩu mới */}
      <TextInput
        style={styles.input}
        placeholder="New Password"
        secureTextEntry
        value={newPassword}
        onChangeText={setNewPassword}
      />

      {/* Ô xác nhận lại mật khẩu */}
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      {/* Nút Reset */}
      <TouchableOpacity style={styles.button} onPress={handleReset}>
        <Text style={styles.buttonText}>RESET</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ResetPasswordScreen;

// StyleSheet cho màn hình Reset Password
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 30,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 30,
    paddingVertical: 8,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#FDBA12',
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
});
