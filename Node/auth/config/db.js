const{Sequelize}=require("sequelize")


const connect=new Sequelize("school_db","root","Deepa@sql",{
    host:"localhost",
    dialect:"mysql"
})


module.exports=connect