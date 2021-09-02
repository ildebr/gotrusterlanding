import React, { Component } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import ready from '../../../asset/images/automaticvalidation/linkedin/readyLinkedIn.png';
import Logo from '../../../asset/images/logo.svg';


const { localStorage } = global.window;
const useStyles = makeStyles(theme => ({
  mainText: {
    fontFamily: "Poppins",
    fontWeight: 700,
    fontStyle: "normal",
    fontSize: "45px",
    lineHeight: '51px',
    textAlign: 'center',
    color: "#FFFFFF",
    maxWidth: '700px'
  },
  number: {
    fontFamily: "Poppins",
    fontWeight: 700,
    fontStyle: "normal",
    fontSize: "105.44px",
    lineHeight: "50.9px",
    color: "#ACFD00",
    marginRight:'12px'
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
    fontFamily: "Poppins",
    fontWeight: 500,
    fontStyle: "normal",
    fontSize: "18px",
    lineHeight:'27px',
    color: "#252525",
    cursor: "pointer"
  },
  reputation: {
    fontFamily: "Poppins",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "27px",
    lineHeight: "31px",
    letterSpacing: '-0.01',
    color: "#FFFFFF"
  }
}))

const MainText = `Listo, tu información ha sido recibida, te avisaremos cuando tus puntos hayan sido sumados.`

const ReadyFacebook = () => {
  const classes = useStyles();
  const namefull = localStorage.getItem("nombre") + ' ' + localStorage.getItem("apellido");
  return (
      <Grid position="static" color="transparent" style={{
        flexGrow: 1,
        border: 0,
        marginTop: 40,
      }}>
        <Grid xs={12} xl={12} sm={12} container justify="center" alignContent="center">

            <img src={ready} alt='okLinkedIn' width='150px' />

        </Grid>
        <Grid xs={12} xl={12} sm={12} container style={{ marginTop: '80px' }} justify="center" alignContent="center">
          <Typography className={classes.mainText}>
            {MainText}
          </Typography>
        </Grid>

        <Grid xs={12} xl={12} sm={12} container style={{ marginTop: '40px' }} justify="center" alignContent="center">
          <button className={classes.button}>
            Cerrar
          </button>
        </Grid>
      </Grid >)
}
export default ReadyFacebook;
