import { fireEvent, render, screen } from "@testing-library/react";
import FaqItem from "./FaqItem";

describe("components/FaqItem", () => {
  test("renders component", () => {
    render(
      <FaqItem
        index={11}
        question="question"
        response="response"
      />,
    );

    expect(screen.getByTestId("faq-index").textContent).toContain("11");
    expect(screen.getByText(/question/i)).toBeDefined();
    expect(screen.getByText(/response/i)).toBeDefined();
  });

  test("click icon open event", () => {
    render(
      <FaqItem
        index={1}
        question="question"
        response="response"
      />,
    );

    const icon = screen.getByTestId("faq-icon");
    const title = screen.getByTestId("faq-question");
    fireEvent.click(icon);

    expect(title.classList.contains("open")).toBe(true);
  });

  test("click question open event", () => {
    render(
      <FaqItem
        index={1}
        question="question"
        response="response"
      />,
    );

    const title = screen.getByTestId("faq-question");
    fireEvent.click(title);

    expect(title.classList.contains("open")).toBe(true);
  });
});
