import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"  //here we need to place manually .js
import foodRouter from "./routes/foodRoute.js"



// app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

// api endpoints
app.use("/api/food",foodRouter)

app.use("/images",express.static('uploads'))  //folder name :uploads

app.get("/",(req,res)=>{
    res.send("API is working")
})

app.listen(port,()=>{
    console.log(`Sever started on http://localhost:${port}`)
})

//mongodb+srv://TejaThondrothuStack:12561256@cluster0.jrlkptp.mongodb.net/?