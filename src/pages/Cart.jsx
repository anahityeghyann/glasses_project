import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { useCart } from "../context/useCart"

export default function Cart() {
  const { items, subtotal, setQty, removeItem, clear } = useCart()

  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [cardNumber, setCardNumber] = useState("")
  const [expiry, setExpiry] = useState("")
  const [cvc, setCvc] = useState("")

  const tax = useMemo(() => Math.round(subtotal * 0.08 * 100) / 100, [subtotal])
  const total = useMemo(() => Math.round((subtotal + tax) * 100) / 100, [subtotal, tax])

  const onPay = (e) => {
    e.preventDefault()
    alert(`Payment submitted (demo)\nTotal: $${total.toFixed(2)}`)
    clear()
    setFullName("")
    setEmail("")
    setAddress("")
    setCardNumber("")
    setExpiry("")
    setCvc("")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-8">
        <div className="flex items-center justify-between gap-4 mb-8">
          <Link to="/" className="text-sm font-bold text-zinc-700 hover:text-black">
            ← Continue shopping
          </Link>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
          Cart
        </h1>
        <p className="mt-2 text-sm text-zinc-600">
          Review your items, then complete the payment form below.
        </p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 items-start">
          <section className="rounded-3xl border border-zinc-200 bg-white shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-zinc-100 flex items-center justify-between">
              <h2 className="text-sm font-extrabold tracking-widest text-zinc-900 uppercase">
                Items
              </h2>
              <span className="text-xs font-bold text-zinc-500">{items.length} products</span>
            </div>

            <div className="divide-y divide-zinc-100">
              {items.length === 0 ? (
                <div className="px-6 py-10 text-sm font-bold text-zinc-500">
                  Your cart is empty.{" "}
                  <Link className="text-orange-700 hover:underline" to="/">
                    Browse glasses
                  </Link>
                  .
                </div>
              ) : (
                items.map((it) => (
                  <div key={it.id} className="px-6 py-5 flex gap-4">
                    <img
                      src={it.image}
                      alt={it.model}
                      className="h-20 w-20 rounded-2xl object-cover border border-zinc-200"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <p className="text-sm font-extrabold text-zinc-900 truncate">{it.model}</p>
                          <p className="mt-1 text-xs font-bold text-zinc-500">
                            ${it.price.toFixed(2)} each
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(it.id)}
                          className="text-xs font-extrabold text-zinc-500 hover:text-black"
                        >
                          Remove
                        </button>
                      </div>

                      <div className="mt-4 flex items-center justify-between gap-3">
                        <div className="inline-flex items-center rounded-xl border border-zinc-200 bg-zinc-50">
                          <button
                            type="button"
                            className="px-3 py-2 text-sm font-extrabold text-zinc-700"
                            onClick={() => setQty(it.id, it.qty - 1)}
                          >
                            −
                          </button>
                          <span className="px-4 py-2 text-sm font-extrabold text-zinc-900">{it.qty}</span>
                          <button
                            type="button"
                            className="px-3 py-2 text-sm font-extrabold text-orange-600"
                            onClick={() => setQty(it.id, it.qty + 1)}
                          >
                            +
                          </button>
                        </div>
                        <p className="text-sm font-extrabold text-zinc-900">
                          ${(it.price * it.qty).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>

          <aside className="rounded-3xl border border-zinc-200 bg-white shadow-sm overflow-hidden lg:sticky lg:top-8">
            <div className="px-6 py-5 border-b border-zinc-100">
              <h2 className="text-sm font-extrabold tracking-widest text-zinc-900 uppercase">
                Payment
              </h2>
              <p className="mt-2 text-xs font-bold text-zinc-500">
                Demo form only — no real charges are processed.
              </p>
            </div>

            <form className="px-6 py-6 space-y-4" onSubmit={onPay}>
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-4 space-y-2">
                <div className="flex items-baseline justify-between">
                  <p className="text-xs font-bold text-zinc-500">Subtotal</p>
                  <p className="text-sm font-extrabold text-zinc-900">${subtotal.toFixed(2)}</p>
                </div>
                <div className="flex items-baseline justify-between">
                  <p className="text-xs font-bold text-zinc-500">Tax (8%)</p>
                  <p className="text-sm font-extrabold text-zinc-900">${tax.toFixed(2)}</p>
                </div>
                <div className="pt-2 border-t border-zinc-200 flex items-baseline justify-between">
                  <p className="text-xs font-extrabold text-zinc-700 uppercase tracking-widest">Total</p>
                  <p className="text-lg font-extrabold text-orange-600">${total.toFixed(2)}</p>
                </div>
              </div>

              <label className="block">
                <span className="text-xs font-extrabold text-zinc-700">Full name</span>
                <input
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm font-bold text-zinc-900 outline-none focus:border-orange-400"
                  placeholder="Jane Doe"
                />
              </label>

              <label className="block">
                <span className="text-xs font-extrabold text-zinc-700">Email</span>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm font-bold text-zinc-900 outline-none focus:border-orange-400"
                  placeholder="jane@email.com"
                />
              </label>

              <label className="block">
                <span className="text-xs font-extrabold text-zinc-700">Shipping address</span>
                <textarea
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="mt-2 min-h-[90px] w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm font-bold text-zinc-900 outline-none focus:border-orange-400"
                  placeholder="123 Main St, City"
                />
              </label>

              <label className="block">
                <span className="text-xs font-extrabold text-zinc-700">Card number</span>
                <input
                  required
                  inputMode="numeric"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm font-bold text-zinc-900 outline-none focus:border-orange-400"
                  placeholder="4242 4242 4242 4242"
                />
              </label>

              <div className="grid grid-cols-2 gap-3">
                <label className="block">
                  <span className="text-xs font-extrabold text-zinc-700">Expiry</span>
                  <input
                    required
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm font-bold text-zinc-900 outline-none focus:border-orange-400"
                    placeholder="MM/YY"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-extrabold text-zinc-700">CVC</span>
                  <input
                    required
                    inputMode="numeric"
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm font-bold text-zinc-900 outline-none focus:border-orange-400"
                    placeholder="123"
                  />
                </label>
              </div>

              <button
                type="submit"
                disabled={items.length === 0}
                className="w-full rounded-2xl bg-orange-600 text-white font-extrabold py-3.5 hover:bg-orange-700 transition disabled:opacity-40 disabled:hover:bg-orange-600"
              >
                Pay ${total.toFixed(2)}
              </button>
            </form>
          </aside>
        </div>
      </div>
    </div>
  )
}
