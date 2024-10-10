import type { Meta, StoryObj } from "@storybook/react";

import FeatureHeader from ".";

const meta = {
  title: "FeatureHeader",
  component: FeatureHeader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FeatureHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Design",
    description:
      "At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.",
    subtitle: "Our design services include:",
  },
};
