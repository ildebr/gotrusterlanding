import styles from '../../styles.module.scss'
import TextField from '@material-ui/core/TextField'
import withStyles from '@material-ui/core/styles/withStyles'

const InputText: any = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#666666',
    },
    '& .MuiInput-underline:after': {
      border: '2px solid #303030',
      borderRadius: '14px',
    },
    '& .MuiInputLabel-root': {
      color: '#666666',
      align: 'center',

      fontFamily: 'Poppins',
      fontSize: '15px',
      fontWeight: 500,
      textAlign: 'left',
      letterSpacing: '-0.02em',
    },
    '& .MuiInputBase-input': {
      color: '#fff',
      align: 'center',
      fontFamily: 'Poppins',
      fontSize: '15px',
      fontWeight: 500,
      textAlign: 'left',
      letterSpacing: '-0.02em',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: '2px solid #303030',
        borderRadius: '14px',
        width: '100%',
      },
      '&:hover fieldset': {
        border: '2px solid #303030',
        borderRadius: '14px',
        width: '100%',
      },
      '&.Mui-focused fieldset': {
        border: '2px solid #303030',
        borderRadius: '14px',
        width: '100%',
      },
    },
  },
})(TextField)
function Form(props: { form: any }) {
  const { form } = props
  return (
    <div className={styles.containerForm}>
      <div className={styles.description}>
        <span className={styles.title}>Contactanos</span>
        <p>Nuestro equipo estara contactandose a la brevedad</p>
      </div>
      <form>
        <InputText
          label="Ingrese su nombre"
          variant="outlined"
          id="custom-css-outlined-input"
        />
        <InputText
          label="Ingrese su nombre"
          variant="outlined"
          id="custom-css-outlined-input"
        />
        <InputText
          label="Ingrese su nombre"
          variant="outlined"
          id="custom-css-outlined-input"
        />
        <InputText
          id="outlined-multiline-static"
          label="Ingrese su mensaje"
          multiline
          rows={6}
          variant="outlined"
        />
      </form>
    </div>
  )
}

export default Form
