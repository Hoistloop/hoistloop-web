import { FaAmazon, FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { ReactNode } from "react";
import { Meta, StoryObj } from "@storybook/react";
import BrandsSection, { BrandsProps } from "./BrandsSection";

const meta = {
  title: "BrandsSection",
  component: BrandsSection,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BrandsSection>;

export default meta;
type Story = StoryObj<typeof meta>;

const brands: BrandsProps["brands"] = [
  { type: "FaAws", size: 40, color: "#FF9900" },
  { type: "FaReact", size: 40, color: "#61DAFB" },
  { type: "FaNode", size: 40, color: "#000000" },
  { type: "SiTypescript", size: 40, color: "#61DAFB" },
  { type: "SiNextdotjs", size: 40, color: "#FF9900" },
  { type: "SiPhp", size: 40, color: "#E10098" },
];

export const Default: Story = {
  args: {
    brands,
  },
};
