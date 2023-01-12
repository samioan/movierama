import classes from "./HeaderButton.module.css";

import { NavLink } from "react-router-dom";

const HeaderButton = ({ label, link }) => (
  <NavLink
    end
    className={({ isActive }) => (isActive ? classes.activeLink : classes.link)}
    to={link}
  >
    {label}
  </NavLink>
);

export default HeaderButton;
