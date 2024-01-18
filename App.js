// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Common Page imports
import WelcomePage from './components/WelcomePage';
import NextPage from './components/NextPage';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import HomePage from './components/HomePage';

// GateFeature imports
import GiveAccessPage from './components/GateFeatures/GiveAccessPage';
import AddVisitorPage from './components/GateFeatures/AddVisitorPage';
import EntryRecordPage from './components/GateFeatures/EntryRecordPage'


//Additional Features import
import IncidentReportPage from './components/AdditionalFeatures/IncidentReportPage'


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomePage" headerMode="none">

        {/* Common Pages */}
        <Stack.Screen name="WelcomePage" component={WelcomePage} />
        <Stack.Screen name="NextPage" component={NextPage} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="RegistrationPage" component={RegistrationPage} />
        <Stack.Screen name="HomePage" component={HomePage} />

        {/* Gate Features */}
        <Stack.Screen name="GiveAccessPage" component={GiveAccessPage} />
        <Stack.Screen name="AddVisitorPage" component={AddVisitorPage} />
        <Stack.Screen name="EntryRecordPage" component={EntryRecordPage} />
      
      {/* Additional Feature */}
        <Stack.Screen name="IncidentReportPage" component={IncidentReportPage} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
