/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./confirmation/**/*.html"],
  theme: {
    extend: {
      colors: {
        "secondary-fixed": "#ffdea5",
        "surface-container-lowest": "#ffffff",
        "on-primary-fixed": "#0d1c32",
        "tertiary-container": "#002201",
        "surface-tint": "#515f78",
        "on-error-container": "#93000a",
        "error-container": "#ffdad6",
        "surface-dim": "#d9dadb",
        "surface-container-highest": "#e1e3e4",
        "on-tertiary-fixed": "#002201",
        primary: "#000000",
        tertiary: "#000000",
        "primary-fixed": "#d6e3ff",
        "on-tertiary-container": "#609056",
        "surface-bright": "#f8f9fa",
        secondary: "#775a19",
        "on-primary-fixed-variant": "#39475f",
        background: "#f8f9fa",
        "on-tertiary": "#ffffff",
        "tertiary-fixed": "#bcf0ae",
        "secondary-container": "#fed488",
        "on-primary-container": "#76849f",
        "tertiary-fixed-dim": "#a1d494",
        "on-background": "#191c1d",
        "outline-variant": "#c5c6cd",
        "inverse-primary": "#b9c7e4",
        "on-secondary-fixed-variant": "#5d4201",
        "inverse-on-surface": "#f0f1f2",
        "inverse-surface": "#2e3132",
        "surface-variant": "#e1e3e4",
        "on-primary": "#ffffff",
        "surface-container-low": "#f3f4f5",
        "on-secondary": "#ffffff",
        "on-error": "#ffffff",
        "primary-fixed-dim": "#b9c7e4",
        "on-surface-variant": "#44474d",
        error: "#ba1a1a",
        "surface-container": "#edeeef",
        "on-tertiary-fixed-variant": "#23501e",
        "on-secondary-fixed": "#261900",
        outline: "#75777e",
        "surface-container-high": "#e7e8e9",
        surface: "#f8f9fa",
        "primary-container": "#0d1c32",
        "on-secondary-container": "#785a1a",
        "secondary-fixed-dim": "#e9c176",
        "on-surface": "#191c1d"
      },
      fontFamily: {
        headline: ["Manrope"],
        body: ["Inter"],
        label: ["Inter"],
        technical: ["Roboto Condensed", "sans-serif"]
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem"
      }
    }
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/container-queries")]
};
