import FAQItem, { type FAQItemProps } from "@components/FAQItem";

export interface FAQGroupProps {
  faqs: Array<FAQItemProps>;
}

export default function FAQGroup({ faqs }: FAQGroupProps) {
  return (
    <div
      className={`grid grid-cols-1 border border-[#2E2E2E] laptop:grid-cols-2`}
    >
      {faqs.map((faq, idx) => (
        <FAQItem
          key={`faq-item-${idx}`}
          className="w-full odd:border-r odd:border-r-[#2E2E2E] even:border-l even:border-l-[#2E2E2E]"
          {...faq}
        />
      ))}
    </div>
  );
}
