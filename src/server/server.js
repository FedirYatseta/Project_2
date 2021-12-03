const express = require('express');
const authRouter = require('./authRouter')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000


const app = express();

app.use(express.json())

app.use("/auth", authRouter)


const start = () => {

  try {
    await mongoose.connect (`mongodb+srv://react:xd!prS.skCj5PSB@cluster0.wex1l.mongodb.net/SHOP?retryWrites=true&w=majority`)
    app.listen(PORT, () => console.log(`server started on port ${PORT}`))
  } catch (error) {
    console.log(error)
  }
}



start()