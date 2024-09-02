import mongoose from "mongoose";
import Error from "next/error";

async function connectionToDb() {

    try {
        await mongoose.connect(process.env.MONGODB_URI as string);
        console.log("Db connected .......");
        
    } catch (err) {
        console.log("connection of db seem error:" , err);
        
    }
}

export default connectionToDb;