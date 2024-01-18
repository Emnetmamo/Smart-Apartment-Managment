// components/FeatureCard.js
import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <View style={{ borderWidth: 1, borderColor: 'gray', padding: 10, margin: 5,  width: 330, borderRadius: 20 , backgroundColor: 'rgba(123,255,255,0.2)' }}>
      {/* 162 width 2 in a row */}
      <Ionicons name={icon} size={45} color="yellow" style={{ alignSelf: 'center', marginBottom: 10 }} />
      <Text style={{ color: "#fff", textAlign: 'center', fontWeight: 'bold', fontSize:20 }}>{title}</Text>
      <Text style={{ color: "#ccc", textAlign: 'center' }}>{description}</Text>
    </View>
  );
};

export default FeatureCard;
