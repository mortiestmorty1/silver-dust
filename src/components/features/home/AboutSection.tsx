export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Crafting Timeless Beauty
            </h2>
            <p className="text-lg text-pink-dark mb-6">
              At Silver Dust Jewelry, we believe that every piece of jewelry tells a story. 
              Our master craftsmen have been creating exquisite pieces for over three decades, 
              combining traditional techniques with modern design.
            </p>
            <p className="text-lg text-pink-dark mb-8">
              From engagement rings that symbolize eternal love to statement necklaces that 
              celebrate your unique style, each piece is carefully crafted to perfection 
              using only the finest materials and precious stones.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-pink to-pink-dark rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-foreground">30+ Years</h4>
                <p className="text-sm text-pink-dark">Experience</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-pink to-pink-dark rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-foreground">10,000+</h4>
                <p className="text-sm text-pink-dark">Happy Customers</p>
              </div>
            </div>

            <button className="bg-gradient-to-r from-pink to-pink-dark text-white px-8 py-3 rounded-lg font-semibold hover:from-pink-dark hover:to-pink transition-all duration-300">
              Learn More About Us
            </button>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-pink-light/20 to-pink/10 rounded-2xl flex items-center justify-center border border-pink/20 shadow-lg">
              <div className="text-center">
                <div className="w-32 h-32 bg-pink/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-pink/20 shadow-lg">
                  <svg className="w-16 h-16 text-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-2">Our Workshop</h3>
                <p className="text-pink-dark">Where magic happens</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
