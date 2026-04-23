import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { BUSINESS } from "@/config/business";

const WEBHOOK_URL = BUSINESS.webhooks.quote;

interface QuoteFormProps {
  showHeader?: boolean;
  compact?: boolean;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
}

const QuoteForm = ({ showHeader = true, compact = false, className = "", style, id }: QuoteFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    helpWith: "",
    consentMarketing: false,
    consentNonMarketing: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.helpWith.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    if (formData.phone.length < 10) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }
    if (!formData.consentMarketing || !formData.consentNonMarketing) {
      toast.error("Please accept both consent checkboxes.");
      return;
    }

    setIsSubmitting(true);

    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: formData.fullName.trim(),
          phone: formData.phone.trim(),
          help_with: formData.helpWith.trim(),
          consent_marketing: formData.consentMarketing,
          consent_non_marketing: formData.consentNonMarketing,
          source: "website-quote-form",
          business: BUSINESS.name,
        }),
      });

      setIsSubmitted(true);
    } catch {
      toast.error("Something went wrong. Please try again or call us.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div
        className={`rounded-2xl ${compact ? "p-5" : "p-8"} shadow-2xl flex flex-col items-center justify-center text-center ${
          compact ? "min-h-[300px]" : "min-h-[400px]"
        } ${className}`}
        style={{ backgroundColor: "#0b1220", ...style }}
      >
        <h2 className="font-heading font-bold text-white text-3xl mb-4">THANK YOU!</h2>
        <p className="text-white/80 text-lg">We got your request and will be in touch shortly!</p>
      </div>
    );
  }

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      className={`rounded-2xl ${compact ? "p-5 space-y-3" : "p-8 space-y-6"} shadow-2xl ${className}`}
      style={{ backgroundColor: "#0b1220", ...style }}
    >
      {showHeader && (
        <div className={`text-center ${compact ? "space-y-2 pb-1" : "space-y-3 pb-2"}`}>
          <h2 className={`font-heading font-bold text-white ${compact ? "text-3xl mt-1" : "text-4xl"}`}>Get a Free Quote</h2>
        </div>
      )}

      <div className={compact ? "space-y-1" : "space-y-2"}>
        <Label htmlFor="fullName" className="text-white font-semibold">
          Full Name <span className="text-secondary">*</span>
        </Label>
        <Input
          id="fullName"
          placeholder="John Smith"
          required
          maxLength={100}
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
        />
      </div>

      <div className={compact ? "space-y-1" : "space-y-2"}>
        <Label htmlFor="phone" className="text-white font-semibold">
          Phone <span className="text-secondary">*</span>
        </Label>
        <Input
          id="phone"
          type="tel"
          inputMode="numeric"
          placeholder="(540) 370-2844"
          maxLength={10}
          value={formData.phone}
          onChange={(e) => {
            const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
            setFormData({ ...formData, phone: digits });
          }}
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
        />
      </div>

      <div className={compact ? "space-y-1" : "space-y-2"}>
        <Label htmlFor="helpWith" className="text-white font-semibold">
          What do you need help with? <span className="text-secondary">*</span>
        </Label>
        <Textarea
          id="helpWith"
          placeholder="Tell us what you need hauled away and we'll get back to you ASAP!"
          required
          maxLength={1000}
          rows={compact ? 2 : 4}
          value={formData.helpWith}
          onChange={(e) => setFormData({ ...formData, helpWith: e.target.value })}
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 resize-none"
        />
      </div>

      <div className="flex items-start gap-3">
        <Checkbox
          id="consentMarketing"
          checked={formData.consentMarketing}
          onCheckedChange={(checked) => setFormData({ ...formData, consentMarketing: checked === true })}
          className="mt-1 border-white/30 data-[state=checked]:bg-secondary data-[state=checked]:border-secondary"
        />
        <Label htmlFor="consentMarketing" className="text-white/70 text-xs leading-relaxed font-normal cursor-pointer">
          I consent to receive marketing text messages from {BUSINESS.name} at the phone number provided.
          Consent is not a condition of purchase. Message frequency may vary. Message &amp; data rates may apply.
          Text HELP for assistance, reply STOP to opt out.
        </Label>
      </div>

      <div className="flex items-start gap-3">
        <Checkbox
          id="consentNonMarketing"
          checked={formData.consentNonMarketing}
          onCheckedChange={(checked) => setFormData({ ...formData, consentNonMarketing: checked === true })}
          className="mt-1 border-white/30 data-[state=checked]:bg-secondary data-[state=checked]:border-secondary"
        />
        <Label htmlFor="consentNonMarketing" className="text-white/70 text-xs leading-relaxed font-normal cursor-pointer">
          I consent to receive non-marketing text messages from {BUSINESS.name} for service updates,
          appointment reminders, and quote follow-ups. Message &amp; data rates may apply. Reply STOP to opt out.
        </Label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 rounded-xl bg-secondary text-secondary-foreground font-semibold text-lg hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {isSubmitting ? "Submitting…" : "Get My Free Quote"}
      </button>
    </form>
  );
};

export default QuoteForm;
