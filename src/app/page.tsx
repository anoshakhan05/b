export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-secondary z-0">
          {/* Placeholder for 3D Scene */}
          <div className="w-full h-full flex items-center justify-center opacity-20">
            <span className="text-9xl font-bold uppercase text-white/5">Cinematic Hero</span>
          </div>
        </div>

        <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white animate-fade-in">
            AVANT GARDE
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto tracking-wide animate-slide-up">
            Redefining the silhouette of modern luxury.
          </p>
          <div className="pt-8 animate-slide-up">
            <a href="/shop" className="bg-accent-red text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-primary transition-all duration-300">
              Explore Collection
            </a>
          </div>
        </div>
      </section>

      {/* Featured Collection Preview */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 tracking-tighter">NEW ARRIVALS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-[3/4] bg-secondary relative group overflow-hidden cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center text-gray-700">
                  Product {i}
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white uppercase tracking-widest text-sm font-bold">View</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
