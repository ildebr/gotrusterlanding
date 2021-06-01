import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import ReputationImg from '../../asset/images/reputation/Ellipse 6.png'
import ShareButton from '../../asset/images/reputation/Group 25.svg'
import Logo from '../../asset/images/reputation/logo.svg'
import GreyLogo from '../../asset/images/reputation/greylogo.svg'

const { localStorage } = global.window;
const styles = theme => ({
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
});


const ReputationProfile = () => {
      const namefull = localStorage.getItem("nombre")+' '+localStorage.getItem("apellido");
    return (
        <Grid position="static" color="transparent" style={{
            flexGrow: 1,
            border: 0,
            margin: 0,
        }} >

            <Grid container>
                <Grid container justify='flex-start' xs={4} xl={4} sm={4}>
                    <img src={ReputationImg} alt='test' width='250px' height='250px' />
                </Grid>
                <Grid container xs={10} xl={8} sm={8}>
                    <Grid container style={{ maxHeight: 30 }} >
                        <Grid container justify='flex-start' xs={7} xl={7} sm={7} alignItems='center' >
                            <Typography style={{
                                align: "center",
                                color: "#FFFFFF",
                                font: " normal normal 30px/30px PoppinsBold",
                                paddingRight: 10
                            }}>
                                {namefull}
                            </Typography>
                            <button style={{
                                backgroundColor: 'rgba(0,0,0,0)',
                                color: '#ACFD00',
                                font: 'normal normal normal 14px/14px PoppinsBold',
                                border: '2px solid',
                                height: 30,
                                borderColor: '#ACFD00',
                                borderRadius: 5,
                                textTransform: 'none',
                            }}>Master</button>
                        </Grid >
                        <Grid container justify='flex-end' xs={5} xl={5} sm={5} alignItems='center'>
                            <Typography style={{
                                align: "center",
                                color: "#888888",
                                font: " normal normal 14px/14px Poppins",
                                textAlign: 'center',
                                paddingRight: 10
                            }}>
                                Compartir Perfil
                            </Typography>
                            <button style={{
                                backgroundColor: 'rgba(0,0,0,0)',
                                border: '1px solid',
                                borderColor: 'rgba(0,0,0,0)',
                            }}>
                                <img src={ShareButton} alt='share button' />
                            </button>
                        </Grid>
                    </Grid>
                    <Grid container justify='flex-start'>
                        <Typography style={{
                            font: 'normal normal normal 24px/24px Poppins',
                            textAlign: 'center',
                            letterSpacing: '-0.02em',
                            color: '#ACFD00'
                        }}>
                            Front End Developer
                            </Typography>
                    </Grid>
                    <Grid container justify='flex-start'>
                        <Typography style={{
                            font: 'normal normal normal 18px/18px Poppins',
                            textAlign: 'center',
                            letterSpacing: '-0.02em',
                            color: '#FFFFFF'
                        }}>
                            Miembro Truster desde Septiembre / 2021
                            </Typography>
                    </Grid>
                    <Grid container justify='flex-start' alignItems='center' style={{ background: '#222222' }}>
                        <LinearProgress variant="determinate" color='#ACFD00' value={100} />
                    </Grid>
                    <Grid container alignItems='center'>
                        <Grid container justify='flex-start' xs={6} xl={6} sm={6} alignItems='center'>
                            <Grid container justify='flex-start' xs={12} xl={12} sm={12} alignItems='center'>
                                <img src={Logo} alt='logo' />
                                <Typography style={{
                                    font: 'normal normal normal 50px/50px PoppinsBold',
                                    textAlign: 'center',
                                    marginLeft: 5,
                                    letterSpacing: '-0.02em',
                                    color: '#ACFD00'
                                }}>
                                    12
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography style={{
                                    font: 'normal normal normal 16px/16px Poppins',
                                    textAlign: 'center',
                                    marginLeft: 5,
                                    letterSpacing: '-0.02em',
                                    color: '#ACFD00'
                                }}>
                                    Puntos Truster
                                </Typography>
                            </Grid>
                        </Grid >
                        <Grid container justify='flex-end' xs={6} xl={6} sm={6} alignItems='center'>
                            <Grid container justify='flex-end' xs={12} xl={12} sm={12} alignItems='center'>
                                <img src={GreyLogo} alt='logo' />
                                <Typography style={{
                                    font: 'normal normal normal 50px/50px PoppinsBold',
                                    textAlign: 'center',
                                    marginLeft: 5,
                                    letterSpacing: '-0.02em',
                                    color: '#888888'
                                }}>
                                    16
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography style={{
                                    font: 'normal normal normal 16px/16px Poppins',
                                    textAlign: 'center',
                                    marginLeft: 5,
                                    letterSpacing: '-0.02em',
                                    color: '#888888'
                                }}>
                                    Siguiente Nivel
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>)
}
export default withStyles(styles, { withTheme: true })(ReputationProfile);
