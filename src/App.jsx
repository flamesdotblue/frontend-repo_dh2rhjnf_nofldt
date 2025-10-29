import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-inter text-gray-900">
      <Navbar />
      <Hero />
      <ProductGrid />

      {/* About / Story Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-2xl overflow-hidden border border-black/10 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1551024709-8f23befc6cf7?q=80&w=1400&auto=format&fit=crop"
              alt="Cocoa and milk"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              From Farm to Bar
            </h2>
            <p className="mt-4 text-gray-700 leading-7">
              We believe great chocolate starts with great ingredients. Our milk is
              sourced from local farms and blended with responsibly harvested cocoa
              to create the creamiest experience possible.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
              <li className="flex items-center gap-2 bg-purple-50 border border-purple-100 rounded-md px-3 py-2">
                • Traceable ingredients
              </li>
              <li className="flex items-center gap-2 bg-purple-50 border border-purple-100 rounded-md px-3 py-2">
                • No artificial flavors
              </li>
              <li className="flex items-center gap-2 bg-purple-50 border border-purple-100 rounded-md px-3 py-2">
                • Recyclable packaging
              </li>
              <li className="flex items-center gap-2 bg-purple-50 border border-purple-100 rounded-md px-3 py-2">
                • Cold-chain delivery
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
