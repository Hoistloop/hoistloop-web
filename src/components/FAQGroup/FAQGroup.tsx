import FaqItem from "@components/FAQ/FaqItem";

type FAQ = {
  index: number;
  question: string;
  response: string;
};

export default function FAQGroup({
  faqs,
  direction = "column",
}: {
  faqs: Array<FAQ>;
  direction: "row" | "column";
}) {
  return (
    <div
      className={`border border-[#2E2E2E] ${
        direction === "column" ? "grid-cols-[auto_auto] items-start" : null
      } mobile:grid-cols-1 desktop:grid`}
    >
      {faqs.map((faq) => (
        <FaqItem
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
