import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';


/**
 * Controller to create a new user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const registrationNewUser = async (req, res, next) => {
  try {
    const data = await UserService.newUser(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'User created successfully'
    });
  } catch (error) {
    next(error);
  }
};

//controller to Login New User
export const loginUser = async (req, res, next) => {
  try {
    const data = await UserService.loginUser(req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.ok,
      data: data,
      message: 'User login successfully'
    });
  } catch (error) {
    next(error);
  }
};

//controller to User for forgetten password

export const ForgottPassword=async(req,res,next)=>{
  try{
    const data=await UserService.ForgottPassword(req.body);
    res.status(HttpStatus.OK).json({
      code:HttpStatus.OK,
      data:data,
      message:'User Process Futher'
    });
  }catch(error){
    res.status(HttpStatus.BAD_REQUEST).json({
      code:HttpStatus.BAD_REQUEST,
      message:`${error}`
    });
  }
};

//controller to User reset  password

export const resetPassword=async(req,res)=>{
  try{
     const data=await UserService.resetPassword(req.body);
     res.status(HttpStatus.OK).json({
       code:HttpStatus.OK,
       data:data,
       message:'Password Upadated...'
     });
   }catch(error){
     res.status(HttpStatus.BAD_REQUEST).json({
       code:HttpStatus.BAD_REQUEST,
       message:`${error}`
     });
   }
 }
