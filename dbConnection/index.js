const mongoose = require("mongoose")
require("dotenv").config();


/* const connectDB = async () => {
    mongoose.set('strictQuery', false)
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log("MongoDB connection success")
} */

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Connection Failed:", error);
    process.exit(1);
  }
};

module.exports = { connectDB }
