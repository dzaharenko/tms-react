import mainTheme from '../themes/main'
import lightTheme from '../themes/light';
import darkTheme from '../themes/dark';

export default {
  light: {
    ...mainTheme,
    ...lightTheme,
  },
  dark: {
    ...mainTheme,
    ...darkTheme,
  },
};
