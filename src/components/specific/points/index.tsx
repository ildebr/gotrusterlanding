import styles from "./styles.module.scss";
import { Cubes } from "svg";
function Points(): JSX.Element {
  return (
    <div className={styles.points}>
      <div className={styles.content}>
        <div className={styles.row}>
          <div className={styles.information}>
            <Cubes />
            <h1>Completá tu perfil</h1>
            <p>
              En pasos simples, ingresá los datos requeridos y empezá a
              compartir tu perfil con quienes hagas transacciones.
            </p>
          </div>
          <div className={styles.image}>
            <img src="/images/win.png" alt="" width="580px" height="500px" />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.image}>
            <img src="/images/points.png" alt="" width="440px" height="400px" />
          </div>
          <div className={styles.information}>
            <h1>Ganá Puntos Truster</h1>
            <p>
              Por cada dato que ingresás y validamos, más tu reputación que
              traemos de otras plataformas, sumás puntos que podrás usar de
              referencia para tus transacciones.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Points;
