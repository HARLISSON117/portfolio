interface SectionWrapperProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export default function SectionWrapper({ id, className = "", children }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-20 sm:py-24 ${className}`}
    >
      <div className="section-container">
        {children}
      </div>
    </section>
  );
}
