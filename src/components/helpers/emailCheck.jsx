import React, {Component} from 'react';
import ClassNames from "classnames";
import {withStyles} from "@material-ui/core/styles";
import {Typography, FormControl, CircularProgress, InputAdornment, TextField, OutlinedInput} from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/Error';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import InputBase from '@material-ui/core/InputBase';
import Swal from "sweetalert2";
import {isEmpty} from "lodash";
import auth from './../../setting/auth';
import {getToken, deleteToken} from './../../setting/auth-helpers';
import {UserResource, CustomerResource} from './../../services/hostConfig';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";

const {localStorage} = global.window;
const styles = theme => ({
    root: {
        display: 'flex',
    },
    boxCaptureControl: {
        width: '100%',
        marginBottom: '15px',
        position: 'relative',
        height: '60px',

    },
    label: {
        font: 'normal normal bold 18px/24px Roboto',
        color: '#707070',
        marginBottom: '20px'
    },
    boxCaptureInput: {
        marginTop: theme.spacing(1),
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
        height: '60px',
        '& > .MuiOutlinedInput-input': {
            height: '40px'
        }
    },
    iconSuccess: {
        fill: '#ACFD00',
        position: 'absolute',
        top: '25px',
        right: '8px',
    },
    iconError: {
        fill: 'red',
        position: 'absolute',
        top: '25px',
        right: '8px',
    },
    boxCaptureInput2: {
        marginTop: theme.spacing(1),
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
        height: '60px',
        '& > .MuiOutlinedInput-input': {
            height: '40px'
        }
    },

});


class EmailCheck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typingTimeout: 0,
            loading: false,
            success: false,
            error: false,

        };
    }

    inputChange = (e) => {
        e.preventDefault();

        const self = this;

        if (self.state.typingTimeout) {
            self.setState({
                typing: true,
            });
            clearTimeout(self.state.typingTimeout);
        }

        if (isEmpty(e.target.value)) {
            self.setState({
                loading: false,
                success: false,
                error: false,
            })
        }

        self.setState({
            typing: false,
            loading: true,
            success: false,
            error: false,
            typingTimeout: setTimeout(function () {
                if (!isEmpty(e.target.value)) {

                    self.checkEmailServer(e.target.value)
                }
                self.setState({
                    loading: false,
                });
            }, 5000)
        });


    }
    formatEmail = email => {
        let format = '0';

        for (let index = 0; index < email.length; index++) {
            const element = email[index];

            if (element === '@') {
                format = '1';
                break;
            } else {
                format = '0';
            }
        }
        return format;
    }

    checkEmailServer = (email) => {
        let name = 'administrator';
        let pass = 'Truster2021App';
        let format = this.formatEmail(email);
        console.log("Aqui marca", format)
        if (format === '1') {
            auth.login(name, pass)
                .then(() => {
                    const token = getToken();
                    fetch(CustomerResource(), {
                        method: 'get',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                        }
                    }).then(response => {

                        console.log(response)
                        console.log(response.body)
                        // debugger
                        return response.json();

                    }).then(response => {
                        console.log(response.length)
                        let thisEmail = '';
                        console.log(response.length);
                        if (response.length !== 0) {
                            for (let index = 0; index < response.length; index++) {
                                console.log(response.length);
                                const element = response[index].email;
                                console.log("Este email es que estoy buscando " + element)
                                if (element === email) {
                                    thisEmail = '1';
                                    localStorage.setItem("thisEmail", thisEmail)
                                    localStorage.setItem("Email", '')
                                    break;
                                } else {
                                    thisEmail = '0';
                                    localStorage.setItem("thisEmail", thisEmail)
                                    localStorage.setItem("Email", email)
                                }

                            }
                        } else {
                            thisEmail = '0';
                            localStorage.setItem("thisEmail", thisEmail)
                            localStorage.setItem("Email", email)
                        }

                        return thisEmail;
                    }).then(response => {
                        if (response === '0') {
                            this.setState({
                                loading: false,
                                success: true,
                                error: false,
                            })
                            this.props.changeEmail(true, email);
                            localStorage.setItem("formato", '1');
                            //  localStorage.removeItem("id_token");
                        } else {
                            this.setState({
                                loading: false,
                                success: false,
                                error: true,
                            })
                            this.props.changeEmail(false, null);
                            localStorage.removeItem("id_token");
                        }
                    })
                })///
        } else {
            localStorage.setItem("formato", '0');
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Formato de email invalido',
                confirmButtonColor: '#3085d6',
                backdrop: `
    rgba(0,0,123,0.4)
    url("http://localhost:3000/static/media/logo.8e865fea.svg")
    left top
    no-repeat
  `,
                footer: 'Truster App',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })

        }
    }

    render() {
        const {classes, inputChange, width} = this.props;
        const {loading, success, error} = this.state;

        {
            if (width > 550) {
                return (
                    <FormControl className={classes.boxCaptureControl} variant="outlined">

                        <InputBase
                            placeholder="Email"
                            fullWidth
                            id="email"
                            name='email'
                            variant="outlined"
                            className={ClassNames(classes.boxCaptureInput, {successInput: success})}
                            onBlur={(e) => {
                                this.inputChange(e)
                            }}
                            inputProps={{style: {textAlign: 'center'}, type: "text", minlength: 8}}
                            required/>
                        {loading && (

                            <Dialog open={loading}>
                                <DialogTitle style={{textAlign:'center'}}>Estamos verificando la disponibilidad de tu mail</DialogTitle>
                                <div style={{
                                    padding: '20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <CircularProgress size={30}/>
                                </div>


                            </Dialog>
                        )}
                        {success && (<CheckCircleIcon className={classes.iconSuccess}/>)} {error && (
                        <ErrorIcon className={classes.iconError}/>)}
                    </FormControl>
                )
            } else {
                return (
                    <FormControl className={classes.boxCaptureControl} variant="outlined">

                        <InputBase
                            placeholder="Email"
                            fullWidth
                            id="email"
                            name='email'
                            variant="outlined"
                            className={ClassNames(classes.boxCaptureInput2, {successInput: success})}
                            onBlur={(e) => {
                                this.inputChange(e)
                            }}
                            inputProps={{style: {textAlign: 'left'}, type: "text", minlength: 8}}
                            required/>
                        {loading && (<Dialog open={loading}>
                            <DialogTitle style={{textAlign:'center'}}>Estamos verificando la disponibilidad de tu mail</DialogTitle>
                            <div style={{
                                padding: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <CircularProgress size={30}/>
                            </div>


                        </Dialog>)}
                        {success && (<CheckCircleIcon className={classes.iconSuccess}/>)} {error && (
                        <ErrorIcon className={classes.iconError}/>)}
                    </FormControl>
                )
            }
        }
    }
}

export default withStyles(styles, {withTheme: true})(EmailCheck);
