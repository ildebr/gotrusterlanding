
import LinkB from "./link";
import { Logo } from "svg";

import styles from "./styles.module.scss";
function Header(): JSX.Element {
 
  return (
    <div className={`${styles.header}`}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Logo />
        </div>

        <div className={styles.menu}>
          <LinkB href="home" label="Home" line={true} />

          <LinkB href="about" label="About us" />

          <LinkB href="services" label="Services" />
          <LinkB href="products" label="Products" />
          <LinkB href="details" label="Details" />
          <LinkB href="contact" label="Contact" />
        </div>
      </div>
    </div>
  );
}

export default Header;
