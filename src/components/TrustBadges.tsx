import { Shield, Award, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const badges = [
  { icon: Award, label: "Many Years Of Experience" },
  { icon: Shield, label: "Fully Licensed" },
  { icon: Briefcase, label: "Fully Insured" },
];

const TrustBadges = () => (
  <section className="py-12 bg-card border-y border-border">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="flex flex-wrap justify-center gap-6 sm:gap-10 lg:gap-20">
        {badges.map((badge, i) => (
          <motion.div
            key={badge.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-3"
          >
            <badge.icon className="w-6 h-6 text-secondary" />
            <span className="text-base font-semibold text-foreground whitespace-nowrap">{badge.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBadges;
