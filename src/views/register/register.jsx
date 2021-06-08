import React, { Component } from 'react'
import { CssBaseline, Grid, Box, Container, Typography, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import NavBar from '../../components/navBar/navbar.jsx';
import EmailCheck from '../../components/helpers/emailCheck.jsx'
import Swal from "sweetalert2";
import Link from '@material-ui/core/Link';
import InputBase from '@material-ui/core/InputBase';
import Logo from '../../asset/images/logo.svg';
import Checkbox from '@material-ui/core/Checkbox';
import RegexTextField from "../../components/helpers/regexTextField";
const onlyLettersRegex = /[^a-zA-Z]/gi;
const onlyNumbersRegex = /[^0-9]/gi;
const { localStorage } = global.window;
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
    loginError: {
        backgroundColor: '#E94342',
        width: '100%',
        font: 'normal normal normal 18px/24px Poppins',
        height: 50,
        borderRadius: 15,
        color: '#FFFFFF',
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
        "&:hover": {
            border: '2px solid',
            borderColor: '#E94342',
            borderRadius: 15,
        },

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
    inputTitle2: {
        color: '#E94342',
        font: 'normal normal normal 14px/14px Poppins',
        fontSize: '14px',
        marginTop: theme.spacing(2),
    },
    checkTerminos: {
        color: '#ACFD00',
        marginTop: 3
    },
    checkTerminosError: {
        color: '#ACFD00',
        marginTop: 3,
        borderColor: '#E94342'

    },
});

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lastName: '',
            email: '',
            password: '',
            passwordEx: '',
            checkTer: '',
            ruta: '',
            error: false,
            nameError: false,
            LastNameError: false,
            emailError: false,
            checkTerError: false,
            maxPass: '',
            passError: '',
            emailState: '',
            windowWidth: window.innerWidth
        };
    }
    handleResize = (e) => {
        this.setState({ windowWidth: window.innerWidth });
    };
    handleName = e => {
        e.preventDefault();
        this.setState({
            name: e.target.value,
            nameError: false,
        })
        console.log(e.target.value);
    }
    handleLastName = e => {
        e.preventDefault();
        this.setState({
            lastName: e.target.value,
            lastNameError: false,
        })
    }
    handleEmail = e => {
        e.preventDefault();
        this.setState({
            email: e.target.value,
            emailError: false
        });
    }
    handlepass = e => {
        e.preventDefault();
        this.setState({ password: e.target.value })
    }
    handlepassEx = e => {
        e.preventDefault();
        this.setState({ passwordEx: e.target.value })
    }
    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }
    handlerMaxPass = e => {
        const target = e.target;
        const longitudAct = target.value.length;
        console.log(longitudAct);
        this.setState({ maxPass: longitudAct })
        return longitudAct;
    }
    handleCreateAccountSubmit = (e) => {
        e.preventDefault();
        let name = this.state.name;
        let lastName = this.state.lastName;
        let email = this.state.email;
        let password = this.state.password;
        let passwordEx = this.state.passwordEx;
        let maxpass = this.state.maxPass;
        let emailocal = localStorage.getItem("thisEmail");
        let format = localStorage.getItem("formato");
        let ter = this.state.checkTer;
        if (ter !== true) {
            this.setState({
                checkTerError: true,
                error: true
            })
        } else if (name === '') {
            this.setState({
                nameError: true,
                error: true
            })
        } else if (lastName === '') {
            this.setState({
                lastNameError: true,
                error: true
            })
        } else if (password === '') {
            this.setState({
                passError: true,
                error: true
            })
        } else if (maxpass < 8) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'La contraseña de tener 8 o mas caracteres',
                footer: 'Truster App'
            })
        } else if (password !== passwordEx) {
            this.setState({
                password: '',
                passwordEx: '',
                passError: true,
                error: true
            })
        } else if (email === 'undefined') {
            this.setState({
                emailError: true,
                error: true
            })
        } else
            if (format === '0' || format === 'undefined') {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Formato de email no válido',
                    footer: 'Truster App'
                })

            } else
                if (emailocal === '1') {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Email no disponible o espere a que se determine su disponibilidad',
                        footer: 'Truster App'
                    })
                   
                } else {
                    localStorage.setItem("nombre", name);
                    localStorage.setItem("apellido", lastName);
                    localStorage.setItem("email", email);
                    localStorage.setItem("password", password);
                    window.open("/registerex", '_self');
                }
    }
    handlerEmailName = (emailState, email) => {
        if (email) {
            this.setState({
                email: email,
                emailState: emailState
            })
        } else {
            //this.setState({
            //avatar: null
            // })
        }
    }

    handlerTer = (e) => {
        if (this.state.checkTer === true) {
            this.setState({ checkTer: false })
        } else {
            this.setState({ checkTer: true })
        }
        console.log("termino  " + this.state.checkTer)
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
        let $nameError = this.state.nameError ? '*no olvides poner tu nombre' : '';
        let $lastError = this.state.lastNameError ? '*no olvides poner tu Apellido' : '';
        let $emailError = this.state.emailError ? '*no olvides poner tu email' : '';
        let $passError = this.state.passError ? '*las contraseña no coinciden' : '';
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
                                                <RegexTextField
                                                    placeholder="Nombre"
                                                    fullWidth
                                                    id="nombre"
                                                    name='name'
                                                    regex={onlyLettersRegex}
                                                    inputProps={{ style: { textAlign: 'center' } }}
                                                    className={this.state.nameError ? classes.errorFormButton : classes.formButton}
                                                    onChange={this.handleName}
                                                    required
                                                />
                                                <Typography className={classes.inputTitle2}>
                                                    {$nameError}
                                                </Typography>

                                                <Typography className={classes.inputTitle}>
                                                    Apellido
                                            </Typography>
                                                <RegexTextField
                                                    placeholder="Apellido"
                                                    fullWidth
                                                    id="apellido"
                                                    name='lastName'
                                                    regex={onlyLettersRegex}
                                                    inputProps={{ style: { textAlign: 'center' } }}
                                                    className={this.state.LastNameError ? classes.errorFormButton : classes.formButton}
                                                    onChange={this.handleLastName}
                                                    required

                                                />
                                                <Typography className={classes.inputTitle2}>
                                                    {$lastError}
                                                </Typography>
                                                <Typography className={classes.inputTitle}>
                                                    Email
                                            </Typography>
                                                {/*  <InputBase
                                                    placeholder="Email"
                                                    fullWidth
                                                    id="email"
                                                    name="email"
                                                    inputProps={{ style: { textAlign: 'center' } }}
                                                    className={this.state.emailError ? classes.errorFormButton : classes.formButton}
                                                    onChange={this.handleEmail}
                                                    required

                                                />*/}
                                                <EmailCheck changeEmail={(emailState, email) => this.handlerEmailName(emailState, email)} width={width} />
                                                <Typography className={classes.inputTitle2}>
                                                    {$emailError}
                                                </Typography>
                                                <Typography className={classes.inputTitle}>
                                                    Contraseña
                                            </Typography>
                                                <InputBase
                                                    placeholder="Contaseña"
                                                    fullWidth
                                                    type="password"
                                                    id="password"
                                                    name="password"
                                                    inputProps={{ style: { textAlign: 'center' }, type: "password", minlength: 8 }}
                                                    className={this.state.passError ? classes.errorFormButton : classes.formButton}
                                                    onChange={this.handlepass}
                                                    onBlur={(e) => {

                                                        this.handlerMaxPass(e);
                                                    }}
                                                    required

                                                />
                                                <Typography style={{ color: '#999999', fontSize: 10 }}>
                                                    {$passError}
                                                </Typography>
                                                <Typography className={classes.inputTitle}>
                                                    Repetir Contraseña
                                            </Typography>
                                                <InputBase
                                                    placeholder="Repetir Contraseña"
                                                    fullWidth
                                                    type="password"
                                                    id="password"
                                                    name="passwordEx"
                                                    inputProps={{ style: { textAlign: 'center' }, type: "password", minlength: 8 }}
                                                    className={this.state.passError ? classes.errorFormButton : classes.formButton}
                                                    onChange={this.handlepassEx}
                                                    onBlur={(e) => {
                                                        this.handlerMaxPass(e);
                                                    }}
                                                    required

                                                />
                                                <Typography style={{ color: '#999999', fontSize: 10 }}>
                                                    {$passError}
                                                </Typography>

                                                <Grid container item>
                                                    <Grid container justify="center" style={{ marginTop: 10 }}>
                                                        <Checkbox
                                                            iconStyle={{ fill: '#ACFD00' }}
                                                            inputStyle={{ color: '#ACFD00' }}
                                                            name="terms"
                                                            className={this.state.checkTerError ? classes.checkTerminosError : classes.checkTerminos}
                                                            style={{ color: '#ACFD00', marginTop: 3 }}
                                                            onChange={this.handlerTer}
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
                                                        fullWidth
                                                        className={this.state.error ? classes.loginError : classes.login}
                                                        onClick={this.handleCreateAccountSubmit}

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
                                                <RegexTextField
                                                    placeholder="Nombre"
                                                    fullWidth
                                                    id="nombre"
                                                    name='name'
                                                    regex={onlyLettersRegex}
                                                    inputProps={{ style: { textAlign: 'left' } }}
                                                    className={this.state.nameError ? classes.errorFormButton2 : classes.formButton2}
                                                    onChange={this.handleName}
                                                    required
                                                />
                                                <Typography className={classes.inputTitle2}>
                                                    {$nameError}
                                                </Typography>

                                                <Typography className={classes.inputTitle} style={{ textAlign: 'left' }}>
                                                    Apellido
                                                </Typography>
                                                <RegexTextField
                                                    placeholder="Apellido"
                                                    fullWidth
                                                    id="apellido"
                                                    name='apellido'
                                                    regex={onlyLettersRegex}
                                                    inputProps={{ style: { textAlign: 'left' } }}
                                                    className={this.state.lastError ? classes.errorFormButton2 : classes.formButton2}
                                                    onChange={this.handleLastName}
                                                    required
                                                />
                                                <Typography className={classes.inputTitle2}>
                                                    {$lastError}
                                                </Typography>
                                                <Typography className={classes.inputTitle} style={{ textAlign: 'left' }}>
                                                    Email
                                            </Typography>

                                                <EmailCheck changeEmail={(emailState, email) => this.handlerEmailName(emailState, email)} width={width} />

                                                <Typography className={classes.inputTitle2}>
                                                    {$emailError}
                                                </Typography>
                                                <Grid container>
                                                    <Grid container justify='flex-start' alignContent='center' xs={6} xl={6} sm={6}>
                                                        <Typography className={classes.inputTitle} style={{ textAlign: 'left' }}>
                                                            Contaseña
                                                        </Typography>
                                                    </Grid>
                                                    <Grid container justify='flex-end' alignContent='center' xs={6} xl={6} sm={6}>
                                                        <Typography style={{ color: '#999999', fontSize: 10, marginTop: 15 }}>
                                                            8 caracteres min
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                                <InputBase
                                                    placeholder="Contaseña"
                                                    fullWidth
                                                    id="password"
                                                    type="password"
                                                    name="password"
                                                    inputProps={{ style: { textAlign: 'left' }, type: "password", minlength: 8 }}
                                                    className={this.state.passError ? classes.errorFormButton2 : classes.formButton2}
                                                    onChange={this.handlepass}
                                                    onBlur={(e) => {
                                                        this.handlerMaxPass(e);
                                                    }}
                                                    required
                                                />

                                                <Typography style={{ color: '#999999', fontSize: 10 }}>
                                                    {$passError}
                                                </Typography>
                                                <InputBase
                                                    placeholder="Repetir Contraseña"
                                                    fullWidth
                                                    id="password"
                                                    type="password"
                                                    name="passwordEx"
                                                    inputProps={{ style: { textAlign: 'left' }, type: "password", minlength: 8 }}
                                                    className={this.state.passError ? classes.errorFormButton2 : classes.formButton2}
                                                    onChange={this.handlepassEx}
                                                    onBlur={(e) => {
                                                        this.handlerMaxPass(e);
                                                    }}
                                                    required
                                                />
                                                <Typography style={{ color: '#999999', fontSize: 10 }}>
                                                    {$passError}
                                                </Typography>
                                                <Grid container item>
                                                    <Grid container justify="center" style={{ marginTop: 10 }}>
                                                        <Checkbox
                                                            iconStyle={{ fill: '#ACFD00' }}
                                                            inputStyle={{ color: '#ACFD00' }}
                                                            name="terms"
                                                            className={this.state.checkTerError ? classes.checkTerminosError : classes.checkTerminos}
                                                            onChange={this.handlerTer}
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
                                                        fullWidth
                                                        className={this.state.error ? classes.loginError : classes.login}
                                                        onClick={this.handleCreateAccountSubmit}
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