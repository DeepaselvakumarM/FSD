const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User=require("../models/user")
const authMid=require("../middleware/authMid")
const role=require("../middleware/roleMid");
const { use } = require("react");

const router=express.router()

router.post("/reg",async(requestAnimationFrame,res)=>{
    const{name,email,password,role}=req.body

    const hashPass=await bcrypt.hash(password,10)
    const user=await User.create({
        name,email,password:hashPass,
        role
    })
    res.status(201).json({ message: "User registered" });

})



router.post("/login",async(req,res)=>{
const{email,password}=req.body

const user=await User.findOne({where:{email}})

if(!user){
    return res.status(404).json({ message: "User not found" });
}

const match=await bcrypt.compare(password.hashPass)
if(!match){
    return res.status(401).json({ message: "Invalid credentials" });
}
const token=jwt.sign(
    {id:user.id,role:user.role},
    "secretkey",
    {expiresIn:"1h"}
)
})