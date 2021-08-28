import React, { Component } from 'react'
import { CssBaseline, Grid, Box, Container, Typography, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import NavBar from '../../components/navBar/navbar.jsx';
import Email from '../../asset/images/emailVerification/Email.svg';
import { AccountActivate } from './../../services/hostConfig';
import { LoopCircleLoading } from 'react-loadingg';
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
        fontFamily: 'PoppinsBold',
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
        font: 'normal normal normal 18px/24px Poppins',
        height: 50,
        borderRadius: 15,
        textTransform: 'none',
        marginTop: theme.spacing(3),
    },
    formButton: {
        marginTop: theme.spacing(1),
        backgroundColor: '#ACFD00',
        height: 50,
        width: 300,
        border: '1px solid',
        borderColor: '#999999',
        borderRadius: 15,
        color: "black",
        font: 'normal normal normal 16px/22px Poppins',
    },
    formButtonEx: {
        marginTop: theme.spacing(1),
        backgroundColor: 'black',
        height: 50,
        width: 300,
        border: '1px solid',
        borderColor: '#999999',
        borderRadius: 15,
        color: "white",
        font: 'normal normal normal 16px/22px Poppins',
    },
    formButton2: {
        marginTop: theme.spacing(5),
        backgroundColor: '#ACFD00',
        height: 60,
        width: 300,
        border: '1px solid',
        borderColor: '#999999',
        borderRadius: 15,
        color: "black",
        font: 'normal normal normal 16px/22px Poppins',
    },
    formButton3: {
        marginTop: theme.spacing(5),
        backgroundColor: '#ACFD00',
        height: 60,
        width: 300,
        border: '1px solid',
        borderColor: '#999999',
        borderRadius: 15,
        color: "black",
        font: 'normal normal normal 16px/22px Poppins',
    },
});

class EmailVerificationActivate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            windowWidth: window.innerWidth,
            show: false,
            active:false,
            enabledComponent: false,
            key: '',
            text1: 'Activá la cuenta para comenzar a trabajar.',
            text2: 'Activar cuenta',

        };
    }

    handleResize = (e) => {
        this.setState({ windowWidth: window.innerWidth });
    };
    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
        let url = window.location.search;
        this.setState({ key: url })
        localStorage.setItem('key', url)
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let clave = localStorage.getItem("key");
        this.setState({
            show: true,
            enabledComponent: true
        })
        fetch(AccountActivate() + clave, {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => {
            console.log(response)
            this.setState({
                show: false,
                active:true,
                enabledComponent: false,
                text1: 'Cuenta Activada',
                text2: 'Ir a inicio'
            })
            console.log(this.state.show)
        })
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
        let $show = this.state.show;
        let $wait = '';
        if ($show) {
            $wait = (<LoopCircleLoading size='large' color='#ACFD00
            '/>);
        }

        return (
            <div style={{ backgroundColor: '#000000' }}>

                <Grid container className={classes.root} component="main" maxWidth="md">
                    <Container component="main" maxWidth="md" >

                        <Container component="main" maxWidth="md" style={{ alignItems: 'center' }} >
                            <Box className={classes.authWrapper}   >
                                <CssBaseline />

                                <div className={classes.paper}>

                                    {width > 550 ?
                                        <Grid justify='center' container style={{ marginTop: 180 }}>
                                            <Grid container justify='center' >
                                                <img src={Email} alt='email' />
                                            </Grid>
                                            <Grid container justify='center'>
                                                <Typography className={classes.paperWelcome} style={{ maxWidth: 450 }}>
                                                    Estas a un paso comenzar.
                                                </Typography>
                                            </Grid>
                                            <Grid container justify='center'>
                                                <Typography className={classes.paperWelcome1} style={{ maxWidth: 450 }}>
                                                    {$wait}
                                                    {this.state.text1}
                                                </Typography>
                                            </Grid>
                                            <Grid container justify='center'>
                                                <form

                                                    onSubmit={this.handleSubmit}
                                                    noValidate>
                                                    <Button
                                                        type="submit"
                                                        disabled={this.state.enabledComponent}
                                                        className={this.state.show ? classes.formButtonEX : classes.formButton}
                                                        href={this.state.active ? '/' : ''}    
                                                    >
                                                        {this.state.text2}
                                                    </Button>
                                                </form>
                                            </Grid>
                                        </Grid>
                                        :
                                        <Grid container>
                                            <Grid item container className={classes.root} component="main" maxWidth="md" style={{ marginTop: -18 }}>
                                                <Container item container component="main" maxWidth='md'  >
                                                    <Grid container item xs={12} className={classes.paperContainer} >
                                                        <NavBar active={0} />
                                                    </Grid>
                                                </Container>
                                            </Grid>
                                            <Grid justify='center' container>
                                                <Grid container justify='center'>
                                                    <img src={Email} alt='email' />
                                                </Grid>
                                                <Grid container justify='center'>
                                                    <Typography className={classes.paperWelcome} style={{ maxWidth: 450 }}>
                                                        Estas a un paso comenzar.
                                                    </Typography>
                                                </Grid>
                                                <Grid container justify='center'>
                                                    <Typography className={classes.paperWelcome1} style={{ maxWidth: 450 }}>
                                                        {$wait}
                                                        {this.state.text1}
                                                    </Typography>
                                                </Grid>

                                                <Grid container justify='center'>
                                                    <form

                                                        onSubmit={this.handleSubmit}
                                                        noValidate>
                                                        <Button
                                                            type="submit"
                                                            className={this.state.show ? classes.formButtonEX : classes.formButton2}                                                           
                                                            disabled={this.state.enabledComponent}
                                                            href={this.state.active ? '/' : ''}
                                                        >
                                                            {this.state.text2}
                                                        </Button>
                                                    </form>
                                                </Grid>
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
export default withStyles(styles, { withTheme: true })(EmailVerificationActivate);