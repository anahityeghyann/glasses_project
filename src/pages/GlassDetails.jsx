import axios from "axios"
import { useEffect, useMemo, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { FiShoppingCart } from "react-icons/fi"
import { IoMdHeartEmpty } from "react-icons/io"
import { useCart } from "../context/useCart"

const SPEC_LABELS = [
  ["color", "Color"],
  ["material", "Material"],
  ["languageSupport", "Language Support"],
  ["battery", "Battery"],
  ["compatibility", "Compatibility"],
  ["weight", "Weight"],
  ["dimensions", "Dimensions"],
]

export default function GlassDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addItem } = useCart()
  const [glass, setGlass] = useState(null)
  const [qty, setQty] = useState(1)
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    if (!id) return
    axios
      .get(`http://localhost:3000/glasses/${id}`)
      .then((res) => setGlass(res.data))
      .catch(() => setGlass(null))
  }, [id])

  const specs = useMemo(() => {
    if (!glass) return []
    return SPEC_LABELS.map(([key, label]) => ({
      key,
      label,
      value: glass[key],
    })).filter((s) => Boolean(s.value))
  }, [glass])

  const price = typeof glass?.price === "number" ? glass.price : null
  const total = price ? price * qty : null

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-8">
        <div className="flex items-center justify-between gap-4 mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-zinc-700 hover:text-black"
          >
            <span className="text-lg leading-none">←</span>
            Back
          </Link>

          <button
            type="button"
            onClick={() => setLiked((v) => !v)}
            className={[
              "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold transition",
              liked
                ? "border-orange-300 bg-orange-50 text-orange-700"
                : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300",
            ].join(" ")}
            aria-pressed={liked}
          >
            <IoMdHeartEmpty className={liked ? "text-orange-600" : "text-zinc-500"} />
            {liked ? "Saved" : "Save"}
          </button>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col lg:flex-row items-stretch gap-10">
            <div className="w-full lg:w-[560px]">
              <div className="h-[380px] rounded-3xl border border-zinc-200 bg-white shadow-sm overflow-hidden bg-zinc-100">
                {glass?.image ? (
                  <img
                    src={glass.image}
                    alt={glass?.model ?? ""}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full animate-pulse bg-gradient-to-r from-zinc-100 to-zinc-200" />
                )}
              </div>
            </div>

            <aside className="w-full lg:w-[560px] ">
              <div className="h-[380px] rounded-3xl border border-zinc-200 bg-white shadow-sm overflow-hidden flex flex-col">
                <div className="px-6 py-5 border-b border-zinc-100">
                  <p className="text-xs font-extrabold tracking-widest text-zinc-500 uppercase">
                    Price
                  </p>
                  <div className="mt-2 flex items-baseline justify-between gap-3">
                    <p className="text-2xl font-extrabold text-orange-600">
                      {price ? `$${price}` : "--"}{" "}
                      <span className="text-sm font-bold text-zinc-500">USD</span>
                    </p>
                    <p className="text-xs font-bold text-zinc-500">
                      Total:{" "}
                      <span className="text-zinc-900">
                        {total ? `$${total}` : "--"}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="px-6 py-6 space-y-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-5">
                    <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 flex items-center justify-between">
                      <button
                        type="button"
                        className="h-10 w-10 rounded-xl border border-zinc-200 bg-white text-lg font-extrabold text-zinc-700 hover:border-zinc-300"
                        onClick={() => setQty((q) => Math.max(1, q - 1))}
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <div className="text-center">
                        <p className="text-xs font-bold text-zinc-500">Quantity</p>
                        <p className="text-xl font-extrabold text-zinc-900">{qty}</p>
                      </div>
                      <button
                        type="button"
                        className="h-10 w-10 rounded-xl border border-zinc-200 bg-white text-lg font-extrabold text-orange-600 hover:border-zinc-300"
                        onClick={() => setQty((q) => q + 1)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        if (!glass) return
                        addItem({
                          id: glass.id,
                          model: glass.model,
                          price: glass.price,
                          image: glass.image,
                          qty,
                        })
                        navigate("/cart")
                      }}
                      className="w-full rounded-2xl bg-orange-600 text-white font-extrabold py-3.5 flex items-center justify-center gap-2 hover:bg-orange-700 transition"
                    >
                      Buy now <FiShoppingCart />
                    </button>
                  </div>

                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Secure checkout. Ships in 2–5 business days depending on availability.
                  </p>
                </div>
              </div>
            </aside>
          </div>

          <div>
            <p className="text-xs font-extrabold tracking-widest text-zinc-500 uppercase">
              {glass?.category ?? "Smart Glasses"}
            </p>
            <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 uppercase">
              {glass?.model ?? "Loading..."}
            </h1>
            <p className="mt-3 text-sm text-zinc-600 leading-relaxed max-w-[72ch]">
              Designed for daily wear—clean lines, lightweight materials, and intelligent features
              that stay out of your way.
            </p>
          </div>

          <div className="w-full">
            <div className="rounded-3xl border border-zinc-200 bg-white shadow-sm">
              <div className="px-6 py-5 border-b border-zinc-100 flex items-baseline justify-between gap-4">
                <h2 className="text-sm font-extrabold tracking-widest text-zinc-900 uppercase">
                  Details
                </h2>
                <span className="text-xs font-bold text-zinc-500">
                  {specs.length} specs
                </span>
              </div>

              <div className="px-6 py-6">
                {specs.length === 0 ? (
                  <p className="text-sm font-bold text-zinc-500">
                    No details found for this model.
                  </p>
                ) : (
                  <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
                    {specs.map((s) => (
                      <div
                        key={s.key}
                        className="grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-2 sm:gap-4"
                      >
                        <dt className="text-sm font-extrabold text-zinc-700">
                          {s.label}
                        </dt>
                        <dd className="text-sm text-zinc-900 leading-relaxed">
                          {s.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

