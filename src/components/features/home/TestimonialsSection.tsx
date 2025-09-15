export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Bride",
      content: "My engagement ring from Silver Dust is absolutely stunning. The craftsmanship is impeccable and the attention to detail is remarkable. I receive compliments every day!",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Customer",
      content: "I've been buying jewelry from Silver Dust for years. Their quality is consistently excellent and their customer service is outstanding. Highly recommended!",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Customer",
      content: "The necklace I purchased for my anniversary is beautiful. The design is timeless and the quality is exceptional. Thank you for creating such wonderful pieces!",
      rating: 5
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-pink-dark max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued customers have to say about their Silver Dust experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="glass-effect p-8 rounded-xl border border-pink/15 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-pink" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-pink-dark mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-pink to-pink-dark rounded-full flex items-center justify-center mr-4 border border-pink/20 shadow-md">
                  <span className="text-white font-semibold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-pink-dark">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
