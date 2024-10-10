import { expect } from "vitest";
import { render, screen } from "@testing-library/react";

import FeatureHeader from "@components/FeatureHeader";

describe("components/FeatureHeader", () => {
  test("render component", () => {
    render(
      <FeatureHeader
        title="this is a test title"
        description="this is a test description"
        subtitle="This is a test subtitle"
      />,
    );

    expect(screen.getByText(/this is a test title/i)).toBeDefined();
    expect(screen.getByText(/this is a test description/i)).toBeDefined();
    expect(screen.getByText(/This is a test subtitle/i)).toBeDefined();
  });
});
