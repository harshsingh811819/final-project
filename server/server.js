import express from "express";
import * as dotenv from "dotenv"
import cors from "cors"

const app = express();
dotenv.config();
const PORT = process.env.PORT;

app.use(express.json())

app.use(cors({
    origin: process.env.clientURL,
    credentials: true,
}))

app.get("/",(req,res)=>{
    res.send("I am a route");
})

app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))