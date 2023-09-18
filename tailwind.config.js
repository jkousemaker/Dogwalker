console.log("js");
module.exports = {
  theme: {
    screens: {
      ssm: "300px",
      sm: "480px",
      smx: "570px",
      md: "767px",
      lg: "1024px",
      lgx: "1200px",
      xl: "1440px",
    },
    colors: {
      background: "#ececee",
      neutral: "#e2e2e4",
      neutralDark: "#1f2130",
      primary: "#ff5b2e",
      secondary: "#599ec0",
      accent2: "#bedcf5",
      accent3: "#fac44d",
      white: "#fff",
      black: "#000000",
      brown: "#311811",
      ghost: "rgb(255 255 255 / 0.5)",
      "gray-text": "#353535",
      subtitle: "#777878",
      inherit: "inherit",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["ui-serif", "Georgia"],
      satoshi: ["Satoshi", "sans-serif"],
      bowlby: ["Bowlby One SC", "Sans-serif"],
      bowlbyOne: ["Bowlby One", "Sans-serif"],
      rubik: ["Rubik", "sans-serif"],
      nothing: ["Nothing You Could Do", "Sans-serif"],
      jost: ["Jost", "Sans-serif"],
    },

    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
        "1/5": "20%",
        "1/6": "16%",
        "1/10": "10%",
      },
      backgroundPosition: {
        "bottom-center": "bottom center",
      },
      borderRadius: {
        "4xl": "2rem",
        "md-percentage": "12% 12% 12% 12% / 27% 27% 27% 27% ",
      },
      padding: {
        elongated: "0.5rem 5%",
        "elongated-wide": "1.5rem 0.5rem",
      },
      fontSize: {
        xxs: "0.6rem",
        md: "1rem",
      },
      lineHeight: {
        fwide: "1.6em",
        normal: "1.1em",
      },
      letterSpacing: {
        minus: "-1px",
        normal: "0.2em",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ff5b2e",

          secondary: "#fac44d",

          accent: "#21b073",

          neutral: "#2b3440",

          "base-100": "#ffffff",

          info: "#3abff8",

          success: "#36d399",

          warning: "#fbbd23",

          error: "#f87272",
        },
      },
    ], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: false, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
};
