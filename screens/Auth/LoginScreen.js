import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const LoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // TODO: Xử lý đăng nhập với Firebase
    console.log('Logging in with:', email, password);
  };

  return (
    <View style={styles.container}>
      {/* Background và logo có thể tuỳ chỉnh thêm */}
      <View style={styles.header}>
        <Image
          source={require('../../assets/favicon.png')} // Đặt logo của bạn vào đây
          style={styles.logo}
        />
      </View>

      <Text style={styles.title}>Login</Text>

      <View style={styles.inputContainer}>
        <Icon name="mail-outline" size={18} color="#fbbf24" />
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="lock-closed-outline" size={18} color="#fbbf24" />
        <TextInput
          placeholder="Password"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Icon
            name={showPassword ? 'eye-off-outline' : 'eye-outline'}
            size={18}
            color="#999"
          />
        </TouchableOpacity>
      </View>

      {/* Ghi nhớ và quên mật khẩu */}
      <View style={styles.row}>
        <View style={styles.checkboxContainer}>
          <Text style={styles.remember}>Remember me</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot password?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <View style={styles.registerRow}>
        <Text>Don't have an account? </Text>
        <Pressable onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerLink}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff9ec',
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'flex-start',
    marginBottom: 30,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    paddingVertical: 8,
    gap: 8,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    paddingVertical: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  remember: {
    fontSize: 12,
    color: '#333',
  },
  forgot: {
    fontSize: 12,
    color: '#555',
  },
  loginButton: {
    backgroundColor: '#fbbf24',
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 6,
    elevation: 2,
    marginBottom: 20,
  },
  loginText: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 16,
  },
  registerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  registerLink: {
    color: '#fbbf24',
    fontWeight: 'bold',
  },
});

