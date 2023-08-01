import { useContext } from "react";
import CartContext from "../../Context/Cart/CartContext";
import CartItem from "./Components/CartItem";
import "./cart.css"
import { Link } from "react-router-dom";


const CartDetail = () => {

    const { showCart, cartItems, showHideCart } = useContext(CartContext)

    return (
    <>
        {showCart && (
            <div className="cart__wrapper" >
                <div>
                    <i 
                    style={{ cursor: "pointer" }}
                    className="fa fa-times-circle"
                    aria-hidden='true'
                    onClick={showHideCart} 
                    ></i>
                </div>
                <div className="cart__innerwrapper" >
                    {cartItems.length === 0 ? (<h4>Cart is Empty</h4>) : (
                        <ul>
                            {cartItems.map((product, index) => (
                                <CartItem key={index} product={product} />
                            ))}
                        </ul>
                    )}
            
                </div>
                <div className="cart__cartTotal" >
                    <div>
                        Cart Total
                    </div>
                    <div>  
                        ${cartItems.reduce((amount, product) => product.price + amount, 0)}
                    </div>
                    <div>
                        <Link to={'/cart-detail'} >Detail</Link>
                    </div>

                </div>
            </div>
        )}

     </>
    );
};

export default CartDetail;