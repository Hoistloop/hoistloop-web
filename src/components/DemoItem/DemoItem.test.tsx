import { expect } from "vitest";
import { render, screen } from "@testing-library/react";

import DemoItem from "./DemoItem";

describe("components/StepCard", () => {
  test("render component", () => {
    render(
      <DemoItem
        header="E-Commerce Platform for Fashion Hub"
        imageUrl="https://place-hold.it/600x423"
        title="Chic Boutique"
        url="https://place-hold.it/"
        description="We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction."
      />,
    );

    expect(
      screen.getByText(/E-Commerce Platform for Fashion Hub/i),
    ).toBeDefined();
    expect(screen.getByText(/We developed a visually stunning/i)).toBeDefined();
  });
});
