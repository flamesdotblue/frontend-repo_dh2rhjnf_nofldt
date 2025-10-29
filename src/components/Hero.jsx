import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* 3D Cover Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/MscgRj2doJR2RRa2/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Soft gradient overlay for readability (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-600/10 text-purple-700 text-sm font-medium">
            New • Playful 3D Experience
          </div>
          <h1 className="mt-5 text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
            Pure Dairy Bliss, Crafted For Joy
          </h1>
          <p className="mt-5 text-lg md:text-xl text-gray-700">
            Indulge in silky-smooth dairy chocolate with ethically sourced ingredients. Fresh taste, creamy texture, unforgettable moments.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#products"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-purple-600 text-white font-semibold shadow hover:bg-purple-700"
            >
              Explore Products
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white/80 backdrop-blur border border-black/10 text-gray-900 font-semibold hover:bg-white"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
