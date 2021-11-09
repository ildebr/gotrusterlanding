import styles from '../../styles.module.scss'
function User(props: { data: any }) {
  const { data } = props
  return (
    <div className={styles.containerUser}>
      <div className={styles.info}>
        <span className={styles.rol}>{data.rol}</span>
        <span className={styles.name}>{data.name}</span>
        <span className={styles.date}>Miembro desde {data.date}</span>
        <div className={styles.level}>
          <span className={styles.round}></span>
          <span>Pro truster</span>
        </div>
      </div>
      <div className={styles.avatar}>
        <img src={data.src} alt={data.name} />
      </div>
    </div>
  )
}
export default User
