import type { Meta, StoryObj } from "@storybook/react";

import FeatureItem from ".";
import { PaintBrushIcon } from "@heroicons/react/20/solid";

const meta = {
  title: "FeatureItem",
  component: FeatureItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FeatureItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <PaintBrushIcon />,
    subtitle: "User Research and Persona Development",
  },
};
