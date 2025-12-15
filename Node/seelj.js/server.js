import express from "express"
import fs from "fs/promises"

const app=express()
app.use(express.json())



app.post("/post",async(req,res)=>{
    try{
        const{name,email}=req.body
        if(!name || ! email){
            return res.status(400).json(
                {
                     status: "fail",
        message: "Name and email are required"
                }
            )
        }
        const data=await fs.readFile("")
        const users=JSON.parse(data)

        const newUser={
            id:users.length+1,
            name,
            email
        }
        users.push(newUser)
    }

})