import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a className={styles.logo}>
        <i className="fa fa-tasks"></i>
      </a>
      <ul className={styles.navlist}>
        <li className={styles.navitem}>
          <a className={styles.navlink} href="/">
            Home
          </a>
        </li>
        <li className={styles.navitem}>
          <a className={styles.navlink} href="/about">
            About
          </a>
        </li>
        <li className={styles.navitem}>
          <a className={styles.navlink} href="Favorite">
            Favorite
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
