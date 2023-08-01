import { useContext } from "react";
import CartContext from "../../Context/Cart/CartContext";
import CartItem from "./Components/CartItem";
import { Link } from "react-router-dom";



const CartList = () => {
    const { cartItems }= useContext(CartContext)

    return (
        <>
         <div >
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

                </div>
        </>
            
        
    )
}

export default CartList;