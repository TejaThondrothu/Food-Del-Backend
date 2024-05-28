import mongoose from "mongoose";

export const connectDB = async () =>{
    // In this connect method , you need to add you Mongo DB connect link : In the below format It will be there
    //mongodb+srv://projectName:12561256@cluster0.jrlkptp.mongodb.net/food-del
        await mongoose.connect("").then(
            ()=>console.log("DB Connected")
        );
}