import { useState } from "react";
import PageShell from "@/components/PageShell";
import useSEO from "@/hooks/useSEO";
import { BUSINESS } from "@/config/business";
import { Star } from "lucide-react";
import heroBg from "@/assets/stock/hero-truck.jpg";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const RATINGS = [
  { value: 5, label: "Excellent" },
  { value: 4, label: "Great" },
  { value: 3, label: "Okay" },
  { value: 2, label: "Poor" },
  { value: 1, label: "Terrible" },
];

const ReviewPage = () => {
  useSEO({
    title: `Leave a Review | ${BUSINESS.name}`,
    description: `Share your experience with ${BUSINESS.name}.`,
    canonical: "https://centralvahauling.com/review",
  });

  const [rating, setRating] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const handleRatingClick = (n: number) => {
    if (n >= 4 && BUSINESS.googleReviewUrl) {
      window.location.href = BUSINESS.googleReviewUrl;
      return;
    }
    setRating(n);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!rating || !name.trim() || !phone.trim() || !message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    setSubmitting(true);
    try {
      await fetch(BUSINESS.webhooks.review, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          rating,
          name: name.trim(),
          phone: phone.trim(),
          message: message.trim(),
          business: BUSINESS.name,
        }),
      });
      setDone(true);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <PageShell>
      {/* Navbar background strip (matches homepage hero) */}
      <div
        className="relative -mt-[200px] lg:-mt-[290px] h-[200px] lg:h-[290px] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          {done ? (
            <div className="bg-card rounded-2xl p-10 text-center border border-border shadow-lg">
              <h2 className="text-2xl font-bold mb-3">Thank you!</h2>
              <p className="text-muted-foreground">
                Your feedback means the world to {BUSINESS.name}.
              </p>
            </div>
          ) : rating && rating <= 3 ? (
            <div className="bg-card rounded-2xl p-8 lg:p-10 border border-border shadow-lg">
              <div className="text-center mb-8">
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
                  Tell us more
                </h2>
                <p className="text-muted-foreground mt-3">
                  We're sorry to hear that. Please let us know how we can improve.
                </p>
              </div>
              <form onSubmit={submit} className="space-y-5">
                <div>
                  <Label htmlFor="rname" className="text-foreground font-semibold">Name</Label>
                  <Input id="rname" value={name} onChange={(e) => setName(e.target.value)} required maxLength={100} />
                </div>
                <div>
                  <Label htmlFor="rphone" className="text-foreground font-semibold">Phone</Label>
                  <Input id="rphone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required maxLength={30} />
                </div>
                <div>
                  <Label htmlFor="rmsg" className="text-foreground font-semibold">Message</Label>
                  <Textarea id="rmsg" rows={5} value={message} onChange={(e) => setMessage(e.target.value)} required maxLength={1000} />
                </div>
                <div className="flex flex-col-reverse sm:flex-row gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setRating(null)}
                    className="flex-1 py-3 rounded-xl border border-border font-semibold hover:bg-muted transition-colors"
                  >
                    Back to ratings
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex-1 py-3 rounded-xl bg-secondary text-secondary-foreground font-semibold hover:opacity-90 disabled:opacity-50"
                  >
                    {submitting ? "Submitting…" : "Submit Feedback"}
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="bg-card rounded-2xl p-6 lg:p-10 border border-border shadow-lg">
              <div className="text-center mb-8">
                <h1 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
                  How was your experience?
                </h1>
                <p className="text-muted-foreground mt-3">
                  Select a rating to leave us a review on Google
                </p>
              </div>
              <div className="space-y-3">
                {RATINGS.map(({ value, label }) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => handleRatingClick(value)}
                    className="w-full flex items-center gap-4 bg-muted/40 hover:bg-muted border border-border/60 rounded-xl px-5 py-4 transition-all text-left"
                    aria-label={`${label} - ${value} stars`}
                  >
                    <div className="flex gap-1 shrink-0">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <Star
                          key={n}
                          className={`w-6 h-6 ${n <= value ? "fill-secondary text-secondary" : "text-muted-foreground/30"}`}
                        />
                      ))}
                    </div>
                    <span className="font-heading text-lg font-semibold text-foreground">{label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </PageShell>
  );
};

export default ReviewPage;
