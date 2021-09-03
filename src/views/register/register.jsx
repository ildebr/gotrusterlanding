import React, { Component } from 'react'
import { CssBaseline, Grid, Box, Container, Typography, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import NavBar from '../../components/navBar/navBarRegister';
import EmailCheck from '../../components/helpers/emailCheck.jsx'
import Swal from "sweetalert2";
import Link from '@material-ui/core/Link';
import InputBase from '@material-ui/core/InputBase';
import Logo from '../../asset/images/logo.svg';
import Checkbox from '@material-ui/core/Checkbox';
//import RegexTextField from "../../components/helpers/regexTextField";

const onlyLettersRegex = /[^a-zA-Z]/gi;
//const onlyNumbersRegex = /[^0-9]/gi;
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
        "&:disabled": {
            backgroundColor: '#292929',
            color:'#474747'
        }
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
        "&:disabled": {
            backgroundColor: '#6e1d1d',
        }
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
    inputTitle3: {
        color: '#666666',
        font: 'normal normal normal 14px/14px Poppins',
        fontSize: '10px',
        marginTop: theme.spacing(1),
    },
    checkTerminos: {
        color: '#ACFD00',
        marginTop: 3,
        
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
            incompletePassError: '',
            emailState: '',
            emailAvailable: false,
            emailAvailableEx: false,
            emailRep: '',
            windowWidth: window.innerWidth,

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
        this.setState({
            password: e.target.value,
            incompletePassError: false
        })
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


        if (longitudAct <= 0) {
            this.setState({
                incompletePassError: true,
                error: true
            })
        }

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
        let checkTerError = this.state.checkTer;
        let emailocal = localStorage.getItem("thisEmail");
        let format = localStorage.getItem("formato");
        let ter = this.state.checkTer;



        if (checkTerError !== true) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debe aceptar los terminos y condiciones',
                footer: 'Truster App'
            })
        } else if (ter !== true) {
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


        } else if (emailocal === '1') {
            this.setState({
                emailAvailable: true,
                error: true
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
        let emailocal = localStorage.getItem("thisEmail");
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
        if (emailocal === '1') {
            this.setState({
                emailAvailable: true,
                error: true
            })
        }
        if (emailocal === '0') {
            this.setState({
                emailAvailable: false,
                emailAvailableEx: false,
                error: false
            })
        }
    }
    handlerRepEmail = e => {
        e.preventDefault();
        this.setState({ emailRep: e.target.value })

    }

    handlerTer = (e) => {
        if (this.state.checkTer === true) {
            this.setState({ checkTer: false })
        } else {
            this.setState({ checkTer: true })
        }
        console.log("termino  " + this.state.checkTer)
    }

    inputChange = (e) => {
        e.preventDefault();
        switch (e.target.id) {
            case 'nombre':
                if (e.target.value === '') {
                    this.setState({
                        nameError: true,
                        error: true
                    })
                }
                break;
            case 'apellido':
                if (e.target.value === '') {
                    this.setState({
                        lastNameError: true,
                        error: true
                    })
                }
                break;
            case 'password':
                if (e.target.value === '') {
                    this.setState({
                        passError: true,
                        error: true
                    })
                }
                break;

        }

    }
    inputChangeEx = (e) => {
        e.preventDefault();
        switch (e.target.id) {
            case 'RepEmail':

                if (e.target.value !== localStorage.getItem('Email')) {
                    this.setState({
                        passError: true,
                        error: true,
                        emailAvailableEx: true
                    })
                }
                break;
        }
    }
    searchCapitalLetter = (letters) => {
        return letters === letters.toUpperCase();
    }

    searchLowercase = (letters) => {
        return letters === letters.toLowerCase();
    }


    securityPassword = e => {
       
        const targetVal = e.target.value;
        const longitudAct = targetVal.length;       
        let security =false;
        let securityUp = 0;
        let securityLower = 0;
        let securityNumber = 0;
        let securityLenght = false;
        var i=0;
        var character='';
        console.log(longitudAct);        
        this.setState({ maxPass: longitudAct })
        if (longitudAct < 8) {           
            securityLenght = false;
        } else {
            
           while (i <= targetVal.length){
            character = targetVal.charAt(i);
            if (!isNaN(character * 1)){
                securityNumber++;
                console.log('character is numeric ' + character);
            }else{
                if (character == character.toUpperCase()) {
                    securityUp++;
                    console.log ('upper case true ' + character);
                }
                if (character == character.toLowerCase()){
                    securityLower++;
                    console.log ('lower case true ' + character);
                }
            }
            i++;
        }        
           
        }
        if (securityNumber > 0
         && securityUp > 0
         && securityLower > 0){
            security = true
        }else {
            security= false;
        }
        
        console.log("total seguridad "+security)
        return security

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
        let $acotation = this.state.incompletePassError ? '' : '12 caracteres máx';
        let $incompletePassError = this.state.incompletePassError ? '*La contraseña debe contener 8 caracteres mínimo,' : '';
        let $incompletePassErrorEx = this.state.incompletePassError ? '*una minúscula, una mayúscula y un número' : '';
        let $emailAvailable = this.state.emailAvailable ? '*Correo no disponible' : '';
        let $emailAvailableEx = this.state.emailAvailableEx ? '*No coinciden los correos' : '';
        let $emailocal = localStorage.getItem("thisEmail");
        const isEnabled = this.state.name !== '' && this.state.lastName !== '' && this.state.email !== ''
            && this.state.password !== '' && this.state.passwordEx !== ''
            && this.state.checkTer === true

        return (
            <div style={{ backgroundColor: '#000000' }}>

                <Grid container className={classes.root} component="main" maxWidth="md">
                    <Container component="main" maxWidth="md">
                        <Grid item container xs={12} className={classes.paperContainer}>
                            <NavBar active={1} />
                        </Grid>
                        <Container component="main" maxWidth="md" style={{ alignItems: 'center' }}>
                            <Box className={classes.authWrapper}>
                                <CssBaseline />
                                <Box mx="auto">
                                    <Box className={classes.authHeader}>
                                        <img src={Logo} alt='logo' width="50" height="50" />
                                    </Box>
                                </Box>
                                <div className={classes.paper}>
                                    <Box>
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
                                                    name='name'

                                                    inputProps={{ style: { textAlign: 'center' } }}
                                                    className={this.state.nameError ? classes.errorFormButton : classes.formButton}
                                                    onChange={this.handleName}
                                                    required
                                                    onBlur={(e) => {
                                                        this.inputChange(e)
                                                    }}
                                                />
                                                <Typography className={classes.inputTitle2}>
                                                    {$nameError}
                                                </Typography>

                                                <Typography className={classes.inputTitle}>
                                                    Apellido
                                                </Typography>
                                                <InputBase
                                                    placeholder="Apellido"
                                                    fullWidth
                                                    id="apellido"
                                                    name='lastName'

                                                    inputProps={{ style: { textAlign: 'center' } }}
                                                    className={this.state.LastNameError ? classes.errorFormButton : classes.formButton}
                                                    onChange={this.handleLastName}
                                                    required
                                                    onBlur={(e) => {
                                                        this.inputChange(e)
                                                    }}

                                                />
                                                <Typography className={classes.inputTitle2}>
                                                    {$lastError}
                                                </Typography>
                                                <Typography className={classes.inputTitle}>
                                                    Email
                                                </Typography>

                                                <EmailCheck

                                                    changeEmail={(emailState, email) => this.handlerEmailName(emailState, email)

                                                    }

                                                    width={width} />
                                                <Typography className={classes.inputTitle2}>
                                                    {$emailError} {$emailAvailable}
                                                </Typography>
                                                <Typography className={classes.inputTitle}>
                                                Repetir Email
                                                </Typography>
                                                <InputBase
                                                    placeholder="Email"
                                                    fullWidth
                                                    id="RepEmail"
                                                    name="RepEmail"
                                                    inputProps={{ style: { textAlign: 'center' } }}
                                                    className={this.state.emailError ? classes.errorFormButton : classes.formButton}
                                                    onChange={this.handlerRepEmail}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        this.setState({
                                                            error: false,
                                                            emailAvailableEx: false
                                                        })
                                                    }}
                                                    onBlur={(e) => {

                                                        if (this.state.emailRep == localStorage.getItem('Email')) {
                                                            this.setState({
                                                                error: false,
                                                                emailAvailableEx: false
                                                            })
                                                        } else {
                                                            this.setState({
                                                                error: true,
                                                                emailAvailableEx: true
                                                            })
                                                        }
                                                        if (this.state.emailRep == '') {
                                                            this.setState({
                                                                error: true,
                                                                emailAvailableEx: true
                                                            })

                                                        }
                                                    }}
                                                    onPaste={(e) => {
                                                        e.preventDefault();
                                                        return false;
                                                    }}
                                                    required

                                                />
                                                <Typography className={classes.inputTitle2}>
                                                    {$emailError} {$emailAvailable}{$emailAvailableEx}
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
                                                    inputProps={{
                                                        style: { textAlign: 'center' },
                                                        type: "password",
                                                        minlength: 8
                                                    }}
                                                    className={this.state.passError || this.state.incompletePassError ? classes.errorFormButton : classes.formButton}
                                                    onChange={this.handlepass}
                                                    onBlur={(e) => {
                                                        //this.handlerMaxPass(e);
                                                        if (this.securityPassword(e) == false) {
                                                            this.setState({
                                                                incompletePassError: true,
                                                                error: true
                                                            })
                                                        } else if (this.securityPassword(e) == true) {
                                                            this.setState({
                                                                incompletePassError: false,
                                                                error: false
                                                            })
                                                        }
                                                    }}

                                                    required

                                                />
                                                 <Typography className={classes.inputTitle3}>
                                                    {$acotation}
                                                </Typography>
                                                <Typography className={classes.inputTitle2}>
                                                    {$incompletePassError}
                                                </Typography>
                                                <Typography className={classes.inputTitle2}>
                                                    {$incompletePassErrorEx}
                                                </Typography>
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
                                                    inputProps={{
                                                        style: { textAlign: 'center' },
                                                        type: "password",
                                                        minlength: 8
                                                    }}
                                                    className={this.state.passError ? classes.errorFormButton : classes.formButton}
                                                    onChange={this.handlepassEx}
                                                    onClick={(e) => {
                                                        this.setState({
                                                            passwordEx: '',
                                                            passError: false,
                                                            error: false
                                                        })
                                                    }}
                                                    onBlur={(e) => {
                                                        if (this.state.password !== e.target.value) {
                                                            this.setState({
                                                                passwordEx: '',
                                                                passError: true,
                                                                error: true
                                                            })
                                                        }
                                                    }}
                                                    onPaste={(e) => {
                                                        e.preventDefault();
                                                        return false;
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
                                                        disabled={!isEnabled}
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
                                                    name='name'
                                                    inputProps={{ style: { textAlign: 'left' } }}
                                                    className={this.state.nameError ? classes.errorFormButton2 : classes.formButton2}
                                                    onChange={this.handleName}
                                                    required
                                                    onBlur={(e) => {
                                                        this.inputChange(e)
                                                    }}
                                                />
                                                <Typography className={classes.inputTitle2}>
                                                    {$nameError}
                                                </Typography>

                                                <Typography className={classes.inputTitle} style={{ textAlign: 'left' }}>
                                                    Apellido
                                                </Typography>
                                                <InputBase
                                                    placeholder="Apellido"
                                                    fullWidth
                                                    id="apellido"
                                                    name='apellido'

                                                    inputProps={{ style: { textAlign: 'left' } }}
                                                    className={this.state.lastError ? classes.errorFormButton2 : classes.formButton2}
                                                    onChange={this.handleLastName}
                                                    required
                                                    onBlur={(e) => {
                                                        this.inputChange(e)
                                                    }}
                                                />
                                                <Typography className={classes.inputTitle2}>
                                                    {$lastError}
                                                </Typography>
                                                <Typography className={classes.inputTitle} style={{ textAlign: 'left' }}>
                                                    Email
                                                </Typography>

                                                <EmailCheck
                                                    changeEmail={(emailState, email) => this.handlerEmailName(emailState, email)}
                                                    onBlur={(e) => {
                                                        this.inputChange(e)
                                                    }}
                                                    width={width} />

                                                <Typography className={classes.inputTitle2}>
                                                    {$emailError} {$emailAvailable}
                                                </Typography>
                                                <Typography className={classes.inputTitle} style={{ textAlign: 'left' }}>
                                                    Repetir Email
                                                </Typography>
                                                <InputBase
                                                    placeholder="Repetir Email"
                                                    fullWidth
                                                    type="text"
                                                    name="RepEmail"
                                                    onChange={this.handlerRepEmail}
                                                    className={this.state.passError ? classes.errorFormButton2 : classes.formButton2}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        this.setState({
                                                            error: false,
                                                            emailAvailableEx: false
                                                        })
                                                    }}
                                                    onBlur={(e) => {

                                                        if (this.state.emailRep == localStorage.getItem('Email')) {
                                                            this.setState({
                                                                error: false,
                                                                emailAvailableEx: false
                                                            })
                                                        } else {
                                                            this.setState({
                                                                error: true,
                                                                emailAvailableEx: true
                                                            })
                                                        }
                                                        if (this.state.emailRep == '') {
                                                            this.setState({
                                                                error: true,
                                                                emailAvailableEx: true
                                                            })

                                                        }
                                                    }}
                                                    onPaste={(e) => {
                                                        e.preventDefault();
                                                        return false;
                                                    }}

                                                    required
                                                />
                                                <Typography className={classes.inputTitle2}>
                                                    {$emailError} {$emailAvailable}{$emailAvailableEx}
                                                </Typography>

                                                <Grid container>
                                                    <Grid container justify='flex-start' alignContent='center' xs={6}
                                                        xl={6} sm={6}>
                                                        <Typography className={classes.inputTitle}
                                                            style={{ textAlign: 'left' }}>
                                                            Contaseña
                                                        </Typography>
                                                    </Grid>
                                                    <Grid container justify='flex-end' alignContent='center' xs={6}
                                                        xl={6} sm={6}>
                                                        <Typography
                                                            style={{ color: '#999999', fontSize: 10, marginTop: 15 }}>
                                                            12 caracteres máx
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                                <InputBase
                                                    placeholder="Contaseña"
                                                    fullWidth
                                                    id="password"
                                                    type="password"
                                                    name="password"
                                                    inputProps={{
                                                        style: { textAlign: 'left' },
                                                        type: "password",
                                                        minlength: 8
                                                    }}
                                                    className={this.state.passError || this.state.incompletePassError ? classes.errorFormButton2 : classes.formButton2}
                                                    onChange={this.handlepass}
                                                    onBlur={(e) => {
                                                        if (this.securityPassword(e) == false) {
                                                            this.setState({
                                                                incompletePassError: true,
                                                                error: true
                                                            })
                                                        } else if (this.securityPassword(e) == true) {
                                                            this.setState({
                                                                incompletePassError: false,
                                                                error: false
                                                            })
                                                        }
                                                    }}
                                                    required
                                                />
                                                <Typography className={classes.inputTitle2}>
                                                    {$incompletePassError}
                                                </Typography>
                                                <Typography className={classes.inputTitle2}>
                                                    {$incompletePassErrorEx}
                                                </Typography>
                                                <Typography style={{ color: '#999999', fontSize: 10 }}>
                                                    {$passError}
                                                </Typography>
                                                <InputBase
                                                    placeholder="Repetir Contraseña"
                                                    fullWidth
                                                    id="password"
                                                    type="password"
                                                    name="passwordEx"
                                                    inputProps={{
                                                        style: { textAlign: 'left' },
                                                        type: "password",
                                                        minlength: 8
                                                    }}
                                                    className={this.state.passError ? classes.errorFormButton2 : classes.formButton2}
                                                    onChange={this.handlepassEx}
                                                    onClick={(e) => {
                                                        this.setState({
                                                            passwordEx: '',
                                                            passError: false,
                                                            error: false
                                                        })
                                                    }
                                                    }
                                                    onBlur={(e) => {
                                                        if (this.state.password !== e.target.value) {
                                                            this.setState({
                                                                passwordEx: '',
                                                                passError: true,
                                                                error: true
                                                            })
                                                        }
                                                    }}
                                                    onPaste={(e) => {
                                                        e.preventDefault();
                                                        return false;
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
                                                        disabled={!isEnabled}
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