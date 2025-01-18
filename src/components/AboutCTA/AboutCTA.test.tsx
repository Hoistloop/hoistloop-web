import { expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { PartialStoryFn, StoryContext } from "@storybook/csf";

import withRouter from "@components/RouterWrapper";
import AboutCTA from "./AboutCTA";
const renderWithRouter = (
  Story: PartialStoryFn,
  context: StoryContext = { parameters: {} } as StoryContext,
) => {
  return render(withRouter(Story, context));
};
describe("components/StepCard", () => {
  test("render component", () => {
    renderWithRouter(() => (
      <AboutCTA
        imageUrl="https://place-hold.it/150x150"
        title="Today, SquareUp Continues to Thrive as a Leading Digital Product Agency....."
        description="Combining the power of design, engineering, and project management to create transformative digital experiences. They invite you to join them on their journey and discover how they can help bring your digital ideas to life."
        header="Welcome to Hoistloop"
        subHeader="Where collaboration, Expertise, and Client-Centricity Intersect to Shape the Future of Digital Innovation."
        button={{ text: "Start Project", link: "/contact" }}
      />
    ));
    expect(screen.getByText(/Today, SquareUp Continues/i)).toBeDefined();
  });
});
