import { expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CardGroup from "./CardGroup";
import Card from "../Card";
import { CursorArrowRippleIcon } from "@heroicons/react/20/solid";

describe("components/Card", () => {
  test("render component", () => {
    render(
      <CardGroup>
        <Card
          icon={<CursorArrowRippleIcon />}
          title="title1"
          description="description1"
          buttonText="button1"
        />
        <Card
          icon={<CursorArrowRippleIcon />}
          title="title2"
          description="description2"
          buttonText="button2"
        />
      </CardGroup>,
    );

    expect(screen.getByText(/title1/i)).toBeDefined();
    expect(screen.getByText(/description1/i)).toBeDefined();
    expect(screen.getByText(/button1/i)).toBeDefined();
    expect(screen.getByText(/title2/i)).toBeDefined();
    expect(screen.getByText(/description2/i)).toBeDefined();
    expect(screen.getByText(/button2/i)).toBeDefined();
  });
});
