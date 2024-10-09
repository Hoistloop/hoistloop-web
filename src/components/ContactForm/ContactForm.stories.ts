import type { Meta, StoryObj } from "@storybook/react";
import ContactForm from "../ContactForm";
import { PaintBrushIcon } from "@heroicons/react/20/solid";

const meta = {
  title: "ContactForm",
  component: ContactForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ContactForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Design",
    description:
      "At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.",
    buttonText: "Learn More",
  },
};

