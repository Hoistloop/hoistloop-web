import type { Meta, StoryObj } from "@storybook/react";
import AboutStepGroup from "./AboutStepGroup";
import AboutStep from "@components/AboutStep/AboutStep";

const meta = {
  title: "AboutStepGroup",
  component: AboutStepGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AboutStepGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <AboutStep
          title="Title"
          step="01"
          description="Once upon a time, in a world driven by technology, a group of talented designers came together with a shared vision. They believed that design could shape the way people interacted with digital products. With their passion for aesthetics and usability, they founded SquareUp Digital Product Agency's design department. Their mission was to create visually stunning and user-friendly interfaces that would leave a lasting impression."
        />
        <AboutStep
          title="Title"
          step="02"
          description="Once upon a time, in a world driven by technology, a group of talented designers came together with a shared vision. They believed that design could shape the way people interacted with digital products. With their passion for aesthetics and usability, they founded SquareUp Digital Product Agency's design department. Their mission was to create visually stunning and user-friendly interfaces that would leave a lasting impression."
        />
      </>
    ),
  },
};
