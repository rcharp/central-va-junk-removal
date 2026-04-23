import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { BUSINESS, SERVICES } from "@/config/business";
import logo from "@/assets/cvhjr-logo.png";

const Footer = () => (
  <footer className="bg-foreground text-card py-16">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
        {/* Brand */}
        <div className="space-y-4">
          <img src={logo} alt={`${BUSINESS.name} Logo`} className="w-auto" style={{ height: "180px" }} />
          <p className="text-sm opacity-60">
            Professional junk removal & cleanouts serving {BUSINESS.region}.
          </p>
        </div>

        {/* Business */}
        <div>
          <h4 className="font-heading font-semibold text-base uppercase tracking-wider mb-4 opacity-60">Business</h4>
          <nav className="space-y-3">
            <Link to="/" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Home</Link>
            <Link to="/about" className="block text-base opacity-80 hover:opacity-100 transition-opacity">About Us</Link>
            <Link to="/contact" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Contact</Link>
            <Link to="/gallery" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Gallery</Link>
            <Link to="/blog" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Blog</Link>
            <Link to="/quote" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Get a Quote</Link>
            <Link to="/review" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Leave a Review</Link>
          </nav>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading font-semibold text-base uppercase tracking-wider mb-4 opacity-60">Services</h4>
          <nav className="space-y-3">
            {SERVICES.slice(0, 8).map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`} className="block text-base opacity-80 hover:opacity-100 transition-opacity">
                {s.title}
              </Link>
            ))}
          </nav>
        </div>

        {/* Service Areas */}
        <div>
          <h4 className="font-heading font-semibold text-base uppercase tracking-wider mb-4 opacity-60">Service Areas</h4>
          <nav className="space-y-3">
            {BUSINESS.serviceAreas.map((a) => (
              <Link key={a.slug} to={`/service-areas/${a.slug}`} className="block text-base opacity-80 hover:opacity-100 transition-opacity">
                {a.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h4 className="font-heading font-semibold text-base uppercase tracking-wider mb-4 opacity-60">Contact</h4>
          <div className="flex items-start gap-3">
            <Phone className="w-4 h-4 mt-0.5 opacity-60" />
            <a href={BUSINESS.phoneHref} className="text-base opacity-80 hover:opacity-100 transition-opacity">{BUSINESS.phone}</a>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="w-4 h-4 mt-0.5 opacity-60" />
            <a href={`mailto:${BUSINESS.email}`} className="text-base opacity-80 hover:opacity-100 transition-opacity break-all">{BUSINESS.email}</a>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 mt-0.5 opacity-60" />
            <span className="text-base opacity-80">{BUSINESS.address.full}</span>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="w-4 h-4 mt-0.5 opacity-60" />
            <span className="text-base opacity-80">{BUSINESS.hours}</span>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-card/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-base opacity-60">
          © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
        </p>
        <p className="text-sm opacity-50">Owner: {BUSINESS.owner}</p>
      </div>
    </div>
  </footer>
);

export default Footer;
