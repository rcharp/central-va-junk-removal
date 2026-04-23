import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SERVICES } from "@/config/business";

const featureMap: Record<string, string[]> = {
  "commercial-clean-outs": [
    "Office furniture & equipment removal",
    "Retail & warehouse cleanouts",
    "Bulk item disposal",
    "Scheduled or one-time service",
  ],
  "residential-clean-outs": [
    "Whole-home, garage & basement cleanouts",
    "Old furniture & junk hauled out",
    "Same-day pickup available",
    "Eco-friendly disposal & donation",
  ],
  "estate-clean-outs": [
    "Compassionate, full-property service",
    "Sort, donate, recycle, and dispose",
    "Coordinated with family or executor",
    "Discreet and respectful crew",
  ],
  "foreclosure-clean-outs": [
    "Bank-ready property turnover",
    "Interior, garage & yard cleanouts",
    "Quick turnaround for lenders",
    "Documented before/after",
  ],
  "property-manager-clean-outs": [
    "Fast unit turnovers",
    "Volume pricing for managers",
    "Trusted, on-time crew",
    "Single point of contact",
  ],
  "realtor-clean-outs": [
    "Show-ready listings, fast",
    "Bulk furniture & junk removal",
    "Yard debris & garage cleanout",
    "Flexible scheduling",
  ],
  "eviction-clean-outs": [
    "Discreet, full-property cleanout",
    "Donation & disposal",
    "Photo documentation available",
    "Quick, professional turnaround",
  ],
  "construction-cleanup": [
    "Lumber, drywall & concrete hauling",
    "Renovation & remodel debris",
    "Job-site cleanup for contractors",
    "Responsible disposal & recycling",
  ],
  "furniture-removal": [
    "Couches, beds, dressers & desks",
    "Office furniture removal",
    "We do all the heavy lifting",
    "Donation when possible",
  ],
  "mattress-removal": [
    "Mattresses & box springs",
    "Single items or full sets",
    "Recycled when possible",
    "Quick, easy pickup",
  ],
  "appliance-removal": [
    "Fridges, washers, dryers & ovens",
    "Water heaters & A/C units",
    "Safe, responsible disposal",
    "We handle disconnect/haul",
  ],
  "trash-removal": [
    "One-time bulk trash removal",
    "Recurring service available",
    "Property cleanouts",
    "Same-week pickup",
  ],
};

const ServicesSection = () => (
  <section id="services" className="py-20 lg:py-28">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-base font-semibold text-secondary uppercase tracking-wider">What We Do</span>
        <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mt-3">
          Junk Removal Services You Can Count On
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          From single-item pickups to full property cleanouts, we handle it all with speed and care.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service, i) => (
          <motion.div
            key={service.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 6) * 0.08 }}
            className="rounded-2xl overflow-hidden card-elevated border border-secondary/30 group bg-foreground"
          >
            <div className="p-7">
              <h3 className="font-heading text-xl font-bold text-white mb-4">{service.title}</h3>
              <ul className="space-y-2.5 mb-5">
                {(featureMap[service.slug] ?? []).slice(0, 3).map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-white/80">
                    <Check className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to={`/services/${service.slug}`}
                className="inline-flex items-center gap-2 text-base font-semibold text-secondary hover:gap-3 transition-all"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export { featureMap };
export default ServicesSection;
