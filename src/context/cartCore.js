import { createContext } from "react"

export const STORAGE_KEY = "vrglasses_cart_v1"

export const CartStateContext = createContext(null)

export function readStoredCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function normalizeItem(item) {
  const id = Number(item?.id)
  const price = Number(item?.price)
  const qty = Math.max(1, Math.floor(Number(item?.qty ?? 1)))
  return {
    id,
    model: String(item?.model ?? ""),
    image: String(item?.image ?? ""),
    price: Number.isFinite(price) ? price : 0,
    qty,
  }
}
