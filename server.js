const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB conectada');
    app.listen(process.env.PORT, () =>
      console.log(`🚀 Servidor en http://localhost:${process.env.PORT}`)
    );
  })
  .catch(err => console.error('❌ MongoDB error:', err));
