import styles from "./styles.module.scss";
import { Logo } from "svg";
function Hero(): JSX.Element {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.information}>
          <h1>La confianza es tu negocio.</h1>
      
        </div>
        <div className={styles.logo}>
          <Logo />
        </div>
      </div>
    </div>
  );
}
export default Hero;
