import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import GreenCircle from '../../asset/images/publicProfile/greencircle.svg'
import CircularDeterminate from '../../components/reputation/progressBarMobile'
import UserImg from '../../asset/images/reputation/Ellipse 6.png'
import ShareIcon from '../../asset/images/publicProfile/shareIcon.svg'
import moment from 'moment'
import 'moment/locale/es';

const { localStorage } = global.window;
const useStyles = makeStyles(theme => ({
  name: {
    textAlign: 'left',
    fontFamily: "Poppins",
    fontWeight: 700,
    fontStyle: "normal",
    fontSize: "24.53px",
    lineHeight: '28.62px',
    color: "#FFFFFF"
  },
  ocupation: {
    textAlign: 'left',
    fontFamily: "Poppins",
    fontWeight: 500,
    fontStyle: "normal",
    fontSize: "14.72px",
    lineHeight: "16.35px",
    letterSpacing: '-0.02',
    color: "#ACFD00"
  },
  membership: {
    textAlign: 'left',
    fontFamily: "Poppins",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "13.08px",
    lineHeight: "15.54px",
    letterSpacing: ' -0.02',
    color: "#FFFFFF",
  },
  protrusterb: {
    padding: "7px",
    borderRadius: "7.56px",
    border: "1.5px solid",
    borderColor: "#ACFD00",
    backgroundColor: "rgba(255,0,0,0)",
  },
  protrustert: {
    paddingLeft: "10px",
    fontFamily: "Poppins",
    fontWeight: 600,
    fontStyle: "normal",
    fontSize: "12.74px",
    lineHeight: "19.11px",
    letterSpacing: "-0.02",
    color: "#ACFD00"
  },

}))


const ProfileCard = (props) => {
  const classes = useStyles();
  const namefull = localStorage.getItem("nombre") + ' ' + localStorage.getItem("apellido");
  const { level, occupation, creationDate } = props.customer
  return (
    <Grid position="static" color="transparent" container style={{
      flexGrow: 1,
      border: 0,
      background: 'rgba(28,28,28,0.49)',
      padding: '15px'
    }} >
      <Grid container xs={8} xl={8} sm={8} justify="flex-start" alignItems='center'>
        <Grid container xs={12} xl={12} sm={12} justify="center" alignItems='center'>
          <Grid container justify='flex-start' alignItems='center' xs={12} xl={12} sm={12} style={{ marginBottom: 20 }}>
            <button className={classes.protrusterb}>
              <Grid item container justify='flex-end' xs={12} xl={12} sm={12}>
                <img src={GreenCircle} alt='greencircle' width='15%' />
                <Typography className={classes.protrustert}>{level}</Typography>
              </Grid>
            </button>
          </Grid>
          <Grid container justify='flex-start' xs={12} xl={12} sm={12} alignItems='center' style={{ marginBottom: 20 }}>
            <Typography className={classes.name}>
              {namefull}
            </Typography>
          </Grid>
          <Grid container justify='flex-start' xs={12} xl={12} sm={12} alignItems='center' style={{ marginBottom: 20 }}>
            <Typography className={classes.ocupation}>
              {occupation}
            </Typography>
          </Grid>
          <Grid container justify='flex-start' xs={12} xl={12} sm={12} alignItems='center' style={{ marginBottom: 20 }}>
            <Typography className={classes.membership}>
              Miembro Truster desde {moment(creationDate).format('MMMM')} / {moment(creationDate).format('YYYY')}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container xs={4} xl={4} sm={4} justify="center" alignItems='center'>
        <Grid container justify="center" xs={12} xl={12} sm={12} style={{marginRight: '20px'}}>
          <div style={{ zIndex: 1, marginTop: -8.2 }}>
            <CircularDeterminate givenValue={90} />
          </div>
          <div style={{ zIndex: 1 }}>
            <img src={UserImg} alt='reputationImg' width='120px' />
          </div>
        </Grid>
        <Grid container justify="flex-end" xs={12} xl={12} sm={12}>
          <img src={ShareIcon} alt='shareIcon' width='25px' />
        </Grid>
      </Grid>
    </Grid >)
}
export default ProfileCard;
