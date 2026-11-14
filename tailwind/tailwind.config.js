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
        // Brand colour #2f4ead (600); override the --mc-primary-* vars in input.css to rebrand
        primary: {
          50: 'rgb(var(--mc-primary-50) / <alpha-value>)',
          100: 'rgb(var(--mc-primary-100) / <alpha-value>)',
          200: 'rgb(var(--mc-primary-200) / <alpha-value>)',
          300: 'rgb(var(--mc-primary-300) / <alpha-value>)',
          400: 'rgb(var(--mc-primary-400) / <alpha-value>)',
          500: 'rgb(var(--mc-primary-500) / <alpha-value>)',
          600: 'rgb(var(--mc-primary-600) / <alpha-value>)',
          700: 'rgb(var(--mc-primary-700) / <alpha-value>)',
          800: 'rgb(var(--mc-primary-800) / <alpha-value>)',
          900: 'rgb(var(--mc-primary-900) / <alpha-value>)',
          950: 'rgb(var(--mc-primary-950) / <alpha-value>)',
        },
      },
    },
  },
};
