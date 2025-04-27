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

const RegisterScreen = ({ navigation }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/favicon.png')} style={styles.logo} />
      <Text style={styles.title}>Create an account</Text>
      <TextInput style={styles.input} placeholder="Name" placeholderTextColor="#FBBF24" />
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#FBBF24" />
      <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#FBBF24" secureTextEntry />
      <TextInput style={styles.input} placeholder="Confirm Password" placeholderTextColor="#FBBF24" secureTextEntry />
      <View style={styles.row}>
        <Switch value={isChecked} onValueChange={setIsChecked} />
        <Text style={styles.rememberText}>Remember me</Text>
        <TouchableOpacity style={styles.forgot}>
          <Text style={styles.forgotText}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text>Already have an account ? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Login Up</Text>
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
    backgroundColor: '#fff',
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
    borderColor: '#FBBF24',
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
    color: 'gray',
  },
  button: {
    backgroundColor: '#FBBF24',
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
    color: '#FBBF24',
    fontWeight: 'bold',
  },
});
