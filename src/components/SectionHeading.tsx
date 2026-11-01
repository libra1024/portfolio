export default function SectionHeading({
  title,
  highlight,
  className,
}: {
  title: string;
  highlight: RegExp;
  className: string;
}) {
  return (
    <h2 className={className}>
      {title.split(highlight).map((part, index) =>
        index % 2 === 1 ? <span key={index} className="text-[var(--brand)]">{part}</span> : part,
      )}
    </h2>
  );
}
