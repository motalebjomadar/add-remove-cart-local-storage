import PropTypes from 'prop-types';
import './Cart.css'

const Cart = ({cart, handleRemoveFromCart}) => {
    return (
        <div>
            <h1>Cart: {cart.length}</h1>
            <div className='cart-container'>
                {cart.map(book => <div key={book.id}>
                    <img   src={book.img}></img>
                    <button onClick={()=>handleRemoveFromCart(book.id)}>Remove</button>
                </div>)}
            </div>
        </div>
    );
};

Cart.propTypes={
    cart: PropTypes.array.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired
}


export default Cart;