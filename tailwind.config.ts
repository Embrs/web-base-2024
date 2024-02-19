/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './app.{js,ts,vue}'
  ],
  corePlugins: {
    preflight: false // 拿掉預設樣式
  },
  theme: {
    colors: {
      'primary-100': 'var(--primary-100)',
      'primary-200': 'var(--primary-200)',
      'primary-300': 'var(--primary-300)',
      'primary-400': 'var(--primary-400)',
      'primary-500': 'var(--primary-500)',
      'primary-600': 'var(--primary-600)',
      'primary-700': 'var(--primary-700)',
      'primary-800': 'var(--primary-800)',
      'primary-900': 'var(--primary-900)',
      primary: 'var(--primary)',

      'secondary-100': 'var(--secondary-100)',
      'secondary-200': 'var(--secondary-200)',
      'secondary-300': 'var(--secondary-300)',
      'secondary-400': 'var(--secondary-400)',
      'secondary-500': 'var(--secondary-500)',
      'secondary-600': 'var(--secondary-600)',
      'secondary-700': 'var(--secondary-700)',
      'secondary-800': 'var(--secondary-800)',
      'secondary-900': 'var(--secondary-900)',
      secondary: 'var(--secondary)',

      'tertiary-100': 'var(--tertiary-100)',
      'tertiary-200': 'var(--tertiary-200)',
      'tertiary-300': 'var(--tertiary-300)',
      'tertiary-400': 'var(--tertiary-400)',
      'tertiary-500': 'var(--tertiary-500)',
      'tertiary-600': 'var(--tertiary-600)',
      'tertiary-700': 'var(--tertiary-700)',
      'tertiary-800': 'var(--tertiary-800)',
      'tertiary-900': 'var(--tertiary-900)',
      tertiary: 'var(--tertiary)',

      error: 'var(--error)',
      't-dark': 'var(--t-dark)',
      't-gray': 'var(--t-gray)',
      't-white': 'var(--t-white)',
      bg: 'var(--bg)',
      'bg-white': 'var(--bg-white)',
      'bg-dark': 'var(--bg-dark)'
    }
  },
  plugins: []
};
