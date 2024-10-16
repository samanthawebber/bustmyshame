module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    colors: {
      'sugarcane': '#f0ede3',
      'coyote': '#82735c',
      'coyote-dark': '#413a2e',
      'coyote-pale': '#9e8e75',
      'olivine': '#84bd94',
      'celadon': '#9cde9f',
      'teagreen': '#b9f09c',
      'raspberry': '#BD84AD',
      'white': '#ffffff',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
