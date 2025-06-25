require('dotenv').config();
const mongoose=require("mongoose");

main()
.then((res)=>{
    console.log("successfully connected");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}


const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    age:Number
});


const User=mongoose.model("User", userSchema);

module.exports=User;

