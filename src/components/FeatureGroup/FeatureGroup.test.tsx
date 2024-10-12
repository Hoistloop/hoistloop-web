import { expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { PaintBrushIcon } from "@heroicons/react/20/solid";

import FeatureGroup from "@components/FeatureGroup";

describe("components/FeatureGroup", () => {
  test("render component", () => {
    render(
      <FeatureGroup
        featureItems={[
          {
            icon: <PaintBrushIcon />,
            subtitle: "User Research and Persona Development",
          },
        ]}
      />,
    );

    expect(
      screen.getByText(/User Research and Persona Development/i),
    ).toBeDefined();
  });
});
