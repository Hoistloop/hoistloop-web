import FAQItem, { type FAQItemProps } from "@components/FAQItem";

export default function FAQGroup({ faqs }: { faqs: Array<FAQItemProps> }) {
  return (
    <div
      className={`grid grid-cols-1 border border-[#2E2E2E] laptop:grid-cols-2`}
    >
      {faqs.map((faq) => (
        <FAQItem
          className="w-full odd:border-r odd:border-r-[#2E2E2E] even:border-l even:border-l-[#2E2E2E]"
          key={faq.index}
          index={faq.index}
          question={faq.question}
          response={faq.response}
        />
      ))}
    </div>
  );
}
