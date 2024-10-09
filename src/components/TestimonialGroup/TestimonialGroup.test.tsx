import { render, screen } from "@testing-library/react";
import { expect, describe, test } from "vitest";

import Testimonial from "@components/Testimonial";
import TestimonialGroup from "@components/TestimonialGroup";

describe("components/TestimonialGroup", () => {
  test("renders a TestimonialGroup", () => {
    render(
      <TestimonialGroup>
        <Testimonial
          heading="HoistLoop has been Instrumental in Transforming our Online Presence."
          quote="Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier."
          personCardProps={{
            name: "John Doe",
            title: "CEO of HositLoop",
            anchorHref: "https://fakeurl.com",
            anchorText: "Open Website",
            imageSrc: "https://place-hold.it/60x60",
            imageAltText: "John Doe Photo",
          }}
        />
        <Testimonial
          heading="Working with HoistLoop was a breeze."
          quote="They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience. HoistLoop is a trusted partner we highly recommend."
          personCardProps={{
            name: "John Doe",
            title: "CEO of HositLoop",
            anchorHref: "https://fakeurl.com",
            anchorText: "Open Website",
            imageSrc: "https://place-hold.it/60x60",
            imageAltText: "John Doe Photo",
          }}
        />
        <Testimonial
          heading="HoistLoop developed a comprehensive booking and reservation system for our event management company"
          quote="Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients' event experiences."
          personCardProps={{
            name: "John Doe",
            title: "CEO of HositLoop",
            anchorHref: "https://fakeurl.com",
            anchorText: "Open Website",
            imageSrc: "https://place-hold.it/60x60",
            imageAltText: "John Doe Photo",
          }}
        />
        <Testimonial
          heading="ProTech Solutions turned to HoistLoop to automate our workflow"
          quote="They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. HoistLoop's expertise and professionalism have made them a trusted technology partner."
          personCardProps={{
            name: "John Doe",
            title: "CEO of HoistLoop",
            anchorHref: "https://fakeurl.com",
            anchorText: "Open Website",
            imageSrc: "https://place-hold.it/60x60",
            imageAltText: "John Doe Photo",
          }}
        />
      </TestimonialGroup>,
    );

    // Check that the heading and quote are rendered correctly
    expect(
      screen.getByText(
        /ProTech Solutions turned to HoistLoop to automate our workflow/i,
      ),
    ).toBeDefined();
    expect(
      screen.getByText(
        /They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. HoistLoop's expertise and professionalism have made them a trusted technology partner./i,
      ),
    ).toBeDefined();

    // Check that the PersonCard component is rendered with the correct props
    expect(screen.queryAllByText(/John Doe/i)).toBeDefined();
    expect(screen.getByText(/CEO of HoistLoop/i)).toBeDefined();
    expect(screen.queryAllByText(/Open Website/i)).toBeDefined();
    expect(screen.queryAllByText(/John Doe Photo/i)).toBeDefined();
  });
});
