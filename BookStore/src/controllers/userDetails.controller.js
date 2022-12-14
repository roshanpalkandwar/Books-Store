import HttpStatus from 'http-status-codes';
import * as userDetailsService from '../services/userDetails.service';

export const addUserDetails = async (req, res, next) => {
    try {
      const data = await userDetailsService.addUserDetails(req.body);
      console.log("dataaa==========>",data)
      res.status(HttpStatus.CREATED).json({
        code: HttpStatus.CREATED,
        data: data,
        message: 'User Details created successfully'
      });
    } catch (error) {
      next(error);
    }
  };