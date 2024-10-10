import type { Meta, StoryObj } from "@storybook/react";
import FAQGroup from "@components/FAQGroup";

const meta = {
  title: "FAQ Group",
  component: FAQGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FAQGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    faqs: [
      {
        index: 1,
        question: "What services does SquareUp provide?",
        response:
          "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
      },
      {
        index: 2,
        question: "What services does SquareUp provide?",
        response:
          "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
      },
      {
        index: 3,
        question: "What services does SquareUp provide?",
        response:
          "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
      },
    ],
  },
};
