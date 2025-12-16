const {DataTypes}=require("sequelize")
const db=require("../config/db")

const user=db.define("user",{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false
    },
     password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role:{
    type:DataTypes.ENUM("student","admin"),
    defaultValue:"student"
  }
})


module.exports=user