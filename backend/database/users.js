require('dotenv').config();
const mongoose=require("mongoose");
const Schema= mongoose.Schema;
const passportLocalMongoose=require("passport-local-mongoose");
main()
.then((res)=>{
    console.log("successfully connected to database");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}

const userSchema=new Schema({
 email:{
    type:String,
    required:true
 }
})

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('Userp', userSchema);