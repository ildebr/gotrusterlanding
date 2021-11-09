import { ArrowNavigation, ShareIcon } from 'asset/svg'
import styles from './styles.module.scss'

function Hero(props: { data: any }) {
  const { data } = props

  return (
    <div className={styles.hero}>
      <div
        className={styles.background}
        style={{
          backgroundImage: `url(/bnapoles73@gmail.com/images/negocio/bnapoles73@gmail.comn1.png)`,
        }}
      ></div>
      <div className={styles.content}>
        <User
          name="Uriel Rivero Desarrollador Fullstack"
          activity="Developer"
          date="Octubre 2020"
          src="/images/newsletter/profileImage.png"
        />
        <Navigation href="search/" />
      </div>
    </div>
  )
}
function User(props: {
  name: string
  activity: string
  date: string
  src: string
}) {
  const { name, activity, date, src } = props
  return (
    <div className={styles.user}>
      <div className={styles.avatar}>
        <img src={src} alt={name} />
      </div>
      <div className={styles.infoUser}>
        <div className={styles.name}>
          <span>{name}</span>
          <ShareIcon />
        </div>
        <span className={styles.activity}>{activity}</span>
        <span className={styles.date}>Publicado en truster desde {date}</span>
      </div>
    </div>
  )
}
function Navigation(props: { href: string }) {
  const { href } = props
  return (
    <div className={styles.navigation}>
      <div className={styles.itemNavigation}>
        <a href={href}>
          <ArrowNavigation />
          <span>VOLVER A BÚSQUEDA</span>
        </a>
      </div>
    </div>
  )
}
export default Hero
