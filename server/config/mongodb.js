import mongoose from "mongoose";

const connectDB=async()=>{
    mongoose.connection.on('connected',()=>{

        console.log("Databse Connected Succesfully")
    })
    await mongoose.connect(`${process.env.MONGOBD_URI}/NeuralCanvas`)
}

export default connectDB;