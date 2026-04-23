import { MapPin, Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BUSINESS } from "@/config/business";

const AboutSection = () => (
  <section id="about" className="py-20 lg:py-28">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <span className="text-base font-semibold text-secondary uppercase tracking-wider">About Us</span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground">Locally Owned. Built On Trust.</h2>
          <p className="text-muted-foreground leading-relaxed">
            {BUSINESS.name} is a professional junk removal company based in Fredericksburg, Virginia,
            specializing in efficient and reliable cleanouts for homes and businesses. Led by owner
            {" "}{BUSINESS.owner}, our team is dedicated to helping clients clear out unwanted items
            from their properties with respect and care.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Whether it's a residential cleanout, an estate, a foreclosure turnover, or commercial
            construction debris, we are equipped to handle a wide range of removal needs. We pride
            ourselves on prompt, thorough service — leaving every space clutter-free and ready for
            what's next.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Address</div>
                <div className="text-base font-semibold text-foreground">{BUSINESS.address.full}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Phone</div>
                <a href={BUSINESS.phoneHref} className="text-base font-semibold text-foreground hover:text-secondary transition-colors">
                  {BUSINESS.phone}
                </a>
              </div>
            </div>
          </div>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all mt-2"
          >
            Learn More About Us <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ height: 450 }}>
            <iframe
              src={BUSINESS.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${BUSINESS.name} location on Google Maps`}
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
