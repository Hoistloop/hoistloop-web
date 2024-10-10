import { expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { PaintBrushIcon } from "@heroicons/react/20/solid";
import CardGroup from "@components/CardGroup";

describe("components/Card", () => {
  test("render component", () => {
    render(
      <CardGroup
        cards={[
          {
            icon: <PaintBrushIcon />,
            title: "Dog",
            description:
              "At HoistLoop, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences",
            buttonText: "learn more",
          },
          {
            icon: <PaintBrushIcon />,
            title: "Dog",
            description:
              "At HoistLoop, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences",
            buttonText: "learn more",
          },
          {
            icon: <PaintBrushIcon />,
            title: "Dog",
            description:
              "At HoistLoop, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences",
            buttonText: "learn more",
          },
        ]}
      />,
    );

    expect(screen.queryAllByText(/title1/i)).toBeDefined();
    expect(screen.queryAllByText(/description1/i)).toBeDefined();
    expect(screen.queryAllByText(/button1/i)).toBeDefined();
    expect(screen.queryAllByText(/title2/i)).toBeDefined();
    expect(screen.queryAllByText(/description2/i)).toBeDefined();
    expect(screen.queryAllByText(/button2/i)).toBeDefined();
  });
});
