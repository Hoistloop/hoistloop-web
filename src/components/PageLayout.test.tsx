import { expect } from "vitest";
import { render, screen } from "@testing-library/react";
import PageLayout from "@components/PageLayout";

describe("components/PageLayout", () => {
  test("renders component", () => {
    render(
      <PageLayout>
        <h1>Test child</h1>
      </PageLayout>,
    );

    expect(screen.getByText(/test child/i)).toBeDefined();
  });
});
