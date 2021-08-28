import React, {Component} from 'react';
import {Grid, Typography, Button} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import image from '../../../asset/images/automaticvalidation/mercadolibre/mercadolibrefail.png';

const {localStorage} = global.window;
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
        maxWidth: '650px'
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
    subText: {
        textAlign: 'center',
        fontFamily: "Poppins",
        fontWeight: 400,
        fontStyle: "normal",
        fontSize: "27px",
        lineHeight: "29.41px",
        color: "#FFFFFF",
        maxWidth: '470px'
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
    width: '224px'
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

}))

const MainText = `¡Bienvenido de nuevo! Lamentablemente no pudimos validar tu cuenta`
const RegisterText = `Registrate y accede a todo el perfil de ${localStorage.getItem("nombre")}`

const FailedMercadoLibre = () => {
    const classes = useStyles();
    const namefull = localStorage.getItem("nombre") + ' ' + localStorage.getItem("apellido");
    return (
        <Grid position="static" color="transparent" style={{
            flexGrow: 1,
            border: 0,
            marginTop: 40,
        }}>
            <Grid xs={12} xl={12} sm={12} container justify="center">
                <img src={image} alt='MercadoLibre' width='120px' style={{marginLeft: '32px'}}/>
            </Grid>
            <Grid xs={12} xl={12} sm={12} container
                  style={{marginTop: '30px', display: 'flex', justifyContent: 'center'}}>
                <Typography className={classes.mainText}>
                    {MainText}
                </Typography>
            </Grid>

            <div style={{marginTop: '30px', display: 'flex', justifyContent: 'center', flexDirection:'column', alignItems:'center'}}>
                <div>
                    <Typography className={classes.subText}>
                        No te preocupes, podes volver a intentarlo las veces que precises.
                    </Typography>
                </div>
                <Typography className={classes.subText} style={{color: '#AAFF00', marginTop: '34px'}}>
                    Si no sabes que puede haber
                </Typography>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <Typography className={classes.subText} style={{color: '#AAFF00'}}>
                        salido mal, lee
                    </Typography>
                    <Typography className={classes.subText} style={{color: '#AAFF00', textDecorationLine: 'underline', marginLeft:'8px'}}>
                        este artículo
                    </Typography>
                </div>

            </div>

          <div style={{display:'flex', flexDirection:'row', justifyContent:'center',  marginTop: '32px'}}>
            <button className={classes.cbutton}>
              Despues
            </button>
            <button className={classes.button} style={{ marginLeft: '30px' }}>
              Reintentar Ahora
            </button>
          </div>

        </Grid>)
}
export default FailedMercadoLibre;
