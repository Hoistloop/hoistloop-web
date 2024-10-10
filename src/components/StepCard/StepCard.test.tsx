import { expect } from "vitest";
import { render, screen } from "@testing-library/react";
import StepCard from "@components/StepCard";

describe("components/StepCard", () => {
  test("render component", () => {
    render(
      <StepCard
        step="01"
        title="this is a test title"
        description="this is a test description"
      />,
    );

    expect(screen.getByText(/01/i)).toBeDefined();
    expect(screen.getByText(/this is a test title/i)).toBeDefined();
    expect(screen.getByText(/this is a test description/i)).toBeDefined();
  });
});
