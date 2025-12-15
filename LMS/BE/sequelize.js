const{Sequelize, DataTypes}=require("sequelize")
const db=require("./db.config")


const conn=new Sequelize(
    db.db,db.user,db.password,{
        host:db.host,
        dialect:db.dialect,
        logging:false,
        port:db.port
    }
)

async function test(){
    try{
        await conn.authenticate()
        console.log("✅ Connection to MySQL has been established successfully.");
    }
    catch (error) {
    console.error("❌ Unable to connect to the database:", error);
  }
}
test()

module.exports=conn