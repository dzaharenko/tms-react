import {createUseStyles} from "react-jss";

const appStyles = theme => ({
  root: {
    fontSize: theme.typography.fontSize,
  },
});

export default createUseStyles(appStyles, {name: 'App', index: 27});
