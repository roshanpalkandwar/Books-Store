import Wishlist from "../models/wishlist.model";
import Book from '../models/Book.model';


//add books to wishlist
export const addBookToWishlist = async (email, params_book_id) => {
    const checkBook = await Book.findOne({ _id: params_book_id });
    console.log("Check book", checkBook);
    if (checkBook) {
        const userWishlist = await Wishlist.findOne({ userId: email });
        console.log("Book Exists");
        let bookInfo = {
            'productId': checkBook._id,
            'description': checkBook.description,
            'bookName': checkBook.bookName,
            'bookImage': checkBook.bookImage,
            'author': checkBook.author,
            'price': parseInt(checkBook.price),
        }
        console.log("This is the typeof bookInfo.price", typeof bookInfo.price)
        if (userWishlist == null) {
            console.log("For new User");
            const createWishlist = await Wishlist.create({ userId: email, books: [bookInfo], cart_total: checkBook.price })
            return createWishlist;
        } else {
            console.log("For Existing User");
            let bookFound = false
            let totalPrice = 0
            userWishlist.books.forEach(element => {
                if (element.productId == params_book_id) {
                    element.quantity = element.quantity + 1
                    bookFound = true
                }
            });
            if (bookFound == false) {
                userWishlist.books.push(bookInfo)
                console.log("added a new book");
            }
            let wishlistView = await Wishlist.findOneAndUpdate({ userId: email }, { books: userWishlist.books, cart_total: totalPrice }, { new: true })
            return wishlistView;
        }
    } else {
        throw new Error("Book doesn't Exist");
    }
}