import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import ReputationImg from '../../asset/images/reputation/Ellipse 6.png'
import Cover from '../../asset/images/myProfile/cover.svg'
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


const MyProfileInfo = () => {
    const namefull = localStorage.getItem("nombre") + ' ' + localStorage.getItem("apellido");
    return (
        <Grid position="static" color="transparent" style={{
            flexGrow: 1,
            border: 0,
            marginTop: 60,
        }} >
            <Grid container alignItems='center'>
                <Grid container xs={9} xl={9} sm={9} justify="center" alignItems='center'>
                    <Grid container justify='flex-start' xs={12} xl={12} sm={12} alignItems='center' style={{ marginBottom: 20 }}>
                        <Typography style={{
                            align: "left",
                            color: "#FFFFFF",
                            font: " normal normal 60px/60px PoppinsBold",
                            paddingRight: 10
                        }}>
                            {namefull}
                        </Typography>
                    </Grid>
                    <Grid container justify='flex-start' xs={12} xl={12} sm={12} alignItems='center' style={{ marginBottom: 20 }}>
                        <Typography style={{
                            font: 'normal normal normal 24px/24px Poppins',
                            textAlign: 'center',
                            letterSpacing: '-0.02em',
                            color: '#ACFD00'
                        }}>
                            Front End Developer
                            </Typography>
                    </Grid>
                    <Grid container justify='flex-start' xs={12} xl={12} sm={12} alignItems='center' style={{ marginBottom: 20 }}>
                        <Typography style={{
                            font: 'normal normal normal 18px/18px Poppins',
                            textAlign: 'center',
                            letterSpacing: '-0.02em',
                            color: '#FFFFFF'
                        }}>
                            Miembro Truster desde Septiembre / 2021
                            </Typography>
                    </Grid>
                    <Grid container justify='flex-start' xs={12} xl={12} sm={12} alignItems='center' >
                        <img src={Cover} alt='cover' />
                        <Typography style={{
                            marginLeft: 20,
                            align: "center",
                            color: "#A3A3A3",
                            font: " normal normal 14px/14px Poppins",
                            paddingRight: 10
                        }}>
                            Editar Cover
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container justify='flex-end' xs={3} xl={3} sm={3} style={{ marginTop: -10 }}>
                    <Grid container justify='flex-end'>
                        <Grid container justify='flex-end' xs={11} xl={11} sm={11}>
                            <img src={ReputationImg} alt='test' width='160px' height='160px' />
                        </Grid>
                        <Grid container justify='flex-end' xs={1} xl={1} sm={1} style={{ marginTop: 130, marginLeft: -30 }}>
                            <img src={Logo} alt='logo' />
                        </Grid>
                    </Grid>
                    <Grid container justify='flex-end'>
                        <Typography style={{
                            marginTop: 15,
                            marginRight: 30,
                            textAlign: "center",
                            color: "#A3A3A3",
                            font: " normal normal 14px/14px Poppins",

                        }}>
                            Editar Foto
                        </Typography>
                    </Grid>

                </Grid>

            </Grid>
        </Grid >)
}
export default withStyles(styles, { withTheme: true })(MyProfileInfo);
