import { expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { PartialStoryFn, StoryContext } from "@storybook/csf";

import withRouter from "@components/RouterWrapper";
import ContactCTA from "./ContactCTA";
const renderWithRouter = (
  Story: PartialStoryFn,
  context: StoryContext = { parameters: {} } as StoryContext,
) => {
  return render(withRouter(Story, context));
};
describe("components/ContactCTA", () => {
  test("render component", () => {
    renderWithRouter(() => (
      <ContactCTA
        imageSrc="test imageSrc"
        imageUrl="this is a test imageUrl"
        title="title"
        subtitle="subtitle"
        buttonText="button test"
        contactHref="test href"
      />
    ));
    expect(screen.queryAllByAltText(/title/i)).toBeDefined();
    expect(screen.queryAllByAltText(/subtitle/i)).toBeDefined();
    expect(screen.queryAllByAltText(/button test/i)).toBeDefined();
    expect(screen.queryAllByAltText(/test href/i)).toBeDefined();
  });
});
