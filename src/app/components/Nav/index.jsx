import { Link } from "react-router-dom";
import styles from "./styles.module.css"
import CartContext from "../../Context/Cart/CartContext";
import { useContext } from "react";

function Navbar() {
  const { cartItems, showHideCart }= useContext(CartContext)

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img alt="" /> Ecommerce
      </div>

      <nav className="navbar" >
      <ul className={styles.navigation}>
        <li>
          <Link className={styles.navElement} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.navElement} to="/products">
            Products
          </Link>
        </li>
        <li>
          <Link className={styles.navElement} to="/categories">
            Categories
          </Link>
        </li>
        <li>
          <Link className={styles.navElement} to="/login">
            Login
          </Link>
        </li>
        <li>
          <i className="fa fa-shopping-cart" aria-hidden='true' onClick={showHideCart} >
            { cartItems.length > 0  && <div className="item__count"><span>{cartItems.length}</span></div>  }
            
          </i>
        </li>
        <li>
          <input className={styles.searchBar} type="text" placeholder="Search" />
          <i className="fas fa-search" ></i>
        </li>
        
      </ul>

      </nav>
      
    </header>
    
  );
}

export default Navbar;