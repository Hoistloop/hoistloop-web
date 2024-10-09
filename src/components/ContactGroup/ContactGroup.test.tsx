import { expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { CursorArrowRippleIcon } from "@heroicons/react/20/solid";

import ContactItem from "@components/ContactItem";

describe("components/ContactItem", () => {
  test("render component", () => {
    render(
      <ContactItem
        text="hello@hoistloop"
        icon={<CursorArrowRippleIcon />}
      />,
    );

    expect(screen.getByText(/hello@hoistloop/i)).toBeDefined();
  });
});
