import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Link } from '@material-ui/core';
import ReputationImg from '../../asset/images/reputation/Ellipse 6.png'
import Ok from '../../asset/images/myProfile/ok.svg'
import Add from '../../asset/images/myProfile/add.svg'
import Verify from '../../asset/images/myProfile/verify.svg'

const { localStorage } = global.window;
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
    formButton2: {
        marginTop: theme.spacing(1),
        height: 40,
        border: '1px solid',
        borderBottomColor: '#2C2C2C',
        fontWeight: 500,
        borderTop: 'red',
        borderRight: 'red',
        borderLeft: 'red',
        color: "white",
        font: 'normal normal normal 16px/16px Poppins',
        "&:hover": {
            borderTop: 'red',
            borderRight: 'red',
            borderLeft: 'red',
            border: '2px solid',
            borderColor: '#ACFD00',
        },
    },
    input: {
        '&::placeholder': {
            textOverflow: 'ellipsis !important',
            color: 'blue'
        }
    }
}));


const MyProfileMobile = () => {
    const namefull = localStorage.getItem("nombre") + ' ' + localStorage.getItem("apellido");
    const classes = useStyles();
    return (
        <Grid position="static" color="transparent" style={{
            flexGrow: 1,
            border: 0,
            marginTop: -150,
        }} >
            <Grid container justify="center" alignItems='flex-start' xs={12} xl={12} sm={12} >
                <Grid container justify="flex-start" xs={7} xl={7} sm={7} style={{ paddingRight: 20 }}>
                    <Grid container xs={12} xl={12} sm={12}>
                        <Typography style={{
                            flexGrow: 1,
                            marginTop: 20,
                            textAlign: "left",
                            fontWeight: "700",
                            color: "#FFFFFF",
                            font: " normal normal 23px/23px PoppinsBold",
                        }}>
                            {namefull}
                        </Typography>
                    </Grid>
                    <Grid container xs={12} xl={12} sm={12}>
                        <Typography style={{
                            flexGrow: 1,
                            marginTop: 10,
                            textAlign: "left",
                            fontWeight: "500",
                            color: "#ACFD00",
                            font: " normal normal 16px/16px Poppins",
                        }}>
                            Front End Developer
                        </Typography>
                    </Grid>
                    <Grid container xs={12} xl={12} sm={12}>
                        <Typography style={{
                            flexGrow: 1,
                            marginTop: 10,
                            textAlign: "left",
                            fontWeight: "400",
                            color: "#777777",
                            font: " normal normal 13px/13px Poppins",
                        }}>
                            Miembro Truster desde Septiembre / 2021
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container justify="flex-end" xs={5} xl={5} sm={5} style={{ paddingLeft: 20 }}>
                    <Grid container xs={12} xl={12} sm={12}>
                        <img src={ReputationImg} alt='reputationimg' width='100%' />
                    </Grid>
                    <Grid container xs={12} xl={12} sm={12}>
                        <Typography style={{
                            flexGrow: 1,
                            marginTop: 10,
                            textAlign: "center",
                            fontWeight: "400",
                            color: "#A3A3A3",
                            font: " normal normal 12px/12px Poppins",
                        }}>
                            editar
                        </Typography>
                    </Grid>
                </Grid>
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
                <Grid container xs={12} xl={12} sm={12} justify='flex-start'>
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
                <Grid container xs={12} xl={12} sm={12} justify='flex-end'>
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
                        01 de Mayo de 1990
                </Typography>
                </Grid>
                <Grid container xs={1} xl={1} sm={1}>
                    <img src={Add} alt='ok' width='20px' style={{ marginTop: 5 }} />
                </Grid>

                <Grid container xs={11} xl={11} sm={11} justify='flex-start'>
                    <Typography style={{
                        flexGrow: 1,
                        textAlign: "left",
                        fontWeight: 600,
                        color: "#E94342",
                        font: " normal normal 12px/12px Poppins",
                        marginBottom: 10,
                        marginRight: 25,
                    }}>
                        No se pudo verificar esta información. <Link underline='always' style={{
                            color: "#E94342",
                        }}>Para saber mas clickeá aquí </Link>
                    </Typography>

                </Grid>
                <hr width="100%" color='#2C2C2C' size={1} />


            </Grid>
            <Grid container justify='center' xs={12} xl={12} sm={12} style={{ marginTop: 30, marginBottom: 20 }}>
                <Typography style={{
                    flexGrow: 1,
                    textAlign: "center",
                    fontWeight: 400,
                    color: "#A3A3A3",
                    font: " normal normal 16px/16px Poppins"
                }}>
                    ¿Necesitás editar un dato? Contactate con  <Link underline='never' style={{
                        color: "#ACFD00",
                    }}>nuestro soporte </Link>
                </Typography>
            </Grid>
        </Grid>)
}
export default MyProfileMobile;
