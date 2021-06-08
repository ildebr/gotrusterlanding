import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Ok from '../../asset/images/myProfile/ok.svg'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        border: 0,
        margin: 0,
        marginTop: '2vh',
        height: 217,
    },
    menuButton: {
        marginRight: 2,
    },
    title: {
        marginLeft: 60,
        flexGrow: 1,
        align: "center",
        color: "#FFFFFF",
        font: " normal normal 40px/40px Poppins",
    },
    navSign: {
        marginRight: 10,
        color: '#ACFD00',
        fontFamily: 'Poppins',
        fontSize: '16px',
        fontStyle: ' normal',
        fontWeight: '700',
        lineHeight: '24px',
        letterSpacing: ' -0.02em',
        textAlign: 'center'
    },
    formButton: {
        marginTop: theme.spacing(1),
        height: 50,
        border: '1px solid',
        borderColor: '#2C2C2C',
        borderTop: 'red',
        borderLeft: 'red',
        borderRight: 'red',
        color: "white",
        font: 'normal normal normal 22px/22px Poppins',
        "&:hover": {
            border: '2px solid',
            borderTop: 'red',
            borderLeft: 'red',
            borderRight: 'red',
            borderColor: '#ACFD00',
        },
    },
    errorFormButton: {
        marginTop: theme.spacing(1),
        height: 50,
        border: '2px solid',
        borderColor: '#E94342',
        borderRadius: 15,
        color: "white",
        font: 'normal normal normal 16px/22px Poppins',
        "&:hover": {
            border: '2px solid',
            borderColor: '#E94342',
            borderRadius: 15,
        },
    },
    inputTitle: {
        color: '#ACFD00',
        font: 'normal normal normal 19px/19px Poppins',
        fontWeight: 600,
        marginBottom: 30,
    },
    lightext: {
        color: '#A3A3A3',
        font: 'normal normal normal 12px/12px Poppins',
        fontWeight: '400',
        marginTop: 5
    },
    button: {
        backgroundColor: '#ACFD00',
        padding: 15,
        width: 200,
        font: 'normal normal normal 16px/16px Poppins',
        fontWeight: '500',
        height: 50,
        border: '2px solid',
        borderColor: '#ACFD00',
        borderRadius: 15,
        textTransform: 'none',
    }
}));


const MyEmail = () => {
    const classes = useStyles();
    return (
        <Grid position="static" color="transparent" style={{
            flexGrow: 1,
            border: 0,
            paddingLeft: 50,
        }} >
            <Grid container justify='flex-start'>
                <Grid container>
                    <Grid container xs={12} xl={12} sm={12} >
                        <Typography className={classes.inputTitle}>
                            Correo electrónico
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container xs={11} xl={11} sm={11}>
                    <Typography style={{
                        flexGrow: 1,
                        textAlign: "left",
                        fontWeight: 500,
                        color: "#ffffff",
                        font: " normal normal 26px/26px Poppins",
                        marginTop: 10,
                        marginBottom: 5
                    }}>
                        Email
                </Typography>
                </Grid>
                <Grid container xs={1} xl={1} sm={1} justify='flex-end'>
                    <img src={Ok} alt='ok' width='10px' />
                </Grid>
                <hr width="100%" color='#2C2C2C' size={1} />
                <Grid container xs={12} xl={12} sm={12} style={{ marginTop: 30, marginBottom: 30 }}>
                    <button className={classes.button}>
                        Cambiar correo
                    </button>
                </Grid>
            </Grid>
        </Grid >)
}
export default MyEmail;
