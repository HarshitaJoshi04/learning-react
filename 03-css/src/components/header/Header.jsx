import React from "react";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div>
      <div className={styles.header}>
        This is Header <button>login</button>
      </div>
    </div>
  );
};

export default Header;
