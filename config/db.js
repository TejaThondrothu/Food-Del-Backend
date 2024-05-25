import mongoose from "mongoose";

export const connectDB = async () =>{
        await mongoose.connect("mongodb+srv://TejaThondrothuStack:12561256@cluster0.jrlkptp.mongodb.net/food-del").then(
            ()=>console.log("DB Connected")
        );
}