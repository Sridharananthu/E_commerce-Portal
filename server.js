const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://khushikumar44555:Khushi9786@ecommerecedb.iimiql4.mongodb.net/EcommerceDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error: ', err));

// Define a User schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true }, // Ensure email is unique
  phone: { type: String, required: true }, // Add phone number
  password: { type: String, required: true },//Role field to distinguish between buyer, seller, and admin
  role: { type: Number, required: true } 
},{ versionKey: false });//DISABLE VERSION KEY

const User = mongoose.model('User', userSchema);

// API endpoint to handle registration
app.post('/api/register', async (req, res) => {
  const { name, emailOrPhone, phone, password } = req.body;

  try {
    // Check if a user with the same email or phone number already exists
    const existingUser = await User.findOne({ $or: [{ email: emailOrPhone }, { phone: phone }] });
    if (existingUser) {
      if (existingUser.email === emailOrPhone) {
        return res.status(400).json({ message: 'Email is already registered try login' });
      }
      if (existingUser.phone === phone) {
        return res.status(400).json({ message: 'Phone number is already registered try login' });
      }
    }

     // Create a new user with role ID 2 (buyer)
     const newUser = new User({ name, email: emailOrPhone, phone, password, role: 2 });
     await newUser.save();
     res.json({ message: 'User registered successfully', user: newUser });
   } catch (err) {
     res.status(500).json({ message: 'Error: ' + err });
   }
 });
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});













































































































































