import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Best smoothies in Texas City! The protein shakes taste amazing and actually help with my fitness goals. Love the friendly staff!",
    date: "2024-11",
    source: "Google",
  },
  {
    name: "Marcus T.",
    rating: 5,
    text: "Finally a healthy option that doesn't taste like cardboard. The loaded teas give me the energy I need without the crash. Highly recommend!",
    date: "2024-10",
    source: "Facebook",
  },
  {
    name: "Jennifer L.",
    rating: 5,
    text: "The owners are so welcoming and the atmosphere is great. My kids love the protein waffles and I love that they're actually nutritious!",
    date: "2024-09",
    source: "Yelp",
  },
  {
    name: "David R.",
    rating: 5,
    text: "Been coming here every morning before work. The staff remembers my order and it's always ready fast. Best meal prep decision I've made.",
    date: "2024-11",
    source: "Google",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-medium text-sm tracking-wider uppercase mb-3">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
            What Our <span className="text-primary">Community</span> Says
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real reviews from real customers who fuel their days with us
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20 group-hover:text-primary/40 transition-colors" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-foreground/90 leading-relaxed mb-6 text-base">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">
                    via {review.source}
                  </p>
                </div>
                <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">
                  {review.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Love our smoothies? Share your experience!
          </p>
          <a
            href="https://g.page/r/thenutritionhangout/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Leave a Review
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
