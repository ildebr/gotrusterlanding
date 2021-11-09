import React from 'react'
import { Grid, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import eyePhone from '../../../asset/images/automaticvalidation/mercadolibre/mercadolibreValidation.png'
import WindowDimensions from '../../../components/UtilityComponents/WindowDimension'

const { localStorage } = global.window
const useStyles = makeStyles((theme) => ({
  mainText: {
    fontFamily: 'Poppins',
    fontWeight: 700,
    fontStyle: 'normal',
    fontSize: '38px',
    lineHeight: '51px',
    letterSpacing: '-0.02',
    textAlign: 'center',
    color: '#FFFFFF',
    width: '60%',
  },
  mainTextMobile: {
    fontFamily: 'Poppins',
    fontWeight: 700,
    fontStyle: 'normal',
    fontSize: '25px',
    lineHeight: '30px',
    letterSpacing: '-0.02',
    textAlign: 'center',
    color: '#FFFFFF',
    width: '90%',
  },
  register: {
    textAlign: 'left',
    fontFamily: 'Poppins',
    fontWeight: 800,
    fontStyle: 'normal',
    fontSize: '37.81px',
    lineHeight: '46.22px',
    color: '#ACFD00',
  },
  truster: {
    textAlign: 'left',
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontStyle: 'normal',
    fontSize: '21.01px',
    lineHeight: '29.41px',
    color: '#FFFFFF',
  },
  inputTitle: {
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontWeight: 600,
    fontStyle: 'normal',
    fontSize: '12px',
    lineHeight: '18px',
    color: '#FFFFFF',
  },
  ubtext: {
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontStyle: 'normal',
    fontSize: '10px',
    lineHeight: '15px',
    letterSpacing: '-0.02',
    color: '#666666',
    width: '25%',
  },
  formButton2: {
    marginTop: theme.spacing(1),
    height: 50,
    border: '1px solid',
    borderColor: '#999999',
    borderRadius: '15px',
    color: 'white',
    font: 'normal normal normal 16px/22px Poppins',
    textAlignLast: 'center',
    '&:hover': {
      border: '2px solid',
      borderColor: '#ACFD00',
    },
  },
  button: {
    marginTop: theme.spacing(1),
    backgroundColor: '#ACFD00',
    borderRadius: 15,
    padding: 15,
    textAlignLast: 'center',
    textTransform: 'none',
    border: '1px solid',
    borderColor: '#ACFD00',
    fontFamily: 'Poppins',
    fontWeight: 600,
    fontStyle: 'normal',
    fontSize: '18px',
    lineHeight: '27px',
    letterSpacing: '-0.02',
    color: '#252525',
    cursor: 'pointer',
    width: '190px',
  },
  buttonMobile: {
    marginTop: theme.spacing(1),
    backgroundColor: '#ACFD00',
    borderRadius: 15,
    padding: 15,
    textAlignLast: 'center',
    textTransform: 'none',
    border: '1px solid',
    borderColor: '#ACFD00',
    fontFamily: 'Poppins',
    fontWeight: 600,
    fontStyle: 'normal',
    fontSize: '18px',
    lineHeight: '27px',
    letterSpacing: '-0.02',
    color: '#252525',
    cursor: 'pointer',
    width: '90%',
  },
  cbutton: {
    marginTop: theme.spacing(1),
    backgroundColor: 'rgba(0,0,0,0)',
    borderRadius: 15,
    padding: 15,
    textAlignLast: 'center',
    textTransform: 'none',
    border: '2px solid',
    borderColor: '#FFFFFF',
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontStyle: 'normal',
    fontSize: '18px',
    lineHeight: '27px',
    letterSpacing: '-0.02',
    color: '#FFFFFF',
    cursor: 'pointer',
    width: '190px',
  },
  cbuttonMobile: {
    marginTop: theme.spacing(1),
    backgroundColor: 'rgba(0,0,0,0)',
    borderRadius: 15,
    padding: 15,
    textAlignLast: 'center',
    textTransform: 'none',
    border: '2px solid',
    borderColor: '#FFFFFF',
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontStyle: 'normal',
    fontSize: '18px',
    lineHeight: '27px',
    letterSpacing: '-0.02',
    color: '#FFFFFF',
    cursor: 'pointer',
    width: '90%',
  },
  nomsg: {
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontStyle: 'normal',
    fontSize: '12px',
    lineHeight: '18px',
    color: '#999999',
  },
  soporte: {
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontWeight: 700,
    fontStyle: 'normal',
    fontSize: '12px',
    lineHeight: '18px',
    color: '#ACFD00',
    cursor: 'pointer',
  },
}))

const MainText = `Para validar tu cuenta de mercadolibre, hacé click en el botón y seguí los pasos.`
const RegisterText = `Registrate y accede a todo el perfil de ${localStorage.getItem(
  'nombre'
)}`
const Text =
  'Utiliza el formato 54-11-67880000, solo son válidos teléfonos argentinos'

const ValidationMercadoLibre = () => {
  const classes = useStyles()
  const { width } = WindowDimensions()

  const namefull = `${localStorage.getItem('nombre')} ${localStorage.getItem(
    'apellido'
  )}`
  return (
    <Grid
      position="static"
      color="transparent"
      style={{
        flexGrow: 1,
        border: 0,
        marginTop: width >= 600 ? 120 : 50,
      }}
    >
      <Grid xs={12} xl={12} sm={12} container justify="center">
        <img
          src={eyePhone}
          alt="eyePhone"
          width="120px"
          style={{ marginLeft: '32px' }}
        />
      </Grid>
      <Grid
        xs={12}
        xl={12}
        sm={12}
        container
        style={{ marginTop: '30px' }}
        justify="center"
      >
        {width >= 600 ? (
          <Typography className={classes.mainText}>{MainText}</Typography>
        ) : (
          <Typography className={classes.mainTextMobile}>{MainText}</Typography>
        )}
      </Grid>
      {width >= 600 ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: '32px',
          }}
        >
          <Button className={classes.cbutton} href={'/reputation'}>
            Cancelar
          </Button>
          <Button
            className={classes.button}
            style={{ marginLeft: '30px' }}
            onClick={(e) => {
              let url =
                'https://auth.mercadolibre.com.ar/authorization?response_type=code&client_id=8113077250611426&redirect_uri=https://dev.gotruster.app/readyAutomaticvalidationmercadolibre'
              let win = window.open(url, '_blank')
              // Cambiar el foco al nuevo tab (punto opcional)
              win.focus()
            }}
          >
            Validar
          </Button>
        </div>
      ) : (
        <div style={{ justifyContent: 'center', marginTop: '32px' }}>
          <Button
            className={classes.buttonMobile}
            onClick={(e) => {
              let url =
                'https://auth.mercadolibre.com.ar/authorization?response_type=code&client_id=8113077250611426&redirect_uri=https://dev.gotruster.app/readyAutomaticvalidationmercadolibre'
              let win = window.open(url, '_blank')
              // Cambiar el foco al nuevo tab (punto opcional)
              win.focus()
            }}
          >
            Validar
          </Button>
          <Button
            className={classes.cbuttonMobile}
            style={{ marginTop: '20px' }}
            href={'/reputation'}
          >
            Cancelar
          </Button>
        </div>
      )}
    </Grid>
  )
}
export default ValidationMercadoLibre
