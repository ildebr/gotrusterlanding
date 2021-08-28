import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from "@material-ui/core/styles";
import Eye from '../../asset/images/myProfile/eye.svg'
import UnEye from '../../asset/images/myProfile/uneye.svg'
import Ok from '../../asset/images/myProfile/ok.svg'
import { AccountChancePass } from './../../services/hostConfig';
import { getToken } from './../../setting/auth-helpers';
import cliente from "./../../setting/cliente";
import auth from './../../setting/auth';
const { localStorage } = global.window;

const useStyles = makeStyles(theme => ({
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
    formButton: {
        marginTop: theme.spacing(1),
        height: 50,
        border: '1px solid',
        borderColor: '#2C2C2C',
        borderTop: 'red',
        borderLeft: 'red',
        borderRight: 'red',
        color: "white",
        font: 'normal normal normal 22px/22px Poppins',
        "&:hover": {
            border: '2px solid',
            borderTop: 'red',
            borderLeft: 'red',
            borderRight: 'red',
            borderColor: '#ACFD00',
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
    inputTitle: {
        color: '#ACFD00',
        font: 'normal normal normal 19px/19px Poppins',
        fontWeight: 600,
        marginBottom: 20,
    },
    lightext: {
        color: '#A3A3A3',
        font: 'normal normal normal 12px/12px Poppins',
        fontWeight: '400',
        marginTop: 5
    },
    lightextEx: {
        color: '#E94342',
        font: 'normal normal normal 12px/12px Poppins',
        fontWeight: '400',
        marginTop: 5
    },
    button: {
        backgroundColor: '#ACFD00',
        cursor: 'pointer',
        padding: 15,
        font: 'normal normal normal 16px/16px Poppins',
        fontWeight: '500',
        height: 50,
        border: '2px solid',
        borderColor: '#ACFD00',
        borderRadius: 15,
        textTransform: 'none',
    }
}));


const PassWord = () => {
    const [password, setPassword] = React.useState('');
    const [password2, setPassword2] = React.useState('');
    const [passwordRep, setPasswordRep] = React.useState('');
    const [error, setError] = React.useState('');
    const [textError, setTexError] = React.useState('');
    const [sent, setSent] = React.useState(false);
    const [passError, setPassError] = React.useState('');
    const [incompletePassError, setncompletePassError] = React.useState('');
    const [active, setActive] = React.useState(false);
    const [maxPass, setMaxPass] = React.useState('');
    const [on, setOn] = React.useState(false);


    const classes = useStyles();
    const handlePass = (e) => {
        setPassword(e.target.value)
    }
    const handlePass2 = (e) => {
        setPasswordRep(e.target.value)
    }

    const handlePassRep = (e) => {
        setPassword2(e.target.value)
    }
    const securityPassword = e => {
        const targetVal = e.target.value;
        const longitudAct = targetVal.length;
        let security = false;
        let securityUp = 0;
        let securityLower = 0;
        let securityNumber = 0;
        let securityLenght = false;
        var i = 0;
        var character = '';
        console.log(longitudAct);
        setMaxPass(longitudAct);
        if (longitudAct < 8) {
            securityLenght = false;
        } else {

            while (i <= targetVal.length) {
                character = targetVal.charAt(i);
                if (!isNaN(character * 1)) {
                    securityNumber++;
                    console.log('character is numeric ' + character);
                } else {
                    if (character == character.toUpperCase()) {
                        securityUp++;
                        console.log('upper case true ' + character);
                    }
                    if (character == character.toLowerCase()) {
                        securityLower++;
                        console.log('lower case true ' + character);
                    }
                }
                i++;
            }

        }
        if (securityNumber > 0
            && securityUp > 0
            && securityLower > 0) {
            security = true
        } else {
            security = false;
        }

        console.log("total seguridad " + security)
        return security

    }


    const handleSubmit = e => {
        setActive(true);

        const newPass = {
            "currentPassword": password,
            "newPassword": password2
        }
        console.log(newPass);
        if ((password === '') || (password2 === '') || (passwordRep !== password2)) {
            setError(true);
            setPassError(true);
            setTexError('*Debe ingresa la contraseña en ambos campos');
        } else {
            /*this.setState({
                 show: true
             })*/

            const token = getToken();
            console.log(token);
            cliente.post(AccountChancePass(), newPass, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            }).then(response => {
                console.log(response.status)
                if (response.status === 200) {
                    /*this.setState({
                        sent: true,
                        active: true,
                        show: false
                    })*/
                    setActive(true)
                } else {
                    /*this.setState({
                        sent: false,
                        active: false,
                        show: true
                    })*/
                    setActive(false)
                }

            }).catch(error => console.error('Error:', error));;

        }
    }

    let $incompletePassError = incompletePassError ? '*La contraseña debe contener 8 caracteres mínimo' : '';
    let $incompletePassErrorEx = incompletePassError ? '*una minúscula, una mayúscula y un número' : '';
    let $passError = passError ? '*las contraseña no coinciden' : '';
    let $onShow = on ? Eye : UnEye;
   
    const isEnabled = password !== '' && password2 !== ''
        && passwordRep !== '';

    return (
        <Grid position="static" color="transparent" style={{
            flexGrow: 1,
            border: 0,
            paddingLeft: 50,
        }} >
            <Grid container justify='flex-start'>
                <Grid container>
                    <Grid container xs={11} xl={11} sm={11} >
                        <Typography className={classes.inputTitle}>
                            Contraseña
                        </Typography>
                    </Grid>
                    <Grid xs={1} xl={1} sm={1}>
                        <img src={$onShow} alt='eye' style={{ marginTop: 60, position: 'absolute' }} />
                    </Grid>
                </Grid>
                <Grid container >
                    <InputBase
                        fullWidth
                        type="password"
                        id="password"
                        name="password"
                        disabled={active}
                        inputProps={{ style: { textAlign: 'left' }, type: "password", minlength: 8 }}
                        className={classes.formButton}
                        onChange={handlePass}
                        onBlur={(e) => {
                            if (securityPassword(e) == false) {
                                setncompletePassError(true);
                                setPassError(true)
                            } else if (this.securityPassword(e) == true) {
                                setncompletePassError(false);
                                setPassError(false)
                            }
                        }}

                        required
                    />
                </Grid>
                <Grid container xs={12} xl={12} sm={12} >
                    <Typography className={classes.lightextEx}>
                        {$incompletePassError}{$incompletePassErrorEx}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container justify='flex-start' style={{ marginTop: 100 }}>
                <Grid container>
                    <Grid container xs={12} xl={12} sm={12} >
                        <Typography className={classes.inputTitle}>
                            Cambiar contraseña
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container xs={11} xl={11} sm={11} style={{ marginTop: 30 }}>
                    <Typography className={classes.lightext}>
                        Nueva contraseña
                    </Typography>
                </Grid>
                <Grid container xs={1} xl={1} sm={1} >
                    <img src={$onShow} alt='uneye' style={{ marginTop: 65, marginLeft: 28, position: 'absolute' }} />
                </Grid>
                <Grid container >
                    <InputBase
                        fullWidth
                        type="password"
                        id="password"
                        name="password"
                        disabled={active}
                        inputProps={{ style: { textAlign: 'left' }, type: "password", minlength: 8 }}
                        className={classes.formButton}
                        onChange={handlePass2}
                        onBlur={(e) => {
                            if (securityPassword(e) == false) {
                                setncompletePassError(true);
                                setPassError(true)
                            } else if (this.securityPassword(e) == true) {
                                setncompletePassError(false);
                                setPassError(false)
                            }
                        }}
                        required
                    />
                </Grid>
                <Grid container justify="flex-start" style={{ marginTop: 10 }}>
                    <img src={Ok} alt='ok' />
                </Grid>
                <Grid container xs={12} xl={12} sm={12} >
                    <Typography className={classes.lightextEx}>
                        {$incompletePassError}{$incompletePassErrorEx}
                    </Typography>
                </Grid>
                <Grid container xs={11} xl={11} sm={11} style={{ marginTop: 30 }}>
                    <Typography className={classes.lightext}>
                        Repetir contraseña
                    </Typography>
                </Grid>
                <Grid container xs={1} xl={1} sm={1} >
                    <img src={$onShow} alt='uneye' style={{ marginTop: 65, marginLeft: 28, position: 'absolute' }} />
                </Grid>
                <Grid container >
                    <InputBase
                        fullWidth
                        type="password"
                        id="password"
                        name="password"
                        disabled={active}
                        inputProps={{ style: { textAlign: 'left' }, type: "password", minlength: 8 }}
                        className={classes.formButton}
                        onChange={handlePassRep}
                        onBlur={(e) => {
                            if (password2 !== passwordRep) {
                                setPassError(true)
                            } else if (this.securityPassword(e) == true) {
                                setPassError(false)
                            }
                        }}
                        required
                    />
                </Grid>
                <Grid container justify="flex-start">
                    <img src={Ok} alt='ok' style={{ marginTop: 10 }} />
                </Grid>
                <Grid container xs={12} xl={12} sm={12} >
                    <Typography className={classes.lightextEx}>
                        {$passError}
                    </Typography>
                </Grid>
                <Grid container xs={12} xl={12} sm={12} style={{ marginTop: 30, marginBottom: 30 }}>
                    <Button className={classes.button} disabled={!isEnabled} onClick={handleSubmit}>
                        Cambiar contraseña
                    </Button>
                </Grid>
            </Grid>
        </Grid >)
}
export default PassWord;
