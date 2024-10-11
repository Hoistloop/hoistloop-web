import type { Meta, StoryObj } from "@storybook/react";
import AboutCTA from "./AboutCTA";

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
  args: {
    imageUrl: "https://place-hold.it/150x150",
    title:
      "Today, SquareUp Continues to Thrive as a Leading Digital Product Agency.....",
    description:
      "Combining the power of design, engineering, and project management to create transformative digital experiences. They invite you to join them on their journey and discover how they can help bring your digital ideas to life.",
    button: { text: "Start Project" },
    header: "Welcome to Hoistloop",
    subHeader:
      "Where collaboration, Expertise, and Client-Centricity Intersect to Shape the Future of Digital Innovation.",
  },
};
