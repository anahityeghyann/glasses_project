import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import GlassDetails from "./pages/GlassDetails"
import Cart from "./pages/Cart"
import { CartProvider } from "./context/CartProvider"
import { Toaster } from "react-hot-toast"

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 2200,
            style: {
              background: "rgba(24, 24, 27, 0.55)",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.18)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              borderRadius: "16px",
              padding: "12px 14px",
              boxShadow: "0 18px 45px rgba(0,0,0,0.25)",
            },
          }}
        />
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
