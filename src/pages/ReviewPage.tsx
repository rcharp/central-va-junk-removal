import { useState } from "react";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import useSEO from "@/hooks/useSEO";
import { BUSINESS } from "@/config/business";
import { Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

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

  const handleStarClick = (n: number) => {
    setRating(n);
    // 5 or 4 star ratings would normally redirect to GBP; none provided.
    if (n >= 4 && BUSINESS.googleReviewUrl) {
      window.location.href = BUSINESS.googleReviewUrl;
    }
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!rating || !name.trim() || !text.trim()) {
      toast.error("Please fill in all fields and select a rating.");
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
      <PageHero eyebrow="Reviews" title="Leave a Review" subtitle="We'd love to hear about your experience." />
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-xl">
          {done ? (
            <div className="bg-card rounded-2xl p-10 text-center border border-border">
              <h2 className="text-2xl font-bold mb-3">Thank you!</h2>
              <p className="text-muted-foreground">Your feedback means the world to {BUSINESS.name}.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="bg-card rounded-2xl p-8 space-y-6 border border-border shadow-lg">
              <div>
                <Label className="text-foreground font-semibold">Your Rating</Label>
                <div className="flex gap-2 mt-2">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button key={n} type="button" onClick={() => handleStarClick(n)} aria-label={`${n} stars`}>
                      <Star className={`w-8 h-8 ${rating && rating >= n ? "fill-secondary text-secondary" : "text-muted-foreground"}`} />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <Label htmlFor="rname" className="text-foreground font-semibold">Your Name</Label>
                <Input id="rname" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div>
                <Label htmlFor="rtext" className="text-foreground font-semibold">Your Review</Label>
                <Textarea id="rtext" rows={5} value={text} onChange={(e) => setText(e.target.value)} required />
              </div>
              <button type="submit" disabled={submitting} className="w-full py-3 rounded-xl bg-secondary text-secondary-foreground font-semibold hover:opacity-90 disabled:opacity-50">
                {submitting ? "Submitting…" : "Submit Review"}
              </button>
            </form>
          )}
        </div>
      </section>
    </PageShell>
  );
};
export default ReviewPage;
