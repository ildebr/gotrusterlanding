import { Security, Like } from 'asset/svg'
import styles from './styles.module.scss'
function Reputation(props: { data: any }) {
  const { data } = props
  return (
    <div className={styles.containerReputation}>
      <Target
        icon={<Like />}
        likes="44"
        description="Usuarios ya confían en Anagrama Studio"
      />
      <Target
        icon={<Security />}
        likes="86"
        description="Usuarios  truster ya validaron Anagrama"
      />

      <Button
        icon={<Like />}
        className={styles.reputation}
        onClick={() => console.log('testing')}
      >
        Confias en uriel?
      </Button>
    </div>
  )
}
function Target(props: {
  icon: JSX.Element
  likes: string
  description: string
}) {
  const { icon, likes, description } = props
  return (
    <div className={styles.target}>
      <div className={styles.likes}>
        {icon}
        <span>{likes}</span>
      </div>
      <div className={styles.description}>
        <p>{description}</p>
      </div>
    </div>
  )
}
function Button(props: {
  onClick: Function
  children: JSX.Element | string
  icon: JSX.Element
  className: string
}) {
  const { onClick, children, icon, className } = props
  return (
    <div className={styles.button}>
      <button className={`${styles[className]}`} onClick={(e) => onClick(e)}>
        <>
          {icon && icon}
          {children}
        </>
      </button>
    </div>
  )
}
export default Reputation
