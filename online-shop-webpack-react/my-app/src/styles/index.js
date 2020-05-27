import { createUseStyles } from "react-jss";

import globalStyles from '../styles/global.js';

const rootStyles = (theme) => ({
  '@global': {
  ...globalStyles(theme),
  }
});

export default createUseStyles(rootStyles, {name: 'root', index: 10});
