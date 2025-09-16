export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Diamond Solitaire Ring",
      price: "$1,299",
      image: "/images/products/ring-1.jpg",
      category: "Rings"
    },
    {
      id: 2,
      name: "Pearl Drop Earrings",
      price: "$599",
      image: "/images/products/earrings-1.jpg",
      category: "Earrings"
    },
    {
      id: 3,
      name: "Gold Chain Necklace",
      price: "$899",
      image: "/images/products/necklace-1.jpg",
      category: "Necklaces"
    },
    {
      id: 4,
      name: "Emerald Bracelet",
      price: "$1,199",
      image: "/images/products/bracelet-1.jpg",
      category: "Bracelets"
    }
  ];

  return (
    <section id="collections" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Collections
          </h2>
          <p className="text-lg text-pink-dark max-w-2xl mx-auto">
            Discover our most popular jewelry pieces, each crafted with exceptional attention to detail and quality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="glass-effect p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300 group border border-pink/15 shadow-lg hover:shadow-xl">
              <div className="aspect-square bg-white rounded-lg flex items-center justify-center mb-4 group-hover:bg-gray-50 transition-all duration-300 border border-gray-200 shadow-md">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center border border-gray-200 shadow-sm">
                  <svg className="w-8 h-8 text-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </div>
              </div>
              <div className="text-center">
                <span className="text-sm text-pink-dark font-medium">{product.category}</span>
                <h3 className="text-lg font-semibold text-foreground mb-2 mt-1">{product.name}</h3>
                <p className="text-xl font-bold text-pink mb-4">{product.price}</p>
                <button className="w-full bg-gradient-to-r from-pink to-pink-dark text-white py-2 px-4 rounded-lg font-medium hover:from-pink-dark hover:to-pink transition-all duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-pink text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-pink hover:text-white transition-all duration-300">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}
