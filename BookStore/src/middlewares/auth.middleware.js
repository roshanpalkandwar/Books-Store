import HttpStatus from 'http-status-codes';
import jwt from 'jsonwebtoken';

export const userAuth = async (req, res, next) => {
  try {
    let bearerToken = req.header('Authorization');
    console.log("bearer token before============>",bearerToken)
    if (!bearerToken)
      throw {
        code: HttpStatus.BAD_REQUEST,
        message: 'Authorization token is required'
      };
    bearerToken = bearerToken.split(' ')[1];
    const user  = await jwt.verify(bearerToken, process.env.SECRET_KEY); 
    req.body.userId=user.EmailId;
    next();
  } catch (error) {
    res.status(HttpStatus.UNAUTHORIZED).json({
      code: HttpStatus.UNAUTHORIZED,
      message: `${error}`
    });
  }
};


export const userAuthentication= async (req, res, next) => {
  try {
    let bearerToken = req.header('Authorization');
    
    if (!bearerToken)
      throw {
        code: HttpStatus.BAD_REQUEST,
        message: 'Authorization token is required'
      };
    bearerToken = bearerToken.split(' ')[1];
    
    const user = await jwt.verify(bearerToken, process.env.SECRET_KEY);
    console.log("user========>",user)
    req.body.UserId=user.EmailId;
    next();
  } catch (error) {
    res.status(HttpStatus.UNAUTHORIZED).json({
      code:HttpStatus.UNAUTHORIZED,
      message:`${error}`
    });
  }
};