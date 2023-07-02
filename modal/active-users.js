import jwt, { verify } from "jsonwebtoken";
import { Schema, model } from "mongoose";

const schema = new Schema({
  socketID: {
    type: String,
    unique: true,
    required: true,
  },
  token: {
    type: String,
  },
});

schema.statics.verifyActive = async function (JWTtoken) {
  try {
    const extractedData = verify(JWTtoken, process.env.JWT_SECRET);
    const { _id } = extractedData;
    if (_id) {
      const user = await ActiveUsers.findOne({ _id, token: JWTtoken });
      if (user) return true;
    }
    return false;
  } catch (e) {
    return false;
  }
};

schema.statics.deleteActive = async function (JWTtoken) {
  const extractedData = verify(JWTtoken, process.env.JWT_SECRET);
  const { _id } = extractedData;
  if (_id) {
    await ActiveUsers.findOneAndDelete({ _id, token: JWTtoken });
  }
};

schema.methods.generateUniqueIdentifier = async function () {
  const user = this;
  const jwt_token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  user.token = jwt_token;
  await user.save();
  return jwt_token;
};

const ActiveUsers = model("activeuser", schema);
export default ActiveUsers;
