import React, { Component } from 'react'
import { Grid, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import eyePhone from '../../../asset/images/automaticvalidation/phone/wrongPhone.png'
import WindowDimensions from '../../../components/UtilityComponents/WindowDimension'
import Link from '@material-ui/core/Link'

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
    maxWidth: '70%',
  },
  mainTextMobile: {
    fontFamily: 'Poppins',
    fontWeight: 700,
    fontStyle: 'normal',
    fontSize: '25px',
    lineHeight: '30px',
    textAlign: 'center',
    color: '#FFFFFF',
    maxWidth: '90%',
  },
  secondText: {
    fontFamily: 'Poppins',
    fontWeight: 700,
    fontStyle: 'normal',
    fontSize: '27px',
    lineHeight: '31px',
    letterSpacing: '-0.01',
    textAlign: 'center',
    color: '#FFFFFF',
    maxWidth: '40%',
  },
  secondTextMobile: {
    fontFamily: 'Poppins',
    fontWeight: 700,
    fontStyle: 'normal',
    fontSize: '19px',
    lineHeight: '26px',
    letterSpacing: '-0.01',
    textAlign: 'center',
    color: '#FFFFFF',
    maxWidth: '80%',
  },
  article: {
    fontFamily: 'Poppins',
    fontWeight: 700,
    fontStyle: 'normal',
    fontSize: '27px',
    lineHeight: '31px',
    letterSpacing: '-0.01',
    textAlign: 'center',
    color: '#AAFF00',
    maxWidth: '40%',
  },
  articleMobile: {
    fontFamily: 'Poppins',
    fontWeight: 700,
    fontStyle: 'normal',
    fontSize: '19px',
    lineHeight: '26px',
    letterSpacing: '-0.01',
    textAlign: 'center',
    color: '#AAFF00',
    maxWidth: '80%',
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
    width: '300px',
  },
  buttonMobile: {
    marginTop: theme.spacing(1),
    backgroundColor: '#ACFD00',
    borderRadius: 15,
    padding: 10,
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
    width: '150px',
  },
  cbuttonMobile: {
    marginTop: theme.spacing(1),
    backgroundColor: 'rgba(0,0,0,0)',
    borderRadius: 15,
    padding: 10,
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

const MainText = `¡Bienvenido de nuevo! Lamentablemente no pudimos validar tu documento`
const SecondText = `No te preocupes,podes volver a intentarlo las veces que precises.`

const WelcomeAgainPhone = () => {
  const { width } = WindowDimensions()
  const classes = useStyles()
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
        <img src={eyePhone} alt="eyePhone" width="150px" />
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
      <Grid
        xs={12}
        xl={12}
        sm={12}
        container
        style={{ marginTop: '30px' }}
        justify="center"
      >
        {width >= 600 ? (
          <Typography className={classes.secondText}>{SecondText}</Typography>
        ) : (
          <Typography className={classes.secondTextMobile}>
            {SecondText}
          </Typography>
        )}
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
          <Typography className={classes.article}>
            Si no sabes que puede haber salido mal, lee{' '}
            <Link underline="always" className={classes.articleMobile}>
              este artículo
            </Link>
          </Typography>
        ) : (
          <Typography className={classes.articleMobile}>
            Si no sabes que puede haber salido mal, lee{' '}
            <Link underline="always" className={classes.articleMobile}>
              este artículo
            </Link>
          </Typography>
        )}
      </Grid>
      {width >= 600 ? (
        <Grid
          xs={12}
          xl={12}
          sm={12}
          container
          style={{ marginTop: '20px', marginBottom: '40px' }}
          justify="center"
        >
          <Grid
            xs={5}
            xl={5}
            sm={5}
            container
            style={{ marginTop: '10px', marginLeft: '-30px' }}
            justify="flex-end"
          >
            <button className={classes.cbutton}>Después</button>
          </Grid>
          <Grid
            xs={7}
            xl={7}
            sm={7}
            container
            style={{ marginTop: '10px', marginLeft: '30px' }}
            justify="flex-start"
          >
            <button className={classes.button}>Reintentar Ahora</button>
          </Grid>
        </Grid>
      ) : (
        <Grid
          xs={12}
          xl={12}
          sm={12}
          container
          style={{ marginTop: '20px', marginBottom: '40px' }}
          justify="center"
        >
          <Grid
            xs={12}
            xl={12}
            sm={12}
            container
            style={{ marginTop: '10px' }}
            justify="center"
          >
            <button className={classes.buttonMobile}>Reintentar Ahora</button>
          </Grid>
          <Grid
            xs={12}
            xl={12}
            sm={12}
            container
            style={{ marginTop: '10px' }}
            justify="center"
          >
            <button className={classes.cbuttonMobile}>Después</button>
          </Grid>
        </Grid>
      )}
    </Grid>
  )
}
export default WelcomeAgainPhone
