import LinkB from "./link";
import { Logo } from "svg";

import styles from "./styles.module.scss";
function Header(): JSX.Element {
  return (
    <div className={`${styles.header}`}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Logo />
          <span>Truster</span>
        </div>

        <div className={styles.menu}>
          <LinkB
            href="https://develop.gotruster.com"
            label="Ingresar"
            line={true}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
