import './App.css'
import { BrowserRouter, Routes, Router } from 'react-router-dom'
import Home from "-/screens/Home"

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
            <Route path="/products/:id" element={<ProductsDetail />} />
            <Route path="/products/create" element={<ProductsCreate />} />
            <Route path="/products/edit/:id" element={<ProductsEdit />} />
            <Route path="/cart-detail" element={<CartDetail />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App