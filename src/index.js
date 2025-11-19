/**
 * This is where we write how we want our server to start
 */

import dotenv from "dotenv"; // allows us to use our .env variables in all servers
import connectDB from "./config/database.js"; //! remember to add .js during import so server know where to get this file
import app from "./app.js";

dotenv.config({
  path: "./.env",
});

const startServer = async () => {
  try {
    await connectDB();

    app.on("error", (error) => {
      console.log("ERROR", error);
      throw error;
    });
    // access port number that was stated in .env, if not working default to port 8000
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port: ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("MongoDB connection failed!!", error);
  }
};

startServer();
