import { Star } from "lucide-react";
import { motion } from "framer-motion";
import QuoteForm from "./QuoteForm";
import { BUSINESS } from "@/config/business";
import heroBg from "@/assets/stock/hero-truck.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden max-w-[100vw]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="container mx-auto px-4 lg:px-8 pt-[200px] sm:pt-[260px] lg:pt-[240px] lg:mt-8 pb-16 lg:pb-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-8 lg:pt-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight text-primary-foreground text-center lg:text-left">
                <span className="relative z-10">Your Junk,</span>
                <br />
                <span id="hero-highlighted" className="relative z-0 text-white bg-secondary px-[8px]">
                  Hauled Today.
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-white/80 max-w-lg leading-relaxed break-words"
            >
              From single-item pickups to full residential, commercial, and estate cleanouts —
              we handle the heavy lifting so you don't have to. Fully licensed, fully insured,
              and trusted across {BUSINESS.region}.
              <br />
              <br />
              <strong>{BUSINESS.name}</strong>, led by owner {BUSINESS.owner}, delivers prompt,
              thorough junk removal throughout Fredericksburg, Spotsylvania, and Stafford County, VA.
            </motion.p>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center gap-3"
            >
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <span className="text-base text-white/80">
                  Trusted by homeowners & businesses across Central Virginia
                </span>
              </div>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <span className="text-sm font-semibold text-white/90 uppercase tracking-wide px-3 py-1.5 rounded-md border border-white/20">
                Fully Licensed
              </span>
              <span className="text-sm font-semibold text-white/90 uppercase tracking-wide px-3 py-1.5 rounded-md border border-white/20">
                Fully Insured
              </span>
              <span className="text-sm font-semibold text-white/90 uppercase tracking-wide px-3 py-1.5 rounded-md border border-white/20">
                Years Of Experience
              </span>
            </motion.div>
          </div>

          {/* Right - Quote Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            id="quote-form"
            className="w-full lg:w-[520px] lg:ml-auto"
          >
            <QuoteForm
              id="hero-quote-form"
              style={{ backgroundColor: "rgba(11, 18, 32, 0.85)", border: "2px solid hsl(215, 95%, 50%)" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
