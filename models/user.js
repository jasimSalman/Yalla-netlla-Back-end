const mongoose = require("mongoose")
const Schema = mongoose.Schema
const UserSchema = new Schema(
  {
    userFirstName: String,
    userLastName: String,
    userName: String,
    userPasswordDigest: String,
    userEmail: String,
    userType: String,
    userList: [String],
    booking: { type: Schema.Types.ObjectId, ref: "Booking" },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("User", UserSchema)