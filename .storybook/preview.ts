import type { Preview } from "@storybook/react";
import "../src/index.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      values: [{ name: "hoistloop", value: "#1E1E1E", appBg: "#1E1E1E" }],
      default: "hoistloop",
    },
  },
};

export default preview;
