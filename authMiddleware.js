// authMiddleware.js
const { auth } = require('./firebase');

async function verifyFirebaseToken(req, res, next) {
  const authHeader = req.headers.authorization || '';
  const match = authHeader.match(/^Bearer (.+)$/);

  if (!match) return res.status(401).json({ error: 'Missing token' });

  try {
    const decodedToken = await auth.verifyIdToken(match[1]);
    req.user = decodedToken;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid or expired token' });
  }
}

module.exports = verifyFirebaseToken;
