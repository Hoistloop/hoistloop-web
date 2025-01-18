import { expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { FaAws, FaReact, FaNodeJs, FaPhp } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import BrandsSection, { Brand } from "./BrandsSection";

describe("components/BrandsSection", () => {
  test("renders brands correctly", () => {
    const brands: Brand[] = [
      {
        icon: (
          <FaAws
            size={40}
            color="#E6E6E6"
          />
        ),
        type: "aws",
      },
      {
        icon: (
          <FaReact
            size={40}
            color="#E6E6E6"
          />
        ),
        type: "react",
      },
      {
        icon: (
          <FaNodeJs
            size={40}
            color="#E6E6E6"
          />
        ),
        type: "nodejs",
      },
      {
        icon: (
          <RiNextjsLine
            size={40}
            color="#E6E6E6"
          />
        ),
        type: "nextjs",
      },
      {
        icon: (
          <FaPhp
            size={40}
            color="#E6E6E6"
          />
        ),
        type: "php",
      },
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
