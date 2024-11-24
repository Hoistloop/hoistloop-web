import { expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { CursorArrowRippleIcon } from "@heroicons/react/20/solid";

import InfoCard from "@components/InfoCard";

describe("components/InfoCard", () => {
  test("render component", () => {
    render(
      <InfoCard
        description="this is a test content"
        icon={<CursorArrowRippleIcon />}
      />,
    );

    expect(screen.getByText(/this is a test content/i)).toBeDefined();
  });
});
