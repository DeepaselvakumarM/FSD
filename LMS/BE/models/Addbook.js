const sequelize=require("../sequelize")
const {DataTypes}=require("sequelize")

const books=sequelize.define("Book",{
      title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    published_year: {
      type: DataTypes.INTEGER,
    },

})

module.exports=books;
