import mongoose from "mongoose"; // npm install mongoose

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}` // extract mongoDB from .env file
    );
    console.log(`\n MongoDB connected!!
        ${connectionInstance.connection.host} `);
  } catch (err) {
    console.log("MongoDB connection failed", err);
    process.exit(1);
  }
};

export default connectDB;
