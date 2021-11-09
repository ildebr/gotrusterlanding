import styles from '../../styles.module.scss'
import AboutBusiness from './about'
import User from './user'
function About() {
  return (
    <div className={styles.containerAbout}>
      <AboutBusiness
        data={{
          title: 'uriel ',
          description:
            'Mi nombre es Daniel, vivo en Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo eros, gravida sed sapien vel, maximus ultrices diam. Duis scelerisque mi sit amet bibendum facilisis. Donec scelerisque lectus ut lectus tincidunt, id bibendum sapien tristique. Proin at cursus tellus, at viverra nunc. Aenean ut purus ut libero lobortis dignissim. Cras eros felis, molestie at mi nec, fermentum volutpat turpis.',
        }}
      />
      <User
        data={{
          rol: 'ninguno',
          name: 'uriel',
          date: '2021',
          level: 'pichi',
        }}
      />
    </div>
  )
}
export default About
