import PropTypes from 'prop-types';
import './Book.css'

const Book = ({book, handleAddToCart}) => {
    const {img, id, name, price} = book;
    return (
        <div className='book'>
            <img src={img}></img>
            <br></br>
            <button onClick={()=> handleAddToCart(book)}>Add To Cart</button>
        </div>
    );
};

Book.propTypes= {
    book: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired
}

export default Book;