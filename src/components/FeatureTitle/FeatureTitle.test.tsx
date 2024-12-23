import { expect } from "vitest";
import { render, screen } from "@testing-library/react";

import FeatureItem from "@components/FeatureItem";
import { CursorArrowRippleIcon } from "@heroicons/react/20/solid";

describe("components/FeatureItem", () => {
  test("render component", () => {
    render(
      <FeatureItem
        icon={<CursorArrowRippleIcon />}
        subtitle="This is a test subtitle"
      />,
    );

    expect(screen.getByText(/This is a test subtitle/i)).toBeDefined();
  });
});
