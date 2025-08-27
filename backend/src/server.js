require('dotenv').config();
const express = require('express');
const cors = require('cors'); // ✅ Add cors
const { initDB } = require('./loaders/sequelize');

const app = express();
const PORT = process.env.PORT || 3000;

// -------------------- MIDDLEWARE -------------------- //
// Enable CORS for all origins (good for development)
app.use(cors());

// If you want to allow only your frontend origin, use:
// app.use(cors({ origin: 'http://127.0.0.1:5500' }));

app.use(express.json());

// -------------------- ROUTES -------------------- //
// SUBSCRIBER 
const subscriberRoutes = require('./routes/subscriber.routes');
app.use('/api/subscribers', subscriberRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

// -------------------- START SERVER -------------------- //
const startServer = async () => {
  const dbOk = await initDB({ retries: 5, delay: 2000 });
  if (!dbOk) {
    console.error('Database initialization failed — exiting.');
    process.exit(1);
  }

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
};

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
