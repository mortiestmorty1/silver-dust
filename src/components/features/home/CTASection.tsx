export default function CTASection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-effect rounded-2xl p-12 text-center border border-pink/20 shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Find Your Perfect Piece?
          </h2>
          <p className="text-lg text-pink-dark mb-8 max-w-2xl mx-auto">
            Visit our showroom or browse our online collection. Our jewelry experts are here to help you find the perfect piece for any occasion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-pink to-pink-dark text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-pink-dark hover:to-pink transition-all duration-300 transform hover:scale-105">
              Visit Our Showroom
            </button>
            <button className="border-2 border-pink text-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-pink hover:text-white transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
