import type { Meta, StoryObj } from "@storybook/react";
import AboutCTA from "./AboutCTS";

const meta = {
  title: "AboutCTA",
  component: AboutCTA,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AboutCTA>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
