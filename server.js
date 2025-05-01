const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// In-memory user store (for demo purposes)
const users = [];

app.post('/users', (req, res) => {
  const { name, email, age, phone } = req.body;

  // Simple validation
  if (!name || !email || !age) {
    return res.status(400).json({ error: 'name, email, and age are required.' });
  }
  if (age < 18) {
    return res.status(400).json({ error: 'Age must be 18 or above.' });
  }

 const newUser = { id: users.length + 1, name, email, age, phone };
 users.push(newUser);

 return res.status(201).json({
  message: 'User created successfully',
  user: newUser
});

});

// GET /users - Retrieve all users
app.get('/users', (req, res) => {
  res.status(200).json(users);
});
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
