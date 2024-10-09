import { expect } from "vitest";
import { render } from "@testing-library/react";
import { PaintBrushIcon } from "@heroicons/react/20/solid";

import Icon from "@components/Icon";

describe("components/Icon", () => {
  test("renders component", () => {
    const { container } = render(<Icon icon={<PaintBrushIcon />} />);

    const svg = container.querySelector("svg");

    expect(svg).toBeDefined();
    expect(
      (svg as SVGSVGElement).classList.contains(
        "border-neutral-800 max-laptop:size-[70px] max-laptop:[&>svg]:h-[30px] max-mobile:size-[58px] max-mobile:[&>svg]:h-[26px] flex h-20 w-20 items-center justify-center rounded-xl border text-accent [&>svg]:h-10",
      ),
    );
  });
});
