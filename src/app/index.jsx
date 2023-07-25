import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query';
import Layout from './components/Layout';
import Home from "../app/screens/Home";
import Login from "../app/screens/Login";
import Register from "../app/screens/Register";
import Categories from "../app/screens/Categories";
import Products from "./screens/Products/Products";
import ProductsDetail from "./screens/ProductDetail/ProductDetail";
import CartDetail from "../app/screens/CartDetail";
import ProductsCreate from './screens/ProductsCreate/ProductsCreate';
import ProductsEdit from './screens/ProductsCreate/ProductsEdit';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/products" element={<Products />} />
            <Route path='/products/:id' element={<ProductsDetail />} />
            <Route path="/products/create" element={<ProductsCreate />} />
            <Route path="/products/edit/:id" element={<ProductsEdit />} />
            <Route path="/cart-detail" element={<CartDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
