import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useQuoteModal } from "./QuoteModal";
import { BUSINESS } from "@/config/business";

const CTASection = () => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section id="contact" className="py-20 lg:py-28 section-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <span className="text-base font-semibold text-secondary uppercase tracking-wider">Get Started</span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground">Ready to Clear the Clutter?</h2>
          <p className="text-lg text-muted-foreground">
            Call {BUSINESS.name} or request a free quote today. We'll haul it away so you don't have to.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-white font-semibold hover:opacity-90 transition-opacity"
              style={{ borderRadius: "10px" }}
            >
              <Phone className="w-5 h-5" />
              {BUSINESS.phone}
            </a>
            <button
              onClick={openQuoteModal}
              className="inline-flex items-center gap-2 px-8 py-4 font-semibold hover:opacity-90 transition-opacity bg-secondary text-secondary-foreground"
              style={{ borderRadius: "10px" }}
            >
              Get Free Quote
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
