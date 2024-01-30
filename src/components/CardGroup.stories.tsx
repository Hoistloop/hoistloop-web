import type { Meta, StoryObj } from "@storybook/react";
import { PaintBrushIcon } from "@heroicons/react/20/solid";
import CardGroup from "./CardGroup";
import Card from "./Card";

const meta = {
  title: "CardGroup",
  component: CardGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Card
          iconCard={<PaintBrushIcon />}
          title="Dog"
          subtitle="At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences"
          buttonCard="learn more"
        />
        <Card
          iconCard={<PaintBrushIcon />}
          title="Cat"
          subtitle="At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences"
          buttonCard="learn more"
        />
        <Card
          iconCard={<PaintBrushIcon />}
          title="Chicken"
          subtitle="At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences"
          buttonCard="learn more"
        />
      </>
    ),
  },
};
