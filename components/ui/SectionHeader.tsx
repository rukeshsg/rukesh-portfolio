import FadeIn from "./FadeIn";

export default function SectionHeader({
  index,
  label,
  title,
  description,
}: {
  index: string;
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <FadeIn className="mb-12 sm:mb-16">
      <p className="eyebrow">{`// ${index} - ${label}`}</p>
      <h2 className="mt-4 text-3xl font-medium leading-tight text-paper-100 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-paper-200">
          {description}
        </p>
      )}
    </FadeIn>
  );
}
