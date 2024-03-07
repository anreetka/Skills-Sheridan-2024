const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()

const PORT = process.env.PORT || 3001;

console.log('Before connecting to MongoDB');
async function connectToMongoDB()
{
  try{
    await mongoose.connect('mongodb://localhost:27017/SkillsSheridanDB',{
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    return "MongDB connected successfully!"
  }catch(error)
  {
    console.log('Error connecting to Mongoose: ' + error.message)
  }
};

connectToMongoDB();

const registrationSchema = new mongoose.Schema({
  studentNumber: String,
  email: String,
  selectedEvent: String
});

const Registration = mongoose.model("events", registrationSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post('/api/register', async (req, res) => {
  try {
    const { studentNumber, email, selectedEvent } = req.body;
    console.log(req.body);
    // const newRegistration = new Registration({ studentNumber, email, selectedEvent });
    const newRegistration = new Registration({
      studentNumber: '9182768238',
      email: 'aakcn@gmail.com',
      selectedEvent: 'Event1',
    });
    IsSaved = await newRegistration.save();
    if(IsSaved)
    {
      console.log('Data saved!')
    }
    res.status(201).json({ message: 'Registration saved successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.get('/api/registrations', async (req, res) => {
  try {
      const registrations = await Registration.find();
      res.json(registrations);
  } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.get('/', (req, res) => {
  res.send('Hello there!');
});

app.listen(PORT, ()=>{
  console.log(`Server is running on port ${PORT}`)
})