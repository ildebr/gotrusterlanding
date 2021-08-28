import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import ReputationImg from '../../asset/images/reputation/Ellipse 6.png'
import GreenCircle from '../../asset/images/publicProfile/greencircle.svg'

const { localStorage } = global.window;
const useStyles = makeStyles(theme => ({
    name: {
        fontFamily: "Poppins",
        fontWeight: 700,
        fontStyle: "normal",
        fontSize: "53.72px",
        lineHeight: '80.57px',
        color: "#FFFFFF"
    },
    ocupation: {
        fontFamily: "Poppins",
        fontWeight: 300,
        fontStyle: "normal",
        fontSize: "26.86px",
        lineHeight: "17.19px",
        letterSpacing: '-0.02',
        color: "#ACFD00"
    },
    membership: {
        fontFamily: "Poppins",
        fontWeight: 600,
        fontStyle: "normal",
        fontSize: "19.34px",
        lineHeight: "25.78px",
        letterSpacing: ' -0.02',
        color: "#FFFFFF",
    },
    protrusterb: {
        padding: "7px",
        borderRadius: "10.87px",
        border: "2.21px solid",
        borderColor: "#ACFD00",
        backgroundColor: "rgba(255,0,0,0)",
    },
    protrustert: {
        paddingLeft: "10px",
        fontFamily: "Poppins",
        fontWeight: 600,
        fontStyle: "normal",
        fontSize: "18.29px",
        letterSpacing: "-0.02",
        color: "#ACFD00"
    },
    
}))


const ProfileCard = () => {
    const classes = useStyles();
    const namefull = localStorage.getItem("nombre") + ' ' + localStorage.getItem("apellido");
    return (
        <Grid position="static" color="transparent" style={{
            flexGrow: 1,
            border: 0,
            marginTop: 20,
        }} >
            <Grid container alignItems='center'>
                <Grid container xs={9} xl={9} sm={9} justify="center" alignItems='center'>
                    <Grid container justify='flex-start' alignItems='center' xs={12} xl={12} sm={12} style={{ marginBottom: 20 }}>
                        <button className={classes.protrusterb}>
                            <Grid item container  justify='flex-end' xs={12} xl={12} sm={12}>
                                <img src={GreenCircle} alt='greencircle' />
                                <Typography className={classes.protrustert}>Pro Truster</Typography>
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
                            Front End Developer
                        </Typography>
                    </Grid>
                    <Grid container justify='flex-start' xs={12} xl={12} sm={12} alignItems='center' style={{ marginBottom: 20 }}>
                        <Typography className={classes.membership}>
                            Miembro Truster desde Septiembre / 2021
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container justify='flex-end' xs={3} xl={3} sm={3} style={{ marginTop: -10 }}>
                    <Grid container justify='flex-end'>
                        <Grid container justify='flex-end' xs={11} xl={11} sm={11}>
                            <img src={ReputationImg} alt='test' width='160px' height='160px' />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid >)
}
export default ProfileCard;
