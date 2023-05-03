import { type Config } from "tailwindcss";

const colors = {
  darker: "#222831",
  dark: "#393E46",
  yellow: "#FFD369",
  white: "#EEEEEE",
} as const;

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: colors,
      textColor: colors,
      borderColor: colors,
      hover: {
        backgroundColor: colors,
        textColor: colors,
        borderColor: colors,
      },
    },
  },
  plugins: [],
} satisfies Config;
