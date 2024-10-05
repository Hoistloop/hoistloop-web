import { expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Hero from "@components/Hero/Hero";

describe("components/Hero", () => {
  test("renders component", () => {
    render(
      <Hero
        title="title"
        subtitle="this is a test content"
        imageUrl="imageUrl"
      />,
    );

    expect(screen.getByText(/title/i)).toBeDefined();
    expect(screen.getByText(/this is a test content/i)).toBeDefined();
  });
});
