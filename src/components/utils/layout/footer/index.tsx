import styles from './styles.module.scss'
import { Logo } from 'svg'
function Footer(): JSX.Element {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <Logo />
        <span>Truster</span>
      </div>
    </div>
  )
}
export default Footer
