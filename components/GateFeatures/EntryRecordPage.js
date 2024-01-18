// components/GateFeatures/EntryRecordPage.js
import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const entryRecords = [
  { id: 1, name: 'John Doe', profileImage: require('../../assets/images/GateImages/person1.jpg'), entryTime: '10:00 AM', exitTime: '02:30 PM', date: '2024-01-15' },
  { id: 2, name: 'Jane Smith', profileImage: require('../../assets/images/GateImages/person2.jpg'), entryTime: '09:30 AM', exitTime: '01:45 PM', date: '2024-01-15' },
  { id: 3, name: 'Bob Johnson', profileImage: require('../../assets/images/GateImages/person3.jpg'), entryTime: '11:15 AM', exitTime: '03:00 PM', date: '2024-01-15' },
  // Add more entry records as needed
];

const EntryRecordPage = ({ navigation }) => {
  const renderEntryRecords = () => {
    return entryRecords.map((record) => (
      <View key={record.id} style={styles.entryRecordContainer}>
        <Image source={record.profileImage} style={styles.profileImage} />
        <View style={styles.recordDetails}>
          <Text style={styles.personName}>{record.name}</Text>
          <Text style={styles.recordText}>Entry Time: {record.entryTime}</Text>
          <Text style={styles.recordText}>Exit Time: {record.exitTime}</Text>
          <Text style={styles.recordText}>Date: {record.date}</Text>
        </View>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      {/* Top Menu Bar */}
      <View style={styles.menuBar}>
        <Ionicons name="ios-arrow-back" size={30} color="#C4A484" onPress={() => navigation.goBack()} />
      </View>

      {/* Page Title */}
      <Text style={styles.pageTitle}>Entry Records</Text>

      {/* Entry Records List */}
      <ScrollView contentContainerStyle={styles.entryRecordsList}>{renderEntryRecords()}</ScrollView>

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
    marginBottom: 20,
  },
  pageTitle: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  entryRecordsList: {
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  entryRecordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(123,255,255,0.2)',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  recordDetails: {
    flex: 1,
  },
  personName: {
    color: 'white',
    fontSize: 17,
    marginBottom: 5,
  },
  recordText: {
    color: 'white',
    fontSize: 14,
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

export default EntryRecordPage;
