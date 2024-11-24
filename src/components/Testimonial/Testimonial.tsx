import PersonCard, { PersonCardProps } from "@components/PersonCard";

export interface TestimonialProps {
  heading: string;
  quote: string;
  personCardProps: PersonCardProps;
}

export default function Testimonial({
  heading,
  quote,
  personCardProps,
}: TestimonialProps) {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] gap-10 border-b border-r border-neutral-800 px-20 py-[100px] mobile:px-6 mobile:py-10 laptop:px-[60px] laptop:py-20">
      <blockquote className="flex flex-col gap-6">
        <p className="text-[28px] font-medium text-accent max-laptop:text-xl max-mobile:text-lg">
          {heading}
        </p>
        <p className="text-lg max-laptop:text-base max-mobile:text-sm">
          {quote}
        </p>
      </blockquote>
      <div className="self-end">
        <PersonCard {...personCardProps} />
      </div>
    </div>
  );
}
