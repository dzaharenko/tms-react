import React from "react";

import subMenu from '../styles/JSS/subMenu';

import {Link} from "react-router-dom";

const SubMenu = () => {
  const classes = subMenu();
  return (
    <Link to="/catalog" className={classes.catalog}>Catalog</Link>
  );
};

SubMenu.displayName = 'SubMenu';

export default SubMenu;
