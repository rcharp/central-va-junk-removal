import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import useSEO from "@/hooks/useSEO";
import { Link, useParams } from "react-router-dom";
import { BUSINESS } from "@/config/business";
import CTASection from "@/components/CTASection";

export const POSTS = [
  {
    slug: "how-junk-removal-pricing-works",
    title: "How Junk Removal Pricing Works (No Surprises)",
    excerpt: "Understand how reputable haulers price by volume — and what to ask before you book.",
    body: `At ${BUSINESS.name}, we price by volume — the space your items take up in our truck. Reputable haulers don't charge by the hour or by guesstimate. Always ask for an upfront quote before work begins, and confirm whether disposal fees are included. We give you a flat, all-in price so there are no surprises on pickup day.`,
  },
  {
    slug: "preparing-for-an-estate-cleanout",
    title: "Preparing for an Estate Cleanout in Fredericksburg",
    excerpt: "A practical, compassionate checklist for families navigating an estate cleanout.",
    body: `Estate cleanouts can feel overwhelming. Start by walking through the property and tagging items in three buckets: keep, donate, dispose. Don't try to do it alone — our crew at ${BUSINESS.name} works alongside families and executors throughout Spotsylvania and Stafford counties to make the process smooth and respectful.`,
  },
  {
    slug: "what-junk-haulers-cant-take",
    title: "What Junk Haulers Can't Take (And Why)",
    excerpt: "A quick guide to hazardous materials and items most haulers won't accept.",
    body: `Most professional junk removal companies — including ${BUSINESS.name} — can't accept hazardous materials like paint, chemicals, propane tanks, and certain batteries. These require special disposal channels. We'll always tell you upfront if anything in your job needs to be handled separately, and we can often point you to the right local drop-off.`,
  },
  {
    slug: "construction-debris-removal-tips",
    title: "Construction Debris Removal: Tips for Contractors",
    excerpt: "Save time and money on job-site cleanup with these contractor-tested tips.",
    body: `Time on site is money. Stack debris in one accessible location, separate metals when possible (recycling can offset hauling costs), and book recurring pickups for larger projects. We work with contractors across ${BUSINESS.region} to keep job sites clean and inspections on track.`,
  },
  {
    slug: "best-time-to-schedule-junk-removal",
    title: "When's the Best Time to Schedule Junk Removal?",
    excerpt: "Spring cleanouts, post-move pickups, and pre-listing turnovers — timing matters.",
    body: `Spring and early fall are our busiest seasons in Central Virginia. If you're listing a home, schedule your cleanout 1–2 weeks before photos. Moving? Book the day after move-out. Need same-day service? Call ${BUSINESS.phone} — we save slots daily for urgent jobs.`,
  },
];

export const BlogIndex = () => {
  useSEO({
    title: `Blog | ${BUSINESS.name}`,
    description: "Junk removal tips, cleanout guides, and local advice from Central VA Hauling & Junk Removal.",
    canonical: "https://centralvahauling.com/blog",
  });
  return (
    <PageShell>
      <PageHero eyebrow="Blog" title="Junk Removal Tips & Guides" subtitle="Practical advice for homeowners, property managers, and contractors across Central Virginia." />
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POSTS.map((p) => (
            <Link key={p.slug} to={`/blog/${p.slug}`} className="block p-6 rounded-2xl bg-card border border-border hover:border-secondary transition-colors">
              <h2 className="font-heading text-xl font-bold mb-2">{p.title}</h2>
              <p className="text-muted-foreground">{p.excerpt}</p>
              <span className="text-secondary font-semibold mt-3 inline-block">Read more →</span>
            </Link>
          ))}
        </div>
      </section>
      <CTASection />
    </PageShell>
  );
};

export const BlogPost = () => {
  const { slug } = useParams();
  const post = POSTS.find((p) => p.slug === slug);
  useSEO({
    title: post ? `${post.title} | ${BUSINESS.name}` : "Post not found",
    description: post?.excerpt ?? "",
    canonical: `https://centralvahauling.com/blog/${slug}`,
  });
  if (!post) {
    return (
      <PageShell>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Post not found</h1>
          <Link to="/blog" className="text-secondary underline">Back to blog</Link>
        </div>
      </PageShell>
    );
  }
  return (
    <PageShell>
      <PageHero eyebrow="Blog" title={post.title} subtitle={post.excerpt} />
      <article className="py-16">
        <div className="container mx-auto px-4 max-w-3xl prose prose-lg">
          <p className="text-lg text-foreground leading-relaxed whitespace-pre-line">{post.body}</p>
          <p className="mt-8"><Link to="/blog" className="text-secondary underline">← Back to all posts</Link></p>
        </div>
      </article>
      <CTASection />
    </PageShell>
  );
};
