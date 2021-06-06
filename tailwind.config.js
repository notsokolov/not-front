const colors = require("tailwindcss/colors");

// console.debug(colors.blue);

module.exports = {
  purge: ["./src/**/*.tsx"],
  darkMode: "media", // 'media' or 'class'
  theme: {
      colors: {
      yellow: colors.yellow,
      purple: colors.purple,
      blue: {
        'zalupa': "#f8f9ff",
        'zalupa-plus': "#e9ecff",

        '50': '#eff6ff',
        '100': '#aab6fa',
        '200': '#95a5ff',
        '300': '#7c90fd',
        '400': '#6077fa',
        '500': '#445ff8',
        '600': '#3754f7',
        '700': '#1d4ed8',
        '800': '#1e40af',
        '900': '#1e3a8a'
      },      
      gray: colors.gray,
      red: colors.red,
      green: colors.green,
      pink: colors.pink,
      indigo: colors.indigo,
      white: "#fff",

    },

    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            blockQuote: {
              fontWeight: "400",
            },
            img: {
              borderRadius: "8px",
            },
            h4: {
              fontSize: "1.5rem",
              fontWeight: "800",
            },
            h5: {
              fontSize: "1.3rem",
              marginTop: "2.5rem",
              marginBottom: "-0.75rem",
            },
            a: {
              color: theme("colors.blue.500"),
              textDecoration: "none",
            },
          },
        },
      }),
      boxShadow: {
        cardHover:
          "0 4px 4.1px rgba(0, 0, 0, 0.012),0 4.9px 5.8px rgba(0, 0, 0, 0.018),0 6.3px 8.4px rgba(0, 0, 0, 0.029),0 8.8px 12.9px rgba(0, 0, 0, 0.05),0 15px 23px rgba(0, 0, 0, 0.11)",
      },
      colors: {
        "gray-1000": "#050505",
      },
    },
  },
  variants: {
    extend: {
      textColor: ["visited"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
