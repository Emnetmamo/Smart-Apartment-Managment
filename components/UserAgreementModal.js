import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox'; // Import CheckBox from the correct package

const UserAgreementModal = ({ isVisible, onAgree, onClose }) => {
  const [isChecked, setChecked] = useState(false);

  const handleAgree = () => {
    if (isChecked) {
      onAgree();
    } else {
      alert("Please agree to the user agreement.");
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>User Agreement</Text>
          <Text style={styles.modalText}>
            By clicking 'Agree', you confirm that you have read and agree to our Terms of Service and Privacy Policy.
          </Text>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isChecked}
              onValueChange={() => setChecked(!isChecked)}
            />
            <Text style={styles.checkboxLabel}>I agree</Text>
          </View>
          <TouchableOpacity style={styles.agreeButton} onPress={handleAgree}>
            <Text style={styles.buttonText}>Agree</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxLabel: {
    marginLeft: 10,
  },
  agreeButton: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default UserAgreementModal;
