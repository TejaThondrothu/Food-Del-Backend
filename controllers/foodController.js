import { Console } from "console";
import foodModel from "../models/foodModel.js"; //.js you need to place
import fs from 'fs'  //file System inbuilt in node.js




// add food item 

const addFood = async (req,res) =>{

    let image_filename =`${req.file.filename}`;

    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })


    try {
        await food.save();
        res.json({success:true,message:"Food Added"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }

}

// all food list 
const listFood = async (req,res) =>{


    try {
        const foods = await foodModel.find({});
        res.json({success:true,data:foods})
    } catch (error) {
        Console.log("error");
        res.json({success:"false",message:"Error"})
    }

}

//remove food Item

const removeFood = async (req,res) =>{
        try {
            const food = await foodModel.findById(req.body.id);
            //delete the image from folder uploads
            fs.unlink(`uploads/${food.image}`,()=>{})
            //delete the data from mongodb
            await foodModel.findByIdAndDelete(req.body.id);
            res.json({success:true,message:"Food Removed"})
        } catch (error) {
            console.log("Error");
            res.json({success:false,message:"Falied"})
        }
}

export {addFood,listFood,removeFood}