// components/NextPage.js
import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const NextPage = ({ navigation }) => {
  const handleSignIn = () => {
    navigation.navigate('LoginPage');
  };

  const handleCreateAccount = () => {
    navigation.navigate('RegistrationPage');
  };

  const handleGoogleSignUp = () => {
    // Implement logic for Google Sign Up
    console.log('Signing up with Google...');
  };

  return (
  
      <View style={styles.container}>
        {/* <Text style={styles.Title}>What are you waiting for?</Text> */}
        
        {/* Image */}
        <Image
          source={require('../assets/images/bg2.png')} // Adjust the path based on your image location
          style={styles.image}
        />

        {/* Buttons */}
        <View style={styles.buttonsContainer}>
          {/* Sign In Button */}
          <Text style={styles.join}>Join Us Today!</Text>
          <TouchableOpacity style={styles.button} onPress={handleSignIn}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>

          <Text style={styles.orText}>Don't have an account?</Text>
          
          {/* Divider */}
          <View style={styles.divider} />

          {/* Create Account Button */}
          <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
            <Text style={styles.buttonText}>Create an Account</Text>
          </TouchableOpacity>

          {/* Divider */}
          <View style={styles.divider} />

          {/* Or Text */}
          <Text style={styles.orText}>Or</Text>

          {/* Sign Up with Google Button */}
          <TouchableOpacity style={styles.googleButton} onPress={handleGoogleSignUp}>
            <Ionicons name="logo-google" size={24} color="white" style={styles.googleIcon} />
            <Text style={styles.googleButtonText}>Sign Up with Google</Text>
          </TouchableOpacity>
        </View>
      </View>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0,1)', // Add some transparency to the background
    padding: 20,
    alignItems: 'flex-center', // Align items to the right
    justifyContent: 'flex-end', // Align items to the bottom
  },
  Title:{
    marginBottom: -5,
    marginLeft: 170,
    color: '#C4A484',
    fontWeight: 'bold',
    fontSize: 30,
  },
  join: {
    marginLeft: 5,
    marginBottom:15,
    color: '#C4A484',
    fontWeight: 'bold',
    fontSize: 25,
  },
  image: {
    width: 500,
    height: 350,
    marginBottom: 20,
    alignSelf: 'center', // Center the image horizontally
    marginBottom: 20
  },
  buttonsContainer: {
    alignItems: 'center',
    marginBottom: 20, // Adjust as needed
  },
  button: {
    backgroundColor: 'rgba(123,255,255,0.3)',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 5,
    marginBottom: 20,
    width: 220,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  // divider: {
  //   backgroundColor: 'rgba(255, 255, 255, 0.5)',
  //   height: 1,
  //   width: '100%',
  //   marginBottom: 10,
  // },
  orText: {
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(30, 120, 80,0.5)',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  googleIcon: {
    marginRight: 10,
  },
  googleButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default NextPage;
