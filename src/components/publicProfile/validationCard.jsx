import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Ok from '../../asset/images/publicProfile/ok.svg'
import Cross from '../../asset/images/publicProfile/cross.svg'
import GrayCircle from '../../asset/images/publicProfile/grayCircle.svg'
import DNI from '../../asset/images/publicProfile/correo.svg'
import PHONE from '../../asset/images/publicProfile/phone.svg'

const { localStorage } = global.window;
const dummyText = 'Mi nombre es Daniel, vivo en Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo eros, gravida sed sapien vel, maximus ultrices diam. Duis scelerisque mi sit amet bibendum facilisis. Donec scelerisque lectus ut lectus tincidunt, id bibendum sapien tristique. '

const useStyles = makeStyles(theme => ({
  text: {
    fontFamily: "Poppins",
    fontWeight: 500,
    textAlign: 'center',
    fontStyle: "normal",
    fontSize: '17px',
    lineHeight: '20px',
    letterSpacing: '-0.02',
    color: '#D1D1D1'
  }
}))


const ValidationCard = (props) => {
  const { validationEnabled, validationName, validationStatus } = props.data;
  const classes = useStyles();
  return (
    <Grid position="static" color="transparent" style={{
      flexGrow: 1,
      border: 0,
      marginTop: 20,
      maxWidth: '120px',
      paddingLeft: '10px'
    }}>
      <Grid container justify="center" xs={12} xl={12} sm={12} style={{
        backgroundColor: '#1C1C1C',
        borderRadius: '10px', height: '150px', width: '110px'
      }}>
        <Grid container justify="center" xs={12} xl={12} sm={12} style={{
          backgroundColor: '#0F0F0F',
          borderRadius: '40px', height: '85px', width: '2000px'
          }}>
          <Grid container justify="center" xs={12} xl={12} sm={12} style={{
            backgroundColor: '#0F0F0F', height: '65px', width: '110px', borderRadius: '10px'
          }}>
            <Grid container justify="flex-end" xs={12} xl={12} sm={12} style={{paddingRight: '5px', paddingTop: '5px'}}>
              {validationEnabled ? <img src={Ok} /> : <img src={Cross} width={'15px'} />}
            </Grid> 
            {validationName == '' ? <img src={GrayCircle} width={'50px'} /> : <img src={DNI} width={'25px'}/>}
          </Grid>
        </Grid>
        <Grid container justify="center" xs={12} xl={12} sm={12} style={{ paddingRight: '5px', paddingTop: '15px', paddingBottom: '15px' }}>
            <Typography className={classes.text}>
              {validationName} {validationStatus}
            </Typography>
        </Grid>
      </Grid>
    </Grid >)
}
export default ValidationCard;
