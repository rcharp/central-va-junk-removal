import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import residential from "@/assets/stock/service-residential.jpg";
import commercial from "@/assets/stock/service-commercial.jpg";
import construction from "@/assets/stock/service-construction.jpg";
import furniture from "@/assets/stock/service-furniture.jpg";
import appliance from "@/assets/stock/service-appliance.jpg";
import mattress from "@/assets/stock/service-mattress.jpg";
import trash from "@/assets/stock/service-trash.jpg";
import estate from "@/assets/stock/service-estate.jpg";
import realtor from "@/assets/stock/service-realtor.jpg";

const galleryItems = [
  { src: residential, label: "Residential Cleanout" },
  { src: commercial, label: "Commercial Cleanout" },
  { src: construction, label: "Construction Debris Hauled" },
  { src: furniture, label: "Furniture Removal" },
  { src: appliance, label: "Appliance Removal" },
  { src: mattress, label: "Mattress Removal" },
  { src: trash, label: "Trash & Bulk Removal" },
  { src: estate, label: "Estate Cleanout" },
  { src: realtor, label: "Realtor Turnover" },
];

const GallerySection = () => (
  <section className="py-20 lg:py-28 section-gradient">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-base font-semibold text-secondary uppercase tracking-wider">Our Work</span>
        <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mt-3">See Us In Action</h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {galleryItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="rounded-xl overflow-hidden aspect-square relative group border border-border"
          >
            <img
              src={item.src}
              alt={item.label}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end">
              <span className="text-white font-semibold text-sm p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                {item.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center mt-12"
      >
        <Link to="/gallery">
          <Button variant="secondary" size="lg" className="group text-lg px-10 py-6 h-auto">
            View Full Gallery
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </motion.div>
    </div>
  </section>
);

export default GallerySection;
