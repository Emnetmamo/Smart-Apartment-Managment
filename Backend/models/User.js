const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // Basic Personal Information
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
    required: true,
  },
  phoneNumber: String,
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: String,
  city: String,
  address: String,
  isCarOwner: Boolean,
  licensePlate: String,
  profilePhoto: String,

  // Apartment Information
  isOwner: Boolean,
  apartmentName: String,
  block: String,
  houseNumber: String,
  rentedFrom: String,
  rentalAgreementForm: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
