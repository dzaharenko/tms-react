import { createUseStyles } from "react-jss";

const headerBody = {
  header: {
    backgroundColor: '#252525',
    color: '#f5f5f7',
    marginBottom: '20px'
  },
  header__container: {
    display: "grid",
    alignItems: "center",
    gridTemplateColumns: "0.8fr 0.5fr 2fr 0.5fr 0.5fr"
  },
  container: {
    maxWidth: '900px',
    margin: '0 auto',
  }
};

export default createUseStyles(headerBody, {name: 'headerBody', index: 300});
