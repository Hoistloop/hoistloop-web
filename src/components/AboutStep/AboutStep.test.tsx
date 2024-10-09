import { expect } from "vitest";
import { render, screen } from "@testing-library/react";
import AboutStep from "./AboutStep";

describe("components/Card", () => {
  test("render component", () => {
    render(
      <AboutStep
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
