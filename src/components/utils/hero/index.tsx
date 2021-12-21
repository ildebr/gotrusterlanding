import styles from "./styles.module.scss";
import { Logo } from "svg";
function Hero(): JSX.Element {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.information}>
          <h1>La confianza es tu negocio.</h1>
          <p>
            Construí fácilmente tu reputación de usuario confiable, llegá a más
            gente y vendé más.
          </p>
        </div>
        <div className={styles.logo}>
          <img src="/images/hero.png" alt="hero" />
        </div>
      </div>
    </div>
  );
}
export default Hero;
