import type { Meta, StoryObj } from "@storybook/react";

import Hero from "./Hero";

const meta = {
  title: "Hero",
  component: Hero,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Title",
    subtitle: "Subtitle",
    imageUrl: "https://place-hold.it/1596x336",
  },
};
