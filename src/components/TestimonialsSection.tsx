import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useCallback, useEffect } from "react";
import { BUSINESS } from "@/config/business";
import logo from "@/assets/cvhjr-logo.png";

const testimonials = [
  {
    text: "Jeff's crew showed up on time, cleared out our entire garage in under two hours, and left it spotless. Best junk removal experience we've had in Fredericksburg.",
    name: "Sarah M.",
    rating: 5,
  },
  {
    text: "We had a full estate cleanout to handle and didn't know where to start. Central VA Hauling was respectful, thorough, and incredibly fair on price. Highly recommend.",
    name: "James R.",
    rating: 5,
  },
  {
    text: "After our kitchen renovation we had drywall, cabinets, and old appliances piled up. They came the next morning and hauled it all away. Super professional.",
    name: "Patricia K.",
    rating: 5,
  },
  {
    text: "Called on a Saturday morning for an old hot tub and a few appliances. They were at the house by noon and gone within an hour. Friendly, fast, and fair.",
    name: "Robert P.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="py-20 lg:py-28 section-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-base font-semibold text-secondary uppercase tracking-wider">Testimonials</span>
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-foreground mt-3 max-w-4xl mx-auto">
            Customers across {BUSINESS.region} trust {BUSINESS.name}
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-4 h-4 fill-secondary text-secondary" />
              ))}
            </div>
            <span className="text-base text-muted-foreground font-medium">5.0 Rating</span>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto relative flex items-start gap-8">
          {/* Logo */}
          <div className="hidden lg:flex shrink-0 items-center justify-center">
            <img src={logo} alt={`${BUSINESS.name} Logo`} className="w-auto rounded-xl" style={{ height: "260px" }} />
          </div>

          <div className="flex-1 relative">
            <div className="overflow-hidden">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-card rounded-2xl p-10 card-elevated border border-border relative"
              >
                <Quote className="w-10 h-10 text-secondary/15 absolute top-8 right-8" />
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: testimonials[current].rating }).map((_, s) => (
                    <Star key={s} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-foreground text-lg leading-relaxed mb-8">"{testimonials[current].text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-secondary/15 flex items-center justify-center font-heading font-bold text-secondary text-base">
                    {testimonials[current].name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-foreground">{testimonials[current].name}</div>
                    <div className="text-sm text-muted-foreground">Verified Customer</div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="flex items-center justify-between mt-8">
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-foreground" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-foreground" />
                </button>
              </div>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-secondary" : "bg-border"}`}
                  />
                ))}
              </div>

              <a href="/review" className="text-base font-semibold text-secondary hover:underline">
                Leave a Review →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
