import { expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { CursorArrowRippleIcon } from "@heroicons/react/20/solid";
import Card from "@components/Card";

describe("components/Card", () => {
  test("render component", () => {
    render(
      <Card
        icon={<CursorArrowRippleIcon />}
        title="this is a test title"
        description="this is a test description"
        buttonText="text button"
      />,
    );

    expect(screen.getByText(/this is a test title/i)).toBeDefined();
    expect(screen.getByText(/this is a test description/i)).toBeDefined();
    expect(screen.getByText(/text button/i)).toBeDefined();
  });
});
