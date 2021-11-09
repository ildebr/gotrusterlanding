import styles from '../../styles.module.scss'
function AboutBusiness(props: { data: any }) {
  const { data } = props
  return (
    <div className={styles.aboutItem}>
      <span className={styles.title}>{data.title}</span>
      <p>{data.description}</p>
    </div>
  )
}
export default AboutBusiness
