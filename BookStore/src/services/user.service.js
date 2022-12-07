import User from '../models/user.model';
import bcrypt from'bcrypt';
import jwt from 'jsonwebtoken';


//create new user
export const newUser = async (body) => {
   const existingUsername=await User.findOne({EmailId:body.EmailId});
   if(existingUsername===null)
  {
    const saltRounds=10;
    const hashPassword=await bcrypt.hash(body.Password,saltRounds);
    body.Password=hashPassword;
    const data = await User.create(body);
    return data;
  }
   else{
     throw new Error ("Oops, EamailId Already exsits use Different One EmailId!!!!!!! ")
  } 
};

//login user
export const loginUser=async(body)=>{
  const data = await User.findOne({EmailId:body.EmailId});
  if(data !== null){
    const result=await bcrypt.compare(body.Password,data.Password);
    if(result){
      var token=jwt.sign({EmailId:data.EmailId,id:data._id},
        process.env.SECRET_KEY);
      return token
    }
    else
    {
      throw new  Error('invalid password');

    }
  }else
  {
    throw new  Error('invalid email');
  }
 
};
