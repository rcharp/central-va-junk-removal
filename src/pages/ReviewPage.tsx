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
  const [text, setText] = useState("");
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
    if (!rating || !name.trim() || !text.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    setSubmitting(true);
    try {
      await fetch(BUSINESS.webhooks.review, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rating, name: name.trim(), review: text.trim(), business: BUSINESS.name }),
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
        className="relative -mt-[120px] lg:-mt-[180px] h-[120px] lg:h-[180px] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-foreground">
              How was your experience?
            </h1>
            <p className="text-lg text-muted-foreground mt-3">We'd love to hear your feedback</p>
          </div>

          {done ? (
            <div className="bg-card rounded-2xl p-10 text-center border border-border shadow-lg">
              <h2 className="text-2xl font-bold mb-3">Thank you!</h2>
              <p className="text-muted-foreground">Your feedback means the world to {BUSINESS.name}.</p>
            </div>
          ) : rating && rating <= 3 ? (
            <form onSubmit={submit} className="bg-card rounded-2xl p-8 space-y-6 border border-border shadow-lg">
              <div>
                <Label className="text-foreground font-semibold">Your Rating</Label>
                <div className="flex gap-1 mt-2">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <Star
                      key={n}
                      className={`w-7 h-7 ${rating >= n ? "fill-secondary text-secondary" : "text-muted-foreground/40"}`}
                    />
                  ))}
                </div>
              </div>
              <div>
                <Label htmlFor="rname" className="text-foreground font-semibold">Your Name</Label>
                <Input id="rname" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div>
                <Label htmlFor="rtext" className="text-foreground font-semibold">Tell us what happened</Label>
                <Textarea id="rtext" rows={5} value={text} onChange={(e) => setText(e.target.value)} required />
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setRating(null)}
                  className="flex-1 py-3 rounded-xl border border-border font-semibold hover:bg-muted transition-colors"
                >
                  Back
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
          ) : (
            <div className="space-y-4">
              {RATINGS.map(({ value, label }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => handleRatingClick(value)}
                  className="w-full flex items-center gap-5 bg-card hover:bg-muted/50 border border-border rounded-2xl px-6 py-5 shadow-sm hover:shadow-md transition-all text-left group"
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
          )}
        </div>
      </section>
    </PageShell>
  );
};

export default ReviewPage;
