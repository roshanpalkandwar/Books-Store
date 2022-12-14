import HttpStatus from 'http-status-codes';
import * as BookService from '../services/Book.service';


<<<<<<< HEAD
// get All Book to the Controller
=======
// get All Book To controoler
>>>>>>> 3.Book-Operation
export const getAllBook = async (req, res, next) => {
    try {
      const data = await BookService.getAllBook(req.body.admin_user_id);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'All Book fetched successfully'
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message: `${error}`
      });
    }
};
  
<<<<<<< HEAD
// get  Book By Id to the Controller
=======

// get Praticular Book To controoler By Id
>>>>>>> 3.Book-Operation
export const getBook = async (req, res, next) => {
    try {
      const data = await BookService.getBook(req.params._id,req.body.admin_user_id);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Book fetched successfully'
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message: `${error}`
      });
    }
  };