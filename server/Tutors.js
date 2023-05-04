const mongoose = require("mongoose");
const TutorSchema = new mongoose.Schema({
tutorId:{
type: String,
required: true,
unique: true,
},
password: {
type: String,
required: true,
},
UTDID:{
    type: String,
    required: true,
},
ExpectedGradDate: {
type: String,
required: true
},
SubjectList: {
    type: [String],
    required: true
},
aboutMe: {
type: String,
required: true
},
avaliableTime: [{
    date: {
      type: String,
      default: null
    },
    opId:{type:String,
        required:true},
    openingHours: {
      start:{type: String,
      default:null},
      end:{type: String,
        default:null},
        count:{
            type: Number,
            default:0
        },
        isFilled:{type:Boolean,
        default:false},
    }
}]
,
upcomingAppointments:{
type: [String],
default: [],
},
numOfCompletedHours: {
    type: Number,
    default: 0,
},
});
const Tutor = mongoose.model("Tutor", TutorSchema);
module.exports = Tutor;