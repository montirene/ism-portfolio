// tailwind.config.js

module.exports = {
  darkMode: 'class', // MUST be set to 'class' for theme provider to work
  theme: {
    extend: {
      colors: {
        'background-beige': 'var(--color-background-beige)',
        'text-black': 'var(--color-text-black)',
        'primary-burgundy': 'var(--color-primary-burgundy)',
        'secondary-red': 'var(--color-secondary-red)',
        'ui-light-gray': 'var(--color-ui-light-gray)',
        'ui-dark-gray': 'var(--color-ui-dark-gray)',
      },
      fontFamily: {
        'serif-heading': ['var(--font-serif-heading)'],
        'sans-body': ['var(--font-sans-body)'],
      },
      // ... other extensions
    },
  },
  // ... rest of config
};