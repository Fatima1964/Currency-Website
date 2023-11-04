const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // You can specify your desired port

// Body parsing middleware
app.use(express.json());

// Define a route to handle email submissions
app.post('/submit-email', (req, res) => {
  const { name, email } = req.body;

  // Process the email submission data here (e.g., send an email, store in a database, etc.)

  // Respond with a success message
  res.json({ message: 'Email submitted successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
