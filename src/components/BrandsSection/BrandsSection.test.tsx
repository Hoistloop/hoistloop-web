import { expect } from "vitest";
import { render, screen } from "@testing-library/react";

import BrandsSection, { BrandsProps } from "./BrandsSection";

describe("components/BrandsSection", () => {
  test("renders brands correctly", () => {
    const brands: BrandsProps["brands"] = [
      { type: "FaAws", size: 40, color: "##E6E6E6" },
      { type: "FaReact", size: 40, color: "##E6E6E6" },
      { type: "FaNode", size: 40, color: "##E6E6E6" },
      { type: "RiNextjsLine", size: 40, color: "##E6E6E6" },
      { type: "FaPhp", size: 40, color: "##E6E6E6" },
    ];

    render(<BrandsSection brands={brands} />);
    // Assert each brand's icon is rendered with the correct type
    brands.forEach((brand) => {
      expect(screen.getByLabelText(`icon-${brand.type}`)).toBeDefined();
    });
  });

  test("handles empty brands array", () => {
    render(<BrandsSection brands={[]} />);
    // Assert that no icons are rendered
    expect(screen.queryByTestId(/icon-/)).toBeNull();
  });
});
