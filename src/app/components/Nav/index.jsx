import { Link } from "react-router-dom";
import styles from "./styles.module.css"

function Navbar() {
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
          <Link  className={styles.navElement} to="/cart-detail" >
            Cart
          </Link>
        </li>
        <li>
          <input className={styles.searchBar} type="text" placeholder="Search" />
        </li>
        
      </ul>

      </nav>
      
    </header>
    
  );
}

export default Navbar;