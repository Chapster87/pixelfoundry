import {nextui} from "@nextui-org/react";

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      sans: 'var(--font-inter), ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    nextui({
      addCommonColors: true,
      themes: {
        light: {},
        dark: {},
        mytheme: {
          // custom theme
          extend: "dark",
          colors: {
            background: "#272727",
            foreground: "#747474",
            primary: {
              DEFAULT: "#e6cd00",
              foreground: "#272727",  
              50: '#fff6da',
              100: '#ffecad',
              200: '#ffe57d',
              300: '#ffe04b',
              400: '#ffdf1a',
              500: '#e6cd00',
              600: '#b39400',
              700: '#806100',
              800: '#4d3500',
              900: '#1c1000'
            },
            secondary: {
              DEFAULT: "#139f67",
              foreground: "#272727",
              50: '#deffeb',
              100: '#b6f8d3',
              200: '#8bf1bb',
              300: '#60eca6',
              400: '#36e693',
              500: '#1fcd80',
              600: '#139f67',
              700: '#087242',
              800: '#004522',
              900: '#001907'
            },
            tertiary: {
              DEFAULT: "#ff551a",
              foreground: "#272727", 
              50: '#ffe5dd',
              100: '#ffbcaf',
              200: '#ff987e',
              300: '#ff744c',
              400: '#ff551a',
              500: '#e62d00',
              600: '#b41500',
              700: '#810600',
              800: '#4f0004',
              900: '#210008',
            },
            green: {
              DEFAULT: "#14A76C",
              foreground: "#000000",
              50: "#fafffb",
              100: "#aee9c1",
              200: "#6ed397",
              300: "#3abd7c",
              400: "#14a76c",
              500: "#0c8b53",
              600: "#076f3d",
              700: "#06542a",
              800: "#05381a",
              900: "#031c0c",
            },
            focus: "#14A76C",
          },
        },
      },
    })
  ]
};

export default config;
