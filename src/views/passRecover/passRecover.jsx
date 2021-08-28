import React, { Component } from 'react'
import { CssBaseline, Grid, Box, Container, Typography, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import NavBar from '../../components/navBar/navbar.jsx';
import InputBase from '@material-ui/core/InputBase';
import Logo from '../../asset/images/logo.svg';
import  Loading from './../../components/Loading';
import { AccountEmailPass } from './../../services/hostConfig';
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
        marginTop: '30px',
        lineHeight: '38px',
        fontFamily: 'PoppinsBold',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '32px',
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
        marginTop: '20px',
        fontFamily: 'Poppins',
        fontWeight: ' bold',
        fontSize: '26px',
        textAlign: 'center',
        lineHeight: '35px',
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
        border: '1px solid',
        borderColor: '#ACFD00',
        color:'black',
        borderRadius: 15,
        font: 'normal normal normal 18px/24px Poppins',
        textTransform: 'none',
        height: 60,
        marginTop: theme.spacing(4),
    },
    loginError: {
        backgroundColor: '#ACFD00',
        width: '100%',
        border: '1px solid',
        borderColor: '#ACFD00',
        borderRadius: 15,
        color:'black',
        font: 'normal normal normal 18px/24px Poppins',
        height: 60,
        marginTop: theme.spacing(4),
        "&:disabled": {
            backgroundColor: '#6e1d1d',
            color:'white',
        }
    },
    formButton: {
        marginTop: theme.spacing(1),
        height: 60,
        border: '1px solid',
        borderColor: '#999999',
        borderRadius: 15,
        color: "white",
        font: 'normal normal normal 16px/22px Poppins',
    },
    formButton2: {
        marginTop: theme.spacing(5),
        height: 60,
        width: 450,
        border: '1px solid',
        borderColor: '#999999',
        borderRadius: 15,
        color: "white",
        font: 'normal normal normal 16px/22px Poppins',
    },
    errorFormButton2: {
        marginTop: theme.spacing(1),
        height: 60,
        borderTop: 'red',
        borderRight: 'red',
        borderLeft: 'red',
        border: '2px solid',
        borderColor: '#E94342',
        borderRadius: 15,
        color: "white",
        font: 'normal normal normal 16px/22px Poppins',
    },
    inputTitle2: {
        color: '#E94342',
        font: 'normal normal normal 14px/14px Poppins',
        fontSize: '14px',
        marginTop: theme.spacing(2),
    },
});

class PassRecover extends Component {
    constructor(props) {
        super(props);
        this.state = {
            windowWidth: window.innerWidth,
            sent: false,
            email: '',
            error: '',
            textError: '',
            ruta: '/',
            show: false,
            error: false,
            nameError: false,
            lastError: false,
            emailError:false,
            active:false

        };

    }
    handleResize = (e) => {
        this.setState({ windowWidth: window.innerWidth });
    };
    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }
    handleSentChange = e => {
        e.preventDefault();
        this.setState({ sent: !this.state.sent })
    }
    _handleChangeValueEmail = e => {
        e.preventDefault();
        this.setState({ email: e.target.value })
    }
    inputChange = (e) => {
        e.preventDefault();
        let format = this.formatEmail(this.state.email);
        if (e.target.value === ''  || format === '0') {
            this.setState({
                lastError: true,
                error: true,
                emailError:true
            })
        }else{
            this.setState({
                lastError: false,
                error: false,
                emailError:false
            })
        }

    }
    formatEmail = email => {
        let format = '0';
    
        for (let index = 0; index < email.length; index++) {
          const element = email[index];
    
          if (element === '@') {
            format = '1';
            break;
          }
          else{
            format = '0';
          }
        }
        return format;
      }


_handleSubmit = e => {
    e.preventDefault();
    let email = this.state.email;  
    this.setState({
        active:true,
        show: true,
    })
    if (email === '' || this.state.error ==true) {
        this.setState({
            error: true,
            textError: '*Debe ingresar su email',
            emailError:true,
            active:false
        })
    } else {
        this.setState({
            show: true
        })
        fetch(AccountEmailPass(), {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: email,
        }).then(response => {
            console.log(response); 
            console.log(response.status);           
            this.setState({
                show: false,
                sent: !this.state.sent,
                email:'',
                active:false
            })
        });
    }
}

render() {
    function getWindowDimensions() {
        const { innerWidth: width } = window;
        return {
            width
        };
    }
    const { classes } = this.props;
    let $textError = this.state.textError;
    let $emailError = this.state.emailError ? '*Debe escribir un correo o el mismo debe ser valido' : '';
    let $show = this.state.show;
    let $wait = '';
    const { width } = getWindowDimensions();
    if ($show) {           
        $wait = (<Loading />);        
    } else{
        $wait = ( <img src={Logo} alt='logo' width="50" height="50" />); 
    }

    return (
        <div style={{ backgroundColor: '#000000' }}>

            <Grid container className={classes.root} component="main" maxWidth="md">
                <Container component="main" maxWidth="md" >
                    <Grid item container xs={12} className={classes.paperContainer} >
                        <NavBar active={0} recover={1} />
                    </Grid>
                    <Container component="main" maxWidth="md" style={{ alignItems: 'center' }} >
                        <Box className={classes.authWrapper}   >
                            <CssBaseline />
                            <div className={classes.paper}>
                                {width > 550 ?
                                    <Grid justify='center' container style={{ marginTop: 100 }}>
                                         <Box mx="auto"  >
                                            <Box className={classes.authHeader}>
                                            {$wait}
                                            </Box>
                                        </Box>
                                        <Grid container justify='center'>
                                            
                                            <Typography className={classes.paperWelcome} style={{ maxWidth: 450 }}>
                                                Ingresá tu correo para reestablecer tu contraseña
                                            </Typography>
                                        </Grid>
                                        <Grid container justify='center'>
                                            <Typography className={classes.paperWelcome1} style={{ maxWidth: 450 }}>
                                                Te enviaremos un correo con un link de recuperación
                                            </Typography>
                                        </Grid>
                                        <Grid container justify='center'>
                                            <form style={{
                                                width: '40%',
                                                marginTop: 30,
                                                justifyContent: "center",
                                                alignContent: "center",
                                                textAlign: 'center',
                                            }}
                                                onSubmit={this._handleSubmit}
                                                noValidate>
                                                <InputBase
                                                    placeholder="Tu correo electrónico"
                                                    fullWidth
                                                    id="email"
                                                    disabled={this.state.active }
                                                    inputProps={{ style: { textAlign: 'center' } }}
                                                    className={this.state.lastError ? classes.errorFormButton2 : classes.formButton}
                                                    onClick = {(e)=>{
                                                        e.preventDefault();
                                                        this.setState({
                                                            emailError:false ,
                                                            lastError:false
                                                        })

                                                    }}
                                                    onChange={this._handleChangeValueEmail}
                                                    onBlur={(e) => {
                                                        this.inputChange(e)
                                                    }}

                                                />
                                                {console.log(this.state.sent)}
                                                <Button
                                                    type="submit"
                                                    fullWidth
                                                    className={classes.login} 
                                                    disabled={this.state.active }                                                   

                                                >   
                                                      {this.state.sent === true ? 'Reenviar' : 'Enviar'}
                                                </Button>
                                                <Typography
                                                        className={classes.inputTitle2}>
                                                       {$emailError}
                                                    </Typography>
                                                    {this.state.sent === true ? 'Reenviar' : 'Enviar'}
                                                {this.state.sent === true ? <Typography style={{
                                                    maxWidth: 450,
                                                    marginTop: '20px',
                                                    fontFamily: 'Poppins',
                                                    fontWeight: ' bold',
                                                    fontSize: '14px',
                                                    textAlign: 'center',
                                                    lineHeight: '35px',
                                                    letterSpacing: '-0.02em',
                                                    color: '#ACFD00'
                                                }}>
                                                    Tu correo se ha enviado satisfactoriamente!
                                                </Typography> : ''}

                                            </form>
                                        </Grid>
                                    </Grid>
                                    :
                                    <Grid justify='center' container style={{ marginTop: 0 }}>
                                        <Box mx="auto"  >
                                            <Box className={classes.authHeader}>
                                            {$wait}
                                            </Box>
                                        </Box>
                                        <Grid container justify='center'>
                                            
                                            <Typography className={classes.paperWelcome} style={{ maxWidth: 300 }}>
                                                Ingresá tu correo para reestablecer tu contraseña
                                            </Typography>
                                        </Grid>
                                        <Grid container justify='center'>
                                            <Typography className={classes.paperWelcome1} style={{ maxWidth: 300, fontSize: 22 }}>
                                                Te enviaremos un correo con un link de recuperación
                                            </Typography>
                                        </Grid>
                                        <Grid container justify='center'>
                                            <form style={{
                                                width: '100%',
                                                marginTop: 30,
                                                justifyContent: "center",
                                                alignContent: "center",
                                                textAlign: 'center',
                                            }}
                                                onSubmit={this._handleSubmit}
                                                noValidate>
                                                <InputBase
                                                    placeholder="Tu correo electrónico"
                                                    fullWidth
                                                    id="email"
                                                    disabled={this.state.active }
                                                    inputProps={{ style: { textAlign: 'center' } }}
                                                    className={this.state.lastError ? classes.errorFormButton2 : classes.formButton}
                                                    helperText={(<font color='red'>{$textError}</font>)}
                                                    onChange={this._handleChangeValueEmail}
                                                    onClick = {(e)=>{
                                                        e.preventDefault();
                                                        this.setState({
                                                            emailError:false ,
                                                            lastError:false
                                                        })

                                                    }}
                                                    onBlur={(e) => {
                                                        this.inputChange(e)
                                                    }}


                                                />
                                                {console.log(this.state.sent)}
                                                <Button
                                                    type="submit"
                                                    fullWidth
                                                    className={classes.login}
                                                    disabled={this.state.active }
                                                >
                                                    Modificar
                                                </Button>
                                                <Typography
                                                        className={classes.inputTitle2}>
                                                       {$emailError}
                                                    </Typography>
                                                
                                                {this.state.sent === true ? <Typography style={{
                                                    maxWidth: 450,
                                                    marginTop: '20px',
                                                    fontFamily: 'Poppins',
                                                    fontWeight: ' bold',
                                                    fontSize: '14px',
                                                    textAlign: 'center',
                                                    lineHeight: '35px',
                                                    letterSpacing: '-0.02em',
                                                    color: '#ACFD00'
                                                }}>
                                                    Tu correo se ha enviado satisfactoriamente!
                                                </Typography> : ''}

                                            </form>
                                        </Grid>
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
export default withStyles(styles, { withTheme: true })(PassRecover);