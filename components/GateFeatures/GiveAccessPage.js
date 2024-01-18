// components/GateFeatures/GiveAccessPage.js
import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const peopleData = [
  { id: 1, name: 'John Doe', profileImage: require('../../assets/images/GateImages/person1.jpg'), phoneNumber: '123-456-7890' },
  { id: 2, name: 'Jane Smith', profileImage: require('../../assets/images/GateImages/person2.jpg'), phoneNumber: '987-654-3210' },
  { id: 3, name: 'Bob Johnson', profileImage: require('../../assets/images/GateImages/person3.jpg'), phoneNumber: '555-123-4567' },
  // Add more people data as needed
];

const GiveAccessPage = ({ navigation }) => {
  const renderPeopleList = () => {
    return peopleData.map((person) => (
      <View key={person.id} style={styles.personContainer}>
        <Image source={person.profileImage} style={styles.profileImage} />
        <View style={styles.personInfo}>
          <Text style={styles.personName}>{person.name}</Text>
          <Text style={styles.phoneNumber}>{person.phoneNumber}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.openGateButton} onPress={() => handleOpenGate(person)}>
            <Text style={styles.buttonText}>Open Gate</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeButton} onPress={() => handleCloseGate(person)}>
            <Text style={styles.buttonText}>Close Gate</Text>
          </TouchableOpacity>
        </View>
      </View>
    ));
  };

  const handleOpenGate = (person) => {
    // Implement logic to open the gate for the selected person
    console.log(`Opening gate for ${person.name}`);
  };

  const handleCloseGate = (person) => {
    // Implement logic to close the gate for the selected person
    console.log(`Closing gate for ${person.name}`);
  };

  return (
    <View style={styles.container}>
      {/* Top Menu Bar */}
      <View style={styles.menuBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-back" size={30} color="#C4A484" style={{ marginTop: 30 }} />
        </TouchableOpacity>
      </View>

      {/* Page Title */}
      <Text style={styles.pageTitle}>Give Access Grant</Text>

      {/* People List */}
      <ScrollView contentContainerStyle={styles.peopleList}>{renderPeopleList()}</ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.bottomNavItem}>
          <Ionicons name="ios-home" size={24} color="#C4A484" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem}>
          <Ionicons name="ios-person" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem}>
          <Ionicons name="ios-settings" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem}>
          <Ionicons name="ios-notifications" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
  },
  menuBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginTop: 15,
  },
  pageTitle: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  peopleList: {
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  personContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(123,255,255,0.2)',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  personInfo: {
    flex: 1, // Allow the name and phone number to take remaining space
    marginLeft: 10,
  },
  personName: {
    color: 'white',
    fontSize: 17,
  },
  phoneNumber: {
    color: 'lightgray',
    fontSize: 14,
  },
  openGateButton: {
    backgroundColor: 'rgba(123,255,255,0.6)',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'column',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  closeButton: {
    backgroundColor: 'rgba(196, 164, 132,0.6)',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 'auto',
  },
  bottomNavItem: {
    backgroundColor: 'rgba(255,255,130,0.1)',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 33,
  },
});

export default GiveAccessPage;
