import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography } from '@material-ui/core';
import GreyLogo from '../../asset/images/reputation/greyeyLogo.svg'
import LinearDeterminate from './progressBarArchMobile'
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
        <Grid container justify="center" position="static" color="transparent" style={{
            flexGrow: 1,
            border: 0,
            marginTop: 50,
            maxWidth: '100vw',
        }} >
            <Grid container xs={12} xl={12} sm={12} align='center' justify='center' style={{ borderRadius: 10, backgroundColor: '#202020', height: 130, padding: 25, marginBottom: 15 }}>
                <Grid container xs={6} xl={6} sm={6} justify='flex-start'>
                    <Typography style={{
                        font: 'normal normal normal 14px/14px Poppins',
                        textAlign: 'left',
                        marginLeft: 5,
                        letterSpacing: '-0.02em',
                        lineHeight: '15px',
                        color: '#E5E5E5'
                    }}>
                        Sumá <b style={{ color: 'white' }}>4 puntos</b> para compartir tu perfil
                    </Typography>
                </Grid>
                <Grid container xs={2} xl={2} sm={2} >

                </Grid>
                <Grid container xs={4} xl={4} sm={4} justify='flex-end'>
                    <Grid container xs={12} xl={12} sm={12} justify='flex-end'>
                        <img src={GreyLogo} alt='logo' width='20px' />
                        <Typography style={{
                            font: 'normal normal normal 40px/40px PoppinsBold',
                            textAlign: 'center',
                            marginLeft: 5,
                            letterSpacing: '-0.02em',
                            color: '#E5E5E5'
                        }}>
                            4
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container xs={12} xl={12} sm={12} justify='center' style={{ marginTop: 20 }}>
                    <LinearDeterminate value={10} />
                </Grid>
            </Grid>
            <Grid container xs={12} xl={12} sm={12} align='center' justify='center' style={{ borderRadius: 10, backgroundColor: '#202020', height: 100, padding: 25, marginBottom: 15 }}>
                <Grid container xs={6} xl={6} sm={6} justify='flex-start'>
                    <Typography style={{
                        font: 'normal normal normal 14px/14px Poppins',
                        textAlign: 'left',
                        marginLeft: 5,
                        letterSpacing: '-0.02em',
                        lineHeight: '15px',
                        color: '#E5E5E5'
                    }}>
                        Sumá <b style={{ color: 'white' }}>12 puntos</b> para publicar tu negocio
                    </Typography>
                </Grid>
                <Grid container xs={2} xl={2} sm={2} >

                </Grid>
                <Grid container xs={4} xl={4} sm={4} justify='flex-end'>
                    <Grid container xs={12} xl={12} sm={12} justify='flex-end'>
                        <img src={GreyLogo} alt='logo' width='20px' />
                        <Typography style={{
                            font: 'normal normal normal 40px/40px PoppinsBold',
                            textAlign: 'center',
                            marginLeft: 5,
                            letterSpacing: '-0.02em',
                            color: '#E5E5E5'
                        }}>
                            12
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container xs={12} xl={12} sm={12} align='center' justify='center' style={{ borderRadius: 10, backgroundColor: '#202020', height: 100, padding: 25, marginBottom: 15 }}>
                <Grid container xs={6} xl={6} sm={6} justify='flex-start'>
                    <Typography style={{
                        font: 'normal normal normal 14px/14px Poppins',
                        textAlign: 'left',
                        marginLeft: 5,
                        letterSpacing: '-0.02em',
                        lineHeight: '15px',
                        color: '#E5E5E5'
                    }}>
                        Sumá <b style={{ color: 'white' }}>12 puntos</b> para desbloquear firma web
                    </Typography>
                </Grid>
                <Grid container xs={2} xl={2} sm={2} >

                </Grid>
                <Grid container xs={4} xl={4} sm={4} justify='flex-end'>
                    <Grid container xs={12} xl={12} sm={12} justify='flex-end'>
                        <img src={GreyLogo} alt='logo' width='20px' />
                        <Typography style={{
                            font: 'normal normal normal 40px/40px PoppinsBold',
                            textAlign: 'center',
                            marginLeft: 5,
                            letterSpacing: '-0.02em',
                            color: '#E5E5E5'
                        }}>
                            12
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container xs={12} xl={12} sm={12} align='center' justify='center' style={{ borderRadius: 10, backgroundColor: '#202020', height: 100, padding: 25, marginBottom: 15 }}>
                <Grid container xs={6} xl={6} sm={6} justify='flex-start'>
                    <Typography style={{
                        font: 'normal normal normal 14px/14px Poppins',
                        textAlign: 'left',
                        marginLeft: 5,
                        letterSpacing: '-0.02em',
                        lineHeight: '15px',
                        color: '#E5E5E5'
                    }}>
                        Sumá <b style={{ color: 'white' }}>12 puntos</b> para desbloquear medallas web
                    </Typography>
                </Grid>
                <Grid container xs={2} xl={2} sm={2} >

                </Grid>
                <Grid container xs={4} xl={4} sm={4} justify='flex-end'>
                    <Grid container xs={12} xl={12} sm={12} justify='flex-end'>
                        <img src={GreyLogo} alt='logo' width='20px' />
                        <Typography style={{
                            font: 'normal normal normal 40px/40px PoppinsBold',
                            textAlign: 'center',
                            marginLeft: 5,
                            letterSpacing: '-0.02em',
                            color: '#E5E5E5'
                        }}>
                            12
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>


        </Grid>)
}
export default withStyles(styles, { withTheme: true })(NextArch);
