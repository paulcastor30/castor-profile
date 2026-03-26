interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: Props) {
  return (
    <div className="mb-12 md:mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-text-secondary text-lg max-w-2xl">{subtitle}</p>
      )}
      <div className="mt-4 h-1 w-12 rounded-full bg-teal" />
    </div>
  );
}
