import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BUSINESS } from "@/config/business";

const faqs = [
  {
    q: "How quickly can you come pick up my junk?",
    a: `We offer same-day and next-day junk removal across ${BUSINESS.region} whenever possible. Call us or submit a quote request and we'll schedule a pickup at a time that works for you.`,
  },
  {
    q: "How is pricing determined?",
    a: "We price based on the volume of space your items take up in our truck — not by weight or item count. We give an upfront quote before we start so there are never any surprises. No hidden fees, no hourly charges.",
  },
  {
    q: "What items do you accept?",
    a: "We haul just about anything — furniture, appliances, electronics, mattresses, yard waste, construction debris, and general household clutter. We can't take hazardous materials like paint, chemicals, or certain batteries.",
  },
  {
    q: "Do I need to be home during the pickup?",
    a: "It's helpful if you're there to point out what needs to go, but it isn't required. If items are accessible (driveway, garage, curb), we can handle the pickup while you're away — just let us know in advance.",
  },
  {
    q: "Do you recycle or donate items?",
    a: "Absolutely. We donate usable items to local charities whenever possible and recycle materials like metal, wood, and electronics so we keep as much as possible out of landfills.",
  },
  {
    q: "Are you licensed and insured?",
    a: `Yes — ${BUSINESS.name} is fully licensed and fully insured. Your property is protected on every job, and our crew is trained, professional, and respectful of your home or business.`,
  },
];

const FAQSection = () => (
  <section className="py-20 lg:py-28 bg-foreground">
    <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-base font-semibold text-secondary uppercase tracking-wider">Still Not Sure?</span>
        <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white mt-3">Frequently Asked Questions</h2>
        <p className="text-white/70 mt-4">What else would you like to know?</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-white/5 border border-white/10 rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left font-heading font-semibold text-white py-5 hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-white/75 leading-relaxed pb-5">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
