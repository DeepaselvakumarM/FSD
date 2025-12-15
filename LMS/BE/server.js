const express = require("express");
const sequelize=require("./sequelize")
const app = express();
// const db=require("./models")



app.use(express.json());

// db.sequelize.sync({ force: true }).then(() => {
//   console.log("✅ Tables created!");
// });


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});

//table associations