/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts}"],
  theme: {
    screens: {
      "big-screen": { max: "2600px" },

      laptop: { max: "1450px" },

      screen: { max: "1050px" },

      tablet: { max: "768px" },

      mobile: { max: "640px" },

      "small-mobile": { max: "380px" },
    },

    extend: {
      backgroundImage: () => ({
        "hero-dashboard": "url('../src/assets/home-hero.jpg')",
        "hero-landingpage": "url('../src/assets/hero/hero-landingpage.webp')",
        "subscription": "url('../src/assets/subscription.jpeg')",
        "sign-up": "url('../src/assets/hero/home-hero7.webp')",
        "comunity":"url('../src/assets/planet2.png')",
        "hero-minecraft":"url('../src/assets/hero/minecraft-hero.webp')",
        "hero-fortnite":"url('../src/assets/hero/fortnite-hero.webp')",
        "hero-scratch":"url('../src/assets/hero/scratch-hero.webp')",
        "stream":"url('../src/assets/hero/bg-stream.webp')",
        "error-page":"url('../src/assets/hero/404page.png')",
      }),
      animation: {
        'spin-slow': 'spin 200s linear infinite',
      }
    },
  },
  plugins: [],
};
