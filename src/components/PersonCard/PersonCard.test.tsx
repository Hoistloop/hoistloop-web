import { expect } from "vitest";
import { render, screen } from "@testing-library/react";
import PersonCard from "./PersonCard";

describe("components/PersonCard", () => {
  test("render component", () => {
    render(
      <PersonCard
        name="John Doe"
        title="CEO of HoistLoop"
        anchorHref="https://dummylink.com"
        anchorText="anchor text"
        imageSrc="https://place-hold.it/60x60"
        imageAltText="John Doe Photo"
      />,
    );

    expect(screen.getByText(/John Doe/i)).toBeDefined();
    expect(screen.getByText(/CEO of HoistLoop/i)).toBeDefined();
    expect(screen.getByText(/anchor text/i)).toBeDefined();
    expect(screen.getByAltText(/John Doe Photo/i)).toBeDefined();
  });
});
