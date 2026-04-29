import PageShell from "@/components/PageShell";
import useSEO from "@/hooks/useSEO";
import { BUSINESS } from "@/config/business";
import { Star } from "lucide-react";
import heroBg from "@/assets/stock/hero-truck.jpg";
import reviewQr from "@/assets/review-qr.png";

const RATINGS = [
  { value: 5, label: "Excellent" },
  { value: 4, label: "Great" },
  { value: 3, label: "Okay" },
  { value: 2, label: "Poor" },
  { value: 1, label: "Terrible" },
];

const GOOGLE_REVIEW_URL =
  BUSINESS.googleReviewUrl ||
  `https://www.google.com/search?q=${encodeURIComponent(
    `${BUSINESS.name} ${BUSINESS.address.city} ${BUSINESS.address.state} reviews`
  )}`;

const ReviewPage = () => {
  useSEO({
    title: `Leave a Review | ${BUSINESS.name}`,
    description: `Share your experience with ${BUSINESS.name}.`,
    canonical: "https://centralvahauling.com/review",
  });

  const handleRatingClick = () => {
    window.location.href = GOOGLE_REVIEW_URL;
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
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h1 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
              How was your experience?
            </h1>
            <p className="text-muted-foreground mt-3">
              We'd love to hear your feedback
            </p>
          </div>
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-start">
            <div className="space-y-3">
              {RATINGS.map(({ value, label }) => (
                <button
                  key={value}
                  type="button"
                  onClick={handleRatingClick}
                  className="w-full flex items-center gap-4 bg-card hover:bg-muted border border-border rounded-xl px-5 py-4 transition-all text-left shadow-sm"
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
            <aside className="bg-card border border-border rounded-2xl p-6 shadow-sm w-full lg:w-[280px] mx-auto text-center">
              <h2 className="font-heading text-lg font-semibold text-foreground mb-4">
                Or scan to review
              </h2>
              <img
                src={reviewQr}
                alt="Scan QR code to leave a review"
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-muted-foreground mt-4">
                Point your phone camera at the code
              </p>
            </aside>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default ReviewPage;
