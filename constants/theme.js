const COLORS = {
  primary: '#a42420',
  dark: '#292627',
  black: '#121212',
  white: '#F2F2F2',
  grey1: '#D2D2D2',
  grey2: '#AAAAAA',
  grey3: '#666666',
};

const SIZES = { xSmall: 10, small: 12, medium: 16, large: 20, xLarge: 24, xxLarge: 32 };

const SHADOWS = {
  small: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, SIZES, SHADOWS };
