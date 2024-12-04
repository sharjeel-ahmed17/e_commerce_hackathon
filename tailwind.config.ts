import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary1: "#FFFFFF",
    primary2: "#363738",
    text1: "#FFFFFF",
    text2: "#D37643",
    buttonCard: "#D37643",
    text2Black: "#000000",
    second2: "#F5F5F5",
    second1: "#FEFAF1",
    secondRed: "#DB4444",
    bg1: "#FFFFFF",
    button1: "#47B486",
    button2: "#DB4444",
    hoverButton1: "#E2B93B",
    hoverButton2: "#EB5757",
    logoColor: "rgba(80,66,66,1)",
        
      


        // background: "hsl(var(--background))",
        background: "#ffffff",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],

        poppins: ["var(--font-poppins)", "popins"],
        inter: ["var(--font-inter)", "inter"],
      },
      spacing : {
        s1: '16px',
        s2 : '36px',
        s3: '14px'
      },
      boxShadow: {
        'shadow1': '0px 2px 10px 2px rgba(0,0,0,0.2)',
        'shadow2': '0px 1px 13px 0px rgba(0,0,0,0.05)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
