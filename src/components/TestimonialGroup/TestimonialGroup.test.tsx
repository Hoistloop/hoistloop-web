import { render, screen } from "@testing-library/react";
import { expect, describe, test } from "vitest";

import TestimonialGroup from "@components/TestimonialGroup";

describe("components/TestimonialGroup", () => {
  test("renders a TestimonialGroup", () => {
    render(
      <TestimonialGroup
        testimonials={[
          {
            heading:
              "HoistLoop has been Instrumental in Transforming our Online Presence.",
            quote:
              "Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.",
            personCardProps: {
              name: "John Doe",
              title: "CEO of HositLoop",
              anchorHref: "https://fakeurl.com",
              anchorText: "Open Website",
              imageSrc: "https://place-hold.it/60x60",
              imageAltText: "John Doe Photo",
            },
          },
          {
            heading:
              "HoistLoop has been Instrumental in Transforming our Online Presence.",
            quote:
              "Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.",
            personCardProps: {
              name: "John Doe",
              title: "CEO of HositLoop",
              anchorHref: "https://fakeurl.com",
              anchorText: "Open Website",
              imageSrc: "https://place-hold.it/60x60",
              imageAltText: "John Doe Photo",
            },
          },
          {
            heading:
              "HoistLoop has been Instrumental in Transforming our Online Presence.",
            quote:
              "Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.",
            personCardProps: {
              name: "John Doe",
              title: "CEO of HositLoop",
              anchorHref: "https://fakeurl.com",
              anchorText: "Open Website",
              imageSrc: "https://place-hold.it/60x60",
              imageAltText: "John Doe Photo",
            },
          },
          {
            heading:
              "HoistLoop has been Instrumental in Transforming our Online Presence.",
            quote:
              "Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.",
            personCardProps: {
              name: "John Doe",
              title: "CEO of HositLoop",
              anchorHref: "https://fakeurl.com",
              anchorText: "Open Website",
              imageSrc: "https://place-hold.it/60x60",
              imageAltText: "John Doe Photo",
            },
          },
        ]}
      />,
    );

    // Check that the heading and quote are rendered correctly
    expect(
      screen.queryAllByText(
        /HoistLoop has been Instrumental in Transforming our Online Presence./i,
      ),
    ).toBeDefined();
    expect(
      screen.queryAllByText(
        /Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier./i,
      ),
    ).toBeDefined();

    // Check that the PersonCard component is rendered with the correct props
    expect(screen.queryAllByText(/John Doe/i)).toBeDefined();
    expect(screen.queryAllByText(/CEO of HoistLoop/i)).toBeDefined();
    expect(screen.queryAllByText(/Open Website/i)).toBeDefined();
    expect(screen.queryAllByText(/John Doe Photo/i)).toBeDefined();
  });
});
