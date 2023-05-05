const axios = require('axios')
const nodemailer = require("nodemailer");
const express = require('express');
const app = express();
const Upload = require("./UploadSchema");
const { auth } = require('express-oauth2-jwt-bearer');
const cors = require('cors');
app.use(cors());
const multer  = require('multer')
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
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
//app.use(express.json())  
app.get('/sendEmailForAppointment/:userName/:DateEmail/:tutor', async function (req, res) {
    userName = req.params.userName;
    DateEmail = req.params.DateEmail;
    tutor = req.params.tutor

    //let testAccount = await nodemailer.createTestAccount();
    let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'svemugunta@gmail.com',
            pass: 'wqbsiesfampmyojx'
        }
    });
     
    let mailDetails = {
        from: 'svemugunta@gmail.com',
        to: userName,
        subject: 'Appointment Has Been Made',
        text: 'Date is ' + DateEmail + " With Tutor: " + tutor
    };
     
    mailTransporter.sendMail(mailDetails, function(err, data) {
        if(err) {
            console.log('Error Occurs');
        } else {
            console.log('Email sent successfully');
        }
    });

});
app.post("/upload", upload.single("file"), async (req, res) => {
    // req.file can be used to access all file properties
    try {
      //check if the request has an image or not
      if (!req.file) {
        res.json({
          success: false,
          message: "You must provide at least 1 file"
        });
      } else {
        let imageUploadObject = {
          file: {
            data: req.file.buffer,
            contentType: req.file.mimetype
          },
          fileName: req.body.fileName
        };
        const uploadObject = new Upload(imageUploadObject);
        // saving the object into the database
        const uploadProcess = await uploadObject.save();
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
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
        const response =  await axios.get('https://dev-j4eggzupeca50pwe.us.auth0.com/userinfo',{headers: {
            Authorization: `Bearer ${token}`,
          }});
    const userInfo = response.data
    const name = userInfo.nickname;
    appointmentModel.find({StudentuserName: name}).catch((err)=>{
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
app.get('/returnReservations',jwtCheck, async function (req, res) {
    try{
        const token = req.headers.authorization.split(' ')[1];
        const response =  await axios.get('https://dev-j4eggzupeca50pwe.us.auth0.com/userinfo',{headers: {
            Authorization: `Bearer ${token}`,
          }});
    const userInfo = response.data
    const name = userInfo.nickname;
    var ret = [];
    userModel.findOne({userName: name}).catch((err)=>{
        //console.log(docs);
        res.send(err);
    })
    .then((docs)=>{
        var upComing = docs.upcomingAppointments;
        console.log(upComing);
        var bar = new Promise((resolve, reject) => {
            upComing.forEach((value, index, array) => {
                appointmentModel.findOne({AppointmentID: value}).then((docs)=>{
                    ret.push(docs);
                    if (index === array.length -1) resolve();
                })
            });
        });
        
        bar.then(() => {
            console.log("Done");
            res.send(ret);
        });
        //while(t == 0)
      // 
        //console.log("t is "+t);
       //res.send(ret);
    });
}
catch{
   console.log("error")
   res.send("Ths is wrong") 
}
});

app.get('/returnReservationsTutors',jwtCheck, async function (req, res) {
    try{
        const token = req.headers.authorization.split(' ')[1];
        const response =  await axios.get('https://dev-j4eggzupeca50pwe.us.auth0.com/userinfo',{headers: {
            Authorization: `Bearer ${token}`,
          }});
    const userInfo = response.data
    const name = userInfo.nickname;
    var ret = [];
    tutorModel.findOne({tutorId: name}).catch((err)=>{
        //console.log(docs);
        res.send(err);
    })
    .then((docs)=>{
        var upComing = docs.upcomingAppointments;
        console.log(upComing);
        var bar = new Promise((resolve, reject) => {
            upComing.forEach((value, index, array) => {
                appointmentModel.findOne({AppointmentID: value}).then((docs)=>{
                    ret.push(docs);
                    if (index === array.length -1) resolve();
                })
            });
        });
        
        bar.then(() => {
            console.log("Done");
            res.send(ret);
        });
        //while(t == 0)
      // 
        //console.log("t is "+t);
       //res.send(ret);
    });
}
catch{
   console.log("error")
   res.send("Ths is wrong") 
}
});

app.get('/returnFavorites',jwtCheck, async function (req, res) {
    try{
        const token = req.headers.authorization.split(' ')[1];
        const response =  await axios.get('https://dev-j4eggzupeca50pwe.us.auth0.com/userinfo',{headers: {
            Authorization: `Bearer ${token}`,
          }});
    const userInfo = response.data
    const name = userInfo.nickname;
    var ret = [];
    userModel.findOne({userName: name}).catch((err)=>{
        //console.log(docs);
        res.send(err);
    })
    .then((docs)=>{
        var upComing = docs.favoriteList;
        console.log(upComing);
        var bar = new Promise((resolve, reject) => {
            upComing.forEach((value, index, array) => {
                tutorModel.findOne({tutorId: value}).then((docs)=>{
                    ret.push(docs);
                    if (index == array.length -1) resolve();
                })
            });
        });
        
        bar.then(() => {
            console.log("Done In Return Favorite");
            console.log(ret);
            res.send(ret);
        });
        //while(t == 0)
      // 
        //console.log("t is "+t);
       //res.send(ret);
    });
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
        //console.log("Here At Checker")
        //console.log(req);
      //console.log(token);
        const response =  await axios.get('https://dev-j4eggzupeca50pwe.us.auth0.com/userinfo',{headers: {
            Authorization: `Bearer ${token}`,
          }});
    const userInfo = response.data;
    const name = userInfo.nickname;
    //console.log(name);
   await tutorModel.findOne({tutorId: name}).catch((err)=>{
        //console.log(docs);
        res.send(err);
    })
    .then((docs)=>{
        //onsole.log("Checking Tutor");
        if (docs == null)
        console.log("Null");
        else
        {
        // console.log("Not Null Tutors");
        send = "Tutor";
        }
    });
    await userModel.findOne({userName: name}).catch((err)=>{
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
    res.send(send);
}
catch{
   console.log("error")
   res.send("Mistake");
}
//console.log("Send is " + send);
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

app.post('/reservations',urlencodedParser, (req, res) => {
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
app.get('/tutorsByFavorite/:Favorite', function (req, res){
    Favorite= req.params.Favorite;
    console.log("In Tutors by Favorites");
    console.log(Favorite);
    //res.send(ID)
    tutorModel.find({ SubjectList:  Favorite}).catch((err)=>{
        //console.log(docs);
        res.send(err);
    })
    .then((docs)=>{
        console.log(docs)
        res.send(docs);
    });
});
app.get('/user/:Id', function (req, res){
    ID = req.params.Id;
    console.log(ID);
    //res.send(ID)
    userModel.findOne({userName: ID}).catch((err)=>{
        //console.log(docs);
        res.send(err);
    })
    .then((docs)=>{
        console.log(docs)
        res.send(docs);
    });
});

app.post('/tutors',urlencodedParser,express.json(), (req, res) => {
    req.body; // JavaScript object containing the parse JSON
    console.log(req.body.avaliableTime);
    const doc = new tutorModel(req.body);
    doc.save().then(()=>{
        console.log("Done");
        res.send("Done");
       })
       .catch((error)=>{
        console.log(error);
        res.send(error)
    });
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
  app.post('/userFavorite',jwtCheck,express.json(), async (req, res) => {
    console.log("In User Favorite")
   //console.log(req.body); // JavaScript object containing the parse JSON
   try{
    const token = req.headers.authorization.split(' ')[1];
        const response =  await axios.get('https://dev-j4eggzupeca50pwe.us.auth0.com/userinfo',{headers: {
            Authorization: `Bearer ${token}`,
          }});
    const userInfo = response.data
    const name = userInfo.nickname;
    console.log(name)
    console.log(req.body)
    userModel.findOneAndUpdate({userName: name},   { $push: { 
        favoriteList: req.body.favorite
      } 
}).catch((err)=>{
        //console.log(docs);
        res.send(err);
    })
    .then((docs)=>{
        console.log(docs)
        res.send(docs);
    });
   }
   catch
   {
    console.log("error")
   res.send("Ths is wrong") 
   }

  // res.send("Here");
   //res.json(req.body.Sri);
 });
 app.post('/removeFavorite',jwtCheck,express.json(), async (req, res) => {
    console.log("In remove Favorite")
   //console.log(req.body); // JavaScript object containing the parse JSON
   try{
    const token = req.headers.authorization.split(' ')[1];
        const response =  await axios.get('https://dev-j4eggzupeca50pwe.us.auth0.com/userinfo',{headers: {
            Authorization: `Bearer ${token}`,
          }});
    const userInfo = response.data
    const name = userInfo.nickname;
    console.log(name)
    console.log(req.body)
    userModel.findOneAndUpdate({userName: name},   { $pull: { 
        favoriteList: req.body.favorite
      } 
}).catch((err)=>{
        //console.log(docs);
        res.send(err);
    })
    .then((docs)=>{
        console.log(docs)
        res.send(docs);
    });
   }
   catch
   {
    console.log("error")
   res.send("Ths is wrong") 
   }

  // res.send("Here");
   //res.json(req.body.Sri);
 });
 app.post('/addReservation',jwtCheck,express.json(), async (req, res) => {

   try{
    console.log("In Add Reservation");
    var tutorDocs
    console.log("obj is")
    console.log(req.body.obj);
    const i = req.body.index
const tutor = req.body.tutor
console.log("i is " + i);
console.log("Tutor is " + tutor);
await tutorModel.findOne({tutorId: tutor}).catch((err)=>{
    //console.log(docs);
    //res.send(err);
})
.then((docs)=>{
tutorDocs = docs
});
var check = tutorDocs.avaliableTime[i].openingHours.isFilled;
console.log("i is");
console.log("Check is");
var count =  tutorDocs.avaliableTime[i].openingHours.count+ 1;
if(check != true)
{
var newIsFilled = false;
if(count == 5 )
{
    newIsFilled = true;
}
console.log(count);
console.log(newIsFilled);
var placeHolder = "avaliableTime."+i+".openingHours.count";
await tutorModel.findOneAndUpdate({tutorId: tutor},   { 
    $inc: { 
        [placeHolder] : 1
      } 
}).catch((err)=>{
    //console.log(docs);
    //res.send(err);
})
.then((docs)=>{
   // console.log(docs)
    //res.send(docs);
    console.log("Finished updating the count ")
});
placeHolder = "avaliableTime."+i+".openingHours.isFilled"
await tutorModel.findOneAndUpdate({tutorId: tutor},   { 
[placeHolder]:  newIsFilled
}).catch((err)=>{
    console.log(err);
    //res.send(err);
})
.then((docs)=>{
   // console.log(docs)
    //res.send(docs);
    console.log("Finished Updating Place Holder ")
});
const doc = new appointmentModel(req.body.obj);
 await doc.save().then(()=>{
    console.log("Done");
   })
   .catch((error)=>res.send(error));
const token = req.headers.authorization.split(' ')[1];
const response =  await axios.get('https://dev-j4eggzupeca50pwe.us.auth0.com/userinfo',{headers: {
       Authorization: `Bearer ${token}`,
     }});
const userInfo = response.data
const name = userInfo.nickname;
console.log("Name is " + name)
//console.log(req.body)
var Nname = tutor+name;
await userModel.findOneAndUpdate({userName: name},   { $push: { 
   upcomingAppointments: Nname
 } 
}).catch((err)=>{
   console.log("Done with user model.update");
   //res.send(err);
})
.then((docs)=>{
   console.log(docs)
   //res.send(docs);
});
await tutorModel.findOneAndUpdate({tutorId: tutor},   { $push: { 
    upcomingAppointments: Nname
  } 
}).catch((err)=>{
    console.log("Done with tutor model.update");
    //res.send(err);
})
.then((docs)=>{
    console.log("In tutor Model")
    console.log(docs)
    //res.send(docs);
});
res.send("Done");
return
}
else
{
    console.log("This is Filled")
    res.send("Filled")
}


   }
   catch
   {
    console.log("Error Happening");
    res.send("Error Happened");
   }
/*
    const token = req.headers.authorization.split(' ')[1];
        const response =  await axios.get('https://dev-j4eggzupeca50pwe.us.auth0.com/userinfo',{headers: {
            Authorization: `Bearer ${token}`,
          }});
    const userInfo = response.data
    const name = userInfo.nickname;
    //console.log(name)
    console.log(req.body)
    userModel.findOneAndUpdate({userName: name},   { $push: { 
        upcomingAppointments: req.body.appointment
      } 
}).catch((err)=>{
        //console.log(docs);
        res.send(err);
    })
    .then((docs)=>{
        console.log(docs)
        res.send(docs);
    });
   }
   catch
   {
    console.log("error")
   res.send("Ths is wrong") 
   }

  // res.send("Here");
   //res.json(req.body.Sri);
   */
 });
 app.post('/userAppointments',jwtCheck,express.json(), async (req, res) => {
    console.log("In User Appointments")
   //console.log(req.body); // JavaScript object containing the parse JSON
   try{
    const token = req.headers.authorization.split(' ')[1];
        const response =  await axios.get('https://dev-j4eggzupeca50pwe.us.auth0.com/userinfo',{headers: {
            Authorization: `Bearer ${token}`,
          }});
    const userInfo = response.data
    const name = userInfo.nickname;
    //console.log(name)
    console.log(req.body)
    userModel.findOneAndUpdate({userName: name},   { $push: { 
        upcomingAppointments: req.body.appointment
      } 
}).catch((err)=>{
        //console.log(docs);
        res.send(err);
    })
    .then((docs)=>{
        console.log(docs)
        res.send(docs);
    });
   }
   catch
   {
    console.log("error")
   res.send("Ths is wrong") 
   }

  // res.send("Here");
   //res.json(req.body.Sri);
 });
 app.get('/cancelAppointment/:Cancel',jwtCheck,express.json(), async (req, res) => { 
    console.log("In Cancel Appointments")
    cancel = req.params.Cancel;
   //console.log(req.body); // JavaScript object containing the parse JSON
   try{
    const token = req.headers.authorization.split(' ')[1];
        const response =  await axios.get('https://dev-j4eggzupeca50pwe.us.auth0.com/userinfo',{headers: {
            Authorization: `Bearer ${token}`,
          }});
    const userInfo = response.data
    const name = userInfo.nickname;
    //console.log(name)
    //console.log(req.body)
    //var appDoc;
   var resDoc =await appointmentModel.findOne({AppointmentID: cancel});
    console.log("Teacher is " + resDoc.TeacherID);
    console.log("opId is " + resDoc.opId)
   // console.log("Stuck Here");
userModel.findOneAndUpdate({userName: name},   { $pull: { 
        upcomingAppointments: cancel
      } 
}).catch((err)=>{
        //console.log(docs);
        res.send(err);
    })
    .then((docs)=>{
        console.log(docs)
        //res.send(docs);
    });
   TutModel = await tutorModel.findOneAndUpdate({tutorId: resDoc.TeacherID},   { $pull: { 
        upcomingAppointments: cancel
      } 
});
var i;
console.log("We Are Here");
console.log("TutModel avaliable time is " + TutModel.avaliableTime);
console.log("Length is " + TutModel.avaliableTime.length)
/*TutModel.avaliableTime.forEach(value,index)
{
    console.log("Number of Times")
    if(value.opId == resDoc.op)
    {
        i = index;
    }
}
*/
console.log("resDoc is " + resDoc);
for(var x = 0; x<TutModel.avaliableTime.length;x++)
{
    if(TutModel.avaliableTime[x].opId == resDoc.opId)
    {
        console.log( "Equal")
        i = x;
    }
}
//i = 0;
console.log("I is " + i);
var placeHolder = "avaliableTime."+i+".openingHours.count";
console.log("after we set place Holder");
await tutorModel.findOneAndUpdate({tutorId: resDoc.TeacherID},   { 
    $inc: { 
        [placeHolder] : -1
      } 
}).catch((err)=>{
    //console.log(docs);
    res.send(err);
})
.then((docs)=>{
   // console.log(docs)
    //res.send(docs);
    console.log("Finished updating the count ")
});
placeHolder = "avaliableTime."+i+".openingHours.isFilled"
await tutorModel.findOneAndUpdate({tutorId: resDoc.TeacherID},   { 
[placeHolder]:  false
}).catch((err)=>{
    console.log(err);
    res.send(err);
})
.then((docs)=>{
   // console.log(docs)
    //res.send(docs);
    console.log("Finished Updating Place Holder ")
});

await appointmentModel.deleteOne({ AppointmentID: cancel }).catch(()=>{
    res.send("Already Deleted");
});
res.send("Done");
   }
   catch
   {
    console.log("error")
   res.send("Ths is wrong") 
   }

  // res.send("Here");
   //res.json(req.body.Sri);
 });
 app.post('/tutorAppointments',express.json(), async (req, res) => {
    console.log("In Tutor Appointments")
   //console.log(req.body); // JavaScript object containing the parse JSON
   try{
    const name = req.body.tutorName;
    //console.log(name)
    console.log(req.body)
    tutorModel.findOneAndUpdate({tutorId: name},   { $push: { 
        upcomingAppointments: req.body.appointment
      } 
}).catch((err)=>{
        //console.log(docs);
        res.send(err);
    })
    .then((docs)=>{
        console.log(docs)
        res.send(docs);
    });
   }
   catch
   {
    console.log("error")
   res.send("Ths is wrong") 
   }

  // res.send("Here");
   //res.json(req.body.Sri);
 });
 app.post('/tutorAddAvaliable',jwtCheck,express.json(), async (req, res) => {
    console.log("In User Appointments")
   //console.log(req.body); // JavaScript object containing the parse JSON
   try{
    const token = req.headers.authorization.split(' ')[1];
        const response =  await axios.get('https://dev-j4eggzupeca50pwe.us.auth0.com/userinfo',{headers: {
            Authorization: `Bearer ${token}`,
          }});
    const userInfo = response.data
    const name = userInfo.nickname;
    //console.log(name)
    console.log(req.body)
    tutorModel.findOneAndUpdate({tutorId: name},   { $push: { 
        avaliableTime: req.body
      } 
}).catch((err)=>{
        //console.log(docs);
        res.send(err);
    })
    .then((docs)=>{
        console.log(docs)
        res.send(docs);
    });
   }
   catch
   {
    console.log("error")
   res.send("Ths is wrong") 
   }

  // res.send("Here");
   //res.json(req.body.Sri);
 });
 app.post('/tutorUpdateSubj',jwtCheck,express.json(), async (req, res) => {
    //console.log("In User Appointments")
   //console.log(req.body); // JavaScript object containing the parse JSON
   try{
    const token = req.headers.authorization.split(' ')[1];
        const response =  await axios.get('https://dev-j4eggzupeca50pwe.us.auth0.com/userinfo',{headers: {
            Authorization: `Bearer ${token}`,
          }});
    const userInfo = response.data
    const name = userInfo.nickname;
    //console.log(name)
    console.log(req.body)
    tutorModel.findOneAndUpdate({tutorId: name},   { $push: { 
        SubjectList: req.body.subj
      } 
}).catch((err)=>{
        //console.log(docs);
        res.send(err);
    })
    .then((docs)=>{
        console.log(docs)
        res.send(docs);
    });
   }
   catch
   {
    console.log("error")
   res.send("Ths is wrong") 
   }

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