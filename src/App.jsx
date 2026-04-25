import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import GlassDetails from "./pages/GlassDetails"
import Cart from "./pages/Cart"
import { CartProvider } from "./context/CartProvider"

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/glasses/:id" element={<GlassDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
