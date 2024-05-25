import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String,required:true},
    category:{type:String,required:true}
})

//mongoose.model("food",foodSchema) It is used to create model . but we are using, "mongoose.models.food || mongoose.model("food",foodSchema)"" in this way because 
//if model is there it will not create.

const foodModel =mongoose.models.food || mongoose.model("food",foodSchema);

export default foodModel;