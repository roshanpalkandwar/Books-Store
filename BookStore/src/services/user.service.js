import User from '../models/user.model';
import bcrypt from'bcrypt';
//get all users
export const getAllUsers = async () => {
  const data = await User.find();
  return data;
};

//create new user
export const newUser = async (body) => {
  // const existingUsername=await User.findOne({EmailId:body.EmailId});
  // if(existingUsername===null)
  {
    const saltRounds=10;
    const hashPassaword=await bcrypt.hash(body.Password,saltRounds);
    body.Password=hashPassaword;
    const data = await User.create(body);
    return data;
  }
  // else{
  //   throw new Error ("Oops, EamailId Already exsits use Different One EmailId!!!!!!! ")
  // }
  
  
};

//update single user
export const updateUser = async (_id, body) => {
  const data = await User.findByIdAndUpdate(
    {
      _id
    },
    body,
    {
      new: true
    }
  );
  return data;
};

//delete single user
export const deleteUser = async (id) => {
  await User.findByIdAndDelete(id);
  return '';
};

//get single user
export const getUser = async (id) => {
  const data = await User.findById(id);
  return data;
};
