import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollSection from "@/components/ScrollSection";
import { InlineTestimonial } from "@/components/Testimonials";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import NotFound from "./NotFound";

const formatDate = (iso: string) =>
  new Date(iso + "T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <NotFound />;

  return (
    <div className="pt-20">
      <section className="section-padding bg-surface-elevated text-center relative overflow-hidden">
        <div className="container mx-auto max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider mb-6 hover:gap-3 transition-all">
            <ArrowLeft size={16} /> Back to Blog
          </Link>
          <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground uppercase tracking-wider mb-5">
            <span className="flex items-center gap-1.5"><Calendar size={13} className="text-primary" /> {formatDate(post.date)}</span>
            <span className="flex items-center gap-1.5"><Clock size={13} className="text-primary" /> {post.readTime}</span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight animate-fade-in-up">
            {post.title}
          </h1>
        </div>
      </section>

      <section className="section-padding">
        <ScrollSection>
          <article className="container mx-auto max-w-2xl prose-none">
            {post.content.map((block, i) => {
              if (block.type === "h2") {
                return (
                  <h2 key={i} className="font-heading text-2xl md:text-3xl font-bold mt-12 mb-4 first:mt-0">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "h3") {
                return (
                  <h3 key={i} className="font-heading text-xl md:text-2xl font-bold mt-8 mb-3 text-primary">
                    {block.text}
                  </h3>
                );
              }
              if (block.type === "ul") {
                return (
                  <ul key={i} className="list-none space-y-2 my-5">
                    {block.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="text-muted-foreground leading-relaxed mb-5">
                  {block.text}
                </p>
              );
            })}

            <div className="mt-12 pt-8 border-t border-border text-center">
              <Link to="/contact">
                <Button variant="default" size="lg" className="hover-lift glow-primary group">
                  Connect With the Team <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </article>
        </ScrollSection>
      </section>

      <InlineTestimonial index={4} direction="right" />
    </div>
  );
};

export default BlogPost;
