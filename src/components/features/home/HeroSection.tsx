export default function HeroSection() {
  return (
    <section className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Discover Exquisite{" "}
            <span className="gradient-text">Jewelry</span>
          </h1>
          <p className="text-xl md:text-2xl text-pink-dark mb-8 max-w-3xl mx-auto">
            Handcrafted with love and precision, our jewelry collection features timeless pieces 
            that celebrate your unique style and special moments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-pink to-pink-dark text-white px-8 py-3 rounded-lg font-semibold hover:from-pink-dark hover:to-pink transition-all duration-300 transform hover:scale-105">
              Shop Collection
            </button>
            <button className="border-2 border-pink text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-pink hover:text-white transition-all duration-300">
              View Gallery
            </button>
          </div>
        </div>

        {/* Featured Image/Video Section */}
        <div className="mt-16">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-pink/20">
            <div className="aspect-video bg-gradient-to-br from-pink-light/20 to-pink/10 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-pink/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-pink/20 shadow-lg">
                  <svg className="w-12 h-12 text-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-2">Featured Collection</h3>
                <p className="text-pink-dark">Discover our latest handcrafted pieces</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
