import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import useSEO from "@/hooks/useSEO";
import { BUSINESS } from "@/config/business";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactPage = () => {
  useSEO({
    title: `Contact ${BUSINESS.name} | Fredericksburg, VA`,
    description: `Get in touch with ${BUSINESS.name}. Call ${BUSINESS.phone} or email ${BUSINESS.email}.`,
    canonical: "https://centralvahauling.com/contact",
  });
  return (
    <PageShell>
      <PageHero eyebrow="Contact" title="Get in Touch" subtitle="We answer fast — usually within the hour during business hours." />
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-start gap-3"><Phone className="w-5 h-5 mt-1 text-secondary" /><div><div className="text-sm text-muted-foreground">Phone</div><a href={BUSINESS.phoneHref} className="text-lg font-semibold">{BUSINESS.phone}</a></div></div>
            <div className="flex items-start gap-3"><Mail className="w-5 h-5 mt-1 text-secondary" /><div><div className="text-sm text-muted-foreground">Email</div><a href={`mailto:${BUSINESS.email}`} className="text-lg font-semibold break-all">{BUSINESS.email}</a></div></div>
            <div className="flex items-start gap-3"><MapPin className="w-5 h-5 mt-1 text-secondary" /><div><div className="text-sm text-muted-foreground">Address</div><div className="text-lg font-semibold">{BUSINESS.address.full}</div></div></div>
            <div className="flex items-start gap-3"><Clock className="w-5 h-5 mt-1 text-secondary" /><div><div className="text-sm text-muted-foreground">Hours</div><div className="text-lg font-semibold">{BUSINESS.hours}</div></div></div>
            <div className="rounded-2xl overflow-hidden mt-6" style={{ height: 360 }}>
              <iframe src={BUSINESS.mapEmbed} width="100%" height="100%" style={{ border: 0 }} loading="lazy" title="Map" />
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>
    </PageShell>
  );
};
export default ContactPage;
