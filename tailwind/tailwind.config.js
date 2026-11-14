/** Scoped Tailwind build for the mailcow login page.
 *  - `tw-` prefix: never collides with mailcow's Bootstrap classes
 *  - no preflight: Bootstrap's reboot stays in charge of the rest of the UI
 *  - dark mode follows mailcow's own toggle (it adds <link id="dark-mode-theme"> to <head>)
 */
module.exports = {
  prefix: 'tw-',
  content: ['../custom/web/templates/*.twig'],
  corePlugins: { preflight: false },
  darkMode: ['variant', ':root:has(#dark-mode-theme) &'],
  theme: {
    extend: {
      colors: {
        // Flowbite blue by default; override the --mc-primary-* vars in input.css to rebrand
        primary: {
          50:  'rgb(var(--mc-primary-50) / <alpha-value>)',
          300: 'rgb(var(--mc-primary-300) / <alpha-value>)',
          500: 'rgb(var(--mc-primary-500) / <alpha-value>)',
          600: 'rgb(var(--mc-primary-600) / <alpha-value>)',
          700: 'rgb(var(--mc-primary-700) / <alpha-value>)',
        },
      },
    },
  },
};
