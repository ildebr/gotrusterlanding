import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import success from '../../../asset/images/automaticvalidation/binance/successBinance.png'
import Logo from '../../../asset/images/logo.svg'
import WindowDimensions from '../../../components/UtilityComponents/WindowDimension'

const { localStorage } = global.window
const useStyles = makeStyles((theme) => ({
  mainText: {
    fontFamily: 'Poppins',
    fontWeight: 700,
    fontStyle: 'normal',
    fontSize: '45px',
    lineHeight: '51px',
    textAlign: 'center',
    color: '#FFFFFF',
    width: '70%',
  },
  mainTextMobile: {
    fontFamily: 'Poppins',
    fontWeight: 700,
    fontStyle: 'normal',
    fontSize: '25px',
    lineHeight: '30px',
    textAlign: 'center',
    color: '#FFFFFF',
    width: '70%',
  },
  number: {
    fontFamily: 'Poppins',
    fontWeight: 700,
    fontStyle: 'normal',
    fontSize: '105.44px',
    lineHeight: '50.9px',
    color: '#ACFD00',
    marginRight: '12px',
  },
  button: {
    marginTop: theme.spacing(1),
    backgroundColor: '#ACFD00',
    borderRadius: 15,
    padding: 10,
    height: '50px',
    width: '35%',
    textTransform: 'none',
    border: '1px solid',
    borderColor: '#ACFD00',
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontStyle: 'normal',
    fontSize: '18px',
    lineHeight: '27px',
    color: '#252525',
    cursor: 'pointer',
  },
  buttonMobile: {
    marginTop: theme.spacing(1),
    backgroundColor: '#ACFD00',
    borderRadius: 15,
    padding: 10,
    height: '50px',
    width: '90%',
    textTransform: 'none',
    border: '1px solid',
    borderColor: '#ACFD00',
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontStyle: 'normal',
    fontSize: '18px',
    lineHeight: '27px',
    color: '#252525',
    cursor: 'pointer',
  },
  reputation: {
    fontFamily: 'Poppins',
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: '27px',
    lineHeight: '31px',
    letterSpacing: '-0.01',
    color: '#FFFFFF',
  },
  reputationMobile: {
    fontFamily: 'Poppins',
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: '19px',
    lineHeight: '26px',
    letterSpacing: '-0.01',
    color: '#FFFFFF',
  },
}))

const MainText = `¡Listo! ¡Tu cuenta fue validada exitosamente!`
const ReputationText = `Tu reputación ha aumentado.`
const Points = '2'

const SuccesBinance = () => {
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
      {width >= 600 ? (
        <Grid
          xs={12}
          xl={12}
          sm={12}
          container
          justify="center"
          alignContent="center"
        >
          <Grid
            xs={6}
            xl={6}
            sm={6}
            container
            justify="flex-end"
            alignContent="center"
            style={{ marginRight: '10px' }}
          >
            <img src={success} alt="okBinance" width="150px" />
          </Grid>
          <Grid
            xs={6}
            xl={6}
            sm={6}
            container
            justify="flex-start"
            alignContent="center"
            style={{ marginRight: '-10px' }}
          >
            <Typography className={classes.number}>+{Points}</Typography>
            <img src={Logo} alt="logo" width="40px" />
          </Grid>
        </Grid>
      ) : (
        <Grid
          xs={12}
          xl={12}
          sm={12}
          container
          justify="center"
          alignContent="center"
        >
          <Grid
            xs={12}
            xl={12}
            sm={12}
            container
            justify="center"
            alignContent="center"
          >
            <img
              src={success}
              alt="okBinance"
              width="120px"
              style={{ marginLeft: '32px' }}
            />
          </Grid>
          <Grid
            xs={12}
            xl={12}
            sm={12}
            container
            justify="center"
            alignContent="center"
            style={{ marginTop: '20px' }}
          >
            <Typography className={classes.number} style={{ fontSize: '70px' }}>
              +{Points}
            </Typography>
            <img src={Logo} alt="logo" width="30px" />
          </Grid>
        </Grid>
      )}
      <Grid
        xs={12}
        xl={12}
        sm={12}
        container
        style={{ marginTop: width >= 600 ? '80px' : '50px' }}
        justify="center"
        alignContent="center"
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
        style={{ marginTop: width >= 600 ? '40px' : '20px' }}
        justify="center"
        alignContent="center"
      >
        {width >= 600 ? (
          <Typography className={classes.reputation}>
            {ReputationText}
          </Typography>
        ) : (
          <Typography className={classes.reputationMobile}>
            {ReputationText}
          </Typography>
        )}
      </Grid>
      <Grid
        xs={12}
        xl={12}
        sm={12}
        container
        style={{ marginTop: width >= 600 ? '40px' : '20px' }}
        justify="center"
        alignContent="center"
      >
        {width >= 600 ? (
          <button className={classes.button}>Cerrar</button>
        ) : (
          <button className={classes.buttonMobile}>Cerrar</button>
        )}
      </Grid>
    </Grid>
  )
}
export default SuccesBinance
