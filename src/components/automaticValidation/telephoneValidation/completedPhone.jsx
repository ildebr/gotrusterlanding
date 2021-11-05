import React, { Component } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import okPhone from '../../../asset/images/automaticvalidation/phone/okPhone.png';
import Logo from '../../../asset/images/logo.svg';
import WindowDimensions from "../../../components/UtilityComponents/WindowDimension"


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
    width: '70%'
  },
  mainTextMobile: {
    fontFamily: "Poppins",
    fontWeight: 700,
    fontStyle: "normal",
    fontSize: "25px",
    lineHeight: '30px',
    textAlign: 'center',
    color: "#FFFFFF",
    width: '70%'
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
  numberMobile: {
    fontFamily: "Poppins",
    fontWeight: 700,
    fontStyle: "normal",
    fontSize: "70px",
    lineHeight: "50.9px",
    color: "#ACFD00",
    marginRight: '12px'
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
  buttonMobile: {
    marginTop: theme.spacing(1),
    backgroundColor: '#ACFD00',
    borderRadius: 15,
    padding: 10,
    height: '45px',
    width: '90%',
    textTransform: 'none',
    border: '1px solid',
    borderColor: '#ACFD00',
    fontFamily: "Poppins",
    fontWeight: 500,
    fontStyle: "normal",
    fontSize: "18px",
    lineHeight: '27px',
    color: "#252525",
    cursor: "pointer",
    marginBottom: '10px'
  },
  reputation: {
    fontFamily: "Poppins",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "27px",
    lineHeight: "31px",
    letterSpacing: '-0.01',
    color: "#FFFFFF"
  },
  reputationMobile: {
    fontFamily: "Poppins",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "19px",
    lineHeight: "26px",
    letterSpacing: '-0.01',
    color: "#FFFFFF"
  }
}))


const MainText = `¡Listo! ¡Tu teléfono fue validado exitosamente!`
const ReputationText = `Tu reputación ha aumentado.`
const Points = '4'

const CompletedPhone = () => {
  const {width} = WindowDimensions();
  const classes = useStyles();
  const namefull = localStorage.getItem("nombre") + ' ' + localStorage.getItem("apellido");
  return (
    <Grid position="static" color="transparent" style={{
      flexGrow: 1,
      border: 0,
      marginTop: 40,
    }}>
      {width >= 600 ? 
        <Grid xs={12} xl={12} sm={12} container justify="center" alignContent="center">
          <Grid xs={6} xl={6} sm={6} container justify="flex-end" alignContent="center" style={{ marginRight: '10px' }}>
            <img src={okPhone} alt='okPhone' width='150px' />
          </Grid>
          <Grid xs={6} xl={6} sm={6} container justify="flex-start" alignContent="center" style={{ marginRight: '-10px' }}>
            <Typography className={classes.number}>
              +{Points}
            </Typography>
            <img src={Logo} alt='logo' width='40px' />
          </Grid>
        </Grid>
        :
        <Grid xs={12} xl={12} sm={12} container justify="center" alignContent="center">
          <Grid xs={12} xl={12} sm={12} container justify="center" alignContent="center">
            <img src={okPhone} alt='okPhone' width='160px' />
          </Grid>
          <Grid xs={12} xl={12} sm={12} container justify="center" alignContent="center" style={{ marginTop: '20px' }}>
            <Typography className={classes.numberMobile}>
              +{Points}
            </Typography>
            <img src={Logo} alt='logo' width='40px' />
          </Grid>
        </Grid>}
      
      <Grid xs={12} xl={12} sm={12} container style={{ marginTop: '80px' }} justify="center" alignContent="center">
        {width >= 600 ? 
          <Typography className={classes.mainText}>
            {MainText}
          </Typography>
          :
          <Typography className={classes.mainTextMobile} style={{ marginTop: '-30px' }}>
            {MainText}
          </Typography>
        }
      </Grid>
      <Grid xs={12} xl={12} sm={12} container style={{ marginTop: '40px' }} justify="center" alignContent="center">
        {width >= 600 ?
        <Typography className={classes.reputation}>
          {ReputationText}
        </Typography>
        :
        <Typography className={classes.reputationMobile}>
          {ReputationText}
        </Typography>
        }
      </Grid>
      <Grid xs={12} xl={12} sm={12} container style={{ marginTop: '40px' }} justify="center" alignContent="center">
          {width >= 600 ?
          <Button className={classes.button} href={'/reputation'}>
            Cerrar
          </Button>
          :
          <Button className={classes.buttonMobile} href={'/reputation'}>
            Cerrar
          </Button>
          }
          
      </Grid>
    </Grid >)
}
export default CompletedPhone;
