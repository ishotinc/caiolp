/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#f8fafc', // 例: 背景色
        foreground: '#333333', // 例: テキスト色
      },
      borderColor: {
        black: '#000000', // 例: ボーダー色
      },
    },
  },
  plugins: [],
  corePlugins: {
    borderColor: false,
    boxShadow: false,
  },
}

