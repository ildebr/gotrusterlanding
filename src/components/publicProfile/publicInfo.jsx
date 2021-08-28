import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Logo from '../../asset/images/logo.svg'
import Like from '../../asset/images/publicProfile/like.svg'
import BLike from '../../asset/images/publicProfile/blackLike.svg'
import ReputationImg from '../../asset/images/reputation/Ellipse 6.png'
import GreenCircle from '../../asset/images/publicProfile/greencircle.svg'

const { localStorage } = global.window;
const useStyles = makeStyles(theme => ({
    trusterp: {
        fontFamily: "Poppins",
        fontWeight: 700,
        fontStyle: "normal",
        fontSize: "64.23px",
        lineHeight: '111.35px',
        letterSpacing: '-0.03',
        textAlign: 'center',
        color: '#ACFD00'
    },
    trustert: {
        fontFamily: "Poppins",
        fontWeight: 500,
        fontStyle: "normal",
        fontSize: '15.32px',
        lineHeight: '24.48px',
        letterSpacing: '-0.02',
        textAlign: 'left',
        color: '#E5E5E5'
    },
    protrusterb: {
        width: '100%',
        padding: "7px",
        borderRadius: "10.87px",
        border: "2.21px solid",
        borderColor: "#ACFD00",
        backgroundColor: "rgba(255,0,0,0)",
    },
    protrusterb2: {
        width: '100%',
        padding: "7px",
        borderRadius: "10.87px",
        border: "2.21px solid",
        borderColor: "#ACFD00",
        backgroundColor: "#ACFD00",
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
    protrustert2: {
        paddingLeft: "10px",
        fontFamily: "Poppins",
        fontWeight: 600,
        fontStyle: "normal",
        fontSize: "18.29px",
        letterSpacing: "-0.02",
        color: "#000000"
    },
}))


const PublicInfo = ({selected}) => {
    const classes = useStyles();
    const [Trust, setTrust] = React.useState(false);
    const TrusterPoints = 122
    const TrusterUsers = 86
    const namefull = localStorage.getItem("nombre") + ' ' + localStorage.getItem("apellido");
    function toggleTrust(){
        setTrust(!Trust)
        selected(Trust)
    }
    return (
        <Grid position="static" color="transparent" style={{
            flexGrow: 1,
            border: 0,
            marginTop: 20,
        }} >
            <Grid container alignItems='center' justify="center" xs={12} xl={12} sm={12}>
                <Grid container alignItems='center' justify='center' xs={4} xl={4} sm={4}>
                    <Grid container alignItems='center' justify='flex-start' xs={2} xl={2} sm={2}>
                        <img src={Logo} alt='logo' width='45px'/>
                    </Grid>
                    <Grid container alignItems='center' justify='flex-start' xs={4} xl={4} sm={4}>
                        <Typography className={classes.trusterp}>{TrusterPoints}</Typography>
                    </Grid>
                    <Grid container alignItems='center' justify='center' xs={6} xl={6} sm={6}>
                        <Typography className={classes.trustert}>
                            Puntos Truster obtenidos
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container alignItems='center' justify='center' xs={4} xl={4} sm={4}>
                    <Grid container alignItems='center' justify='flex-end' xs={2} xl={2} sm={2}>
                        <img src={Like} alt='logo' width='25px' />
                    </Grid>
                    <Grid container alignItems='center' justify='flex-start' xs={4} xl={4} sm={4}>
                        <Typography className={classes.trusterp}>{TrusterUsers}</Typography>
                    </Grid>
                    <Grid container alignItems='center' justify='flex-start' xs={6} xl={6} sm={6}>
                        <Typography className={classes.trustert}>
                            Usuarios ya confían en {localStorage.getItem("nombre")}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container alignItems='center' justify='center' xs={4} xl={4} sm={4}>
                    {Trust ? 
                    <button className={classes.protrusterb2} onClick={() => toggleTrust()}>
                        <Grid item container justify='center' xs={12} xl={12} sm={12}>
                            <img src={BLike} alt='blike' />
                            <Typography className={classes.protrustert2}>Confías en {localStorage.getItem("nombre")}</Typography>
                        </Grid>
                    </button> 
                    : 
                        <button className={classes.protrusterb} onClick={() => toggleTrust()}>
                        <Grid item container justify='center' xs={12} xl={12} sm={12}>
                            <img src={Like} alt='like' />
                            <Typography className={classes.protrustert}>Confías en {localStorage.getItem("nombre")}</Typography>
                        </Grid>
                    </button>}          
                </Grid>
            </Grid>
        </Grid >)
}
export default PublicInfo;
