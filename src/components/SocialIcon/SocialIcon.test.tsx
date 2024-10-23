import { expect } from "vitest";
import { render } from "@testing-library/react";
import { PaintBrushIcon } from "@heroicons/react/20/solid";

import SocialIcon from "@components/SocialIcon";

describe("components/SocialIcon", () => {
  test("renders component", () => {
    const { container } = render(
      <SocialIcon
        icon={<PaintBrushIcon />}
        href="http://fakeurl.com"
      />,
    );

    const svg = container.querySelector("svg");

    expect(svg).toBeDefined();
    expect(
      (svg as SVGSVGElement).classList.contains(
        "flex size-16 items-center justify-center rounded-xl border border-neutral-800 text-accent max-laptop:size-[52px] [&>svg]:size-6 max-laptop:[&>svg]:h-5",
      ),
    );
  });
});
