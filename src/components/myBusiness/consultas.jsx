import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
const { localStorage } = global.window
const useStyles = makeStyles((theme) => ({
  titulo: {
    color: '#ACFD00',
    fontFamily: 'Poppins',
    fontSize: '22px',
    fontWeight: 600,
    textAlign: 'left',
    letterSpacing: '-0.02em',
    paddingBottom: '34px',
  },
  subtitulo: {
    color: '#FFF',
    fontFamily: 'Poppins',
    fontSize: '12px',
    fontWeight: 600,
    textAlign: 'left',
    letterSpacing: '-0.02em',
    paddingBottom: '25px',
  },

  texto: {
    color: '#666666',
    fontFamily: 'Poppins',
    fontSize: '16px',
    fontWeight: 500,
    textAlign: 'left',
    letterSpacing: '-0.02em',
  },
  textfield: {
    '& .MuiFilledInput-multiline': {
      padding: '12px 0 0 0',
      //backgroundColor:'#202020',
      //borderRadius:'12px'
    },

    '& textarea': {
      fontFamily: 'Poppins',
      fontWeight: 500,
      fontSize: 16,
      letterSpacing: '-0.02em',
      color: '#666666',
    },
    '& .MuiFilledInput-underline:before': {
      //borderBottomColor: '#2C2C2C',
      borderBottom: ' 3px solid #2C2C2C',
    },
    '& .MuiFilledInput-underline:after': {
      //borderBottomColor: '#2C2C2C',
      borderBottom: ' 3px solid #2C2C2C',
    },
  },
}))

function Consultas(props) {
  const [consulta, setConsulta] = React.useState('')

  const handleConsulta = (e) => {
    setConsulta(e.target.value)
    localStorage.setItem('consultaBussines', e.target.value)
  }
  const classes = useStyles()
  return (
    <React.Fragment>
      <Grid container direction={'column'} style={{ paddingTop: '104px' }}>
        <Grid item>
          <Typography className={classes.titulo}>Consultas</Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.subtitulo}>
            Mensaje para consultas
          </Typography>
        </Grid>

        <TextField
          id="filled-multiline-static"
          onChange={handleConsulta}
          multiline
          rows={10}
          placeholder={
            'Escribí el mensaje que van a recibir tus clientes a la hora de hacerte una consulta'
          }
          value={consulta}
          variant="filled"
          className={classes.textfield}
        />
      </Grid>
    </React.Fragment>
  )
}

export default Consultas
