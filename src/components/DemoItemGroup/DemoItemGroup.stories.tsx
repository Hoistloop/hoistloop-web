import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import DemoItemGroup, {
  type DemoItemGroupProps,
} from "@components/DemoItemGroup/DemoItemGroup";

vi.mock("@components/DemoItem/DemoItem", () => ({
  default: ({ title, header }: { title: string; header: string }) => (
    <div data-testid="demo-item">
      <span>{header}</span>
      <span>{title}</span>
    </div>
  ),
}));

describe("DemoItemGroup", () => {
  it("debería renderizar correctamente la cantidad de DemoItem pasados en las props", () => {
    const items: DemoItemGroupProps["items"] = [
      {
        header: "Header 1",
        imageUrl: "image1.png",
        title: "Title 1",
        url: "http://example.com/1",
        description: "Description 1",
      },
      {
        header: "Header 2",
        imageUrl: "image2.png",
        title: "Title 2",
        url: "http://example.com/2",
        description: "Description 2",
      },
    ];

    render(<DemoItemGroup items={items} />);

    const demoItems = screen.getAllByTestId("demo-item");
    expect(demoItems).toHaveLength(items.length);
  });
});
