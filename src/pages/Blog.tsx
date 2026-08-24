import { Link } from "react-router-dom";
import ScrollSection from "@/components/ScrollSection";
import { InlineTestimonial } from "@/components/Testimonials";
import { Sparkles, ArrowRight, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const formatDate = (iso: string) =>
  new Date(iso + "T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

const Blog = () => {
  return (
    <div className="pt-20">
      <section className="section-padding bg-surface-elevated text-center relative overflow-hidden">
        <Sparkles className="absolute top-10 left-10 text-primary/10 animate-spin-slow" size={30} />
        <Sparkles className="absolute bottom-10 right-12 text-primary/10 animate-spin-slow" size={24} style={{ animationDirection: "reverse" }} />
        <div className="container mx-auto">
          <span className="text-primary font-body text-sm font-semibold uppercase tracking-widest mb-3 block animate-fade-in">Blog</span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
            Stories, Tips &amp; <span className="text-gradient-gold">Behind the Scenes</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Event planning advice, photobooth trends, and real moments from the events we've booked across the DMV.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-3xl space-y-6">
          {blogPosts.map((post, i) => (
            <ScrollSection key={post.slug} delay={i * 100} direction={i % 2 === 0 ? "left" : "right"}>
              <Link
                to={`/blog/${post.slug}`}
                className="group block p-8 md:p-10 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-500 hover-lift"
              >
                <div className="flex items-center gap-4 text-xs text-muted-foreground uppercase tracking-wider mb-4">
                  <span className="flex items-center gap-1.5"><Calendar size={13} className="text-primary" /> {formatDate(post.date)}</span>
                  <span className="flex items-center gap-1.5"><Clock size={13} className="text-primary" /> {post.readTime}</span>
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-5">{post.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                  Read the story <ArrowRight size={16} />
                </span>
              </Link>
            </ScrollSection>
          ))}
        </div>
      </section>

      <InlineTestimonial index={2} direction="left" />
    </div>
  );
};

export default Blog;
