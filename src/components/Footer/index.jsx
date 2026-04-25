import { Link } from "react-router-dom"

const nav = [
  { label: "Products", to: "/#products" },
  { label: "About", to: "/#about" },
  { label: "Events", to: "/#events" },
  { label: "Upcoming", to: "/#upcoming" },
  { label: "Contact", to: "/#contact" },
]

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-[rgb(31,31,31)] text-zinc-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <p className="text-xs font-extrabold tracking-[0.25em] text-orange-400 uppercase">
              Vision Lab
            </p>
            <p className="mt-4 text-sm text-zinc-400 leading-relaxed max-w-md">
              Smart eyewear built for clarity, comfort, and everyday style—designed to feel as natural as your favorite frames.
            </p>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs font-extrabold tracking-widest text-zinc-500 uppercase">
              Explore
            </p>
            <ul className="mt-4 space-y-3">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm font-bold text-zinc-200 hover:text-white transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/cart" className="text-sm font-bold text-zinc-200 hover:text-white transition">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-extrabold tracking-widest text-zinc-500 uppercase">
              Legal
            </p>
            <ul className="mt-4 space-y-3 text-sm font-bold text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-zinc-800 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-bold text-zinc-500">
            © {new Date().getFullYear()} Vision Lab. All rights reserved.
          </p>
          <p className="text-xs font-bold text-zinc-600">
            Crafted for the future of wearable tech.
          </p>
        </div>
      </div>
    </footer>
  )
}
