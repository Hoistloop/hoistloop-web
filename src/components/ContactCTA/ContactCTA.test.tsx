import { expect } from "vitest";
import { render, screen } from "@testing-library/react";

import ContactCTA from "./ContactCTA";

describe("components/ContactCTA", () => {
  test("render component", () => {
    render(
      <ContactCTA
        imageSrc="test imageSrc"
        imageUrl="this is a test imageUrl"
        title="title"
        subtitle="subtitle"
        buttonText="button test"
        contactHref="test href"
      />,
    );
    expect(screen.queryAllByAltText(/title/i)).toBeDefined();
    expect(screen.queryAllByAltText(/subtitle/i)).toBeDefined();
    expect(screen.queryAllByAltText(/button test/i)).toBeDefined();
    expect(screen.queryAllByAltText(/test href/i)).toBeDefined();
  });
});
