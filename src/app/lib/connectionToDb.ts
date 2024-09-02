import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function connectionToDb() {
    try {
        // Log the connection string to verify it's loaded correctly
        console.log("Attempting to connect to MongoDB with URL:", process.env.MONGO_URL);

        await mongoose.connect(process.env.MONGO_URL as string);

        console.log("Database connected successfully!");
    } catch (err) {
        console.log("Connection error:", err);
    }
}

export default connectionToDb;
