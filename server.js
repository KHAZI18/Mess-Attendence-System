// server.js
const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const cors = require('cors'); // Include the cors package
const app = express();
const port = 3000;


// const uri = 'mongodb+srv://rootzain:rootzain@cluster0.aufjb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const uri ='mongodb://localhost:27017';
const dbName = 'collegeHostel';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use(cors()); // Use the cors middleware

// Define the GET endpoint for the home page (index.html)
app.get('/', async (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Define the GET endpoint for the home page (index.html)
app.get('/view', async (req, res) => {
  res.sendFile(__dirname + '/viewAttendance.html');
});


// Define the POST endpoint for submitting attendance
app.post('/submitAttendance', async (req, res) => {
  // Extract studentName and attendanceStatus from the request body
  const { studentName, attendanceStatus } = req.body;

  try{
    // Insert the record into the database
  const db = client.db(dbName);

  const attendanceRecord = {
    studentName: studentName,
    attendanceStatus: attendanceStatus,
    timestamp: new Date()
  };

  const attendanceCollection = db.collection('attendance');

  const result = await attendanceCollection.insertOne(attendanceRecord);
  res.status(200).send(`New attendance record created with the following id: ${result.insertedId}`);
  }
  catch(e){
    res.status(500).send('Error inserting attendance record');
  }
});

// Route to fetch all attendance records
app.get('/viewAttendance', async (req, res) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const attendanceCollection = db.collection('attendance');
    // Find all attendance records
    const records = await attendanceCollection.find().toArray();
    // Send the records back to the client
    res.status(200).json(records);
  } catch (e) {
    res.status(500).send('Error fetching attendance records');
   } 
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
