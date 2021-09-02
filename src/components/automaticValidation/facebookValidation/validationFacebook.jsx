import React, { Component } from 'react'
import { Container, Grid, Typography, Button } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import eyePhone from '../../../asset/images/automaticvalidation/linkedin/validationLinkedIn.png';
import FacebookLogin from 'react-facebook-login';


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
    color: "#FFFFFF",
    width: '60%'
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
  inputTitle: {
    textAlign: 'center',
    fontFamily: "Poppins",
    fontWeight: 600,
    fontStyle: "normal",
    fontSize: "12px",
    lineHeight: "18px",
    color: "#FFFFFF"
  },
  ubtext: {
    textAlign: 'center',
    fontFamily: "Poppins",
    fontWeight: 500,
    fontStyle: "normal",
    fontSize: "10px",
    lineHeight: "15px",
    letterSpacing: '-0.02',
    color: '#666666',
    width: '25%'
  },
  formButton2: {
    marginTop: theme.spacing(1),
    height: 50,
    border: '1px solid',
    borderColor: '#999999',
    borderRadius: '15px',
    color: "white",
    font: 'normal normal normal 16px/22px Poppins',
    textAlignLast: 'center',
    "&:hover": {
      border: '2px solid',
      borderColor: '#ACFD00',

    },
  },
  button: {
    marginTop: theme.spacing(1),
    marginLeft: '30px' ,
    backgroundColor: '#ACFD00',
    borderRadius: 15,
    padding: 15,
    textAlignLast: 'center',
    textTransform: 'none',
    border: '1px solid',
    borderColor: '#ACFD00',
    fontFamily: "Poppins",
    fontWeight: 600,
    fontStyle: "normal",
    fontSize: "18px",
    lineHeight: '27px',
    letterSpacing: '-0.02',
    color: '#252525',
    cursor: 'pointer',
    width: '190px'
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
    fontFamily: "Poppins",
    fontWeight: 500,
    fontStyle: "normal",
    fontSize: "18px",
    lineHeight: '27px',
    letterSpacing: '-0.02',
    color: '#FFFFFF',
    cursor: 'pointer',
    width: '190px'
  },
  nomsg: {
    textAlign: 'center',
    fontFamily: "Poppins",
    fontWeight: 500,
    fontStyle: "normal",
    fontSize: "12px",
    lineHeight: "18px",
    color: "#999999"
  },
  soporte: {
    textAlign: 'center',
    fontFamily: "Poppins",
    fontWeight: 700,
    fontStyle: "normal",
    fontSize: "12px",
    lineHeight: "18px",
    color: "#ACFD00",
    cursor: 'pointer',
  }
}))

const MainText = `Para validar tu cuenta de Facebook, hacé click en el botón y seguí los pasos.`
const RegisterText = `Registrate y accede a todo el perfil de ${localStorage.getItem("nombre")}`
const Text = 'Utiliza el formato 54-11-67880000, solo son válidos teléfonos argentinos'
const responseFacebook = (response) => {
  console.log("Capturando nombre: "+ response.name);
  console.log("Capturando correo: "+ response.email);
  console.log("Capturando foto: "+ response.picture.data.url);
}
const componentClicked = ()=>{
 console.log('evento click')
}

const ValidationFacebook = () => {
  const classes = useStyles();
  const namefull = localStorage.getItem("nombre") + ' ' + localStorage.getItem("apellido");
  return (
    <Grid position="static" color="transparent" style={{
      flexGrow: 1,
      border: 0,
      marginTop: 120,
    }}>
      <Grid xs={12} xl={12} sm={12} container justify="center">
        <img src={eyePhone} alt='eyePhone' width='120px' style={{ marginLeft: '32px' }} />
      </Grid>
      <Grid xs={12} xl={12} sm={12} container style={{ marginTop: '30px' }} justify="center">
        <Typography className={classes.mainText}>
          {MainText}
        </Typography>
      </Grid>


      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '32px' }}>
        <button className={classes.cbutton}>
          Cancelar
        </button>

        <FacebookLogin
          className={classes.button}
          appId="4014386245332741"
          autoLoad={false}
          fields="name,email,picture"
          onClick={componentClicked}
          callback={responseFacebook}
          textButton= "Validar"
          cssClass={classes.button}
          
        />

      </div>


    </Grid >)
}
export default ValidationFacebook;
