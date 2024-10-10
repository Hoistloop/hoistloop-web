import type { Meta, StoryObj } from "@storybook/react";
import StepCardGroup from "@components/StepCardGroup";

const meta = {
  title: "StepCardGroup",
  component: StepCardGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof StepCardGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    steps: [
      {
        step: "01",
        title: "Design",
        description:
          "Once upon a time, in a world driven by technology, a group of talented designers came together with a shared vision. They believed that design could shape the way people interacted with digital products. With their passion for aesthetics and usability, they founded SquareUp Digital Product Agency's design department. Their mission was to create visually stunning and user-friendly interfaces that would leave a lasting impression.",
      },
      {
        step: "01",
        title: "Design",
        description:
          "Once upon a time, in a world driven by technology, a group of talented designers came together with a shared vision. They believed that design could shape the way people interacted with digital products. With their passion for aesthetics and usability, they founded SquareUp Digital Product Agency's design department. Their mission was to create visually stunning and user-friendly interfaces that would leave a lasting impression.",
      },
      {
        step: "01",
        title: "Design",
        description:
          "Once upon a time, in a world driven by technology, a group of talented designers came together with a shared vision. They believed that design could shape the way people interacted with digital products. With their passion for aesthetics and usability, they founded SquareUp Digital Product Agency's design department. Their mission was to create visually stunning and user-friendly interfaces that would leave a lasting impression.",
      },
      {
        step: "01",
        title: "Design",
        description:
          "Once upon a time, in a world driven by technology, a group of talented designers came together with a shared vision. They believed that design could shape the way people interacted with digital products. With their passion for aesthetics and usability, they founded SquareUp Digital Product Agency's design department. Their mission was to create visually stunning and user-friendly interfaces that would leave a lasting impression.",
      },
    ],
  },
};
