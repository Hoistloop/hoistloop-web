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
  },
  {
    icon: (
      <FaReact
        size={40}
        color="#E6E6E6"
      />
    ),
  },
  {
    icon: (
      <FaNodeJs
        size={40}
        color="#E6E6E6"
      />
    ),
  },
  {
    icon: (
      <RiNextjsLine
        size={40}
        color="#E6E6E6"
      />
    ),
  },
  {
    icon: (
      <FaPhp
        size={40}
        color="#E6E6E6"
      />
    ),
  },
];

export const Default: Story = {
  args: {
    brands,
  },
};
