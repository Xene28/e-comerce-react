import { Outlet } from "react-router-dom";
import Navbar from "../Nav";
import CartDetail from "../../screens/CartDetail";

function Layout() {
  return (
    <>  
        <Navbar />
        <CartDetail />
        <Outlet />
    </>
  );
}

export default Layout;