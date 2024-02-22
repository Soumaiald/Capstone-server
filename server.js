

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://soumaia:soumald7991@cluster0.ewlek6x.mongodb.net/sample_mflix', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a mongoose schema and model for your collection
const mySchema = new mongoose.Schema({
  name: String,
  age: Number,
});
const MyModel = mongoose.model('movies', mySchema);

// Enable CORS
app.use(cors());

// Define routes
app.get('/api/data', async (req, res) => {
  try {
    console.log("get data")
    const data = await MyModel.find({poster: { $exists: true }}).limit(40);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});





