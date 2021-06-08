import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography } from '@material-ui/core';
import Arrow from '../../asset/images/reputation/sumReputation/caret-right.svg'
import dni from '../../asset/images/reputation/sumReputation/dni.svg'
import Cuil from '../../asset/images/reputation/sumReputation/cuil.svg'
import Direction from '../../asset/images/reputation/sumReputation/direction.svg'
import Telephone from '../../asset/images/reputation/sumReputation/telephone.svg'


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


const Validations = () => {

    return (
        <Grid position="static" color="transparent" style={{
            flexGrow: 1,
            border: 0,
            marginTop: 50,
        }} >
            <Grid container justify='flex-start'>
                <Typography style={{
                    font: 'normal normal normal 19px/19px Poppins',
                    fontWeight: '600',
                    textAlign: 'center',
                    letterSpacing: '-0.02em',
                    color: '#FFFFFF',
                    marginBottom: 50,
                    marginLeft: -30
                }}>
                    Validaciones Exitosas
                </Typography>
                <Grid container justify='flex-start' >
                    <Grid container justify='flex-start' xs={3} xl={3} sm={3} alignItems='center' style={{ marginLeft: -30, paddingRight: 15 }}>
                        <Grid container justify='flex-start' xs={12} xl={12} sm={12} style={{ marginBottom: 30 }}>
                            <Grid container justify='flex-start' xs={6} xl={6} sm={6} >
                                <img src={Telephone} alt='telefono' />
                                <Typography style={{
                                    align: "center",
                                    color: "#FFFFFF",
                                    font: " normal normal 14px/14px Poppins",
                                    paddingLeft: 10,
                                    marginTop: 5
                                }}>
                                    Teléfono
                                </Typography>
                            </Grid>
                            <Grid container justify='flex-end' xs={6} xl={6} sm={6} alignItems='center'>
                                <Typography style={{
                                    align: "center",
                                    color: "#FFFFFF",
                                    font: " normal normal 20px/20px PoppinsBold",
                                    paddingLeft: 10,
                                    marginRight: 8
                                }}>
                                    +4
                                </Typography>
                                <img src={Arrow} alt='arrow' style={{ paddingRight: 10 }} />
                            </Grid>
                            <hr style={{ width: '100%' }} color='#333333' />
                        </Grid>
                    </Grid>
                    <Grid container justify='flex-start' xs={3} xl={3} sm={3} alignItems='center' style={{ marginLeft: 15, paddingLeft: 15, paddingRight: 15 }}>
                        <Grid container justify='flex-start' xs={12} xl={12} sm={12} style={{ marginBottom: 30 }}>
                            <Grid container justify='flex-start' xs={6} xl={6} sm={6} >
                                <img src={dni} alt='dni' />
                                <Typography style={{
                                    align: "center",
                                    color: "#FFFFFF",
                                    font: " normal normal 14px/14px Poppins",
                                    paddingLeft: 10,
                                    marginTop: 5
                                }}>
                                    DNI
                                </Typography>
                            </Grid>
                            <Grid container justify='flex-end' xs={6} xl={6} sm={6} alignItems='center'>
                                <Typography style={{
                                    align: "center",
                                    color: "#FFFFFF",
                                    font: " normal normal 20px/20px PoppinsBold",
                                    paddingLeft: 10,
                                    marginRight: 8
                                }}>
                                    +4
                                </Typography>
                                <img src={Arrow} alt='arrow' style={{ paddingRight: 10 }} />
                            </Grid>
                            <hr style={{ width: '100%' }} color='#333333' />
                        </Grid>
                    </Grid>
                    <Grid container justify='flex-start' xs={3} xl={3} sm={3} alignItems='center' style={{ marginLeft: 15, paddingLeft: 15, paddingRight: 15 }}>
                        <Grid container justify='flex-start' xs={12} xl={12} sm={12} style={{ marginBottom: 30 }}>
                            <Grid container justify='flex-start' xs={6} xl={6} sm={6} >
                                <img src={Cuil} alt='cuil' />
                                <Typography style={{
                                    align: "center",
                                    color: "#FFFFFF",
                                    font: " normal normal 14px/14px Poppins",
                                    paddingLeft: 10,
                                    marginTop: 5
                                }}>
                                    CUIL
                                </Typography>
                            </Grid>
                            <Grid container justify='flex-end' xs={6} xl={6} sm={6} alignItems='center'>
                                <Typography style={{
                                    align: "center",
                                    color: "#FFFFFF",
                                    font: " normal normal 20px/20px PoppinsBold",
                                    paddingLeft: 10,
                                    marginRight: 8
                                }}>
                                    +4
                                </Typography>
                                <img src={Arrow} alt='arrow' style={{ paddingRight: 10 }} />
                            </Grid>
                            <hr style={{ width: '100%' }} color='#333333' />
                        </Grid>
                    </Grid>
                    <Grid container justify='flex-start' xs={3} xl={3} sm={3} alignItems='flex-start' style={{ paddingLeft: 25 }}>
                        <Grid container justify='flex-start' xs={12} xl={12} sm={12} style={{ marginBottom: 30 }} >
                            <Grid container justify='flex-start' xs={6} xl={6} sm={6} >
                                <img src={Direction} alt='direction' />
                                <Typography style={{
                                    align: "center",
                                    color: "#FFFFFF",
                                    font: " normal normal 14px/14px Poppins",
                                    paddingLeft: 10,
                                    marginTop: 5
                                }}>
                                    Dirección
                                </Typography>
                            </Grid>
                            <Grid container justify='flex-end' xs={6} xl={6} sm={6} alignItems='center'>
                                <Typography style={{
                                    align: "center",
                                    color: "#FFFFFF",
                                    font: " normal normal 20px/20px PoppinsBold",
                                    paddingLeft: 10,
                                    marginRight: 8
                                }}>
                                    +4
                                </Typography>
                                <img src={Arrow} alt='arrow' style={{ paddingRight: 10 }} />
                            </Grid>
                            <hr style={{ width: '100%' }} color='#333333' />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </Grid >)
}
export default withStyles(styles, { withTheme: true })(Validations);
