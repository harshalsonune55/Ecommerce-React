const express=require("express");
let app=express();
const port=8080;
const path=require("path");
var cors = require('cors');
const session=require("express-session");
// const {isloggedin}=require("./middlewere/login_auth.js");
const passport=require("passport");
const localStrategy=require("passport-local");
const Userp=require("./database/users.js");


const sessionOption={
    secret:"My super Sceret code",
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires:Date.now() + 7*24*60*60*1000,
        maxAge:7*24*60*60*1000,
        httpOnly:true
  
    }
  
  }


app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(express.json());
app.use(session(sessionOption));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(Userp.authenticate()));
passport.serializeUser(Userp.serializeUser());
passport.deserializeUser(Userp.deserializeUser());

app.get("/",(req,res)=>{
    res.send("hello World!");
})


app.post("/signup",async(req,res)=>{
    let{username,email,password}=req.body;
    try{
        let newUser=new Userp({
            email:email,
            username:username,});
      req.session.name=username;
      let regestiredUser= await Userp.register(newUser,password);
      res.status(200).json({ message: "Signup successful" });
    
     }catch(e){
      console.log(e)
      return res.status(400).json({ message: "Some error hits" });
    }

});

app.post("/login", passport.authenticate("local"), (req, res) => {
    res.json(req.user );
  });

  app.get("/user", (req, res) => {
    res.json({ user: req.user || null });
  });


  app.get("/logout", (req, res) => {
    req.logout(() => {
      res.json({ message: "Logged out" });
    });
  });

app.listen(port,()=>{
console.log(`listening on ${port} port successully`);
});