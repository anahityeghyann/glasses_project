import { useEffect, useMemo, useState, useCallback } from "react"
import { CartStateContext, readStoredCart, normalizeItem, STORAGE_KEY } from "./cartCore"

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => readStoredCart())

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const totalQty = useMemo(() => items.reduce((sum, it) => sum + it.qty, 0), [items])
  const subtotal = useMemo(() => items.reduce((sum, it) => sum + it.price * it.qty, 0), [items])

  const addItem = useCallback((raw) => {
    const next = normalizeItem(raw)
    if (!Number.isFinite(next.id) || next.id <= 0) return

    setItems((prev) => {
      const idx = prev.findIndex((p) => p.id === next.id)
      if (idx === -1) return [...prev, next]
      const copy = [...prev]
      copy[idx] = { ...copy[idx], qty: copy[idx].qty + next.qty }
      return copy
    })
  }, [])

  const setQty = useCallback((id, qty) => {
    const q = Math.max(1, Math.floor(Number(qty)))
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, qty: q } : it)))
  }, [])

  const removeItem = useCallback((id) => {
    setItems((prev) => prev.filter((it) => it.id !== id))
  }, [])

  const clear = useCallback(() => setItems([]), [])

  const value = useMemo(
    () => ({
      items,
      totalQty,
      subtotal,
      addItem,
      setQty,
      removeItem,
      clear,
    }),
    [items, totalQty, subtotal, addItem, setQty, removeItem, clear]
  )

  return <CartStateContext.Provider value={value}>{children}</CartStateContext.Provider>
}
