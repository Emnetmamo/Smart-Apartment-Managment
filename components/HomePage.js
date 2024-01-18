// components/HomePage.js
import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import FeatureCard from './FeatureCard';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faDungeon } from '@fortawesome/free-solid-svg-icons';
import { faParking } from '@fortawesome/free-solid-svg-icons';

const HomePage = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState('All Features');
  const [isSideMenuVisible, setIsSideMenuVisible] = useState(false);
  const [sideMenuAnimation] = useState(new Animated.Value(-200)); // Initial position (off-screen)

  const toggleSideMenu = () => {
    console.log('Toggle Side Menu');
    const toValue = isSideMenuVisible ? -200 : 0; // Show or hide menu
    Animated.timing(sideMenuAnimation, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setIsSideMenuVisible(!isSideMenuVisible);
  };


  const renderFeatureCards = () => {
    const commonCardStyle = { }; // Add a common style for margin-top

    switch (selectedCategory) {
      case 'Gate Feature':
        return (
          <>
        <TouchableOpacity onPress={() => navigation.navigate('LiveFeed')}>
          <FeatureCard icon="ios-videocam" title="Live Feed" description="View live video feed from security cameras" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('GiveAccessPage')}>
          <FeatureCard icon="ios-key" title="Give Access Grant" description="Grant access to authorized personnel" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AddVisitorPage')}>
          <FeatureCard icon="ios-person-add" title="Add Visitor" description="Add new visitors to the system" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('EntryRecordPage')}>
          <FeatureCard icon="ios-enter" title="Entry Record" description="View records of entries to the premises" />
        </TouchableOpacity>
          </>
        );

      case 'Parking Feature':
        return (
          <>
        <TouchableOpacity onPress={() => navigation.navigate('FreeParking')}>
          <FeatureCard icon="ios-car" title="Free Parking Space" description="Locate available free parking spaces" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('VisitorParking')}>
          <FeatureCard icon="ios-car-outline" title="Visitor Parking Space" description="Locate available visitor parking spaces" />
        </TouchableOpacity>
          </>
        );

      case 'Light Control':
        return (
       <TouchableOpacity onPress={() => navigation.navigate('LightControl')}>
          <FeatureCard icon="ios-bulb" title="Outdoor Light Control" description="Control outdoor lights with your phone" />
        </TouchableOpacity>
        );

      case 'Meter Readings':
        return (
          <>
        <TouchableOpacity onPress={() => navigation.navigate('ElectricityReadings')}>
          <FeatureCard icon="ios-flash" title="Electricity Usage Readings" description="View records and fees of electricity usage" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('WaterReadings')}>
          <FeatureCard icon="ios-water" title="Water Usage Readings" description="View records and fees of water usage" />
        </TouchableOpacity>
          </>
        );

      case 'Additional Features':
        return (
          <TouchableOpacity onPress={() => navigation.navigate('IncidentReportPage')}>
          <FeatureCard icon="ios-alert" title="Incident Report" description="Report and view incident reports" />
        </TouchableOpacity>
        );

      default:
        // 'All Features' or any other default case
        return (
          <>
           <TouchableOpacity onPress={() => navigation.navigate('LiveFeed')}>
          <FeatureCard icon="ios-videocam" title="Live Feed" description="View live video feed from security cameras" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('GiveAccessPage')}>
          <FeatureCard icon="ios-key" title="Give Access Grant" description="Grant access to authorized personnel" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AddVisitorPage')}>
          <FeatureCard icon="ios-person-add" title="Add Visitor" description="Add new visitors to the system" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('EntryRecordPage')}>
          <FeatureCard icon="ios-enter" title="Entry Record" description="View records of entries to the premises" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('FreeParking')}>
          <FeatureCard icon="ios-car" title="Free Parking Space" description="Locate available free parking spaces" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('VisitorParking')}>
          <FeatureCard icon="ios-car-outline" title="Visitor Parking Space" description="Locate available visitor parking spaces" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('LightControl')}>
          <FeatureCard icon="ios-bulb" title="Outdoor Light Control" description="Control outdoor lights with your phone" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ElectricityReadings')}>
          <FeatureCard icon="ios-flash" title="Electricity Usage Readings" description="View records and fees of electricity usage" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('WaterReadings')}>
          <FeatureCard icon="ios-water" title="Water Usage Readings" description="View records and fees of water usage" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('IncidentReportPage')}>
          <FeatureCard icon="ios-alert" title="Incident Report" description="Report and view incident reports" />
        </TouchableOpacity>
          </>
        );
    }
  };

  const isActiveCategory = (category) => category === selectedCategory;

  return (
    <View style={styles.container}>
      {/* Top Menu Bar */}
      <View style={styles.menuBar}>
         <TouchableOpacity onPress={toggleSideMenu}>
          <Ionicons name="ios-menu" size={35} style={{marginTop: 30}} color="#C4A484" />
        </TouchableOpacity>
        <Image source={require('../assets/images/profileImg.jpg')} style={styles.profileImage} />
      </View>

      {/* Welcome Text */}
      <Text style={styles.welcomeText}>Welcome,</Text>
      <Text style={styles.welcomeText}>Abebe Abebe</Text>

      {/* Apartment Info Card */}
      <View style={styles.apartmentCard}>
        <Ionicons name="ios-business" size={24} color="yellow" style={styles.apartmentIcon} />
        <View>
          <Text style={styles.apartmentText}>Sunshine Apartment</Text>
          <Text style={styles.apartmentText}>Block - A</Text>
          <Text style={styles.apartmentText}>House Number - 101</Text>
        </View>
      </View>

      {/* Feature Buttons */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.featureButtons}>
        <TouchableOpacity
          style={[styles.featureButton, isActiveCategory('All Features') && styles.activeFeatureButton]}
          onPress={() => setSelectedCategory('All Features')}
        >
          <Ionicons name="ios-apps" size={24} color="white" />
          <Text style={[styles.featureButtonText, isActiveCategory('All Features') && styles.activeFeatureButtonText]}>
            All Features
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.featureButton, isActiveCategory('Gate Feature') && styles.activeFeatureButton]}
          onPress={() => setSelectedCategory('Gate Feature')}
        >
          <FontAwesomeIcon icon={faDungeon} size={24} color="white" />
          <Text style={[styles.featureButtonText, isActiveCategory('Gate Feature') && styles.activeFeatureButtonText]}>
            Gate Feature
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.featureButton, isActiveCategory('Parking Feature') && styles.activeFeatureButton]}
          onPress={() => setSelectedCategory('Parking Feature')}
        >
          <FontAwesomeIcon icon={faParking} size={24} color="white" />
          <Text style={[styles.featureButtonText, isActiveCategory('Parking Feature') && styles.activeFeatureButtonText]}>
            Parking Feature
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.featureButton, isActiveCategory('Light Control') && styles.activeFeatureButton]}
          onPress={() => setSelectedCategory('Light Control')}
        >
          <Ionicons name="ios-bulb" size={24} color="white" />
          <Text style={[styles.featureButtonText, isActiveCategory('Light Control') && styles.activeFeatureButtonText]}>
            Light Control
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.featureButton, isActiveCategory('Meter Readings') && styles.activeFeatureButton]}
          onPress={() => setSelectedCategory('Meter Readings')}
        >
          <Ionicons name="ios-flash" size={24} color="white" />
          <Text style={[styles.featureButtonText, isActiveCategory('Meter Readings') && styles.activeFeatureButtonText]}>
            Meter Readings
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.featureButton, isActiveCategory('Additional Features') && styles.activeFeatureButton]}
          onPress={() => setSelectedCategory('Additional Features')}
        >
          <Ionicons name="ios-add" size={24} color="white" />
          <Text style={[styles.featureButtonText, isActiveCategory('Additional Features') && styles.activeFeatureButtonText]}>
            Additional Features
          </Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Feature Cards */}
      <ScrollView contentContainerStyle={styles.featureCards}>{renderFeatureCards()}</ScrollView>

     {/* Side Menu */}
     <Animated.View style={[styles.sideMenu, { left: sideMenuAnimation }]}>
        <TouchableOpacity onPress={toggleSideMenu} style={styles.closeButton}>
          <Ionicons name="ios-close" size={30} color="#C4A484"/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.sideMenuItem}>
            <Ionicons name="ios-person" size={20} color="lightyellow" /> My Account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.sideMenuItem}>
            <Ionicons name="ios-settings" size={20} color="lightyellow" /> Settings
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.sideMenuItem}>
            <Ionicons name="ios-star" size={20} color="lightyellow" /> Rate App
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.sideMenuItem}>
            <Ionicons name="ios-share" size={20} color="lightyellow" /> Share App
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.sideMenuItem}>
            <Ionicons name="ios-information-circle" size={20} color="lightyellow" /> About Us
          </Text>
        </TouchableOpacity>
      </Animated.View>



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
    marginTop: 15
  },
  welcomeText: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  apartmentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,0,0.1)',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  apartmentIcon: {
    marginRight: 15,
  },
  apartmentText: {
    color: 'white',
    fontSize: 17
  },
  featureButtons: {
    flexDirection: 'row',
    height: 200,// Set a fixed height to avoid shrinking
    // marginBottom: 20,
  },
  featureButton: {
    width: 160, // Set a fixed width for each button
    height: 60,
    backgroundColor: 'rgba(123,255,255,0.2)',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
   
  },
  activeFeatureButton: {
    backgroundColor: 'rgba(123,255,255,0.6)',
  },
  featureButtonText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  activeFeatureButtonText: {
    color: '#fff', // Change the color for the active state
    fontWeight: 'bold',
  },
  featureCards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: -5, // Adjusted margin
    marginTop: 10, // Adjusted margin
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
  sideMenu: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    height: '700',
    // borderRadius:10,
    width: 200,
    backgroundColor: 'rgba(0, 0, 0, 1)',
    padding: 20,
    paddingTop: 150, 
    zIndex: 1,
  },
  sideMenuItem: {
    color: 'white',
    backgroundColor: 'rgba(196,164,132,0.3)',
    fontSize: 14,
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    borderWidth: 1,
    top: 20,
    right: 20,
    zIndex: 2,
    marginTop: 50
  },
});

export default HomePage;

