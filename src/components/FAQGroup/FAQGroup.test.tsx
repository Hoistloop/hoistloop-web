import { fireEvent, render, screen } from "@testing-library/react";
import FAQGroup from "./FAQGroup";

describe("components/FaqItem", () => {
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
        direction="column"
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
        direction="column"
      />,
    );

    const icon = screen.getByTestId("faq-icon");
    const title = screen.getByTestId("faq-question");
    fireEvent.click(icon);

    expect(title.classList.contains("open")).toBe(true);
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
        direction="column"
      />,
    );

    const title = screen.getByTestId("faq-question");
    fireEvent.click(title);

    expect(title.classList.contains("open")).toBe(true);
  });
});
