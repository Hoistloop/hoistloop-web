import type { Meta, StoryObj } from "@storybook/react";

import InfoCard from "./InfoCard";
import { CursorArrowRippleIcon } from "@heroicons/react/20/solid";

const meta = {
  title: "InfoCard",
  component: InfoCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InfoCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    description: "Intuitive and Visually Appealing Interface Design",
    icon: <CursorArrowRippleIcon />,
  },
};
