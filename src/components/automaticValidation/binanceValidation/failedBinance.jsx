import React from 'react'
import { Grid, Typography, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import image from '../../../asset/images/automaticvalidation/binance/failedBinance.png'
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
    maxWidth: '650px',
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
    maxWidth: '90%',
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
  subText: {
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: '27px',
    lineHeight: '29.41px',
    color: '#FFFFFF',
    maxWidth: '470px',
  },
  subTextMobile: {
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: '19px',
    lineHeight: '26px',
    color: '#FFFFFF',
    maxWidth: '70%',
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
    width: '224px',
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
}))

const MainText = `¡Bienvenido de nuevo! Lamentablemente no pudimos validar tu cuenta`
const RegisterText = `Registrate y accede a todo el perfil de ${localStorage.getItem(
  'nombre'
)}`

const FailedBinance = () => {
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
        marginTop: 40,
      }}
    >
      <Grid xs={12} xl={12} sm={12} container justify="center">
        {width >= 600 ? (
          <img
            src={image}
            alt="Binance"
            width="150px"
            style={{ marginLeft: '32px' }}
          />
        ) : (
          <img
            src={image}
            alt="Binance"
            width="120px"
            style={{ marginLeft: '32px' }}
          />
        )}
      </Grid>
      <Grid
        xs={12}
        xl={12}
        sm={12}
        container
        style={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}
      >
        {width >= 600 ? (
          <Typography className={classes.mainText}>{MainText}</Typography>
        ) : (
          <Typography className={classes.mainTextMobile}>{MainText}</Typography>
        )}
      </Grid>
      <Grid
        xs={12}
        xl={12}
        sm={12}
        container
        style={{ marginTop: width >= 600 ? '20px' : '10px' }}
        justify="center"
        alignContent="center"
      >
        <Grid
          xs={12}
          xl={12}
          sm={12}
          container
          style={{ marginTop: width >= 600 ? '10px' : '5px' }}
          justify="center"
          alignContent="center"
        >
          <Typography
            className={width >= 600 ? classes.subText : classes.subTextMobile}
          >
            No te preocupes, podes volver a intentarlo las veces que precises.
          </Typography>
        </Grid>
        <Grid
          xs={12}
          xl={12}
          sm={12}
          container
          style={{ marginTop: width >= 600 ? '10px' : '5px' }}
          justify="center"
          alignContent="center"
        >
          <Typography
            className={width >= 600 ? classes.subText : classes.subTextMobile}
            style={{ color: '#AAFF00', marginTop: '34px' }}
          >
            Si no sabes que puede haber salido mal, lee{' '}
            <Link
              className={width >= 600 ? classes.subText : classes.subTextMobile}
              style={{
                color: '#AAFF00',
                textDecorationLine: 'underline',
                cursor: 'pointer',
              }}
            >
              este artículo
            </Link>
          </Typography>
        </Grid>
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
          <button className={classes.cbutton}>Despues</button>
          <button className={classes.button} style={{ marginLeft: '30px' }}>
            Reintentar Ahora
          </button>
        </div>
      ) : (
        <div style={{ justifyContent: 'center', marginTop: '20px' }}>
          <button className={classes.buttonMobile}>Reintentar Ahora</button>
          <button
            className={classes.cbuttonMobile}
            style={{ marginTop: '10px' }}
          >
            Despues
          </button>
        </div>
      )}
    </Grid>
  )
}
export default FailedBinance
