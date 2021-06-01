import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography } from '@material-ui/core';
import Airbnb from '../../asset/images/reputation/sumReputation/airbnb.svg'
import Amazon from '../../asset/images/reputation/sumReputation/amazon.svg'
import Arrow from '../../asset/images/reputation/sumReputation/caret-right.svg'
import Cuil from '../../asset/images/reputation/sumReputation/cuil.svg'
import Direction from '../../asset/images/reputation/sumReputation/direction.svg'
import Facebook from '../../asset/images/reputation/sumReputation/facebook.svg'
import Instagram from '../../asset/images/reputation/sumReputation/instagram.svg'
import LinkedIn from '../../asset/images/reputation/sumReputation/linkedin.svg'
import Paypal from '../../asset/images/reputation/sumReputation/paypal.svg'
import Telephone from '../../asset/images/reputation/sumReputation/telephone.svg'
import Logo from '../../asset/images/reputation/smalllog.svg'


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


const SumReputation = () => {

    return (
        <Grid position="static" color="transparent" style={{
            flexGrow: 1,
            border: 0,
            marginTop: 50,
        }} >
            <Grid container justify='flex-start'>
                <Typography style={{
                    font: 'normal normal normal 18px/18px Poppins',
                    textAlign: 'center',
                    letterSpacing: '-0.02em',
                    color: '#FFFFFF',
                    marginBottom: 50
                }}>
                    Suma Reputación
                </Typography>
                <Grid container justify='flex-start' >
                    <Grid container justify='flex-start' xs={3} xl={3} sm={3} alignItems='center' style={{ marginLeft: -30 }}>
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
                                <img src={Logo} alt='logo' style={{ marginRight: 5 }} />
                                <img src={Arrow} alt='arrow' style={{ paddingRight: 10 }} />
                            </Grid>
                            <hr style={{ width: '100%' }} color='#333333' />
                        </Grid>
                        <Grid container justify='flex-start' xs={12} xl={12} sm={12} style={{ marginBottom: 30 }}>
                            <Grid container justify='flex-start' xs={6} xl={6} sm={6} >
                                <img src={Facebook} alt='facebook' />
                                <Typography style={{
                                    align: "center",
                                    color: "#FFFFFF",
                                    font: " normal normal 14px/14px Poppins",
                                    paddingLeft: 10,
                                    marginTop: 5
                                }}>
                                    Facebook
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
                        <Grid container justify='flex-start' xs={12} xl={12} sm={12} style={{ marginBottom: 30 }}>
                            <Grid container justify='flex-start' xs={6} xl={6} sm={6} >
                                <img src={Paypal} alt='paypal' />
                                <Typography style={{
                                    align: "center",
                                    color: "#FFFFFF",
                                    font: " normal normal 14px/14px Poppins",
                                    paddingLeft: 10,
                                    marginTop: 5
                                }}>
                                    Paypal
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
                    <Grid container justify='flex-start' xs={3} xl={3} sm={3} alignItems='center' style={{ marginLeft: 10 }}>
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
                        <Grid container justify='flex-start' xs={12} xl={12} sm={12} style={{ marginBottom: 30 }}>
                            <Grid container justify='flex-start' xs={6} xl={6} sm={6} >
                                <img src={LinkedIn} alt='LinkedIn' />
                                <Typography style={{
                                    align: "center",
                                    color: "#FFFFFF",
                                    font: " normal normal 14px/14px Poppins",
                                    paddingLeft: 10,
                                    marginTop: 5
                                }}>
                                    Linkedin
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
                        <Grid container justify='flex-start' xs={12} xl={12} sm={12} style={{ marginBottom: 30 }}>
                            <Grid container justify='flex-start' xs={6} xl={6} sm={6} >
                                <img src={Amazon} alt='paypal' />
                                <Typography style={{
                                    align: "center",
                                    color: "#FFFFFF",
                                    font: " normal normal 14px/14px Poppins",
                                    paddingLeft: 10,
                                    marginTop: 5
                                }}>
                                    AFIP
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
                    <Grid container justify='flex-start' xs={3} xl={3} sm={3} alignItems='center' style={{ marginLeft: 10 }}>
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
                        <Grid container justify='flex-start' xs={12} xl={12} sm={12} style={{ marginBottom: 30 }}>
                            <Grid container justify='flex-start' xs={7} xl={7} sm={7} >
                                <img src={Amazon} alt='mercadolibre' />
                                <Typography style={{
                                    align: "center",
                                    color: "#FFFFFF",
                                    font: " normal normal 14px/14px Poppins",
                                    paddingLeft: 10,
                                    marginTop: 5
                                }}>
                                    Mercadoibre
                                </Typography>
                            </Grid>
                            <Grid container justify='flex-end' xs={5} xl={5} sm={5} alignItems='center'>
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
                        <Grid container justify='flex-start' xs={12} xl={12} sm={12} style={{ marginBottom: 30 }}>
                            <Grid container justify='flex-start' xs={6} xl={6} sm={6} >
                                <img src={Airbnb} alt='airbnb' />
                                <Typography style={{
                                    align: "center",
                                    color: "#FFFFFF",
                                    font: " normal normal 14px/14px Poppins",
                                    paddingLeft: 10,
                                    marginTop: 5
                                }}>
                                    Cabify
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
                    <Grid container justify='flex-start' xs={3} xl={3} sm={3} alignItems='flex-start' style={{ marginLeft: 10 }}>
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
                        <Grid container justify='flex-start' xs={12} xl={12} sm={12} style={{ marginBottom: 30, marginTop: -65 }}>
                            <Grid container justify='flex-start' xs={6} xl={6} sm={6} >
                                <img src={Instagram} alt='instagram' />
                                <Typography style={{
                                    align: "center",
                                    color: "#FFFFFF",
                                    font: " normal normal 14px/14px Poppins",
                                    paddingLeft: 10,
                                    marginTop: 5
                                }}>
                                    Instagram
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

        </Grid>)
}
export default withStyles(styles, { withTheme: true })(SumReputation);
