const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3001;

// MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'guang',
  password: '123',
  database: 'mydb'
});

connection.connect();
const cors = require('cors');
app.use(cors());

app.get('/message', (req, res) => {
  // Fetch a message from the database
  connection.query('SELECT message FROM messages LIMIT 1;', (err, results) => {
    if (err) throw err;
    res.send({ message: results[0].message });
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database successfully!');
});
