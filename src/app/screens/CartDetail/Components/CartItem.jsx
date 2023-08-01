import { useContext } from "react";
import CartContext from "../../../Context/Cart/CartContext";
import "./CartItem.css"


const CartItem = ({ product }) => {
    const { removeItem } = useContext(CartContext);
    const { id, title, price, images, category } = product;
    const [firstImage] = images;
    const imageURL =
        firstImage === "https://placeimg.com/640/480/any"
        ? "https://picsum.photos/640/640"
        : firstImage;
    

    return (
        <li className="CartItem___item" >

            <img src={imageURL} alt="..." className="CartItem__img" />
            <div>
                {id}.{title} ${price}
            </div>
            <button className="CartItem__button"  onClick={()=>removeItem(product._id)}>
                Remove
            </button>
            
        </li>
    );
};

export default CartItem;