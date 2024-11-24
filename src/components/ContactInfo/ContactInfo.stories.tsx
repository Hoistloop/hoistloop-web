import type { Meta, StoryObj } from "@storybook/react";
import ContactInfo from "@components/ContactInfo";
import {
  FaceFrownIcon,
  PaintBrushIcon,
  FaceSmileIcon,
} from "@heroicons/react/20/solid";

const meta = {
  title: "ContactInfo",
  component: ContactInfo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ContactInfo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Operating Days",
    subtitle: "Monday to Friday",
    label: "Stay Connected",
    socialIcons: [
      {
        icon: <FaceFrownIcon />,
        href: "https://facebook.com/hoistloop",
      },
      {
        icon: <PaintBrushIcon />,
        href: "https://x.com/hoistloop",
      },
      {
        icon: <FaceSmileIcon />,
        href: "https://www.linkedin.com/company/hoistloop/",
      },
    ],
  },
};
