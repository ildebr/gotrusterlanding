import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import BackArrow from '../../asset/images/sesgado/backArrow.svg'
import GreenArrow from '../../asset/images/sesgado/greenArrow.svg'
import BRectangle from '../../asset/images/sesgado/bigrectangle.svg'
import GreyElipse from '../../asset/images/sesgado/greyelipse.svg'
import Icons from '../../asset/images/sesgado/icons.svg'
import User from '../../asset/images/sesgado/user.svg'
import ReputationImg from '../../asset/images/reputation/perfil.png'

const { localStorage } = global.window;
const useStyles = makeStyles(theme => ({
  back: {
    fontFamily: "Poppins",
    fontWeight: 500,
    fontStyle: "normal",
    fontSize: "15.41px",
    lineHeight: '19.53px',
    letterSpacing: '-0.01',
    color: "#FFFFFF"
  },
  register: {
    textAlign: 'center',
    fontFamily: "Poppins",
    fontWeight: 800,
    fontStyle: "normal",
    fontSize: "20.69px",
    lineHeight: "26.7px",
    color: "#ACFD00",
    width: '80%'
  },
  truster: {
    textAlign: 'center',
    fontFamily: "Poppins",
    fontWeight: 500,
    fontStyle: "normal",
    fontSize: "11.49px",
    lineHeight: "16.24px",
    color: "#FFFFFF",
    width: '80%'
  },
  button: {
    marginTop: theme.spacing(1),
    backgroundColor: '#2B2B2B',
    borderRadius: 15,
    padding: 15,
    height: '40px',
    textTransform: 'none',
    border: '1px solid',
    borderColor: '#2B2B2B',
    borderTop: 'red',
    borderLeft: 'red',
    borderRight: 'red',
    fontFamily: "Poppins",
    fontWeight: 600,
    fontStyle: "normal",
    fontSize: "11.88px",
    color: "#FFFFFF",
  }

}))

const TrusterText = `Truster te da ayuda a conocer mejor el historial de ${localStorage.getItem("nombre")} y a definir si es la persona que buscas para tus negocios.`
const RegisterText = `Registrate y accede a todo el perfil de ${localStorage.getItem("nombre")}.`

const SesgadoCard = () => {
  const classes = useStyles();
  const namefull = localStorage.getItem("nombre") + ' ' + localStorage.getItem("apellido");
  return (
    <Grid position="static" color="transparent" justify='center' container style={{
      flexGrow: 1,
      border: 0,
      marginTop: -40,
    }}>
      <hr style={{ width: '99vw', position: 'absolute', left: 0 }} color='#ACFD00' />
      <Grid style={{ position: 'absolute', left: 0, backgroundColor: '#0d0d0d', zIndex: -1, width: '100vw' }}>
        <img src={BRectangle} alt='background' style={{ objectFit: 'cover' }} width='100vw' height='550px' />
      </Grid>
      <Grid xs={12} xl={12} sm={12} container alignItems='center' justify='center'>
        <img src={Icons} alt='greyelipse' style={{ zIndex: 3, marginTop: '50px' }} width='250px' />
      </Grid>
      <Grid xs={12} xl={12} sm={12} container alignItems='center' justify='center'>
        <img src={GreyElipse} alt='greyelipse' width='220px' style={{ zIndex: 2, marginTop: '-230px' }} />
        </Grid>
      <Grid xs={12} xl={12} sm={12} container alignItems='center' justify='center'>
        <img src={ReputationImg} alt='greyelipse' width='160px' height='160px' style={{ zIndex: 3, marginTop: '-230px', borderRadius:'100px' }} />
      </Grid>
      <Grid xs={12} xl={12} sm={12} container justify='center' style={{ marginTop: '50px', width: '80%' }}>
          <Grid xs={12} xl={12} sm={12} container alignItems='center' justify='center' style={{ marginBottom: '15px' }}>
            <Typography className={classes.register}> {RegisterText} </Typography>
          </Grid>
          <Grid xs={12} xl={12} sm={12} container alignItems='center' justify='center' style={{ marginBottom: '15px' }}>
            <Typography className={classes.truster}>{TrusterText}</Typography>
          </Grid>
          <Grid xs={10} xl={10} sm={10} container alignItems='center' justify='center'>
            <Button className={classes.button} href={'/register'}>
              Registrate Gratis Hoy <img src={GreenArrow} alt='greenarrow' style={{ marginLeft: '10px' }} />
            </Button>
          </Grid>
        
      </Grid>

    </Grid >)
}
export default SesgadoCard;
