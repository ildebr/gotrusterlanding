import React from 'react';
import { Grid, Typography, Link } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Ok from '../../asset/images/myProfile/ok.svg'
import Add from '../../asset/images/myProfile/add.svg'
import Verify from '../../asset/images/myProfile/verify.svg'
import Logo from '../../asset/images/reputation/logo.svg'
import Cross from '../../asset/images/myProfile/cross.svg'

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
        fontWeight: '600',
        marginBottom: 20,
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
        font: 'normal normal normal 16px/16px Poppins',
        fontWeight: '500',
        height: 50,
        border: '2px solid',
        borderColor: '#ACFD00',
        borderRadius: 15,
        textTransform: 'none',
    }
}));


const Profile = () => {
    const classes = useStyles();
    return (
        <Grid position="static" color="transparent" style={{
            flexGrow: 1,
            border: 0,
            paddingLeft: 50,
        }} >
            <Grid container justify="center" alignItems='flex-start' xs={12} xl={12} sm={12} style={{ marginTop: 30 }} >
                <Grid container xs={12} xl={12} sm={12}>
                    <Typography style={{
                        flexGrow: 1,
                        textAlign: "left",
                        fontWeight: 600,
                        color: "#666666",
                        font: " normal normal 12px/12px Poppins",
                    }}>
                        ¿A que te dedicas?
                </Typography>
                </Grid>
                <Typography style={{
                    flexGrow: 1,
                    textAlign: "left",
                    fontWeight: 500,
                    color: "#ffffff",
                    font: " normal normal 16px/16px Poppins",
                    marginTop: 10,
                    marginBottom: 5
                }}>
                    Front End Developer
                </Typography>
                <hr width="100%" color='#2C2C2C' size={1} />
            </Grid>
            <Grid container justify="center" alignItems='flex-start' xs={12} xl={12} sm={12} style={{ marginTop: 30 }} >
                <Grid container xs={12} xl={12} sm={12}>
                    <Typography style={{
                        flexGrow: 1,
                        textAlign: "left",
                        fontWeight: 600,
                        color: "#666666",
                        font: " normal normal 12px/12px Poppins",
                    }}>
                        Género
                </Typography>
                </Grid>
                <Grid container xs={11} xl={11} sm={11}>
                    <Typography style={{
                        flexGrow: 1,
                        textAlign: "left",
                        fontWeight: 500,
                        color: "#ffffff",
                        font: " normal normal 16px/16px Poppins",
                        marginTop: 10,
                        marginBottom: 5
                    }}>
                        Masculino
                </Typography>
                </Grid>
                <Grid container xs={1} xl={1} sm={1} justify='flex-end'>
                    <img src={Ok} alt='ok' width='20px' />
                </Grid>
                <hr width="100%" color='#2C2C2C' size={1} />

            </Grid>
            <Grid container justify="center" alignItems='flex-start' xs={12} xl={12} sm={12} style={{ marginTop: 30 }} >
                <Grid container xs={12} xl={12} sm={12}>
                    <Typography style={{
                        flexGrow: 1,
                        textAlign: "left",
                        fontWeight: 600,
                        color: "#666666",
                        font: " normal normal 12px/12px Poppins",
                    }}>
                        Email
                </Typography>
                </Grid>
                <Grid container xs={11} xl={11} sm={11}>
                    <Typography style={{
                        flexGrow: 1,
                        textAlign: "left",
                        fontWeight: 500,
                        color: "#ffffff",
                        font: " normal normal 16px/16px Poppins",
                        marginTop: 10,
                        marginBottom: 5
                    }}>
                        Email
                </Typography>
                </Grid>
                <Grid container xs={1} xl={1} sm={1} justify='flex-end'>
                    <img src={Ok} alt='ok' width='20px' />
                </Grid>
                <hr width="100%" color='#2C2C2C' size={1} />
            </Grid>
            <Grid container justify="center" alignItems='flex-start' xs={12} xl={12} sm={12} style={{ marginTop: 30 }} >
                <Grid container xs={12} xl={12} sm={12}>
                    <Typography style={{
                        flexGrow: 1,
                        textAlign: "left",
                        fontWeight: 600,
                        color: "#666666",
                        font: " normal normal 12px/12px Poppins",
                    }}>
                        Dirección
                </Typography>
                </Grid>
                <Grid container xs={11} xl={11} sm={11}>
                    <Typography style={{
                        flexGrow: 1,
                        textAlign: "left",
                        fontWeight: 500,
                        color: "#ffffff",
                        font: " normal normal 16px/16px Poppins",
                        marginTop: 10,
                        marginBottom: 5
                    }}>
                        Dirección
                </Typography>
                </Grid>
                <Grid container xs={1} xl={1} sm={1} justify='flex-end'>
                    <img src={Ok} alt='ok' width='20px' />
                </Grid>
                <hr width="100%" color='#2C2C2C' size={1} />
            </Grid>
            <Grid container justify="center" alignItems='flex-start' xs={12} xl={12} sm={12} style={{ marginTop: 30 }} >
                <Grid container xs={12} xl={12} sm={12}>
                    <Typography style={{
                        flexGrow: 1,
                        textAlign: "left",
                        fontWeight: 600,
                        color: "#666666",
                        font: " normal normal 12px/12px Poppins",
                    }}>
                        Teléfono
                </Typography>
                </Grid>
                <Grid container xs={10} xl={10} sm={10}>
                    <Typography style={{
                        flexGrow: 1,
                        textAlign: "left",
                        fontWeight: 500,
                        color: "#444444",
                        font: " normal normal 16px/16px Poppins",
                        marginTop: 10,
                        marginBottom: 5
                    }}>
                        Verificá tu teléfono
                </Typography>
                </Grid>
                <Grid container xs={2} xl={2} sm={2} justify='flex-end'>
                    <Typography style={{
                        flexGrow: 1,
                        textAlign: "right",
                        fontWeight: 700,
                        color: "#ACFD00",
                        font: " normal normal 21px/21px Poppins",
                    }}>
                        +2
                    </Typography>
                    <img src={Logo} alt='ok' width='20px' style={{ marginRight: 20, marginLeft: 5 }} />
                    <img src={Add} alt='ok' width='20px' />
                </Grid>
                <hr width="100%" color='#2C2C2C' size={1} />
            </Grid>
            <Grid container justify="center" alignItems='flex-start' xs={12} xl={12} sm={12} style={{ marginTop: 30 }} >
                <Grid container xs={12} xl={12} sm={12}>
                    <Typography style={{
                        flexGrow: 1,
                        textAlign: "left",
                        fontWeight: 600,
                        color: "#666666",
                        font: " normal normal 12px/12px Poppins",
                    }}>
                        DNI / CUIL
                </Typography>
                </Grid>
                <Grid container xs={8} xl={8} sm={8}>
                    <Typography style={{
                        flexGrow: 1,
                        textAlign: "left",
                        fontWeight: 500,
                        color: "#ffffff",
                        font: " normal normal 16px/16px Poppins",
                        marginTop: 10,
                        marginBottom: 5
                    }}>
                        27352281609
                </Typography>
                </Grid>
                <Grid container xs={4} xl={4} sm={4} justify='flex-end'>
                    <Typography style={{
                        flexGrow: 1,
                        textAlign: "left",
                        fontWeight: 600,
                        color: "#22C5FD",
                        font: " normal normal 12px/12px Poppins",
                        marginTop: 5
                    }}>
                        En proceso de verificación
                    </Typography>
                    <img src={Verify} alt='ok' width='20px' />
                </Grid>
                <hr width="100%" color='#2C2C2C' size={1} />
            </Grid>
            <Grid container justify="center" alignItems='flex-start' xs={12} xl={12} sm={12} style={{ marginTop: 30 }} >
                <Grid container xs={12} xl={12} sm={12}>
                    <Typography style={{
                        flexGrow: 1,
                        textAlign: "left",
                        fontWeight: 600,
                        color: "#666666",
                        font: " normal normal 12px/12px Poppins",
                    }}>
                        Nacionalidad
                </Typography>
                </Grid>
                <Grid container xs={11} xl={11} sm={11}>
                    <Typography style={{
                        flexGrow: 1,
                        textAlign: "left",
                        fontWeight: 500,
                        color: "#ffffff",
                        font: " normal normal 16px/16px Poppins",
                        marginTop: 10,
                        marginBottom: 5
                    }}>
                        Argentino
                </Typography>
                </Grid>
                <Grid container xs={1} xl={1} sm={1} justify='flex-end'>
                    <img src={Ok} alt='ok' width='20px' />
                </Grid>
                <hr width="100%" color='#2C2C2C' size={1} />
            </Grid>
            <Grid container alignItems='flex-start' xs={12} xl={12} sm={12} style={{ marginTop: 30 }} >
                <Grid container xs={12} xl={12} sm={12}>
                    <Typography style={{
                        flexGrow: 1,
                        textAlign: "left",
                        fontWeight: 600,
                        color: "#666666",
                        font: " normal normal 12px/12px Poppins",
                    }}>
                        Fecha de Vencimiento
                </Typography>
                </Grid>
                <Grid container xs={3} xl={3} sm={3}>
                    <Typography style={{
                        flexGrow: 1,
                        textAlign: "left",
                        fontWeight: 500,
                        color: "#444444",
                        font: " normal normal 16px/16px Poppins",
                        marginTop: 10,
                        marginBottom: 5
                    }}>
                        01 de Mayo de 1990
                </Typography>
                </Grid>
                <Grid container xs={9} xl={9} sm={9} justify='flex-end'>
                    <Typography style={{
                        flexGrow: 1,
                        textAlign: "right",
                        fontWeight: 600,
                        color: "#E94342",
                        font: " normal normal 11px/11px Poppins",
                        marginLeft: 10,
                        marginTop: 10,
                        marginRight: 25,
                    }}><img src={Cross} alt='ok' width='10px' style={{ marginRight: 10 }} />
                        No se pudo verificar esta información. <Link underline='always' style={{
                            color: "#E94342",
                        }}>Para saber mas clickeá aquí </Link>
                    </Typography>
                    <img src={Add} alt='ok' width='20px' style={{ marginTop: 5 }} />
                </Grid>
                <hr width="100%" color='#2C2C2C' size={1} />


            </Grid>
            <Grid container justify='center' xs={12} xl={12} sm={12} style={{ marginTop: 30, marginBottom: 20 }}>
                <Typography style={{
                    flexGrow: 1,
                    textAlign: "left",
                    fontWeight: 400,
                    color: "#A3A3A3",
                    font: " normal normal 14px/14px Poppins"
                }}>
                    ¿Necesitás editar un dato? Contactate con  <Link underline='never' style={{
                        color: "#ACFD00",
                    }}>nuestro soporte </Link>
                </Typography>
            </Grid>
        </Grid >)
}
export default Profile;
