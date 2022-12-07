import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';
import { userAuthentication} from '../middlewares/auth.middleware';
//import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();


//route to create a new user
router.post('/Register', newUserValidator, userController.registrationNewUser );

//route to login a new user
router.post('/login',  userController.loginUser);

//route to forgot password
router.post('/forgotPassword',userController.ForgottPassword);

//route to reset the password
router.post('/resetPassaword',userAuthentication,userController.resetPassword);


export default router;
