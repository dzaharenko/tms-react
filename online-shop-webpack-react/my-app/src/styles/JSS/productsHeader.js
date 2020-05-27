import { createUseStyles } from "react-jss";

const productsHeader = {
  products__header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    padding: "8px",
    borderRadius: "4px",
    marginBottom: "30px"
  },
  products__line: {
    marginInlineStart: "auto"
  },
  products__sort: {
    fontWeight: "bold"
  },
  products__value: {
    fontWeight: "bold"
  }
};

export default createUseStyles(productsHeader, {name: 'productsHeader', index: 26});
