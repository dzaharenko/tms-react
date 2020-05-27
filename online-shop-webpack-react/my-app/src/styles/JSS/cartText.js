import { createUseStyles } from "react-jss";

const cartText = {
  cart__text: {
    alignSelf: "center"
  },
  cart__title: {
    paddingBottom: "20px",
    fontWeight: "600"
  },
  cart__desc: {
    fontSize: "12px",
    paddingTop: "15px",
    lineHeight: 1.4
  }
};

export default createUseStyles(cartText, {name: 'cartText', index: 23});
