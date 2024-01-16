module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Orbitron",
      secondary: "Rajdhani",
      tertiary: "Aldrich",
    },
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
      xxl: "2400px",
    },
    extend: {
      colors: {
        primary: "#0a0a0a",
        accent: "#B809C3",
      },
      backgroundImage: {
        site: "url('./assets/vecteezy_abstract-blue-gradient-background_5433382_cleanup_flipped.svg')",
        about: "url('./assets/deskCode.png')",
        services: "url('./assets/MeAtDesk.png')",
        slider:
          "url('./assets/abstract-blue-background-with-beautiful-fluid-shapes-free-vector-flipped.svg')",
        tester:
          "url('./assets/abstract-blue-background-with-beautiful-fluid-shapes-free-vector_cleanup.svg')",
      },
    },
  },
  plugins: [],
};
