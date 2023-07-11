import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import Home from "../app/screens/Home";
import Login from "../app/screens/Login";
import Register from "../app/screens/Register";
import Categories from "../app/screens/Categories";
import Products from "../app/screens/Products";
import ProductsDetail from "../app/screens/ProductsDetail";
import CartDetail from "../app/screens/CartDetail";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<Layout />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart-detail" element={<CartDetail />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
