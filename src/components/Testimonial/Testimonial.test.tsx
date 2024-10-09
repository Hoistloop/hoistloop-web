import { render, screen } from "@testing-library/react";
import { expect, describe, test } from "vitest";
import Testimonial from "./Testimonial";

describe("components/Testimonial", () => {
  test("renders Testimonial with heading, quote, and PersonCard", () => {
    render(
      <Testimonial
        heading="HoistLoop has been Instrumental"
        quote="Their expertise in web development has transformed our online presence."
        personCardProps={{
          name: "John Doe",
          title: "CEO of HoistLoop",
          anchorHref: "https://dummylink.com",
          anchorText: "Visit Profile",
          imageSrc: "https://place-hold.it/60x60",
          imageAltText: "John Doe Photo",
        }}
      />,
    );

    // Check that the heading and quote are rendered correctly
    expect(screen.getByText(/HoistLoop has been Instrumental/i)).toBeDefined();
    expect(
      screen.getByText(
        /Their expertise in web development has transformed our online presence./i,
      ),
    ).toBeDefined();

    // Check that the PersonCard component is rendered with the correct props
    expect(screen.getByText(/John Doe/i)).toBeDefined();
    expect(screen.getByText(/CEO of HoistLoop/i)).toBeDefined();
    expect(screen.getByText(/Visit Profile/i)).toBeDefined();
    expect(screen.getByAltText(/John Doe Photo/i)).toBeDefined();
  });
});
