const sequelize=require("../sequelize")
const {DataTypes}=require("sequelize")

const Review=sequelize.define("Review",{
    reviewer_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: 0,
        max: 5,
      },
    },
    comment: {
      type: DataTypes.TEXT,
    },
})

module.exports=Review