import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect } from "vitest";
import { PartialStoryFn, StoryContext } from "@storybook/csf";

import withRouter from "@components/RouterWrapper";
import Navbar from "./Navbar";
import routes from "@/constants/routes";

const renderWithRouter = (
  Story: PartialStoryFn,
  context: StoryContext = { parameters: {} } as StoryContext,
) => {
  return render(withRouter(Story, context));
};

describe("Navbar withRouter Decorator", () => {
  test("Render button contact", () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    renderWithRouter(() => <Navbar />);

    expect(screen.getByText("Contact")).toBeDefined();
    expect(screen.getByText("Home")).toBeDefined();
    expect(screen.getByText("Services")).toBeDefined();
  });

  test("Render button mobile", () => {
    renderWithRouter(() => <Navbar />);

    const button = screen.getByTestId("mobile-menu-button");

    fireEvent.click(button);

    // Verificar que los elementos del menú móvil estén presentes
    routes
      .filter((route) => route.showNav)
      .forEach((route) => {
        const menuItem = screen.getByTestId(route.name);
        expect(menuItem).toBeDefined();
      });
  });
});
