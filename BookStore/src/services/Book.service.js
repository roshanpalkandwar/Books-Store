import Book from '../models/Book.model';

//get all Book
export const getAllBook = async () => {
    const data = await Book.find();
    console.log("getall Data....",data)
    return data;
  };

  //get a Book by id
export const getBook = async (_id) => {
    const data = await Book.findById({ _id: _id});
   console.log("book datt..........",data)
    return data;
  };
