const fontFamily = '"Open Sans", sans-serif';
const fontWeightLight = 300;
const fontWeightRegular = 400;
const fontWeightMedium = 600;
const fontWeightBold = 700;

export default {
  spacing: {
    unit: '8px',
    gap: '24px',
  },
  typography: {
    fontFamily,
    fontSize: 16,
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightBold,
    h1: {
      fontFamily,
      fontWeight: fontWeightLight,
      fontSize: '40px',
      lineHeight: 1.167,
      letterSpacing: '-0.01562em',
    },
    h2: {
      fontFamily,
      fontWeight: fontWeightLight,
      fontSize: '32px',
      lineHeight: 1.2,
      letterSpacing: '-0.00833em',
    },
    h3: {
      fontFamily,
      fontWeight: fontWeightRegular,
      fontSize: '24px',
      lineHeight: 1.167,
      letterSpacing: '0em',
    },
  },
};
