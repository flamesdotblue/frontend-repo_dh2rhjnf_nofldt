import { Star, CheckCircle, Truck } from "lucide-react";

const products = [
  {
    name: "Classic Dairy Milk",
    desc: "Creamy milk chocolate with a timeless taste.",
    price: "$3.99",
    tag: "Best Seller",
    img:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476f?q=80&w=1400&auto=format&fit=crop",
  },
  {
    name: "Almond Crunch",
    desc: "Roasted almonds folded into silky chocolate.",
    price: "$4.49",
    tag: "Crunchy",
    img:
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1400&auto=format&fit=crop",
  },
  {
    name: "Dark 70%",
    desc: "Intense cocoa with balanced sweetness.",
    price: "$4.99",
    tag: "New",
    img:
      "https://images.unsplash.com/photo-1486428263320-95a007b6aa24?q=80&w=1400&auto=format&fit=crop",
  },
];

export default function ProductGrid() {
  return (
    <section id="products" className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Featured Products
            </h2>
            <p className="mt-2 text-gray-700 max-w-2xl">
              Small-batch, ethically sourced cocoa blended with premium milk for a
              melt-in-your-mouth experience.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-600"/> 100% Quality</div>
            <div className="flex items-center gap-2"><Truck className="h-4 w-4 text-purple-600"/> Fast Delivery</div>
            <div className="flex items-center gap-2"><Star className="h-4 w-4 text-yellow-500"/> 4.9/5 Rated</div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <article key={p.name} className="group rounded-2xl overflow-hidden border border-black/10 bg-white shadow-sm hover:shadow-md transition">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  className="h-full w-full object-cover group-hover:scale-[1.03] transition"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 text-xs font-semibold bg-white/90 backdrop-blur px-2 py-1 rounded">
                  {p.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg">{p.name}</h3>
                <p className="mt-1 text-gray-600 text-sm">{p.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-bold text-purple-700">{p.price}</span>
                  <button className="px-3 py-2 text-sm rounded-md bg-purple-600 text-white hover:bg-purple-700">
                    Add to cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <BenefitCard title="Farm-fresh Milk" desc="Sourced from local farms for richer flavor." />
          <BenefitCard title="Eco-friendly" desc="Sustainable packaging and fair trade cocoa." />
          <BenefitCard title="Cold Delivered" desc="Insulated packaging ensures perfect texture." />
        </div>
      </div>
    </section>
  );
}

function BenefitCard({ title, desc }) {
  return (
    <div className="rounded-2xl p-6 bg-white border border-black/10 shadow-sm">
      <h4 className="font-semibold">{title}</h4>
      <p className="mt-1 text-sm text-gray-600">{desc}</p>
    </div>
  );
}
