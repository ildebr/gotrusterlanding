import Form from './form'
import Ubication from './ubication'
import styles from '../../styles.module.scss'
function Contact(props: { data: any }) {
  const { data } = props
  return (
    <div className={styles.containerContact}>
      <Ubication location={null} />
      <Form form={null} />
    </div>
  )
}
export default Contact
