// components/RegistrationPage.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import axios from 'axios';


const RegistrationPage = ({ navigation }) => {
  // Basic Personal Information Section
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [isCarOwner, setIsCarOwner] = useState(false);
  const [licensePlate, setLicensePlate] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(null);

  // Apartment Information Section
  const [isOwner, setIsOwner] = useState(true); // Default to Owner
  const [apartmentName, setApartmentName] = useState('');
  const [block, setBlock] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [rentedFrom, setRentedFrom] = useState('');
  const [rentalAgreementForm, setRentalAgreementForm] = useState(null);

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

  const handleRentalAgreementForm = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync();
      if (result.type === 'success') {
        setRentalAgreementForm(result.uri);
        console.log('File uploaded:', result.uri);
      }
    } catch (err) {
      console.error('Error picking document:', err);
    }
  };

  const handleCancelRentalAgreementForm = () => {
    setRentalAgreementForm(null);
  };

  {/* // Helper function to extract filename from URI */}
const getFileNameFromUri = (uri) => {
  const uriComponents = uri.split('/');
  return uriComponents[uriComponents.length - 1];
};

const handleSaveRegistration = async () => {
  try {

     if (password !== confirmPassword) {
      alert("Password and Confirm Password don't match.");
      return;
    }
    // Prepare data for registration
    const userData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      username,
      password,
      city,
      address,
      isCarOwner,
      licensePlate,
      profilePhoto, // You may need to handle file uploads separately
      isOwner,
      apartmentName,
      block,
      houseNumber,
      rentedFrom,
      rentalAgreementForm, // You may need to handle file uploads separately
    };

      // Make a request to your backend API to save registration information
      const response = await axios.post('http://192.168.0.24:3000/api/users/register', userData);

      // Handle the response as needed
      console.log('Registration successful:', response.data);

      // Navigate to the next screen or perform other actions
      alert("You have registered successfully!");
      navigation.navigate('LoginPage');
    } catch (error) {
      console.error('Registration failed:', error.message);
      // Handle errors and provide user feedback
    }
  };


  return (
    <ScrollView style={styles.container}>
      {/* Top Menu Bar */}
      <View style={styles.menuBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-back" size={30} color="#C4A484" style={{ marginTop: 30 }} />
        </TouchableOpacity>
      </View>

      {/* Page Title */}
      <Text style={styles.pageTitle}>Registration</Text>

  {/* Basic Personal Information Section */}
  <Text style={styles.sectionTitle}>Basic Personal Information</Text>

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

<Text style={styles.inputLabel}>Email</Text>
<TextInput
  style={styles.textInput}
  placeholder="Enter email"
  value={email}
  onChangeText={(text) => setEmail(text)}
  keyboardType="email-address"
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

<Text style={styles.inputLabel}>Username</Text>
<TextInput
  style={styles.textInput}
  placeholder="Enter username"
  value={username}
  onChangeText={(text) => setUsername(text)}
  placeholderTextColor="gray"
/>

<Text style={styles.inputLabel}>Password</Text>
<TextInput
  style={styles.textInput}
  placeholder="Enter password"
  value={password}
  onChangeText={(text) => setPassword(text)}
  secureTextEntry
  placeholderTextColor="gray"
/>

<Text style={styles.inputLabel}>Confirm Password</Text>
<TextInput
  style={styles.textInput}
  placeholder="Confirm password"
  value={confirmPassword}
  onChangeText={(text) => setConfirmPassword(text)}
  secureTextEntry
  placeholderTextColor="gray"
/>

<Text style={styles.inputLabel}>City</Text>
<TextInput
  style={styles.textInput}
  placeholder="Enter city"
  value={city}
  onChangeText={(text) => setCity(text)}
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

{/* Car Owner Section */}
<View style={styles.carOwnerSection}>
  <Text style={styles.inputLabel}>Car Owner?</Text>
  <Switch
    style={styles.toggleSwitch}
    trackColor={{ false: 'gray', true: '#C4A484' }}
    onValueChange={() => setIsCarOwner(!isCarOwner)}
    value={isCarOwner}
  />

  {isCarOwner && (
    <>
      <Text style={styles.inputLabel}>License Plate</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter license plate"
        value={licensePlate}
        onChangeText={(text) => setLicensePlate(text)}
      />
    </>
  )}
</View>

{/* Profile Photo Section */}
<Text style={styles.inputLabel}>Profile Photo</Text>
<TouchableOpacity style={styles.uploadButton} onPress={handlePickImage}>
  <Text style={styles.buttonText}>Upload from Device</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.uploadButton} onPress={handleTakePhoto}>
  <Text style={styles.buttonText}>Take Photo</Text>
</TouchableOpacity>
{profilePhoto && (
  <Image source={{ uri: profilePhoto }} style={styles.profilePhoto} />
)}

    {/* Apartment Information Section */}
    <Text style={styles.sectionTitle}>Apartment Information</Text>

{/* Ownership Type - Radio Buttons */}
<RadioButton.Group
  onValueChange={(newValue) => setIsOwner(newValue === 'Owner')}
  value={isOwner ? 'Owner' : 'Rental'}
>
  <View style={styles.radioButtonContainer}>
    <RadioButton value="Owner" color="#C4A484" />
    <Text style={styles.radioLabel}>Owner</Text>
  </View>

  <View style={styles.radioButtonContainer}>
    <RadioButton value="Rental" color="#C4A484" />
    <Text style={styles.radioLabel}>Rental</Text>
  </View>
</RadioButton.Group>

{/* Owner Section */}
{isOwner && (
  <>
    <Text style={styles.inputLabel}>Apartment Name</Text>
    <TextInput
      style={styles.textInput}
      placeholder="Enter apartment name"
      value={apartmentName}
      onChangeText={(text) => setApartmentName(text)}
      placeholderTextColor="gray"
    />

    <Text style={styles.inputLabel}>Block</Text>
    <TextInput
      style={styles.textInput}
      placeholder="Enter block"
      value={block}
      onChangeText={(text) => setBlock(text)}
      placeholderTextColor="gray"
    />

    <Text style={styles.inputLabel}>House Number</Text>
    <TextInput
      style={styles.textInput}
      placeholder="Enter house number"
      value={houseNumber}
      onChangeText={(text) => setHouseNumber(text)}
      placeholderTextColor="gray"
    />
  </>
)}

{/* Rental Section */}
{!isOwner && (
  <>
    <Text style={styles.inputLabel}>Rented From</Text>
    <TextInput
      style={styles.textInput}
      placeholder="Enter rental information"
      value={rentedFrom}
      onChangeText={(text) => setRentedFrom(text)}
      placeholderTextColor="gray"
    />
{/* Rental Agreement Form Upload */}
<Text style={styles.inputLabel}>Upload Rental Agreement Form</Text>
{!rentalAgreementForm ? (
  <TouchableOpacity style={styles.uploadButton} onPress={handleRentalAgreementForm}>
    <Text style={styles.buttonText}>Upload from Device</Text>
  </TouchableOpacity>
) : (
  <>
    <Text style={styles.uploadedFile}>File Uploaded: {getFileNameFromUri(rentalAgreementForm)}</Text>
    <TouchableOpacity style={styles.cancelButton} onPress={handleCancelRentalAgreementForm}>
      <Text style={styles.buttonText}>Cancel</Text>
    </TouchableOpacity>
    <Text style={styles.fileLink} onPress={() => console.log('Open file:', rentalAgreementForm)}>
      Open File
    </Text>
  </>
)}

    {/* Common Fields */}
    <Text style={styles.inputLabel}>Apartment Name</Text>
    <TextInput
      style={styles.textInput}
      placeholder="Enter apartment name"
      value={apartmentName}
      onChangeText={(text) => setApartmentName(text)}
      placeholderTextColor="gray"
    />

    <Text style={styles.inputLabel}>Block</Text>
    <TextInput
      style={styles.textInput}
      placeholder="Enter block"
      value={block}
      onChangeText={(text) => setBlock(text)}
      placeholderTextColor="gray"
    />

    <Text style={styles.inputLabel}>House Number</Text>
    <TextInput
      style={styles.textInput}
      placeholder="Enter house number"
      value={houseNumber}
      onChangeText={(text) => setHouseNumber(text)}
      placeholderTextColor="gray"
    />
  </>
)}

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveRegistration}>
        <Text style={styles.buttonText}>Save Registration</Text>
      </TouchableOpacity>
    </ScrollView>
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
  sectionTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
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
  carOwnerSection: {
    marginBottom: 20,
  },
  uploadButton: {
    backgroundColor: 'rgba(123,255,255,0.2)',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 15,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  radioLabel: {
    color: 'white',
    fontSize: 16,
    marginLeft: 8,
  },
  uploadedFile: {
    color: 'white',
    fontSize: 16,
    marginTop: 10,
  },
  uploadedImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginTop: 10,
  },
  fileLink: {
    color: 'white',
    fontSize: 16,
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  cancelButton: {
    backgroundColor: 'rgba(255, 0, 0, 0.6)',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  saveButton: {
    backgroundColor: 'rgba(123,255,255,0.6)',
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 5,
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 10,
  },
});

export default RegistrationPage;
