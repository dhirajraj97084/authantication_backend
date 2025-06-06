// server.js
import express from 'express';
import dotenv from 'dotenv';
import connectDB from '../server/database/Db.js';
import router from '../server/router/user.router.js';
import cors from 'cors';

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api', router);
app.use('/',(req,res)=>{
  res.json("hello bhaai how are you");
})

// Connect to MongoDB and start server
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
