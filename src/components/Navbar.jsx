import { ShoppingCart, Leaf, Phone } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/60 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-purple-100 grid place-items-center">
            <Leaf className="h-5 w-5 text-purple-700" />
          </div>
          <span className="font-extrabold tracking-tight text-xl">DairyMilk</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#products" className="hover:text-purple-700 transition">Products</a>
          <a href="#benefits" className="hover:text-purple-700 transition">Benefits</a>
          <a href="#about" className="hover:text-purple-700 transition">About</a>
          <a href="#contact" className="hover:text-purple-700 transition flex items-center gap-1">
            <Phone className="h-4 w-4" /> Contact
          </a>
        </nav>
        <button className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md shadow">
          <ShoppingCart className="h-4 w-4" /> Shop Now
        </button>
      </div>
    </header>
  );
}
