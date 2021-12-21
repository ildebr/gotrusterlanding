import styles from "./styles.module.scss";
function Impulses(): JSX.Element {
  return (
    <div className={styles.impulses}>
      <div className={styles.content}>
        <div className={styles.row}>
          <div className={styles.information}>
            <h1>Impulsá tu negocio</h1>
            <p>
              Los puntos Truster le suman puntos a toda transacción que hagas.
              Convertí tu reputación en una herramienta para llegar a más
              clientes.
            </p>
          </div>
          <div className={styles.image}>
            <img
              src="/images/business.png"
              alt="business"
              width="310px"
              height="300px"
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.image}>
            <img
              src="/images/phone.png"
              alt="business"
              width="290px"
              height="300px"
            />
          </div>
          <div className={styles.information}>
            <h1>Recibí Consultas</h1>
            <p>
              Compartimos las ganas de ver crecer tu negocio. Por eso
              desarrollamos un sistema completo de valoración para que compartas
              tu reputación.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Impulses;
