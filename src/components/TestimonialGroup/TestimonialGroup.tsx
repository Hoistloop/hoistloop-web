import Testimonial, { type TestimonialProps } from "@components/Testimonial";

export default function TestimonialGroup({
  testimonials,
}: {
  testimonials: Array<TestimonialProps>;
}) {
  return (
    <div className="grid grid-cols-1 border-l border-t border-neutral-800 laptop:grid-cols-2">
      {testimonials.map((testimonial) => (
        <Testimonial {...testimonial} />
      ))}
    </div>
  );
}
