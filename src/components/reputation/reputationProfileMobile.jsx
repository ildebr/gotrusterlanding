import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography } from '@material-ui/core';
import ReputationImg from '../../asset/images/reputation/Ellipse 6.png'
import ShareButton from '../../asset/images/reputation/Group 25.svg'
import Logo from '../../asset/images/reputation/logo.svg'
import GreyLogo from '../../asset/images/reputation/greylogo.svg'
import CircularDeterminate from './progressBarMobile'

const { localStorage } = global.window;
const styles = theme => ({
    root: {
        flexGrow: 1,
        border: 0,
        margin: 0,
        marginTop: '2vh',
        height: 217,
    },
    test: {
        position: 'absolute',
        zIndex: 1
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


const ReputationProfileMobile = () => {
    const namefull = localStorage.getItem("nombre") + ' ' + localStorage.getItem("apellido");
    return (
        <Grid position="static" color="transparent" style={{
            flexGrow: 1,
            border: 0,
            marginTop: 30,
        }} >
            <Grid container justify="center" alignItems="center">
                <Grid container alignItems="center" justify="center" xs={4} xl={4} sm={4}>
                    <Grid container justify="center" xs={12} xl={12} sm={12}>
                        <Grid container justify="flex-end" xs={6} xl={6} sm={6}>
                            <img src={Logo} alt='logo' width='22px' />
                        </Grid>
                        <Grid container justify="flex-start" xs={6} xl={6} sm={6} >
                            <Typography style={{
                                font: 'normal normal normal 40px/40px PoppinsBold',
                                marginLeft: 5,
                                letterSpacing: '-0.02em',
                                color: '#ACFD00'
                            }}>
                                12
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" xs={12} xl={12} sm={12}>
                        <Typography style={{
                            paddingLeft: '40px',
                            align: "center",
                            color: "#FFFFFF",
                            font: " normal normal 14px/14px Poppins",
                            paddingRight: 10
                        }}>
                            Puntos Truster
                            </Typography>
                    </Grid>
                </Grid>
                <Grid container justify="center" xs={4} xl={4} sm={4} style={{ marginTop: -30 }}>
                    <div style={{ zIndex: -1, marginTop: -8.2 }}>
                        <CircularDeterminate givenValue={100} />
                    </div>
                    <div style={{ zIndex: 1 }}>
                        <img src={ReputationImg} alt='reputationImg' width='120px' />
                    </div>
                </Grid>
                <Grid container justify="center" xs={4} xl={4} sm={4}>
                    <Grid container justify="center" xs={12} xl={12} sm={12} style={{ marginLeft: -40 }}>
                        <Grid container justify="flex-end" xs={6} xl={6} sm={6}>
                            <img src={GreyLogo} alt='logo' width='22px' />
                        </Grid>
                        <Grid container justify="flex-start" xs={6} xl={6} sm={6}>
                            <Typography style={{
                                font: 'normal normal normal 40px/40px PoppinsBold',
                                textAlign: 'center',
                                marginLeft: 5,
                                letterSpacing: '-0.02em',
                                color: '#777777'
                            }}>
                                16
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" xs={12} xl={12} sm={12}>
                        <Typography style={{

                            align: "center",
                            color: "#777777",
                            font: " normal normal 14px/14px Poppins",
                            paddingRight: 10
                        }}>
                            Siguiente Nivel
                            </Typography>
                    </Grid>
                    <Grid container justify="center" xs={12} xl={12} sm={12}>
                        <Typography style={{

                            align: "center",
                            color: "#777777",
                            font: " normal normal 24px/24px PoppinsBold",
                            paddingRight: 10
                        }}>
                            +4
                            </Typography>
                    </Grid>
                </Grid>
            </Grid>
            < Grid container justify="center" align='center' xs={12} xl={12} sm={12} style={{ paddingTop: 50 }}>
                <Grid container justify="center" align='center' xs={12} xl={12} sm={12}>
                    <Typography style={{
                        align: "center",
                        color: "#FFFFFF",
                        font: " normal normal 36px/36px PoppinsBold",
                    }}>
                        {namefull}
                    </Typography>
                </Grid>
                <Grid container justify="center" align='center' xs={12} xl={12} sm={12} style={{ paddingTop: 10 }}>
                    <Typography style={{
                        align: "center",
                        color: "#777777",
                        font: " normal normal 22px/22px Poppins",
                    }}>
                        Front End Developer
                    </Typography>
                </Grid>
                <Grid container justify="center" align='center' xs={12} xl={12} sm={12} style={{ paddingTop: 10 }}>
                    <Grid container justify="center" align='center' xs={4} xl={4} sm={4}>

                    </Grid>
                    <Grid container justify="center" align='center' xs={4} xl={4} sm={4}>
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
                    </Grid>
                    <Grid container justify="flex-end" align='center' xs={4} xl={4} sm={4} style={{ marginTop: -30 }}>
                        <button style={{
                            backgroundColor: 'rgba(0,0,0,0)',
                            border: '1px solid',
                            borderColor: 'rgba(0,0,0,0)',
                        }}>
                            <img src={ShareButton} alt='share button' />
                        </button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>)
}
export default withStyles(styles, { withTheme: true })(ReputationProfileMobile);
