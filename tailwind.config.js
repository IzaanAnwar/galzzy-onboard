import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        "dark": {
          extend: "dark", // <- inherit default values from dark theme
          colors: {
            content1: "#0A0811", // Very dark shade near black
            content2: "#1C103A", // Dark shade derived from the main color
            background: "#0B0618", // Near black for the background
            foreground: "#ffffff", // White for better contrast
            primary: {
              50: "#0E0934",
              100: "#1A1266",
              200: "#261899",
              300: "#331ECC",
              400: "#3D1EFF", // Main color
              500: "#5A3DFF",
              600: "#6B53FF",
              700: "#7C6AFF",
              800: "#8D81FF",
              900: "#9E98FF",
              DEFAULT: "#3D1EFF",
              foreground: "#ffffff", // White for better readability
            },
            secondary: {
              50: "#050627",
              100: "#0A0C4E",
              200: "#0F126E",
              300: "#14178D",
              400: "#191DAD",
              500: "#1E22CD", // Darker than primary color
              600: "#2327EC",
              700: "#282CFF",
              800: "#2D31FF",
              900: "#3236FF",
              DEFAULT: "#1E22CD",
              foreground: "#ffffff", // White for better readability
            },
            focus: "#6848FF", // Slightly lighter focus color
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
        "light": {
          extend: "light", // <- inherit default values from light theme
          colors: {
            content1: "#f5f5ff", // Very light shade for content background
            content2: "#e0e0ff", // Light shade derived from the main color
            background: "#ffffff", // White for the background
            foreground: "#000000", // Black for better contrast
            primary: {
              50: "#ebedff",
              100: "#d8d9ff",
              200: "#c5c5ff",
              300: "#b3b0ff",
              400: "#a29aff",
              500: "#9184ff",
              600: "#7f6fff",
              700: "#6d59ff",
              800: "#5b43ff",
              900: "#4930ff",
              DEFAULT: "#3d1eff", // Main color
              foreground: "#ffffff", // Black for better readability
            },
            focus: "#4930ff", // Slightly darker focus color
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
      },
    })]
}
