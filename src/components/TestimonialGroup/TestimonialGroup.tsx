import Testimonial, { type TestimonialProps } from "@components/Testimonial";

export interface TestimonialGroupProps {
  testimonials: Array<TestimonialProps>;
}

export default function TestimonialGroup({
  testimonials,
}: TestimonialGroupProps) {
  return (
    <div className="grid grid-cols-1 border-l border-t border-neutral-800 laptop:grid-cols-2">
      {testimonials.map((testimonial, idx) => (
        <Testimonial
          {...testimonial}
          key={`testimonial-${idx}`}
        />
      ))}
    </div>
  );
}
