const mongoose = require("mongoose");
const AppointmentSchema = new mongoose.Schema({
AppointmentID:{
type:String,
required: true,
unique: true,
},
StudentuserName:{
type: String,
required: true,
},
TeacherID: {
type: String,
required: true,
},
date: {
    type: String,
    required: true,
},
start: {type: String,
    default:null
},
end:{type: String,
      default:null},
opId:{type:String,
required:true,
}
});
const Appointment= mongoose.model("Appointment", AppointmentSchema);
module.exports = Appointment;