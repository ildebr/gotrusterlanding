import React,{useEffect, useState} from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import ready from '../../../asset/images/automaticvalidation/mercadolibre/mercadolibreReady.png';
import WindowDimensions from "../../../components/UtilityComponents/WindowDimension"
import { MeliValidations } from '../../../services/hostConfig';
import { getToken } from './../../../setting/auth-helpers';
import { LoopCircleLoading } from "react-loadingg";
const { localStorage, window } = global.window;

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
  mainTextMobile: {
    fontFamily: "Poppins",
    fontWeight: 700,
    fontStyle: "normal",
    fontSize: "25px",
    lineHeight: '30px',
    textAlign: 'center',
    color: "#FFFFFF",
    width: '90%'
  },
  number: {
    fontFamily: "Poppins",
    fontWeight: 700,
    fontStyle: "normal",
    fontSize: "105.44px",
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
    lineHeight: '27px',
    color: "#252525",
    cursor: "pointer"
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
    fontFamily: "Poppins",
    fontWeight: 500,
    fontStyle: "normal",
    fontSize: "18px",
    lineHeight: '27px',
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

const ReadyMercadoLibre = () => {
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState('')
  const classes = useStyles();
  const { width } = WindowDimensions();
   

  const handleLoadParameter = (e) => {
    let params = new URLSearchParams(window.location.search);
    const key = params.get('code')
    console.log(key)
   let Url= MeliValidations();
     let customerID= localStorage.getItem('customerId')
   try { 

    const token = getToken();
    setLoading(true)
        if (token !== 'undefined') {
            fetch(Url+'/'+`${key}`+'/'+customerID, {
                method: 'get',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }).then(response => {                
              window.open("/reputation", '_self'); 
                                                 
            }).then(response => {
              setLoading(false)  
              console.log("Retorno Meli", response)              
          })
          }
        } catch(e) {
          console.log(e)
      }
  }       
  const namefull = localStorage.getItem("nombre") + ' ' + localStorage.getItem("apellido");
  useEffect(() => {
      if (loading == true){
          setShow(<LoopCircleLoading/>)
    } else{
      setShow('')
    }
 }, [show]);
  return (
    <Grid position="static" color="transparent" style={{
      flexGrow: 1,
      border: 0,
      marginTop: 40,
    }}>
      <Grid xs={12} xl={12} sm={12} container justify="center" alignContent="center">
        {width >= 600 ?
          <img src={ready} alt='okMercadoLibre' width='150px' style={{ marginLeft: '32px' }} />
          :
          <img src={ready} alt='okMercadoLibre' width='120px' style={{ marginLeft: '32px' }} />
        }
      </Grid>
      <Grid xs={12} xl={12} sm={12} container style={{ marginTop: '80px' }} justify="center" alignContent="center">
        {width >= 600 ?
          <Typography className={classes.mainText}>
            {MainText}{show}
          </Typography>
          :
          <Typography className={classes.mainTextMobile}>
            {MainText}{show}
          </Typography>
        }
      </Grid>
      <Grid xs={12} xl={12} sm={12} container style={{ marginTop: '40px' }} justify="center" alignContent="center">
        {width >= 600 ?
          <button className={classes.button} onClick={handleLoadParameter}>
            Cerrar
          </button>
          :
          <button className={classes.buttonMobile} onClick={handleLoadParameter}>
            Cerrar
          </button>
        }
      </Grid>
    </Grid >)
}
export default ReadyMercadoLibre;
