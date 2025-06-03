const express = require('express');
const verifyFirebaseToken = require('./authMiddleware');
const { db } = require('./firebase');

const app = express();
app.use(express.json());

app.get('/cases', verifyFirebaseToken, async (req, res) => {
  const snapshot = await db.collection('cases').get();
  const cases = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  res.json(cases);
});
