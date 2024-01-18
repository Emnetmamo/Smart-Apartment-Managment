// components/WelcomePage.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const WelcomePage = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to Smart Apartment App!</Text>
      <Button title="Get Started" onPress={() => navigation.navigate('NextPage')} />
    </View>
  );
};

export default WelcomePage;
