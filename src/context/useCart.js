import { useContext } from "react"
import { CartStateContext } from "./cartCore"

export function useCart() {
  const ctx = useContext(CartStateContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
