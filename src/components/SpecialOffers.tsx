import { Percent, CreditCard, Search, DollarSign } from "lucide-react";
import { motion } from "framer-motion";
import { useQuoteModal } from "./QuoteModal";
import offersBg from "@/assets/stock/offers-bg.jpg";

const offers = [
  {
    icon: Percent,
    title: "Free, No-Pressure Quotes",
    description: "We'll come to you and give an upfront, no-obligation quote — no hidden fees, ever.",
  },
  {
    icon: CreditCard,
    title: "Volume-Based Pricing",
    description: "Pay only for the space your junk takes up in our truck. Honest pricing, every time.",
  },
  {
    icon: Search,
    title: "Same-Day Pickup Available",
    description: "Need it gone today? Call us — we offer same-day and next-day junk removal across Central VA.",
  },
  {
    icon: DollarSign,
    title: "Money-Saving Discounts",
    description: "Save $50 off any job — or stack the savings with $100 off full truckloads. Mention this offer when you book.",
  },
];

const SpecialOffers = () => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${offersBg})` }} />
      <div className="absolute inset-0 bg-black/70" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-base font-semibold text-secondary uppercase tracking-wider">Why Choose Us</span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white mt-3">Special Offers & Benefits</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {offers.map((offer, i) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
              onClick={openQuoteModal}
              className="rounded-2xl p-8 card-elevated border border-secondary/40 text-center backdrop-blur-sm cursor-pointer transition-shadow hover:shadow-xl"
              style={{ backgroundColor: "rgba(11, 18, 32, 0.85)" }}
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center mx-auto mb-6">
                <offer.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-white mb-3">{offer.title}</h3>
              <p className="text-base text-white/75 leading-relaxed">{offer.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
