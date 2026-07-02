/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
      },
      colors: {
        page: '#ffffff',
        'page-dark': '#15130f',
        surface: '#fafbf5',
        'surface-dark': '#211c15',
        heading: '#0c1e2e',
        'heading-dark': '#ffffff',
        body: '#27272a',
        'body-dark': '#d4d4d8',
        muted: '#6b7280',
        'muted-dark': '#9ca3af',
        accent: '#dc2626',
        'accent-dark': '#ef4444',
        edge: '#e5e7eb',
        'edge-dark': '#374151',
        navbg: 'rgba(255,255,255,0.75)',
        'navbg-dark': 'rgba(3,7,18,0.75)',
        navborder: 'rgba(155,152,152,0.6)',
        'navborder-dark': 'rgba(75,85,99,0.6)',
        panel: 'rgba(255,255,255,0.85)',
        'panel-dark': 'rgba(17,24,39,0.85)',
        pill: '#e5e7eb',
        'pill-dark': '#374151',
        pilltext: '#374151',
        'pilltext-dark': '#e5e7eb',
        projectcard: '#f0f0e0',
        'projectcard-dark': '#1f2937',
        button: '#111827',
        'button-dark': '#1f2937',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
