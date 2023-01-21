//import mongoose and the dotenv package
/**
 * mongoose is a layer to communicate with MongoDB
 * call the config method from the dotenv package to read
 * our environment variables
 */
import mongoose from "mongoose";
import { config } from 'dotenv';
config();

export const connectDB = async () => {
    try{
        /**
         * without an exclamation mark at the end of
         * the connection string, typescript would give a 
         * red line stating that type undefined is not
         * assignable to a type of string because the mongoose
         * connect method is asking for a string. To clear the error
         * we have to tell typescript that we are certain and sure that
         * the environment variable MONGO_URI, is a string type, by placing 
         * the exclamation mark at the end
         */
        await mongoose.connect(process.env.MONGO_URI!);
        console.log('connected to DB');
    }catch(error){
        console.log(error);
    }
}