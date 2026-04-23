import { useState } from "react";
import { Phone, Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useQuoteModal } from "./QuoteModal";
import { BUSINESS, SERVICES } from "@/config/business";
import logo from "@/assets/cvhjr-logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    children: SERVICES.map((s) => ({ label: s.title, href: `/services/${s.slug}` })),
  },
  {
    label: "Service Areas",
    children: BUSINESS.serviceAreas.map((a) => ({ label: a.name, href: `/service-areas/${a.slug}` })),
  },
  {
    label: "Contact",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Get In Contact", href: "/contact" },
      { label: "Blog", href: "/blog" },
    ],
  },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const { openQuoteModal } = useQuoteModal();

  return (
    <header id="main-navbar" className="absolute top-0 left-0 right-0 z-50 max-w-[100vw]">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8 max-w-[100vw]">
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0 mr-2 lg:mr-4">
          <img
            src={logo}
            alt={`${BUSINESS.name} Logo`}
            className="w-16 h-auto lg:w-auto lg:h-[150px] lg:max-h-none lg:max-w-none"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-base font-medium text-white hover:text-white/80 transition-colors rounded-lg">
                  {link.label}
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <AnimatePresence>
                  {openDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 z-50 rounded-xl shadow-lg border border-white/10 py-2 min-w-[260px] max-h-[70vh] overflow-y-auto"
                      style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-4 py-2.5 text-base text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className="px-4 py-2 text-base font-medium text-white hover:text-white/80 transition-colors rounded-lg"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA - always visible */}
        <div className="flex items-center flex-1 lg:flex-none min-w-0">
          <div className="flex items-center justify-center gap-3 flex-1 lg:flex-none lg:justify-end">
            <a
              id="nav-phone-btn"
              href={BUSINESS.phoneHref}
              className="flex items-center gap-1 sm:gap-1.5 lg:gap-2 px-2 sm:px-3 lg:px-6 py-2.5 sm:py-2.5 lg:py-3 text-xs sm:text-sm lg:text-base font-semibold text-secondary border border-secondary hover:bg-secondary/10 transition-colors whitespace-nowrap"
              style={{ borderRadius: "10px" }}
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 shrink-0" />
              {BUSINESS.phone}
            </a>
            <button
              id="nav-quote-btn"
              onClick={openQuoteModal}
              className="px-2 sm:px-3 lg:px-6 py-2.5 sm:py-2.5 lg:py-3 text-xs sm:text-sm lg:text-base font-semibold hover:opacity-90 transition-opacity whitespace-nowrap bg-secondary text-secondary-foreground"
              style={{ borderRadius: "10px" }}
            >
              Get Free Quote
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white ml-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-t border-white/10"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.92)" }}
          >
            <div className="px-4 py-6 space-y-4 max-h-[80vh] overflow-y-auto">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <button
                      onClick={() => setMobileDropdown(mobileDropdown === link.label ? null : link.label)}
                      className="flex items-center justify-between w-full py-2 text-base font-medium text-white"
                    >
                      {link.label}
                      {mobileDropdown === link.label ? (
                        <ChevronUp className="w-4 h-4 text-white/50" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-white/50" />
                      )}
                    </button>
                    <AnimatePresence>
                      {mobileDropdown === link.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.label}
                              to={child.href}
                              onClick={() => { setMobileOpen(false); setMobileDropdown(null); }}
                              className="block pl-4 py-2 text-base text-white/70 hover:text-white transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-base font-medium text-white"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
