import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography, Link} from '@material-ui/core';
import SmallLogo from '../../asset/images/reputation/smalllog.svg'
import Amazon from '../../asset/images/reputation/sumReputation/amazon.svg'
import GreyLogo from '../../asset/images/reputation/greyeyLogo.svg'
import DNI from '../../asset/images/reputation/sumReputationMobile/dni.svg'
import Cuit from '../../asset/images/reputation/sumReputationMobile/cuit.svg'
import Direction from '../../asset/images/reputation/sumReputationMobile/direction.svg'
import Facebook from '../../asset/images/reputation/sumReputationMobile/facebook.svg'
import Telephone from '../../asset/images/reputation/sumReputationMobile/telephone.svg'

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


const SumReputationMobile = () => {

    return (
        <Grid container justify="center" position="static" color="transparent" style={{
            flexGrow: 1,
            border: 0,
            marginTop: 50,
            maxWidth: '100vw',

        }} >
            <Grid container xs={12} xl={12} sm={12} alignItems='center' justify='center' style={{ borderRadius: 10, backgroundColor: '#202020', height: 80, padding: 25, marginBottom: 15 }}>
                <Grid container xs={8} xl={8} sm={8} justify='flex-start' >
                    <Grid container xs={2} xl={2} sm={2} justify='center' >
                        <img src={Telephone} alt='logo' width={'15px'} />
                    </Grid>
                    <Grid container xs={10} xl={10} sm={10} justify='flex-start' >
                        <Typography style={{
                            font: 'normal normal normal 16px/16px Poppins',
                            marginLeft: 5,
                            letterSpacing: '-0.02em',
                            color: '#ffffff'
                        }}>
                          <Link href={'/automaticvalidationphone'} style={{ textDecoration: 'none', color: 'white' }}>  Validá tu teléfono</Link>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container xs={4} xl={4} sm={4} justify='flex-end' alignItems='center'>
                    <Grid container xs={12} xl={12} sm={12} justify='flex-end' alignItems='center'>
                        <Grid container xs={6} xl={6} sm={6} justify='flex-end' >
                            <img src={SmallLogo} alt='logo' width={'25px'} />
                        </Grid>
                        <Grid container xs={6} xl={6} sm={6} justify='flex-end'>
                            <Typography style={{
                                font: 'normal normal normal 36px/36px PoppinsBold',
                                marginLeft: 5,
                                letterSpacing: '-0.02em',
                                color: '#ACFD00'
                            }}>
                                +5
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container xs={12} xl={12} sm={12} alignItems='center' justify='center' style={{ borderRadius: 10, backgroundColor: '#202020', height: 80, padding: 25, marginBottom: 15 }}>
                <Grid container xs={8} xl={8} sm={8} justify='flex-start' >
                    <Grid container xs={2} xl={2} sm={2} justify='center' >
                        <img src={DNI} alt='logo' width={'15px'} />
                    </Grid>
                    <Grid container xs={10} xl={10} sm={10} justify='flex-start' >
                        <Typography style={{
                            font: 'normal normal normal 16px/16px Poppins',
                            marginLeft: 5,
                            letterSpacing: '-0.02em',
                            color: '#ffffff'
                        }}>
                           <Link href={'/validation/dni'} style={{ textDecoration: 'none', color: 'white' }}>Validá tu DNI</Link>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container xs={4} xl={4} sm={4} justify='flex-end' alignItems='center'>
                    <Grid container xs={12} xl={12} sm={12} justify='flex-end' alignItems='center'>
                        <Grid container xs={6} xl={6} sm={6} justify='flex-end' >
                            <img src={SmallLogo} alt='logo' width={'25px'} />
                        </Grid>
                        <Grid container xs={6} xl={6} sm={6} justify='flex-end' >
                            <Typography style={{
                                font: 'normal normal normal 36px/36px PoppinsBold',
                                marginLeft: 5,
                                letterSpacing: '-0.02em',
                                color: '#ACFD00'
                            }}>
                                +5
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container xs={12} xl={12} sm={12} alignItems='center' justify='center' style={{ borderRadius: 10, backgroundColor: '#202020', height: 80, padding: 25, marginBottom: 15 }}>
                <Grid container xs={8} xl={8} sm={8} justify='flex-start' >
                    <Grid container xs={2} xl={2} sm={2} justify='center' >
                        <img src={Direction} alt='logo' width={'12px'} />
                    </Grid>
                    <Grid container xs={10} xl={10} sm={10} justify='flex-start' >
                        <Typography style={{
                            font: 'normal normal normal 16px/16px Poppins',
                            marginLeft: 5,
                            letterSpacing: '-0.02em',
                            color: '#ffffff'
                        }}>
                            <Link href={'/validation/direccion'} style={{ textDecoration: 'none', color: 'white' }}>Validá tu dirección</Link>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container xs={4} xl={4} sm={4} justify='flex-end' alignItems='center'>
                    <Grid container xs={12} xl={12} sm={12} justify='flex-end' alignItems='center'>
                        <Grid container xs={6} xl={6} sm={6} justify='flex-end' >
                            <img src={SmallLogo} alt='logo' width={'25px'} />
                        </Grid>
                        <Grid container xs={6} xl={6} sm={6} justify='flex-end' >
                            <Typography style={{
                                font: 'normal normal normal 36px/36px PoppinsBold',
                                marginLeft: 5,
                                letterSpacing: '-0.02em',
                                color: '#ACFD00'
                            }}>
                                +5
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container xs={12} xl={12} sm={12} alignItems='center' justify='center' style={{ borderRadius: 10, backgroundColor: '#202020', height: 80, padding: 25, marginBottom: 15 }}>
                <Grid container xs={8} xl={8} sm={8} justify='flex-start' >
                    <Grid container xs={2} xl={2} sm={2} justify='center' >
                        <img src={Cuit} alt='logo' width={'15px'} />
                    </Grid>
                    <Grid container xs={10} xl={10} sm={10} justify='flex-start' >
                        <Typography style={{
                            font: 'normal normal normal 16px/16px Poppins',
                            marginLeft: 5,
                            letterSpacing: '-0.02em',
                            color: '#ffffff'
                        }}>
                            <Link href={'/validation/direccion'} style={{ textDecoration: 'none', color: 'white' }}> Validá tu CUIT</Link>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container xs={4} xl={4} sm={4} justify='flex-end' alignItems='center'>
                    <Grid container xs={12} xl={12} sm={12} justify='flex-end' alignItems='center'>
                        <Grid container xs={6} xl={6} sm={6} justify='flex-end' >
                            <img src={SmallLogo} alt='logo' width={'25px'} />
                        </Grid>
                        <Grid container xs={6} xl={6} sm={6} justify='flex-end'>
                            <Typography style={{
                                font: 'normal normal normal 30px/30px PoppinsBold',
                                marginLeft: 5,
                                letterSpacing: '-0.02em',
                                color: '#ACFD00'
                            }}>
                                +10
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container xs={12} xl={12} sm={12} alignItems='center' justify='center' style={{ borderRadius: 10, backgroundColor: '#202020', height: 80, padding: 25, marginBottom: 15 }}>
                <Grid container xs={8} xl={8} sm={8} justify='flex-start' >
                    <Grid container xs={2} xl={2} sm={2} justify='center' >
                        <img src={Facebook} alt='logo' width={'10px'} />
                    </Grid>
                    <Grid container xs={10} xl={10} sm={10} justify='flex-start' >
                        <Typography style={{
                            font: 'normal normal normal 16px/16px Poppins',
                            marginLeft: 5,
                            letterSpacing: '-0.02em',
                            color: '#A3A3A3'
                        }}>
                            Validá tu Facebook
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container xs={4} xl={4} sm={4} justify='flex-end' alignItems='center'>
                    <Grid container xs={12} xl={12} sm={12} justify='flex-end' alignItems='center'>
                        <Grid container xs={6} xl={6} sm={6} justify='flex-end' >
                            <img src={GreyLogo} alt='logo' width={'25px'} />
                        </Grid>
                        <Grid container xs={6} xl={6} sm={6} justify='flex-end' style={{ marginTop: -5 }}>
                            <Typography style={{
                                font: 'normal normal normal 36px/36px PoppinsBold',
                                marginLeft: 5,
                                letterSpacing: '-0.02em',
                                color: '#A3A3A3'
                            }}>
                                +4
                            </Typography>
                            <Typography style={{
                                font: 'normal normal normal 12px/12px PoppinsBold',
                                marginLeft: 5,
                                letterSpacing: '-0.02em',
                                color: '#A3A3A3'
                            }}>
                                O MAS
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container xs={12} xl={12} sm={12} alignItems='center' justify='center' style={{ borderRadius: 10, backgroundColor: '#202020', height: 80, padding: 25, marginBottom: 15 }}>
                <Grid container xs={8} xl={8} sm={8} justify='flex-start' >
                    <Grid container xs={2} xl={2} sm={2} justify='center' >
                        <img src={Amazon} alt='logo' width={'15px'} />
                    </Grid>
                    <Grid container xs={10} xl={10} sm={10} justify='flex-start' >
                        <Typography style={{
                            font: 'normal normal normal 16px/16px Poppins',
                            marginLeft: 5,
                            letterSpacing: '-0.02em',
                            color: '#A3A3A3'
                        }}>
                            Validá tu Mercado Libre
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container xs={4} xl={4} sm={4} justify='flex-end' alignItems='center'>
                    <Grid container xs={12} xl={12} sm={12} justify='flex-end' alignItems='center'>
                        <Grid container xs={6} xl={6} sm={6} justify='flex-end' >
                            <img src={GreyLogo} alt='logo' width={'25px'} />
                        </Grid>
                        <Grid container xs={6} xl={6} sm={6} justify='flex-end' style={{ marginTop: -5 }}>
                            <Typography style={{
                                font: 'normal normal normal 36px/36px PoppinsBold',
                                marginLeft: 5,
                                letterSpacing: '-0.02em',
                                color: '#A3A3A3'
                            }}>
                                +4
                            </Typography>
                            <Typography style={{
                                font: 'normal normal normal 12px/12px PoppinsBold',
                                marginLeft: 5,
                                letterSpacing: '-0.02em',
                                color: '#A3A3A3'
                            }}>
                                O MAS
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>



        </Grid>)
}
export default withStyles(styles, { withTheme: true })(SumReputationMobile);
