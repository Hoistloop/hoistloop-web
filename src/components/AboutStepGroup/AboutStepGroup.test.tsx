import { expect } from "vitest";
import { render, screen } from "@testing-library/react";
import AboutStepGroup from "./AboutStepGroup";
import AboutStep from "../AboutStep/AboutStep";

describe("components/Card", () => {
  test("render component", () => {
    render(
      <AboutStepGroup>
        <AboutStep
          title="Title"
          step="01"
          description="Once upon a time, in a world driven by technology, a group of talented designers came together with a  shared vision. They believed that design could shape the way people interacted with digital products. With their   passion for aesthetics and usability, they founded SquareUp Digital Product Agency's design department. Their mission   was to create visually stunning and user-friendly interfaces that would leave a lasting impression."
        />
      </AboutStepGroup>,
    );

    expect(screen.getByText(/title/i)).toBeDefined();
    expect(screen.getByText(/01/i)).toBeDefined();
    expect(screen.getByText(/Once upon a time/i)).toBeDefined();
  });
});
