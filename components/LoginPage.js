// components/LoginPage.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const LoginPage = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Implement logic for authentication
    console.log('Logging in...');

    navigation.navigate('HomePage');

    // You can add further logic to check the credentials and navigate to the appropriate page
    // For simplicity, it currently logs a message to the console
  };

  return (
    <View style={styles.container}>
      {/* Login Form */}
      <View style={styles.card}>
        <View style={styles.loginForm}>
          <FontAwesome name="user" size={50} color="#C4A484" style={styles.icon} />
          <Text style={styles.title}>Login</Text>

          {/* Username */}
          <View style={styles.inputContainer}>
            <FontAwesome name="user" size={20} color="#C4A484" style={styles.inputIcon} />
            <TextInput
              style={styles.textInput}
              placeholder="Enter your username"
              value={username}
              onChangeText={(text) => setUsername(text)}
              placeholderTextColor="gray"
            />
          </View>

          {/* Password */}
          <View style={styles.inputContainer}>
            <FontAwesome name="lock" size={20} color="#C4A484" style={styles.inputIcon} />
            <TextInput
              style={styles.textInput}
              placeholder="Enter your password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={!showPassword}
              placeholderTextColor="gray"
            />
            <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowPassword(!showPassword)}>
              <Ionicons name={!showPassword ? 'ios-eye-off' : 'ios-eye'} size={20} color="#C4A484" />
            </TouchableOpacity>
          </View>

          {/* Login Button */}
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    padding: 20,
    width: '100%',
  },
  loginForm: {
    alignItems: 'center',
  },
  icon: {
    marginBottom: 10,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  inputIcon: {
    marginRight: 10,
  },
  textInput: {
    backgroundColor: 'rgba(123,255,255,0.2)',
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    color: 'white',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
  },
  loginButton: {
    backgroundColor: 'rgba(30,120,130,0.6)',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default LoginPage;
