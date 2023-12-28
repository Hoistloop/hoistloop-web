import { expect } from "vitest";
import { render, screen } from "@testing-library/react";
import InfoCard from "./InfoCard";
import { CursorArrowRippleIcon } from "@heroicons/react/20/solid";

describe("components/InfoCard", () => {
  test("render component", () => {
    const { container } = render(
      <InfoCard
        description="this is a test content"
        icon={<CursorArrowRippleIcon className="test-class" />}
      />,
    );

    const svg = container.querySelector(
      "[data-slot='icon']",
    ) as HTMLImageElement;

    expect(screen.getByText(/this is a test content/i)).toBeDefined();
    expect(svg.classList.toString()).toContain("test-class");
  });
});
