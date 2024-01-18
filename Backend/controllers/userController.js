const User = require('../models/User');

const userController = {
  register: async (req, res) => {
    try {
      // Extract user data from the request
      const {
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
        profilePhoto,
        isOwner,
        apartmentName,
        block,
        houseNumber,
        rentedFrom,
        rentalAgreementForm,
      } = req.body;

      // Create a new user instance
      const newUser = new User({
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
        profilePhoto,
        isOwner,
        apartmentName,
        block,
        houseNumber,
        rentedFrom,
        rentalAgreementForm,
      });

      // Save the user to the database
      await newUser.save();

      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error('Error during registration:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = userController;
