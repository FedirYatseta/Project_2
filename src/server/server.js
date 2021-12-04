const express = require('express');
const PORT = process.env.PORT || 5000
const mongoose = require('mongoose')
const app = express();



const start = async () => {
  try {
    await mongoose.connect(`mongodb+srv://react:xd!prS.skCj5PSB@cluster0.wex1l.mongodb.net/shop?retryWrites=true&w=majority`)
    app.listen(PORT, () => console.log(`server started on port ${PORT}`))
  } catch (error) {
    console.log(error)
  }
}

start()

