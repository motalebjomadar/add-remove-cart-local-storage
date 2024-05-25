import { useEffect, useState } from "react";
import Book from "./Book";
import './Books.css';
import { addToLS, getStoredCart, removeFromLS} from "./utilities/localStorage";
import Cart from "./Cart";


const Books = () => {
    const [books, setBooks] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])

    // load cart from local storage
    useEffect(() => {
        if(books.length>0){
            const storedCart = getStoredCart();
            // console.log(storedCart);
            const savedCart = [];
            for(const id of storedCart){
                console.log(id);
                const book = books.find(book => book.id === id);
                if(book){
                    savedCart.push(book);
                }
            }
            console.log(savedCart);
            setCart(savedCart);
        }
    }, [books])

    const handleAddToCart = book => {
        const newBook = [...cart, book];
        setCart(newBook);
        addToLS(book.id);
    }

    const handleRemoveFromCart = id => {
        // remove visual cart
        const remainingCart = cart.filter(book => book.id !== id);
        setCart(remainingCart);
        // remove from LS
        removeFromLS(id);

    }

    return (
        <div>
            <Cart handleRemoveFromCart={handleRemoveFromCart} cart={cart}></Cart>
            <h1>Books Available {books.length}</h1>
            <div className = 'books-container'>
                {
                    books.map(book => <Book handleAddToCart={handleAddToCart} key={book.id} book={book}></Book>)
                }
            </div>

        </div>
    );
};

export default Books;