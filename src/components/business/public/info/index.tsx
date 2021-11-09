import About from './about'
import Contact from './contact'
import styles from '../styles.module.scss'
function Info(props: { data: any }) {
  return (
    <div className={styles.containerInfo}>
      <About />
      <Contact data={null} />
    </div>
  )
}
export default Info
