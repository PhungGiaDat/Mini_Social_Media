// ForgetPasswordScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Bắt đầu component
const ForgetPasswordScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  const handleContinue = () => {
    // Điều hướng đến màn hình Reset Password
    navigation.navigate('ResetPassword');
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require('../../assets/favicon.png')} style={styles.logo} />

      {/* Tiêu đề */}
      <Text style={styles.title}>Forget Password</Text>

      {/* Ô nhập email */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      {/* Nút Continue */}
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgetPasswordScreen;

// StyleSheet cho màn hình Forget Password
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
