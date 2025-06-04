const express = require('express');
const path = require('path');
const { cases } = require('./database');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'frontend', 'dist')));

// Simple in-memory user
const user = { email: 'admin@example.com', password: 'password' };

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (email === user.email && password === user.password) {
    return res.json({ success: true });
  }
  res.status(401).json({ error: 'Invalid credentials' });
});

app.get('/cases', (req, res) => {
  res.json(cases);
});

app.post('/contact', (req, res) => {
  // In a real app you'd store this in the database
  console.log('Contact request:', req.body);
  res.json({ success: true });
});

app.get('/stats', (req, res) => {
  res.json({ total: cases.length });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
