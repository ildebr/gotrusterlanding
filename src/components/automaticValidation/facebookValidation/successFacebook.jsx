import React, { Component } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import success from '../../../asset/images/automaticvalidation/linkedin/successLinkedIn.png';
import Logo from '../../../asset/images/logo.svg';


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
    number: {
        fontFamily: "Poppins",
        fontWeight: 700,
        fontStyle: "normal",
        fontSize: "105.44px",
        lineHeight: "50.9px",
        color: "#ACFD00",
        marginRight:'12px'
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

const MainText = `¡Listo! ¡Tu cuenta fue validada exitosamente!`
const ReputationText = `Tu reputación ha aumentado.`
const Points = '2'

const SuccessFacebook = () => {
    const classes = useStyles();
    const namefull = localStorage.getItem("nombre") + ' ' + localStorage.getItem("apellido");
    return (
        <Grid position="static" color="transparent" style={{
            flexGrow: 1,
            border: 0,
            marginTop: 40,
        }}>
            <Grid xs={12} xl={12} sm={12} container justify="center" alignContent="center">
                <Grid xs={6} xl={6} sm={6} container justify="flex-end" alignContent="center" style={{marginRight: '10px'}}>
                    <img src={success} alt='okLinkedIn' width='150px' />
                </Grid>
                <Grid xs={6} xl={6} sm={6} container justify="flex-start" alignContent="center" style={{ marginRight: '-10px' }}>
                    <Typography className={classes.number}>
                        +{Points}
                    </Typography>
                    <img src={Logo} alt='logo' width='40px' />
                </Grid>
            </Grid>
            <Grid xs={12} xl={12} sm={12} container style={{ marginTop: '80px' }} justify="center" alignContent="center">
                <Typography className={classes.mainText}>
                    {MainText}
                </Typography>
            </Grid>
            <Grid xs={12} xl={12} sm={12} container style={{ marginTop: '40px' }} justify="center" alignContent="center">
                <Typography className={classes.reputation}>
                    {ReputationText}
                </Typography>
            </Grid>
            <Grid xs={12} xl={12} sm={12} container style={{ marginTop: '40px' }} justify="center" alignContent="center">
                <button className={classes.button}>
                    Cerrar
                </button>
            </Grid>
        </Grid >)
}
export default SuccessFacebook;
