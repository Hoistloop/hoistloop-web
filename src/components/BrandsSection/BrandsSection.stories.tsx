import { Meta, StoryObj } from "@storybook/react";
import { FaAws, FaReact, FaNodeJs, FaPhp } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import BrandsSection, { Brand } from "./BrandsSection";

const meta: Meta<typeof BrandsSection> = {
  title: "BrandsSection",
  component: BrandsSection,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

const brands: Brand[] = [
  {
    icon: (
      <FaAws
        size={40}
        color="#E6E6E6"
      />
    ),
    type: "aws",
  },
  {
    icon: (
      <FaReact
        size={40}
        color="#E6E6E6"
      />
    ),
    type: "react",
  },
  {
    icon: (
      <FaNodeJs
        size={40}
        color="#E6E6E6"
      />
    ),
    type: "nodejs",
  },
  {
    icon: (
      <RiNextjsLine
        size={40}
        color="#E6E6E6"
      />
    ),
    type: "nextjs",
  },
  {
    icon: (
      <FaPhp
        size={40}
        color="#E6E6E6"
      />
    ),
    type: "php",
  },
];

export const Default: Story = {
  args: {
    brands,
  },
};
