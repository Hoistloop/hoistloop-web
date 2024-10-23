import { expect } from "vitest";
import { render, screen } from "@testing-library/react";

import ContactInfo from "./ContactInfo";
import { FaceSmileIcon } from "@heroicons/react/20/solid";

describe("components/ContactInfo", () => {
  test("render component", () => {
    render(
      <ContactInfo
        title="title test"
        subtitle="subtitle test"
        label="label test"
        socialIcons={[
          {
            icon: <FaceSmileIcon />,
            href: "href hoistloop",
          },
        ]}
      />,
    );
    expect(screen.queryAllByAltText(/title tes/i)).toBeDefined();
    expect(screen.queryAllByAltText(/subtitle test/i)).toBeDefined();
    expect(screen.queryAllByAltText(/label test/i)).toBeDefined();
  });
});
