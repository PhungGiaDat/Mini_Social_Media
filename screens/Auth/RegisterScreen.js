// =========================
// RegisterScreen.js
// Màn hình đăng ký tài khoản cho ứng dụng mạng xã hội.
// - Cho phép người dùng nhập thông tin để tạo tài khoản mới.
// - Điều hướng sang LoginScreen nếu đã có tài khoản.
// - Khi đăng ký thành công, có thể tự động đăng nhập hoặc chuyển sang màn hình đăng nhập.
// =========================

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Switch,
} from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';

const RegisterScreen = ({ navigation }) => {
  const [isChecked, setIsChecked] = useState(false);
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }] }>
      <Image source={require('../../assets/favicon.png')} style={styles.logo} />
      <Text style={[styles.title, { color: colors.text }]}>Create an account</Text>
      <TextInput style={[styles.input, { borderColor: colors.primary, color: colors.text }]} placeholder="Name" placeholderTextColor={colors.secondary} />
      <TextInput style={[styles.input, { borderColor: colors.primary, color: colors.text }]} placeholder="Email" placeholderTextColor={colors.secondary} />
      <TextInput style={[styles.input, { borderColor: colors.primary, color: colors.text }]} placeholder="Password" placeholderTextColor={colors.secondary} secureTextEntry />
      <TextInput style={[styles.input, { borderColor: colors.primary, color: colors.text }]} placeholder="Confirm Password" placeholderTextColor={colors.secondary} secureTextEntry />
      <View style={styles.row}>
        <Switch value={isChecked} onValueChange={setIsChecked} thumbColor={isChecked ? colors.primary : '#ccc'} trackColor={{ false: '#ccc', true: colors.primary }} />
        <Text style={[styles.rememberText, { color: colors.text }]}>Remember me</Text>
        <TouchableOpacity style={styles.forgot}>
          <Text style={[styles.forgotText, { color: colors.text }]}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={[styles.button, { backgroundColor: colors.secondary }]}>
        <Text style={[styles.buttonText, { color: colors.text }]}>SIGN UP</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text style={{ color: colors.text }}>Already have an account ? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={[styles.link, { color: colors.secondary }]}>Login Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;

// StyleSheet cho màn hình Register
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
  },
  logo: {
    width: 40,
    height: 60,
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 8,
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    justifyContent: 'space-between',
  },
  rememberText: {
    flex: 1,
  },
  forgot: {
    marginLeft: 'auto',
  },
  forgotText: {
    fontSize: 12,
  },
  button: {
    paddingVertical: 12,
    borderRadius: 5,
    marginTop: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  link: {
    fontWeight: 'bold',
  },
});
