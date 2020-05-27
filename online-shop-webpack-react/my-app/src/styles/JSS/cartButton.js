import { createUseStyles } from "react-jss";

const cartButton = {
  cart__button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "270px",
    height: "36px",
    color: "#ffffff",
    backgroundColor: "#ff8b38",
    borderRadius: "4px",
    '&._active': {
      backgroundColor: "#252525",
    }
  },
};

export default createUseStyles(cartButton, {name: 'cartButton', index: 23})
