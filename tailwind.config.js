/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
   theme: {
    extend: {
      colors: {
        primaryClr: '#00d09c',
        primaryClr60: '#66e3c4',
        primaryClr10: '#e5faf5',
        secondaryClr: '#5367ff',
        secondaryClr150: '#1e2232',
        secondaryClr130: '#98a4ff',
        secondaryClr60: '#98a4ff',
        secondaryClr30: '#eef0ff',
        growwYellow: '#ffb61b',
        growwYellow10: '#fff5e0',
        growwYellow05: 'rgba(255, 182, 27, .05)',
        growwRed: '#eb5b3c',
        growwRed10: '#fae9e5',
        growwRed05: 'rgba(235, 91, 60, .05)',
        border: '#ecedef',
        iconLight: '#b0b2ba',
        iconMedium: '#dddee1',
        iconStrong: '#ecedef',
        boxShadow: 'rgba(0, 0, 0, .1)',
        text130: '#44475b',
        text: '#44475b',
        subText: '#7c7e8c',
        subText50: '#b0b2ba',
        subText70: '#ecedef',
        primaryBg: '#fff',
        secondaryBg: '#fff',
        tertiaryBg: '#ecedef',
        quaternaryBg: '#f6f6f7',
        preloaderBg: '#f6f6f7',
        rippleNormal: 'rgba(0, 0, 0, .1)',
        constantGrowwYellow150: '#d2ab66',
        constantText: '#44475b',
        constantText120: '#191c27',
        constantSubText10: '#636464',
        constantWhite: '#fff',
        constantTransparent: 'transparent',
        constantHalfTransparent: 'rgba(0, 0, 0, .5)',
        constantSecondaryClr180: '#2a2a2a',
        constantSecondaryClr10: '#f6f6f7',
        cardBackground: '#fff',
        mintBackgroundInversePrimary: '#1b1b1b',
        mintSecondaryBg: '#f8f8f8',
      },
    },
  },
  plugins: [],
}
