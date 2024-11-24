import { fireEvent, render, screen } from "@testing-library/react";
import FAQGroup from "@components/FAQGroup";

describe("components/FAQItem", () => {
  test("renders component", () => {
    render(
      <FAQGroup
        faqs={[
          {
            index: 1,
            question: "question",
            response: "response",
          },
        ]}
      />,
    );

    expect(screen.getByTestId("faq-index").textContent).toContain("01");
    expect(screen.getByText(/question/i)).toBeDefined();
    expect(screen.getByText(/response/i)).toBeDefined();
  });

  test("click icon open event", () => {
    render(
      <FAQGroup
        faqs={[
          {
            index: 1,
            question: "question",
            response: "response",
          },
        ]}
      />,
    );

    const icon = screen.getByTestId("faq-icon");
    fireEvent.click(icon);

    expect(icon.classList.contains("text-[#C5FF66]"));
  });

  test("click question open event", () => {
    render(
      <FAQGroup
        faqs={[
          {
            index: 1,
            question: "question",
            response: "response",
          },
        ]}
      />,
    );

    const title = screen.getByTestId("faq-question");
    fireEvent.click(title);

    expect(title.classList.contains("text-[#C5FF66]"));
  });
});
