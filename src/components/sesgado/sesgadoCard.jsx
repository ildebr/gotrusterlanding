import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import BackArrow from '../../asset/images/sesgado/backArrow.svg'
import GreenArrow from '../../asset/images/sesgado/greenArrow.svg'
import BRectangle from '../../asset/images/sesgado/bigrectangle.svg'
import GreyElipse from '../../asset/images/sesgado/greyelipse.svg'
import Icons from '../../asset/images/sesgado/icons.svg'
//import User from '../../asset/images/sesgado/user.svg'
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

const TrusterText = `Truster te da ayuda a conocer mejor el historial de ${localStorage.getItem("nombre")} y a definir si es la persona que buscas para tus negocios `
const RegisterText = `Registrate y accede a todo el perfil de ${localStorage.getItem("nombre")}`

const SesgadoCard = () => {
  const classes = useStyles();
  const namefull = localStorage.getItem("nombre") + ' ' + localStorage.getItem("apellido");
  return (
    <Grid position="static" color="transparent" justify='center' style={{
      flexGrow: 1,
      border: 0,
      marginTop: -20,
    }}>
      <hr style={{ width: '99vw',position: 'absolute', left: 0}} color='#ACFD00' />
      <Grid style={{ position: 'absolute', left: 0, backgroundColor: '#0C0C0C', zIndex: '-1', width: '99vw'}}>
        <img src={BRectangle} alt='background' style={{ objectFit: 'cover' }} width='99vw' height='500px'/>
      </Grid>
      <Grid xs={12} xl={12} sm={12} container style={{ marginTop: '80px' }}>
        <Grid xs={6} xl={6} sm={6} container justify="flex-start">
          <Grid xs={10} xl={10} sm={10} container alignItems='center' justify='flex-start' style={{ cursor: 'pointer', marginBottom: '20px' }}>
            <Grid xs={1} xl={1} sm={1} container alignItems='center' justify='flex-start'>
              <img src={BackArrow} alt='backarrow' />
            </Grid>
            <Grid xs={11} xl={11} sm={11} container alignItems='center' justify='flex-start'>
              <Typography className={classes.back}> VOLVER ATRAS </Typography>
            </Grid>
          </Grid>
          <Grid xs={10} xl={10} sm={10} container alignItems='center' justify='flex-start' style={{ marginBottom: '15px' }}>
            <Typography className={classes.register}> {RegisterText} </Typography>
          </Grid>
          <Grid xs={10} xl={10} sm={10} container alignItems='center' justify='flex-start' style={{ marginBottom: '15px' }}>
            <Typography className={classes.truster}>{TrusterText}</Typography>
          </Grid>
          <Grid xs={10} xl={10} sm={10} container alignItems='center' justify='flex-start'>
            <Button className={classes.button} href={'/register'}>
              Registrate Gratis Hoy <img src={GreenArrow} alt='greenarrow' style={{ marginLeft: '10px' }} />
            </Button>
          </Grid>
        </Grid>
        <Grid xs={6} xl={6} sm={6} container alignItems='center'>
          <img src={Icons} alt='greyelipse' style={{ zIndex: 3 }}/>
          <img src={GreyElipse} alt='greyelipse' style={{zIndex: 2, marginTop: '-380px', marginLeft: '30px'}}/>
          <img src={ReputationImg} alt='greyelipse' style={{ zIndex: 3, marginTop: '-420px', marginLeft: '80px',height:'220px', width:'220px', borderRadius:'100px' }} />

        </Grid>
      </Grid>
      
    </Grid >)
}
export default SesgadoCard;
