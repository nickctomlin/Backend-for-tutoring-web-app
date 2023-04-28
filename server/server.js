const axios = require('axios')
const express = require('express');
const app = express();
const { auth } = require('express-oauth2-jwt-bearer');
const cors = require('cors');
app.use(cors());
var bodyParser = require('body-parser')
const port = process.env.PORT || 4000;
const mongoose = require("mongoose");
//const Router = require("./routes")
const uri =
  'mongodb+srv://skv53073:Srikris123@projecyuruk.kywvoc6.mongodb.net/?retryWrites=true&w=majority';
//const app = express();
const userModel = require("./Users");
const tutorModel = require("./Tutors");
const appointmentModel = require("./Appointment")
const jwtCheck = auth({
 audience: 'This is a unique Identifier',
  issuerBaseURL: 'https://dev-j4eggzupeca50pwe.us.auth0.com/',
  tokenSigningAlg: 'RS256'
});
mongoose.connect(uri, {
    useNewUrlParser: true,
  });
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", function () {
    console.log("Connected successfully");
  });
// enforce on all endpoints
//app.use(jwtCheck);
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/', function (req, res) {
    res.send('Free');
});

app.get('/protected',jwtCheck, async function (req, res) {
    try{
        const token = req.headers.authorization.split(' ')[1];
        //console.log(req);
        console.log(token);
        const response =  await axios.get('https://dev-j4eggzupeca50pwe.us.auth0.com/userinfo',{headers: {
            Authorization: `Bearer ${token}`,
          }});
    const userInfo = response.data
   // console.log(userInfo);
    res.send(userInfo);
}
catch{
   console.log("error")
   res.send("Ths is wrong") 
}
});
app.get('/reservations',jwtCheck, async function (req, res) {
    try{
        const token = req.headers.authorization.split(' ')[1];
        //console.log(req);
        console.log(token);
        const response =  await axios.get('https://dev-j4eggzupeca50pwe.us.auth0.com/userinfo',{headers: {
            Authorization: `Bearer ${token}`,
          }});
    const userInfo = response.data
    const name = userInfo.nickname;
    appointmentModel.findOne({StudentuserName: name}).catch((err)=>{
        //console.log(docs);
        res.send(err);
    })
    .then((docs)=>{
        //console.log(docs)
        res.send(docs);
    });
   // console.log(userInfo);
    //res.send(userInfo);
}
catch{
   console.log("error")
   res.send("Ths is wrong") 
}
});
app.get('/check1',jwtCheck, async function (req, res) {
    var send = "Neither";
    try{
        const token = req.headers.authorization.split(' ')[1];
        //console.log(req);
      //console.log(token);
        const response =  await axios.get('https://dev-j4eggzupeca50pwe.us.auth0.com/userinfo',{headers: {
            Authorization: `Bearer ${token}`,
          }});
    const userInfo = response.data;
    const name = userInfo.nickname;
    //res.send(name);
   await tutorModel.findOne({tutorId: name}).catch((err)=>{
        //console.log(docs);
        res.send(err);
    })
    .then((docs)=>{
        //console.log("Checking Tutor");
        if (docs == null)
        console.log("Null");
        else
        {
         //console.log("Not Null Tutors");
        send = "Tutor";
        }
    });
    await userModel.findOne({userName: "svemugunta"}).catch((err)=>{
        //console.log(docs);
        res.send(err);
    })
    .then((docs)=>{
        //console.log("Checking Users");
        if (docs == null)
        console.log("Null");
        else
        {
        //console.log("Not Null Users");
        send = "User";
        }
    });
}
catch{
   console.log("error")
   res.send("Mistake");
}
res.send(send);
});
app.get('/reservations/:id',jwtCheck, async function (req, res) {
    ID = req.params.Id;
    console.log(ID);
    //res.send(ID)
    appointmentModel.findOne({AppointmentID: ID}).catch((err)=>{
        //console.log(docs);
        res.send(err);
    })
    .then((docs)=>{
        console.log(docs)
        res.send(docs);
    });
});
app.post('/reservations', (req, res) => {
    req.body; // JavaScript object containing the parse JSON
    const doc = new appointmentModel(req.body);
    doc.save().then(()=>{
        res.send("Done");
       })
       .catch((error)=>res.send(error));
   // res.send("Here");
    //res.json(req.body.Sri);
  });

app.get('/tutors', function (req, res){
    tutorModel.find({}).then(function (users) {
        res.send(users);
        });
});
app.get('/tutors/:Id', function (req, res){
    ID = req.params.Id;
    console.log(ID);
    //res.send(ID)
    tutorModel.findOne({tutorId: ID}).catch((err)=>{
        //console.log(docs);
        res.send(err);
    })
    .then((docs)=>{
        console.log(docs)
        res.send(docs);
    });
});

app.post('/tutors',urlencodedParser, (req, res) => {
    req.body; // JavaScript object containing the parse JSON
    const doc = new tutorModel(req.body);
    doc.save().then(()=>{
        res.send("Done");
       })
       .catch((error)=>res.send(error));
   // res.send("Here");
    //res.json(req.body.Sri);
  });
  app.post('/user', urlencodedParser,(req, res) => {
     console.log("In User Post")
    console.log(req.body); // JavaScript object containing the parse JSON
    const doc = new userModel(req.body);
    doc.save().then(()=>{
        res.send("Done");
       })
       .catch((error)=>res.send(error));
   // res.send("Here");
    //res.json(req.body.Sri);
  });

app.use((req,res,next)=>{
    const error = new Error('not found')
    error.status = 404;
    next(error);
})
app.use((error,req,res,next)=> {
    const status = error.status || 500
    const message = error.message || 'Internsal Server Error'
    res.status(status).send(message);
})
app.listen(port);

console.log('Running on port ', port);