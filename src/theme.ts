const colors = {
  primary: '#185CFF',
  secondary: '#002B4E',
  tertiary: '#F0F9FF',
  helperBlue1: '#194060',
  helperBlue2: '#607D94',
  helperBlue3: '#C9DCEC',
  black: '#292D33',
  grey: '#9497A1',
  background: '#F1F6FA',
  red: '#C14040',
  white: '#FFFFFF',
  hoverBlue: '#467DFF',
};

const shadows = {
  button: '0px 12px 30px rgba(24, 92, 255, 0.18)',
  card1: '0px 2px 20px 17px rgba(24, 92, 255, 0.04)',
  card2: '0px 12px 30px 17px rgba(24, 92, 255, 0.04)',
  card3: '0px 4px 12px rgba(12, 68, 204, 0.1)',
  dropdown: '0px 2px 6px rgba(0, 43, 78, 0.15), 0px 1px 2px rgba(0, 43, 78, 0.3)',
};

const theme = {
  width: {
    141: 141,
    1920: 1920,
    1110: 1110,
  },
  height: {
    126: 126,
    46: 46,
  },
  fontFamily: {
    Manrope: `'Manrope', sans-serif`,
    OpenSans: `'Open Sans', sans-serif`,
  },
  fontSize: {
    14: 14,
    16: 16,
    20: 20,
    22: 22,
    30: 30,
    38: 38,
    46: 46,
  },
  fontWeight: {
    400: 400,
    500: 500,
    600: 600,
    700: 700,
    800: 800,
  },
  gap: {
    40: 40,
  },

  transition: 'all 0.2s linear',
  colors,
  shadows,
};

export default theme;
