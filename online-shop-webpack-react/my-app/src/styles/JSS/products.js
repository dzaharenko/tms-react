import { createUseStyles } from "react-jss";

const productsStyle = {
  cart: {
    display: "grid",
    gridTemplateColumns: "auto 1fr auto",
    columnGap: "20px",
    marginBottom: "30px",
    padding: "20px",
    backgroundColor: "#ffffff",
    borderRadius: "4px",
    '&:hover': {
      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)"
    }
  },
  cart__price_block: {
    alignSelf: "end",
    justifySelf: "end",
    textAlign: "right"
  },
  cart__price: {
    paddingBottom: "8px"
  }
};

export default createUseStyles(productsStyle, {name: 'productsStyle', index: 25});
