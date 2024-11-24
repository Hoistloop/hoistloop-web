import type { Meta, StoryObj } from "@storybook/react";
import {
  PaintBrushIcon,
  HomeIcon,
  UserCircleIcon,
  PencilIcon,
} from "@heroicons/react/20/solid";
import FeatureGroup from "@components/FeatureGroup";

const meta = {
  title: "FeatureGroup",
  component: FeatureGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FeatureGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    featureItems: [
      {
        icon: <PaintBrushIcon />,
        subtitle: "User Research and Persona Development",
      },
      {
        icon: <HomeIcon />,
        subtitle: "Information Architecture and Wireframing",
      },
      {
        icon: <UserCircleIcon />,
        subtitle: "Interactive Prototyping and User Testing",
      },
      {
        icon: <PencilIcon />,
        subtitle: "UI Design and Visual Branding",
      },
    ],
  },
};
