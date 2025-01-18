import { expect } from "vitest";
import { render, screen } from "@testing-library/react";
import PageLayout from "@components/PageLayout";
import { PartialStoryFn, StoryContext } from "@storybook/csf";

import withRouter from "@components/RouterWrapper";
const renderWithRouter = (
  Story: PartialStoryFn,
  context: StoryContext = { parameters: {} } as StoryContext,
) => {
  return render(withRouter(Story, context));
};
describe("components/PageLayout", () => {
  test("renders component", () => {
    renderWithRouter(() => (
      <PageLayout>
        <h1>Test child</h1>
      </PageLayout>
    ));
    expect(screen.getByText(/test child/i)).toBeDefined();
  });
});
