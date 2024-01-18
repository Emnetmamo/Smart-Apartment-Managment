import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet,  } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import MapView from 'react-native-maps';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const IncidentReportPage  = ({ navigation })=> {
  const [crimeType, setCrimeType] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  // Placeholder for map state
  // const [location, setLocation] = useState(null);

  const crimes = [
    'Trespassing',
    'Breaking and Entering',
    'Vandalism',
    'Theft',
    'Assault',
    'Robbery',
    'Burglary',
    'Criminal Mischief',
    'Drug-related activity',
    'Loitering',
    'Vehicle-related crimes',
    'Public disturbance',
    'Suspicious behavior',
    'Kidnapping or abduction',
    'Firearms or weapons violations',
  ];

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  // Implement map functionality based on your map library

  return (
    <View style={styles.container}>
          <View style={styles.menuBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-back" size={30} color="#C4A484" style={{ marginTop: 30 }} />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Incident Report</Text>

      <Text style={styles.label}>Crime Type</Text>
      <Picker
        style={styles.picker}
        selectedValue={crimeType}
        onValueChange={(itemValue) => setCrimeType(itemValue)}
      >
        <Picker.Item label="Select a Crime Type" value="" />
        {crimes.map((crime, index) => (
          <Picker.Item key={index} label={crime} value={crime}  />
        ))}
      </Picker>


      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter description"
        value={description}
        onChangeText={(text) => setDescription(text)}
        multiline
        placeholderTextColor={'grey'}
      />

      <Text style={styles.label}>Date and Time</Text>
      <TouchableOpacity style={styles.datePickerButton} onPress={showDatepicker}>
        <Text>Show Date Picker</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="datetime"
          is24Hour={true}
          display="default"
          onChange={onChangeDate}
          
        />
      )}

      <Text style={styles.label}>Nearest Police Station (Map)</Text>
      {/* Placeholder for map integration */}
      {/* <MapView
        style={{ flex: 1 }}
        region={{
          latitude: location ? location.latitude : 37.78825,
          longitude: location ? location.longitude : -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      /> */}

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={() => console.log('Submit')}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  menuBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  title: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
  },
  picker: {
    backgroundColor: 'rgba(123,255,255,0.2)',
    color: 'white',
    marginBottom: 15,
    borderRadius: 5,
  },
  input: {
    backgroundColor: 'rgba(123,255,255,0.2)',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    color: 'white',
    marginBottom: 15,
  },
  datePickerButton: {
    backgroundColor: 'rgba(123,255,255,0.2)',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 15,
  },
  submitButton: {
    backgroundColor: 'rgba(123,255,255,0.6)',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default IncidentReportPage;
