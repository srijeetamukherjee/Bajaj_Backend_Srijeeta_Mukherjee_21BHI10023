const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// GET
app.get('/bfhl', (req, res) => {
  res.status(200).json({
    "operation_code": 1
  });
});

// POST
app.post('/bfhl', (req, res) => {
  const { data } = req.body;

  if (!data || !Array.isArray(data)) {
    return res.status(400).json({
      is_success: false,
      user_id: "john_doe_17091999",
      email: "john@xyz.com",
      roll_number: "ABCD123",
      message: "Invalid input"
    });
  }

  let numbers = [];
  let alphabets = [];
  let highest_lowercase_alphabet = "";

  // Process input data
  data.forEach(item => {
    if (!isNaN(item)) {
      numbers.push(item);
    } else if (/^[a-zA-Z]$/.test(item)) {
      alphabets.push(item);
      if (/[a-z]/.test(item) && (item > highest_lowercase_alphabet)) {
        highest_lowercase_alphabet = item;
      }
    }
  });

  res.status(200).json({
    is_success: true,
    user_id: "john_doe_17091999",
    email: "john@xyz.com",
    roll_number: "ABCD123",
    numbers: numbers,
    alphabets: alphabets,
    highest_lowercase_alphabet: highest_lowercase_alphabet ? [highest_lowercase_alphabet] : []
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
