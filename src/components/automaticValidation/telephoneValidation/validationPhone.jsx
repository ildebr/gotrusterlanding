import React, { Component, useState } from 'react'
import { Container, Grid, Typography, Button } from '@material-ui/core';
import { withStyles, makeStyles} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import eyePhone from '../../../asset/images/automaticvalidation/phone/eyePhone.png';



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
  inputTitle : {
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
    width: '300px'
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
    width: '150px'
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

const MainText = `Para validar tu teléfono, te enviaremos un sms con un código de seguridad.`
const RegisterText = `Registrate y accede a todo el perfil de ${localStorage.getItem("nombre")}`
const Text = 'Utiliza el formato 54-11-67880000, solo son válidos teléfonos argentinos'
const SentText = 'No utilices guiones o caracteres especiales, el código es valido durante 10 minutos'

const ValidationPhone = () => {
  const [Sent, setSent] = useState(false)
  const classes = useStyles();
  const namefull = localStorage.getItem("nombre") + ' ' + localStorage.getItem("apellido");
  const toggleSend = () => {
    setSent(!Sent)
  }
  return (
    <Grid position="static" color="transparent" style={{
      flexGrow: 1,
      border: 0,
      marginTop: 40,
    }}>
      <Grid xs={12} xl={12} sm={12} container justify="center">
        <img src={eyePhone} alt='eyePhone' width='120px'/>
      </Grid>
      <Grid xs={12} xl={12} sm={12} container style={{ marginTop: '30px' }} justify="center">
        <Typography className={classes.mainText}>
          {MainText}
        </Typography>
      </Grid>
      {!Sent ? 
      <Grid xs={12} xl={12} sm={12} container style={{ marginTop: '30px' }} justify="center">
        <form style={{
          width: '40%',
          marginTop: 10,
          justifyContent: "center",
          alignContent: "center",
        }}
          // onSubmit={this.handleSubmit}
          noValidate >
          <Typography className={classes.inputTitle}>
            Teléfono
          </Typography>
          <InputBase
            placeholder="351599122331"
            fullWidth
            id="telefono"
            name='name'
            inputProps={{ style: { textAlign: 'left' } }}
            className={classes.formButton2}
            // onChange={this.handleName}
            required
          // onBlur={(e) => {
          //   this.inputChange(e)
          // }}
          />
        </form>
      </Grid> 
      : 
      <Grid xs={12} xl={12} sm={12} container style={{ marginTop: '30px' }} justify="center">
          <form style={{
            width: '40%',
            marginTop: 10,
            justifyContent: "center",
            alignContent: "center",
          }}
            // onSubmit={this.handleSubmit}
            noValidate >
            <Typography className={classes.inputTitle}>
              Código
            </Typography>
            <InputBase
              placeholder="00-00-00"
              fullWidth
              id="codigo"
              name='name'
              inputProps={{ style: { textAlign: 'left' } }}
              className={classes.formButton2}
              // onChange={this.handleName}
              required
            // onBlur={(e) => {
            //   this.inputChange(e)
            // }}
            />
          </form>
        </Grid>}
      
      <Grid xs={12} xl={12} sm={12} container style={{ marginTop: '10px' }} justify="center">
        <Typography className={classes.ubtext}>
          {!Sent ? Text : SentText}
        </Typography>
      </Grid>
      <Grid xs={12} xl={12} sm={12} container style={{ marginTop: '20px' }} justify="center">
        <Grid xs={5} xl={5} sm={5} container style={{ marginTop: '10px', marginLeft: '-30px' }} justify="flex-end">
          {!Sent ?
            <button className={classes.cbutton}>
              Cancelar
            </button>
            :
            <button className={classes.cbutton}>
              Atras
            </button>
          }
        </Grid>
        <Grid xs={7} xl={7} sm={7} container style={{ marginTop: '10px', marginLeft: '30px' }} justify="flex-start">
          {!Sent ? 
          <button className={classes.button} onClick={toggleSend}>
            Enviar SMS
          </button>
          :
            <button className={classes.button} onClick={toggleSend}>
            Reenviar SMS
          </button>
          }
        </Grid>
      </Grid>
      <Grid xs={12} xl={12} sm={12} container style={{ marginTop: '40px', marginBottom: '50px'}} justify="center">
        <Typography className={classes.nomsg} style={{ marginRight: '5px'}}>
          ¿No te llega el mensaje? 
        </Typography>
        <Typography className={classes.soporte}>
          Contactá a soporte
        </Typography>
      </Grid>

    </Grid >)
}
export default ValidationPhone;
