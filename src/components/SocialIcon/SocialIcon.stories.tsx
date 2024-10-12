import type { Meta, StoryObj } from "@storybook/react";
import { PaintBrushIcon } from "@heroicons/react/20/solid";

import SocialIcon from "@components/SocialIcon";

const meta = {
  title: "SocialIcon",
  component: SocialIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SocialIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <PaintBrushIcon />,
  },
};
