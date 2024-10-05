import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindConfig: resolve(__dirname, "./tailwind.config.js"),
  tailwindFunctions: ["clsx", "tw"],
  tabWidth: 2,
  quoteProps: "consistent",
  endOfLine: "crlf",
  singleAttributePerLine: true,
};
