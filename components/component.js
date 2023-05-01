import React from "react";
import styles from "../styles/style.module.css";

const Component = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <ul className={styles.navbarList}>
          <li className={styles.navbarListItem}>About</li>
          <li className={styles.navbarListItem}>Projects</li>
          <li className={styles.navbarListItem}>Sign In</li>
        </ul>
      </nav>
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>Blue Landing</h1>
        <p className={styles.heroText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu
          metus a massa ultrices ullamcorper vel id elit. Praesent bibendum
          purus eget dapibus iaculis.
        </p>
      </div>
      <footer className={styles.footer}>© 2021 Blue Landing</footer>
    </div>
  );
};

export default Component;