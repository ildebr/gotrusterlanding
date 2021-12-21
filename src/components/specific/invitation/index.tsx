import styles from "./styles.module.scss";
function Invitation(): JSX.Element {
  return (
    <div
      className={styles.invitation}
      style={{ backgroundImage: `url(/images/invitation.png)` }}
    >
      <div className={styles.content}>
        <h1>Conseguí clientes con Truster </h1>
        <span>Publicá tu negocio.</span>
        <a href="https://develop.gotruster.com/">Registrarse</a>
      </div>
    </div>
  );
}
export default Invitation;
