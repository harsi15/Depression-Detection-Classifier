const express= require('express')
const app = express()
const cors = require('cors')
//const passport =require('passport')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const fileupload = require('express-fileupload');
/*app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(function(req, res, next) {
	res.locals.currentUser = req.user;
	res.locals.error = req.flash("error");
	res.locals.success = req.flash("success");
	next();
});

passport 			= require("passport"),
LocalStrategy		= require("passport-local"),
var passportLocalMongoose = require("passport-local-mongoose");
userSchema.plugin(passportLocalMongoose);
*/
//const bcrypt= require('bcrypt');
//const mocha = require('mocha');
//const assert = require('assert');
//var MongoClient = require('mongodb').MongoClient;
//var url ="mongodb://127.0.0.1:27017/";
//require('dotenv/config')

mongoose.connect('mongodb://127.0.0.1:27017/depression' ,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true },()=>{
    console.log("Connected to db")
    });

app.set('view engine', 'ejs');

app.use(express.static('public'))

app.use(express.urlencoded({extended:false}));
app.use(fileupload());
app.use(express.json());
//app.use(methodOverride("_method"));


app.use(bodyParser.json())
app.use(cors())
console.log(mongoose.connection.readyState)

app.get('/', (req, res)=>{
    res.send("Hello world");
});

var clients =new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    gender: String,
    age: Number,
    password: String
});

var users=mongoose.model("clients",clients,"clients");

app.get('/api/users',function(req,res){
    console.log(mongoose.connection.readyState);
    users.find({},function(err,users){
        if(err){
            console.log(err);
        }else{
            res.json(users);
        }
    });
});
/*app.post('/api/users',function(req,res){
    console.log(req.users)
    var name = req.body.name;
    var email = req.body.email;
    var phone = req.body.phone;
    var gender = req.body.gender;
    var age = req.body.age;
    var password =req.body.password;
    var newUser ={name:name, email:email, phone:phone, gender:gender, age:age, password:password};
    users.create(newUser,function(err,newUser){
        if(err){
            console.log(err.message);
            res.redirect("new");
        }else{
            res.redirect("api/users");
        }
    });
});
*/

app.post('/api/users',async (req,res)=>{

    //const salt=await bcrypt.genSalt(10);

    //const passHash=await bcrypt.hash(req.body.password,salt)

    var ins={
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        gender:req.body.gender,
        age:req.body.age,
        password:req.body.password
    };
      users.insertMany(ins,function(err,result){
        if(err){
            throw err;
        }
        else{
            console.log("inserted1");
        }
    });
    res.json({"msg":"form submitted"});
});

var currentUser;

app.post('/api/signin',(req,res)=>{
    var obj={
        email:req.body.email
    };

    users.findOne(obj,function(err,result){
        if(err){
            throw err;
        }
        else{
            //bcrypt.compare(req.body.password,result.password,function(err,rm){
               if(req.body.password==result.password){
                   res.json("Login Successfull");
                  
               }
               else{
                    res.json("incorrect password");
               } 
            //});
        }

    });
});







/*var client=mongoose.model("clients",clients,"clients");
app.post('/api/users',(req,res)=>{
    var user = new client({name:'Ojas'});
    console.log(user);
});
*/
/*
describe('Saving records',function(){

    it('Saves a record to the database',function(done){
        var char = new users({
            name: 'Ojas'
        });

        char.save().then(function(){
          assert(char.isNew===false);
          done();  
        });
    });
});
*/
//connect to dB


const port = process.env.PORT || 3000;
app.listen(port, ()=>console.log(`Listening on port ${port}...`))



