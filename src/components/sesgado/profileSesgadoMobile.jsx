import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import CircularDeterminate from '../../components/reputation/progressBarMobile'
import ReputationImg from '../../asset/images/reputation/Ellipse 6.png'
import GreenCircle from '../../asset/images/publicProfile/greencircle.svg'
import GreyCircle from '../../asset/images/sesgado/greycircle.svg'

const { localStorage } = global.window;
const useStyles = makeStyles(theme => ({
  name: {
    fontFamily: "Poppins",
    fontWeight: 700,
    fontStyle: "normal",
    fontSize: "24.53px",
    lineHeight: '28.62px',
    color: "#FFFFFF",
    textAlign: "left"
  },
  ocupation: {
    fontFamily: "Poppins",
    fontWeight: 500,
    fontStyle: "normal",
    fontSize: "14.72px",
    lineHeight: "16.35px",
    letterSpacing: '-0.02',
    color: "#ACFD00",
    textAlign: "left"
  },

}))


const ProfileSesgadoMobile = () => {
  const classes = useStyles();
  const namefull = localStorage.getItem("nombre") + ' ' + localStorage.getItem("apellido");
  return (
    <Grid position="static" color="transparent" justify='center' container style={{
      flexGrow: 1,
      border: 0,
      marginTop: 20,
      backgroundColor: 'rgba(28, 28, 28, 0.49)',
      borderRadius: '15px',
      padding: '30px'
    }} >
      <Grid container xs={12} xl={12} sm={12} alignItems='center'>
        <Grid container xs={6} xl={6} sm={6} >
          <Grid container justify='flex-start' alignItems='center' xs={12} xl={12} sm={12} style={{ backgroundColor: 'rgba(75, 75, 75, 0.7)', height: '30px', width: '150px', borderRadius: '10px', marginBottom: '10px'}}>
          </Grid>
          <Grid container justify='flex-start' xs={12} xl={12} sm={12} alignItems='center' style={{ marginBottom: 10 }}>
            <Typography className={classes.name}>
              {/* {namefull} */}
            </Typography>
          </Grid>
          <Grid container justify='flex-start' xs={12} xl={12} sm={12} alignItems='center' style={{ marginBottom: 30 }}>
            <Typography className={classes.ocupation}>
             {/*  Front End Developer */}
            </Typography>
          </Grid>
          <Grid container justify='flex-start' alignItems='center' xs={12} xl={12} sm={12} style={{ backgroundColor: 'rgba(75, 75, 75, 0.7)', height: '15px', width: '350px', borderRadius: '10px' }}>
          </Grid>
        </Grid>
        <Grid container justify='flex-end' xs={6} xl={6} sm={6}>
          <img src={GreyCircle} alt='greycircle' width='105px'/>
          <div style={{ zIndex: 1, marginTop: -120, marginRight: -15 }}>
            <CircularDeterminate givenValue={100} color={'#8A8A8A'}/>
          </div>
        </Grid>
      </Grid>
    </Grid >)
}
export default ProfileSesgadoMobile;
