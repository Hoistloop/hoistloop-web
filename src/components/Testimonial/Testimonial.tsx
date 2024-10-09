import PersonCard, { PersonCardProps } from "@components/PersonCard";

export default function Testimonial({
  heading,
  quote,
  personCardProps,
}: {
  heading: string;
  quote: string;
  personCardProps: PersonCardProps;
}) {
  return (
    <div className="flex flex-col gap-10 border border-neutral-800 px-20 py-[100px]">
      <blockquote className="flex flex-col gap-6">
        <p className="text-[28px] font-medium text-accent">{heading}</p>
        <p className="text-lg">{quote}</p>
      </blockquote>
      <PersonCard {...personCardProps} />
    </div>
  );
}
