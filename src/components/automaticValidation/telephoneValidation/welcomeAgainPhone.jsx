import React, { Component } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";


const { localStorage } = global.window;
const useStyles = makeStyles(theme => ({
  mainText: {
    fontFamily: "Poppins",
    fontWeight: 700,
    fontStyle: "normal",
    fontSize: "38px",
    lineHeight: '51px',
    letterSpacing: '-0.02',
    textAlign: 'center',
    color: "#FFFFFF"
  },
  register: {
    textAlign: 'left',
    fontFamily: "Poppins",
    fontWeight: 800,
    fontStyle: "normal",
    fontSize: "37.81px",
    lineHeight: "46.22px",
    color: "#ACFD00"
  },
  truster: {
    textAlign: 'left',
    fontFamily: "Poppins",
    fontWeight: 500,
    fontStyle: "normal",
    fontSize: "21.01px",
    lineHeight: "29.41px",
    color: "#FFFFFF"
  },
  button: {
    marginTop: theme.spacing(1),
    backgroundColor: '#2B2B2B',
    borderRadius: 15,
    padding: 15,
    height: '50px',
    textTransform: 'none',
    border: '1px solid',
    borderColor: '#2B2B2B',
    borderTop: 'red',
    borderLeft: 'red',
    borderRight: 'red',
    fontFamily: "Poppins",
    fontWeight: 600,
    fontStyle: "normal",
    fontSize: "13.36px",
    color: "#FFFFFF",
    "&:hover": {
      border: '2px solid',
      borderTop: 'red',
      borderLeft: 'red',
      borderRight: 'red',
      borderColor: '#ACFD00',
    },
  }

}))

const MainText = `Para validar tu teléfono, te enviaremos un sms con un código de seguridad.`
const RegisterText = `Registrate y accede a todo el perfil de ${localStorage.getItem("nombre")}`

const WelcomeAgainPhone = () => {
  const classes = useStyles();
  const namefull = localStorage.getItem("nombre") + ' ' + localStorage.getItem("apellido");
  return (
    <Grid position="static" color="transparent" style={{
      flexGrow: 1,
      border: 0,
      marginTop: 40,
    }}>
      <Grid xs={12} xl={12} sm={12} container>
        {/* <img src={eyePhone} alt='eyePhone' /> */}
      </Grid>
      <Grid xs={12} xl={12} sm={12} container style={{ marginTop: '30px' }}>
        <Typography className={classes.mainText}>
          {MainText}
        </Typography>
      </Grid>

    </Grid >)
}
export default WelcomeAgainPhone;
