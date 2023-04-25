const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
userName:{
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
major: {
type: String,
required: true
},
favoriteList: {
type: [String],
default: [],
},
upcomingAppointments:{
type: [String],
default: [],
},
numOfCompletedHours: {
    type: Number,
    default: 0,
},
});
const User = mongoose.model("User", UserSchema);
module.exports = User;