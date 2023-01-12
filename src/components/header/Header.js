import { HeaderButton, Logo } from "./components";

import classes from "./Header.module.css";

const Header = () => (
  <div className={classes.container}>
    <Logo />
    <div>
      <HeaderButton link="/" label="HOME" />
      <HeaderButton link="/search" label="SEARCH" />
    </div>
  </div>
);

export default Header;
