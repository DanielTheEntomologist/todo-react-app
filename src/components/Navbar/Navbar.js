import styles from "./Navbar.module.scss";

import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink className={styles.logo} to="/">
        <i className="fa fa-tasks"></i>
      </NavLink>
      <ul className={styles.navlist}>
        <li className={styles.navitem}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? `${styles.linkActive} ${styles.navlink}`
                : styles.navlink
            }
          >
            Home
          </NavLink>
        </li>
        <li className={styles.navitem}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.linkActive} ${styles.navlink}`
                : styles.navlink
            }
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li className={styles.navitem}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.linkActive} ${styles.navlink}`
                : styles.navlink
            }
            to="Favorite"
          >
            Favorite
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
