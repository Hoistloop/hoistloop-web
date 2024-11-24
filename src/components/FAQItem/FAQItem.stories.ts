import type { Meta, StoryObj } from "@storybook/react";
import FAQItem from "@components/FAQItem";

const meta = {
  title: "FAQ Item",
  component: FAQItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FAQItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    index: 1,
    question: "What services does SquareUp provide?",
    response:
      "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
  },
};
