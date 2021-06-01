import React, { Component } from 'react'
import { CssBaseline, Grid, Box, Container, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import NavBar from '../../components/navBar/navbar.jsx';
import InputBase from '@material-ui/core/InputBase';
import Logo from '../../asset/images/logo.svg';
import Link from '@material-ui/core/Link';
import { AccountResetPass } from './../../services/hostConfig';
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
        fontSize: '22px',
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
        borderRadius: 15,
        font: 'normal normal normal 18px/24px Poppins',
        height: 60,
        marginTop: theme.spacing(4),
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
    normaltext: {
        fontSize: 12,
        color: '#999999',
        fontFamily: 'Poppins',
        marginTop: theme.spacing(2),
    }
});

class NewpassRecover extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key:'',
            password:'',
            password2:'',
            error:'',
            textError:'',
            ruta:'/',
            show:false,
            windowWidth: window.innerWidth,
            sent: false
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
    useQuery() {
        return new URLSearchParams(window.location.search);
      }
    
      _handleChangeValuePass = e =>{
        e.preventDefault();
        this.setState({password:e.target.value})
      }
      _handleChangeValuePass2 = e =>{
        e.preventDefault();
        this.setState({password2:e.target.value})
      }

    _handleSubmit = e => {
        e.preventDefault();
        let pass = this.state.password;
        let pass2 = this.state.password2;
        let key = this.useQuery().get('key');
        console.log('key: ' + key);
        if ((pass === '') || (pass2 === '')) {
          this.setState({
            error: 'error',
            textError: '*Debe ingresa la contraseña en ambos campos'
          })
        } else {
          this.setState({
            show:true
          })
          fetch(AccountResetPass(), {
            method: 'post',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({'key': key, 'newPassword': this.state.password}),
          }).then(response=>{
            console.log(response)
            this.setState({
              show:false
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
        const { width } = getWindowDimensions();

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
                                    {width > 600 ?
                                        <div>
                                            {this.state.sent === false ? <Grid justify='center' container style={{ marginTop: 100 }}>
                                                <Grid container justify='center'>
                                                    <Typography className={classes.paperWelcome} style={{ maxWidth: 450 }}>
                                                        Ingresá una nueva contraseña para continuar
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
                                                        minWidth: 300,
                                                        marginTop: 30,
                                                        justifyContent: "center",
                                                        alignContent: "center",
                                                        textAlign: 'center',
                                                    }}
                                                        onSubmit={this._handleSubmit}
                                                        noValidate>
                                                        <InputBase
                                                            placeholder="Contraseña actual"
                                                            fullWidth
                                                            id="currentpass"
                                                            inputProps={{ style: { textAlign: 'center' } }}
                                                            className={classes.formButton}

                                                        // onChange={}
                                                        />
                                                        <InputBase
                                                            placeholder="Nueva contraseña"
                                                            fullWidth
                                                            id="newpass"
                                                            inputProps={{ style: { textAlign: 'center' } }}
                                                            className={classes.formButton}
                                                            onChange={this._handleChangeValuePass}
                                                        />
                                                        <InputBase
                                                            placeholder="Repetir nueva contraseña"
                                                            fullWidth
                                                            id="newpassvalid"
                                                            inputProps={{ style: { textAlign: 'center' } }}
                                                            className={classes.formButton}
                                                            onChange={this._handleChangeValuePass2}

                                                        />
                                                        {/* {console.log(this.state.sent)} */}
                                                        <button
                                                            type="submit"
                                                            fullWidth
                                                            className={classes.login}
                                                            onClick={this.handleSentChange}
                                                        >
                                                            Modificar
                                                </button>
                                                    </form>
                                                </Grid>
                                            </Grid> :
                                                <Grid justify='center' container style={{ marginTop: 100 }}>
                                                    <Grid container justify='center'>
                                                        <Typography className={classes.paperWelcome} style={{ maxWidth: 450 }}>
                                                            ¡Listo! Tu contraseña ha sido modificada.
                                                        </Typography>
                                                    </Grid>
                                                    <Grid container justify='center'>
                                                        <Typography className={classes.paperWelcome1} style={{ maxWidth: 450 }}>
                                                            Ya podés iniciar sesión
                                                        </Typography>
                                                    </Grid>
                                                    <Grid container justify='center'>
                                                        <form style={{
                                                            width: '40%',
                                                            minWidth: 300,
                                                            marginTop: 30,
                                                            justifyContent: "center",
                                                            alignContent: "center",
                                                            textAlign: 'center',
                                                        }}
                                                        onSubmit={this._handleSubmit}
                                                            noValidate>
                                                            <InputBase
                                                                placeholder="Usuario / Email"
                                                                fullWidth
                                                                id="user"
                                                                inputProps={{ style: { textAlign: 'center' } }}
                                                                className={classes.formButton}

                                                            // onChange={}
                                                            />
                                                            <InputBase
                                                                placeholder="Contraseña"
                                                                fullWidth
                                                                id="pass"
                                                                inputProps={{ style: { textAlign: 'center' } }}
                                                                className={classes.formButton}

                                                            // onChange={}
                                                            />

                                                            <button
                                                                type="submit"
                                                                fullWidth
                                                                className={classes.login}
                                                                onClick={this.handleSentChange}
                                                            >
                                                                Log in
                                                            </button>
                                                            <Grid container>
                                                                <Grid item xs>
                                                                    <Link href="/passrecover" style={{ textDecoration: 'none' }} >
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
                                                </Grid>}
                                        </div>
                                        :
                                        <Grid justify='center' container style={{ marginTop: 0 }}>
                                            <Box mx="auto"  >
                                                <Box className={classes.authHeader}>
                                                    <img src={Logo} alt='logo' width="50" height="50" />
                                                </Box>
                                            </Box>
                                            {this.state.sent === false ?
                                                <div>
                                                    <Grid container justify='center'>
                                                        <Typography className={classes.paperWelcome} style={{ maxWidth: 300, marginBottom: 15 }}>
                                                            Ingresá una nueva contraseña para continuar
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
                                                                placeholder="Contraseña actual"
                                                                fullWidth
                                                                id="currentpass"
                                                                inputProps={{ style: { textAlign: 'center' } }}
                                                                className={classes.formButton}

                                                            // onChange={}
                                                            />
                                                            <InputBase
                                                                placeholder="Nueva contraseña"
                                                                fullWidth
                                                                id="newpass"
                                                                inputProps={{ style: { textAlign: 'center' } }}
                                                                className={classes.formButton}
                                                                onChange={this._handleChangeValuePass}

                                                            
                                                            />
                                                            <InputBase
                                                                placeholder="Repetir nueva contraseña"
                                                                fullWidth
                                                                id="newpassvalid"
                                                                inputProps={{ style: { textAlign: 'center' } }}
                                                                className={classes.formButton}
                                                                onChange={this._handleChangeValuePass2}

                                                           
                                                            />
                                                            {/* {console.log(this.state.sent)} */}
                                                            <button
                                                                type="submit"
                                                                fullWidth
                                                                className={classes.login}
                                                                onClick={this.handleSentChange}
                                                            >
                                                                Modificar
                                                    </button>

                                                        </form>
                                                    </Grid>
                                                </div> :
                                                <Grid container justify='center'>
                                                    <Grid container justify='center' xs={12} xl={12} sm={12}>
                                                        <Typography className={classes.paperWelcome} style={{ marginBottom: 15 }}>
                                                            ¡Listo! Tu contraseña ha sido modificada. Ya podés iniciar sesión.
                                                            </Typography>
                                                    </Grid>
                                                    <Grid container justify='center' xs={12} xl={12} sm={12}>

                                                        <button
                                                            type="submit"
                                                            fullWidth
                                                            className={classes.login}
                                                            onClick={this.handleSentChange}
                                                        >
                                                            Ingresar
                                                    </button>


                                                    </Grid>
                                                </Grid>
                                            }

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
export default withStyles(styles, { withTheme: true })(NewpassRecover);