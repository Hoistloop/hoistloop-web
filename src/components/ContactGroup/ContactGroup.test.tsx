import { expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { CursorArrowRippleIcon } from "@heroicons/react/20/solid";
import ContactGroup from "@components/ContactGroup";

describe("components/ContactGroup", () => {
  test("render component", () => {
    render(
      <ContactGroup
        contacts={[
          {
            text: "hello@hoistloop",
            icon: <CursorArrowRippleIcon />,
          },
        ]}
      />,
    );

    expect(screen.getByText(/hello@hoistloop/i)).toBeDefined();
  });
});
