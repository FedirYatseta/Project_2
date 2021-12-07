require('dotenv').config()
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT_DB || 5000;

const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const router = require('./route/index')
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());



app.use("/api", router)

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    app.listen(PORT, () => console.log(`server started on port ${PORT}`))
  } catch (error) {
    console.log(error)
  }
}

start()

