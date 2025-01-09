import { expect } from "vitest";
import { render, screen } from "@testing-library/react";
import DemoItemGroup from "@components/DemoItemGroup";

const items = [
  {
    header: "E-Commerce Platform for Gadget Zone",
    imageUrl: "https://place-hold.it/600x423",
    title: "Tech Haven",
    url: "https://techhaven.com",
    description:
      "We crafted a cutting-edge e-commerce platform for Tech Haven, a leading electronics retailer. The site features advanced search filters, detailed product comparisons, and a robust warranty integration, enhancing the shopping experience for tech enthusiasts.",
  },
  {
    header: "Online Marketplace for Home Decor Center",
    imageUrl: "https://place-hold.it/600x423",
    title: "Decor Dreams",
    url: "https://decordreams.com",
    description:
      "Developed an intuitive platform for Decor Dreams, specializing in home decor. The marketplace offers immersive 3D previews, virtual room setups, and seamless checkout, driving higher engagement and sales.",
  },
  {
    header: "Luxury Goods Store for Elegant Emporium",
    imageUrl: "https://place-hold.it/600x423",
    title: "Elegant Emporium",
    url: "https://elegantemporium.com",
    description:
      "Built a sophisticated e-commerce website for Elegant Emporium, showcasing their luxury collection. Features included exclusive member access, gift customization, and premium delivery options.",
  },
  {
    header: "Artisan Crafts Platform for Handmade Haven",
    imageUrl: "https://place-hold.it/600x423",
    title: "Handmade Haven",
    url: "https://handmadehaven.com",
    description:
      "Created a niche marketplace for Handmade Haven to support artisans worldwide. Integrated video showcases, maker profiles, and eco-friendly packaging options for an authentic experience.",
  },
  {
    header: "Pet Supplies Store for Paws & Claws",
    imageUrl: "https://place-hold.it/600x423",
    title: "Paws & Claws",
    url: "https://pawsandclaws.com",
    description:
      "Launched an e-commerce site tailored for pet lovers. Features include smart reordering, pet profiles for customized suggestions, and interactive product guides for an enhanced shopping experience.",
  },
  {
    header: "Sporting Goods Website for Active Gear",
    imageUrl: "https://place-hold.it/600x423",
    title: "Active Gear",
    url: "https://activegear.com",
    description:
      "Designed an e-commerce platform for Active Gear, catering to sports enthusiasts. The site included advanced filtering by activity, size recommendations, and live inventory updates.",
  },
  {
    header: "Bookstore Platform for Reader's Retreat",
    imageUrl: "https://place-hold.it/600x423",
    title: "Reader's Retreat",
    url: "https://readersretreat.com",
    description:
      "Developed a comprehensive online bookstore featuring curated collections, a subscription box for book lovers, and advanced search by themes and genres.",
  },
  {
    header: "Gourmet Food Shop for Taste Buds .....",
    imageUrl: "https://place-hold.it/600x423",
    title: "Taste Buds",
    url: "https://tastebuds.com",
    description:
      "Built an e-commerce site for Taste Buds, offering gourmet foods and snacks. Features included pairing recommendations, recipe integrations, and seasonal promotional campaigns.",
  },
];

describe("components/DemoItemGroup", () => {
  test("render component", () => {
    render(<DemoItemGroup items={items} />);

    expect(screen.queryAllByText(/E-Commerce/i)).toBeDefined();
    expect(screen.getByText(/Online/i)).toBeDefined();
    expect(screen.getByText(/Luxury/i)).toBeDefined();
  });
});
