interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
}

const SectionHeading = ({ label, title, description }: SectionHeadingProps) => {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
      {label && (
        <span className="text-primary font-body text-sm font-semibold uppercase tracking-widest mb-3 block">
          {label}
        </span>
      )}
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
