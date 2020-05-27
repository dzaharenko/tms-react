import React from "react";
import {useDispatch} from "react-redux";
import Switch from '@material-ui/core/Switch';
import themeSwitcher from "../styles/JSS/themeSwitcher";

import {switchTheme} from "../actions";
import {MuiThemeProvider, createMuiTheme} from "@material-ui/core";

const theme = createMuiTheme ({
  palette: {
    secondary: {
      main: '#ff8b38',
    },
  }
});

const ThemeSwitcher = () => {
  const classes = themeSwitcher();
  const dispatch = useDispatch();
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(switchTheme());
  };

  return (
    <MuiThemeProvider theme={theme}>
    <Switch className={classes.indent} color="secondary" checked={state.checkedA} onClick={handleClick} onChange={handleChange} name="checkedA"/>
    </MuiThemeProvider>
    )

};

export default ThemeSwitcher;
