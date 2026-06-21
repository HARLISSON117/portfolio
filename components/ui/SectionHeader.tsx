interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  titleHighlight,
  subtitle,
}: SectionHeaderProps) {
  return (
    <div className="mb-12 text-center">
      {eyebrow && (
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-brand-400">
          {eyebrow}
        </span>
      )}
      <h2 className="section-title text-gray-900 dark:text-white">
        {title}{" "}
        {titleHighlight && <span className="gradient-text">{titleHighlight}</span>}
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
