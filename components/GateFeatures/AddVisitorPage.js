// components/GateFeatures/AddVisitorPage.js
import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, TextInput, Switch } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const AddVisitorPage = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [hasCar, setHasCar] = useState(false);
  const [licensePlate, setLicensePlate] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(null);

  const handlePickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setProfilePhoto(result.uri);
    }
  };

  const handleTakePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setProfilePhoto(result.uri);
    }
  };

  const handleSaveVisitor = () => {
    // Implement logic to save visitor information
    console.log('Visitor Information Saved');
    // You can add further logic to save this information to your database or perform any required actions
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
      <Text style={styles.pageTitle}>Add Visitor</Text>

      {/* Form */}
      <ScrollView>
        <Text style={styles.inputLabel}>First Name</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter first name"
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
          placeholderTextColor="gray"
        />

        <Text style={styles.inputLabel}>Last Name</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter last name"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
          placeholderTextColor="gray"
        />

        <Text style={styles.inputLabel}>Phone Number</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter phone number"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
          keyboardType="phone-pad"
          placeholderTextColor="gray"
        />

        <Text style={styles.inputLabel}>Address</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter address"
          value={address}
          onChangeText={(text) => setAddress(text)}
          placeholderTextColor="gray"
        />

        <View style={styles.rowContainer}>
          <View style={styles.rowItem}>
            <Text style={styles.inputLabel}>Has Car?</Text>
            <Switch
              style={styles.toggleSwitch}
              trackColor={{ false: 'gray', true: '#C4A484' }}
              onValueChange={() => setHasCar(!hasCar)}
              value={hasCar}
            />
          </View>
          {hasCar && (
            <View style={styles.rowItem}>
              <Text style={styles.inputLabel}>License Plate</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Enter license plate"
                placeholderTextColor="gray"
                value={licensePlate}
                onChangeText={(text) => setLicensePlate(text)}
              />
            </View>
          )}
        </View>

        <Text style={styles.inputLabel}>Profile Photo</Text>
        {/* Note */}
        <Text style={styles.noteText}>
          Note: Please upload a clear profile photo for accurate facial recognition.
        </Text>
        <TouchableOpacity style={styles.uploadButton} onPress={handlePickImage}>
          <Text style={styles.buttonText}>Upload from Device</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.uploadButton} onPress={handleTakePhoto}>
          <Text style={styles.buttonText}>Take Photo</Text>
        </TouchableOpacity>
        {profilePhoto && (
          <Image source={{ uri: profilePhoto }} style={styles.profilePhoto} />
        )}

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveVisitor}>
          <Text style={styles.buttonText}>Save Visitor</Text>
        </TouchableOpacity>
      </ScrollView>

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
  pageTitle: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputLabel: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
    marginTop: 10,
  },
  textInput: {
    backgroundColor: 'rgba(123,255,255,0.2)',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    color: 'white',
    marginBottom: 15,
  },
  toggleSwitch: {
    marginBottom: 15,
  },
  uploadButton: {
    backgroundColor: 'rgba(123,255,255,0.2)',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 15,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  noteText: {
    color: 'white',
    fontSize: 12,
    fontStyle: 'italic',
    marginTop: 10,
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: 'rgba(123,255,255,0.6)',
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowItem: {
    flex: 1,
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

export default AddVisitorPage;
