import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from 'cors';

import books from './routes/api/books.js'
import auth from './routes/api/auth.js'

const app = express();

app.use(cors())
app.use(express.json({ extended: false }));
app.use(morgan("dev"))

const connectDB = async () => {
  try {
    await mongoose.connect("CONN_STRING", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected!");
  } catch (err) {
    console.log(err);
  }
};

// connectDB()

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use('/api/books', books)
app.use('/api/auth', auth)

app.listen(3000, () => {
  console.log("server listening to port 3000!");
});
