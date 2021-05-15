import React, { Component } from 'react'
import { CssBaseline, Grid, Box, Container, Typography, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import NavBar from '../../components/navBar/navbar.jsx';
import Link from '@material-ui/core/Link';
import InputBase from '@material-ui/core/InputBase';
import Logo from '../../asset/images/logo.svg';
import Checkbox from '@material-ui/core/Checkbox';
const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#000000'
    },

    authWrapper: {
        [theme.breakpoints.up('sm')]: {
            marginTop: '100px',
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

        height: '110px',
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
        font: 'normal normal normal 18px/24px Poppins',
        height: 50,
        borderRadius: 15,
        textTransform: 'none',
        marginTop: theme.spacing(3),
    },
    formButton: {
        marginTop: theme.spacing(1),
        height: 50,
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
        border: '2px solid',
        borderColor: '#E94342',
        borderRadius: 15,
        color: "white",
        font: 'normal normal normal 16px/22px Poppins',

    },
    formButton2: {
        marginTop: theme.spacing(1),
        height: 50,
        border: '1px solid',
        borderBottomColor: '#999999',
        borderTop: 'red',
        borderRight: 'red',
        borderLeft: 'red',
        color: "white",
        font: 'normal normal normal 16px/22px Poppins',
        "&:hover": {
            borderTop: 'red',
            borderRight: 'red',
            borderLeft: 'red',
            border: '2px solid',
            borderColor: '#ACFD00',

        },
    },
    errorFormButton2: {
        marginTop: theme.spacing(1),
        height: 50,
        borderTop: 'red',
        borderRight: 'red',
        borderLeft: 'red',
        border: '2px solid',
        borderColor: '#E94342',
        color: "white",
        font: 'normal normal normal 16px/22px Poppins',

    },
    normaltext: {
        fontSize: 12,
        color: '#999999',
        fontFamily: 'Poppins',
        marginTop: theme.spacing(2),
    },
    inputTitle: {
        color: '#FFFFFF',
        font: 'normal normal normal 14px/14px Poppins',
        fontSize: '14px',
        marginTop: theme.spacing(2),
    },
});

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = { windowWidth: window.innerWidth };
    }
    handleResize = (e) => {
        this.setState({ windowWidth: window.innerWidth });
    };
    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }

    render() {
        function getWindowDimensions() {
            const { innerWidth: width } = window;
            return {
                width
            };
        }
        const { classes } = this.props;
        const { width } = getWindowDimensions();

        return (
            <div style={{ backgroundColor: '#000000' }}>

                <Grid container className={classes.root} component="main" maxWidth="md">
                    <Container component="main" maxWidth="md" >
                        <Grid item container xs={12} className={classes.paperContainer} >
                            <NavBar active={1} />
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
                                        <Typography className={classes.paperWelcome}>
                                            Creá tu cuenta Truster </Typography>
                                    </Box>
                                    {width > 550 ?
                                        <Grid justify='center'>
                                            <form style={{
                                                width: '100%',
                                                marginTop: 30,
                                                justifyContent: "center",
                                                alignContent: "center",
                                            }}
                                                onSubmit={this.handleSubmit}
                                                noValidate>
                                                <Typography className={classes.inputTitle}>
                                                    Nombre
                                                </Typography>
                                                <InputBase
                                                    placeholder="Nombre"
                                                    fullWidth
                                                    id="nombre"
                                                    inputProps={{ style: { textAlign: 'center' } }}
                                                    className={classes.formButton}
                                                // onChange={}
                                                />

                                                <Typography className={classes.inputTitle}>
                                                    Apellido
                                            </Typography>
                                                <InputBase
                                                    placeholder="Apellido"
                                                    fullWidth
                                                    id="apellido"
                                                    inputProps={{ style: { textAlign: 'center' } }}
                                                    className={classes.formButton}
                                                // onChange={}
                                                />
                                                <Typography className={classes.inputTitle}>
                                                    Email
                                            </Typography>
                                                <InputBase
                                                    placeholder="Email"
                                                    fullWidth
                                                    id="email"
                                                    inputProps={{ style: { textAlign: 'center' } }}
                                                    className={classes.formButton}
                                                // onChange={}
                                                />
                                                <Typography className={classes.inputTitle}>
                                                    Contraseña
                                            </Typography>
                                                <InputBase
                                                    placeholder="Contaseña"
                                                    fullWidth
                                                    id="password"
                                                    inputProps={{ style: { textAlign: 'center' } }}
                                                    className={classes.formButton}
                                                // onChange={}
                                                />
                                                <Typography style={{ color: '#999999', fontSize: 10 }}>
                                                    12 caracteres máx
                                            </Typography>
                                                <Typography className={classes.inputTitle}>
                                                    Repetir Contraseña
                                            </Typography>
                                                <InputBase
                                                    placeholder="Repetir Contraseña"
                                                    fullWidth
                                                    id="password"
                                                    inputProps={{ style: { textAlign: 'center' } }}
                                                    className={classes.formButton}
                                                // onChange={}
                                                />

                                                <Grid container item>
                                                    <Grid container justify="center" style={{ marginTop: 10 }}>
                                                        <Checkbox
                                                            iconStyle={{ fill: '#ACFD00' }}
                                                            inputStyle={{ color: '#ACFD00' }}
                                                            style={{ color: '#ACFD00', marginTop: 3 }}
                                                        />
                                                        <Typography
                                                            className={classes.normaltext}>
                                                            Acepto los{' '}
                                                            <Link
                                                                style={{ color: '#ACFD00' }}>
                                                                Condiciones de Uso
                                                    </Link>
                                                        </Typography>
                                                    </Grid>
                                                    <Button
                                                        type="submit"
                                                        variant="contained"
                                                        href="/registerex"
                                                        fullWidth
                                                        className={classes.login}
                                                    >
                                                        Continuar
                                                </Button>
                                                </Grid>

                                            </form>
                                        </Grid> : <Grid justify='flex-start'>
                                            <form style={{
                                                width: '100%',
                                                marginTop: 30,
                                                justifyContent: "left",
                                                alignContent: "left",
                                            }}
                                                onSubmit={this.handleSubmit}
                                                noValidate>
                                                <Typography className={classes.inputTitle} style={{ textAlign: 'left' }}>
                                                    Nombre
                                                </Typography>
                                                <InputBase
                                                    placeholder="Nombre"
                                                    fullWidth
                                                    id="nombre"
                                                    inputProps={{ style: { textAlign: 'left' } }}
                                                    className={classes.formButton2}
                                                // onChange={}
                                                />

                                                <Typography className={classes.inputTitle} style={{ textAlign: 'left' }}>
                                                    Apellido
                                                </Typography>
                                                <InputBase
                                                    placeholder="Apellido"
                                                    fullWidth
                                                    id="apellido"
                                                    inputProps={{ style: { textAlign: 'left' } }}
                                                    className={classes.formButton2}
                                                // onChange={}
                                                />
                                                <Typography className={classes.inputTitle} style={{ textAlign: 'left' }}>
                                                    Email
                                            </Typography>
                                                <InputBase
                                                    placeholder="Email"
                                                    fullWidth
                                                    id="email"
                                                    inputProps={{ style: { textAlign: 'left' } }}
                                                    className={classes.formButton2}
                                                // onChange={}
                                                />
                                                <Grid container>
                                                    <Grid container justify='flex-start' alignContent='center' xs={6} xl={6} sm={6}>
                                                        <Typography className={classes.inputTitle} style={{ textAlign: 'left' }}>
                                                            Contaseña
                                                        </Typography>
                                                    </Grid>
                                                    <Grid container justify='flex-end' alignContent='center' xs={6} xl={6} sm={6}>
                                                        <Typography style={{ color: '#999999', fontSize: 10, marginTop: 15 }}>
                                                            12 caracteres máx
                                                        </Typography>
                                                    </Grid>
                                                </Grid>


                                                <InputBase
                                                    placeholder="Contaseña"
                                                    fullWidth
                                                    id="password"
                                                    inputProps={{ style: { textAlign: 'left' } }}
                                                    className={classes.formButton2}
                                                // onChange={}
                                                />

                                                <Typography className={classes.inputTitle} style={{ textAlign: 'left' }}>
                                                    Repetir Contraseña
                                            </Typography>
                                                <InputBase
                                                    placeholder="Repetir Contraseña"
                                                    fullWidth
                                                    id="password"
                                                    inputProps={{ style: { textAlign: 'left' } }}
                                                    className={classes.formButton2}
                                                // onChange={}
                                                />
                                                <Grid container item>
                                                    <Grid container justify="center" style={{ marginTop: 10 }}>
                                                        <Checkbox
                                                            iconStyle={{ fill: '#ACFD00' }}
                                                            inputStyle={{ color: '#ACFD00' }}
                                                            style={{ color: '#ACFD00', marginTop: 3 }}
                                                        />
                                                        <Typography
                                                            className={classes.normaltext}>
                                                            Acepto los{' '}
                                                            <Link
                                                                style={{ color: '#ACFD00' }}>
                                                                Condiciones de Uso
                                                            </Link>
                                                        </Typography>
                                                    </Grid>
                                                    <Button
                                                        type="submit"
                                                        variant="contained"
                                                        href="/registerex"
                                                        fullWidth
                                                        className={classes.login}
                                                    >
                                                        Continuar
                                                </Button>
                                                </Grid>

                                            </form>
                                        </Grid>}


                                </div>
                            </Box>
                        </Container>
                    </Container>
                </Grid>
            </div>
        );
    }
}
export default withStyles(styles, { withTheme: true })(Register);