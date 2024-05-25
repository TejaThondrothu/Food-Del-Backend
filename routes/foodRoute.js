import express from "express"
import { addFood,listFood ,removeFood} from "../controllers/foodController.js"
import multer   from "multer"  //image storage sytem


const foodRouter = express.Router();  // By using router we can write get, post delete,update

//Image Storage Engine
const storage =multer.diskStorage({
    destination:"uploads",  //destnation folder , cd means callback function
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`) 
    }
})
const upload = multer({storage:storage})

foodRouter.post("/add",upload.single("image"),addFood)
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removeFood)






export default foodRouter;



