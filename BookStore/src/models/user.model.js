import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    Firstname: {
      type: String
    },
    Lastname: {
      type: String
    },
    EmailId: {
      type: String
    },
    Password: {
      type: String
    },
    UserId: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

export default model('User', userSchema);
