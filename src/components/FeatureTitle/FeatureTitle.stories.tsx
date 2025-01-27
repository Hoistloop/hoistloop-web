import type { Meta, StoryObj } from "@storybook/react";

import FeatureTitle from ".";

const meta = {
  title: "FeatureTitle",
  component: FeatureTitle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FeatureTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "User Experience (UX) Design",
  },
};
