import { expect } from "vitest";
import { render, screen } from "@testing-library/react";

import AboutCTA from "./AboutCTS";

describe("components/StepCard", () => {
  test("render component", () => {
    render(
      <AboutCTA
        imageUrl="https://place-hold.it/150x150"
        title="Today, SquareUp Continues to Thrive as a Leading Digital Product Agency....."
        description="Combining the power of design, engineering, and project management to create transformative digital experiences. They invite you to join them on their journey and discover how they can help bring your digital ideas to life."
        header="Welcome to Hoistloop"
        subHeader="Where collaboration, Expertise, and Client-Centricity Intersect to Shape the Future of Digital Innovation."
        button={{ text: "Start Project" }}
      />,
    );

    expect(screen.getByText(/Today, SquareUp Continues/i)).toBeDefined();
  });
});
