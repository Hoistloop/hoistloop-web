import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import { PartialStoryFn, StoryContext } from "@storybook/csf";

import withRouter from "@components/RouterWrapper";

const TestComponent = () => <div>Test Component</div>;

const renderWithRouter = (
  Story: PartialStoryFn,
  context: StoryContext = { parameters: {} } as StoryContext,
) => {
  return render(withRouter(Story, context));
};

describe("withRouter Decorator", () => {
  test("renders the Story component correctly with default initialEntries", () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    renderWithRouter(() => <TestComponent />, { parameters: {} });

    expect(screen.getByText("Test Component")).toBeDefined();
  });

  test("renders the Story component with multiple routes", () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const context: StoryContext = {
      parameters: {
        router: {
          routes: ["/", "/another"],
        },
      },
    };

    renderWithRouter(() => <TestComponent />, context);

    expect(screen.getByText("Test Component")).toBeDefined();
  });
});
