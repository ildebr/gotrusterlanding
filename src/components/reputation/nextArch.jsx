import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography } from '@material-ui/core';
import SmallLogo from '../../asset/images/reputation/smalllog.svg'

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


const NextArch = () => {

    return (
        <Grid position="static" color="transparent" style={{
            flexGrow: 1,
            border: 0,
            marginTop: 150,
        }} >
            <Grid container justify='flex-start'>
                <Typography style={{
                    font: 'normal normal normal 19px/19px Poppins',
                    fontWeight: '600',
                    textAlign: 'center',
                    letterSpacing: '-0.02em',
                    color: '#FFFFFF',
                    marginLeft: -30
                }}>
                    Próximos Logros
                </Typography>

                <Grid container justify='flex-start' alignItems='center' style={{ marginTop: 40 }}>
                    <Grid container justify='flex-start' xs={3} xl={3} sm={3} alignItems='center' style={{ padding: 25, background: '#1C1C1C', borderRadius: 15, paddingRight: 15, marginLeft: -30 }}>
                        <Grid container justify='flex-start' xs={8} xl={8} sm={8} alignItems='center'>
                            <Typography style={{
                                font: 'normal normal normal 22px/22px Poppins',
                                textAlign: 'left',
                                fontWeight: '400',
                                letterSpacing: '-0.02em',
                                color: '#FFFFFF'
                            }}>
                                Compartí tu perfil
                            </Typography>
                        </Grid>
                        <Grid container justify='flex-start' xs={8} xl={8} sm={8} alignItems='center'>
                            <Typography style={{
                                font: 'normal normal normal 15px/15px Poppins',
                                textAlign: 'left',
                                fontWeight: '500',
                                letterSpacing: '-0.02em',
                                marginTop: 30,
                                color: '#ACFD00'
                            }}>
                                Necesitas  22 puntos
                            </Typography>
                        </Grid>
                        <Grid container justify='flex-end' xs={4} xl={4} sm={4} alignItems='baseline' style={{ marginTop: 35 }}>
                            <img src={SmallLogo} alt='small logo' />
                            <Typography style={{
                                font: 'normal normal normal 28px/28px PoppinsBold',
                                textAlign: 'center',
                                marginLeft: 5,
                                letterSpacing: '-0.02em',
                                color: '#ACFD00'
                            }}>
                                22
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container justify='flex-start' xs={3} xl={3} sm={3} alignItems='center' style={{ padding: 25, background: '#1C1C1C', borderRadius: 15, paddingRight: 15, marginLeft: 10 }}>
                        <Grid container justify='flex-start' xs={12} xl={12} sm={12} alignItems='center'>
                            <Typography style={{
                                font: 'normal normal normal 22px/22px Poppins',
                                textAlign: 'left',
                                fontWeight: '400',
                                letterSpacing: '-0.02em',
                                color: '#FFFFFF'
                            }}>
                                Desbloqueá tu firma web
                            </Typography>
                        </Grid>
                        <Grid container justify='flex-start' xs={8} xl={8} sm={8} alignItems='center'>
                            <Typography style={{
                                font: 'normal normal normal 15px/15px Poppins',
                                textAlign: 'left',
                                fontWeight: '500',
                                letterSpacing: '-0.02em',
                                marginTop: 30,
                                color: '#ACFD00'
                            }}>
                                Te faltan solo 4 puntos
                            </Typography>
                        </Grid>
                        <Grid container justify='flex-end' xs={4} xl={4} sm={4} alignItems='baseline' style={{ marginTop: 35 }}>
                            <img src={SmallLogo} alt='small logo' />
                            <Typography style={{
                                font: 'normal normal normal 28px/28px PoppinsBold',
                                textAlign: 'center',
                                marginLeft: 5,
                                letterSpacing: '-0.02em',
                                color: '#ACFD00'
                            }}>
                                4
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container justify='flex-start' xs={3} xl={3} sm={3} alignItems='center' style={{ padding: 25, background: '#1C1C1C', borderRadius: 15, marginLeft: 10 }}>
                        <Grid container justify='flex-start' xs={12} xl={12} sm={12} alignItems='center'>
                            <Typography style={{
                                font: 'normal normal normal 22px/22px Poppins',
                                textAlign: 'left',
                                fontWeight: '400',
                                letterSpacing: '-0.02em',
                                color: '#FFFFFF'
                            }}>
                                Publicá tu negocio
                            </Typography>
                        </Grid>
                        <Grid container justify='flex-start' xs={8} xl={8} sm={8} alignItems='center'>
                            <Typography style={{
                                font: 'normal normal normal 15px/15px Poppins',
                                textAlign: 'left',
                                fontWeight: '500',
                                letterSpacing: '-0.02em',
                                marginTop: 30,
                                color: '#ACFD00'
                            }}>
                                Necesitas 22 puntos
                            </Typography>
                        </Grid>
                        <Grid container justify='flex-end' xs={4} xl={4} sm={4} alignItems='baseline' style={{ marginTop: 35 }}>
                            <img src={SmallLogo} alt='small logo' />
                            <Typography style={{
                                font: 'normal normal normal 28px/28px PoppinsBold',
                                textAlign: 'center',
                                marginLeft: 5,
                                letterSpacing: '-0.02em',
                                color: '#ACFD00'
                            }}>
                                22
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container justify='flex-start' xs={3} xl={3} sm={3} alignItems='center' style={{ padding: 25, background: '#1C1C1C', borderRadius: 15, marginLeft: 10 }}>
                        <Grid container justify='flex-start' xs={12} xl={12} sm={12} alignItems='center'>
                            <Typography style={{
                                font: 'normal normal normal 22px/22px Poppins',
                                textAlign: 'left',
                                fontWeight: '400',
                                letterSpacing: '-0.02em',
                                color: '#FFFFFF'
                            }}>
                                Embedeá tu reputación
                            </Typography>
                        </Grid>
                        <Grid container justify='flex-start' xs={8} xl={8} sm={8} alignItems='center'>
                            <Typography style={{
                                font: 'normal normal normal 15px/15px Poppins',
                                textAlign: 'left',
                                fontWeight: '500',
                                letterSpacing: '-0.02em',
                                marginTop: 30,
                                color: '#ACFD00'
                            }}>
                                Te faltan solo 12 puntos
                            </Typography>
                        </Grid>
                        <Grid container justify='flex-end' xs={4} xl={4} sm={4} alignItems='baseline' style={{ marginTop: 35 }}>
                            <img src={SmallLogo} alt='small logo' />
                            <Typography style={{
                                font: 'normal normal normal 28px/28px PoppinsBold',
                                textAlign: 'center',
                                marginLeft: 5,
                                letterSpacing: '-0.02em',
                                color: '#ACFD00'
                            }}>
                                12
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>)
}
export default withStyles(styles, { withTheme: true })(NextArch);
