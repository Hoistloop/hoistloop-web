import { expect } from "vitest";
import { render, screen } from "@testing-library/react";

import Header from "@components/Header";

describe("components/Header", () => {
  test("render component", () => {
    const { container } = render(
      <Header
        imageUrl="imageUrl"
        title="this is a test title"
        worksText="WorksText"
        contactText="ContactText"
        contactHref="https://www.contact.com/"
        worksHref="https://www.works.com/"
        description="test description"
        words={[
          "Startups",
          "Enterprise leaders",
          "Media & Publishers",
          "Social Good",
        ]}
      />,
    );

    const section = container.querySelector("section");
    expect(section).toBeDefined();

    const styles = getComputedStyle(section as HTMLElement);
    expect(styles.backgroundImage).toBe("url(imageUrl)");

    expect(screen.getByText(/this is a test title/i)).toBeDefined();
    expect(screen.getByText(/WorksText/i)).toBeDefined();
    expect(screen.getByText(/ContactText/i)).toBeDefined();
    expect(
      (screen.getByRole("link", { name: "WorksText" }) as HTMLAnchorElement)
        .href,
    ).toBe("https://www.works.com/");
    expect(
      (screen.getByRole("link", { name: "ContactText" }) as HTMLAnchorElement)
        .href,
    ).toBe("https://www.contact.com/");

    expect(screen.getByText(/test description/i)).toBeDefined();
    expect(screen.getByText(/Startups/i)).toBeDefined();
    expect(screen.getByText(/Enterprise leaders/i)).toBeDefined();
    expect(screen.getByText(/Media & Publishers/i)).toBeDefined();
    expect(screen.getByText(/Social Good/i)).toBeDefined();
  });
});
