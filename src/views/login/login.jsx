import React, { Component } from 'react'
import { CssBaseline, Grid, Box, Container, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import NavBar from '../../components/navBar/navbar.jsx';
import Link from '@material-ui/core/Link';
import InputBase from '@material-ui/core/InputBase';
import Logo from '../../asset/images/logo.svg';
//import WindowDimensions from "../../components/UtilityComponents/WindowDimension"

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#000000',
    },

    authWrapper: {
        [theme.breakpoints.up('sm')]: {
            marginTop: '214px',
        },
        [theme.breakpoints.down('lg')]: {
            marginTop: '0px',
        },
        [theme.breakpoints.down('sm')]: {
            marginBottom: '100px',
        },
        [theme.breakpoints.up('lg')]: {
            marginTop: '0px',
        },
        backgroundColor: '#000000',
    },
    paperContainer: {
        backgroundColor: '#000000',
        backgroundSize: "cover",
        width: '1937px',
        //height: '217px',
        marginTop: '2vh',
    },
    paperWelcome: {
        position: 'flex',
        //marginLeft: '20px',
        //width: '931px',
        //height: '89px',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: ' bold',
        fontSize: '40px',
        lineHeight: '40px',
        alignItems: 'center',
        textAlign: 'center',
        letterSpacing: '-0.02em',
        color: '#FFFFFF'
    },
    paperHight: {
        marginTop: '2vh',
        position: 'flex',
        marginLeft: '250px',
        width: '931px',
        height: '47px',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: ' bold',
        fontSize: '30px',
        lineHeight: '40px',
        alignItems: 'center',
        textAlign: 'center',
        letterSpacing: '-0.01em',
        color: ' #ACFD00'
    },
    paperContainer2: {
        backgroundColor: '#000000',
        backgroundSize: "cover",
        width: '1937px',
        height: '317px'
    },
    paperContainer3: {
        backgroundColor: '#000000',
        backgroundSize: "cover",
        width: '1937px',
        height: '217px'
    },
    paperWelcome1: {
        alignItems: 'center',
        position: 'flex',
        //marginLeft: '5px',
        //width: '931px',
        //height: '89px',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: ' bold',
        fontSize: '50px',
        //lineHeight: '40px',
        textAlign: 'center',
        letterSpacing: '-0.02em',
        color: '#ACFD00'
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: '#ACFD00',
        marginTop: '2vh',
        height: '56px'
    },
    textStyle: {
        margin: theme.spacing(3, 0, 2),
        marginTop: '2vh',
        borderRadius: '100px',
        borderColor: '#FFFFFF',
        alignItems: 'center',
        backgroundColor: "transparent",
        opacity: "50px",

    },
    paper: {
        marginTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        font: 'normal normal normal 18px/24px Roboto',
        letterSpacing: '0px',
        textAlign: 'center',

    },
    login: {
        backgroundColor: '#ACFD00',
        width: '100%',
        maxWidth: 316,
        font: 'normal normal normal 18px/24px Poppins',
        height: 50,
        borderRadius: 15,
        marginTop: theme.spacing(3),
    },
    formButton: {
        marginTop: theme.spacing(1),
        height: 50,
        maxWidth: 316,
        border: '1px solid',
        borderColor: '#999999',
        borderRadius: 15,
        color: "white",
        font: 'normal normal normal 16px/22px Poppins',
        "&:hover": {
            border: '2px solid',
            borderColor: '#ACFD00',
            borderRadius: 15,
        },
    },
    errorFormButton: {
        marginTop: theme.spacing(1),
        height: 50,
        maxWidth: 316,
        border: '2px solid',
        borderColor: '#E94342',
        borderRadius: 15,
        color: "white",
        font: 'normal normal normal 16px/22px Poppins',

    },

    normaltext: {
        fontSize: 12,
        color: '#999999',
        fontFamily: 'Poppins',
        marginTop: theme.spacing(2),
    }
});

class Login extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div style={{ backgroundColor: '#000000' }}>
                <Grid container className={classes.root} component="main" maxWidth="md">
                    <Container component="main" maxWidth="md" >
                        <Grid item container xs={12} className={classes.paperContainer} >
                            <NavBar active={0} />
                        </Grid>
                        <Container component="main" maxWidth="md" style={{ alignItems: 'center' }} >
                            <Box className={classes.authWrapper}   >
                                <CssBaseline />
                                <Box mx="auto"  >
                                    <Box className={classes.authHeader}>
                                        <img src={Logo} alt='logo' width="50" height="50" />
                                    </Box>
                                </Box>
                                <div className={classes.paper}>
                                    <Box >
                                        <Typography className={classes.paperWelcome1}> Truster.<br />
                                        </Typography>
                                        <Typography className={classes.paperWelcome}>
                                            Tu punto de confianza. </Typography>
                                    </Box>
                                    <Grid justify='center' container>
                                        <form style={{
                                            width: '70%',
                                            marginTop: 30,
                                            justifyContent: "center",
                                            alignContent: "center",
                                            textAlign: 'center',
                                        }}
                                            onSubmit={this.handleSubmit}
                                            noValidate>
                                            <InputBase
                                                placeholder="Usuario / Email"
                                                fullWidth
                                                id="email"
                                                inputProps={{ style: { textAlign: 'center' } }}
                                                className={classes.formButton}

                                            // onChange={}
                                            />
                                            <InputBase
                                                placeholder="Contraseña"
                                                fullWidth
                                                color='white'
                                                type="password"
                                                inputProps={{ style: { textAlign: 'center' } }}
                                                className={classes.formButton}
                                            // onChange={}
                                            />
                                            <button
                                                type="submit"
                                                variant="contained"
                                                fullWidth
                                                className={classes.login}
                                            >
                                                Log In
                                        </button>
                                            <Grid container>
                                                <Grid item xs>
                                                    <Link>
                                                        <Typography
                                                            className={classes.normaltext}>
                                                            ¿Olvidaste contraseña?
                                                    </Typography>
                                                    </Link>
                                                </Grid>

                                            </Grid>
                                            <Grid container>
                                                <Grid item xs>

                                                    <Typography
                                                        className={classes.normaltext}>
                                                        ¿No tenés cuenta?{' '}
                                                        <Link
                                                            href="/register"
                                                            style={{ color: '#ACFD00' }}>
                                                            Registrate
                                                        </Link>
                                                    </Typography>

                                                </Grid>

                                            </Grid>
                                        </form>
                                    </Grid>


                                </div>
                            </Box>
                        </Container>
                    </Container>
                </Grid>
            </div>
        );
    }
}
export default withStyles(styles, { withTheme: true })(Login);