import React from 'react';
import { Grid, Typography, Link, Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Ok from '../../asset/images/myProfile/ok.svg'
import Add from '../../asset/images/myProfile/add.svg'
import Verify from '../../asset/images/myProfile/verify.svg'
import Logo from '../../asset/images/reputation/logo.svg'
import Cross from '../../asset/images/myProfile/cross.svg'
import { CustomerResource } from '../../services/hostConfig';
import Cliente from './../../setting/cliente'
import { getToken } from './../../setting/auth-helpers';
import InputBase from '@material-ui/core/InputBase';
import Loading from '../Loading';
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
        fontWeight: '600',
        marginBottom: 20,
    },
    lightext: {
        color: '#A3A3A3',
        font: 'normal normal normal 12px/12px Poppins',
        fontWeight: '400',
        marginTop: 5
    },
    button: {
        backgroundColor: '#ACFD00',
        padding: 15,
        font: 'normal normal normal 16px/16px Poppins',
        fontWeight: '500',
        width: 150,
        height: 50,
        border: '2px solid',
        borderColor: '#ACFD00',
        borderRadius: 15,
        cursor: 'pointer',
        textTransform: 'none',
    },
    formButton2: {
        marginTop: theme.spacing(1),
        height: 50,
        border: '1px solid',
        borderBottomColor: '#2C2C2C',
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
}));
let occupation = localStorage.getItem('occupation') === 'null' ? 'Agregue su ocupación' : localStorage.getItem('occupation');
    let gender = localStorage.getItem('gender');

    let cellphone = localStorage.getItem('cellphone') === 'string' ? 'xxx-xxxx-xxxx' : localStorage.getItem('cellphone');
    let cuit = localStorage.getItem('cuit') === 'string' ? 'xx-xxxxxxxx-x (Cuil/Cuit) o xxxxxxxx (Dni)' : localStorage.getItem('cuit');
    //let dni = localStorage.getItem('dni') === 'string' ? 'Agregue su cuit': localStorage.getItem('dni');
    let email = localStorage.getItem('email');
    let adresses = localStorage.getItem('Adresses') === '' ? 'Dirección' : localStorage.getItem('Adresses');
    let nacionality = localStorage.getItem('Nacinality') === '' ? 'Nacionalidad' : localStorage.getItem('Nacinality');
    let fecha = new Date(localStorage.getItem('birthDate'));


export default function Profile(props) {
    const classes = useStyles();
    const [profession, setProfession] = React.useState('');
    const [cuil, setCuil] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [ipPublic, setIp] = React.useState('');
    const [show, setShow] = React.useState('');
    const [active, setActive] = React.useState(false);


    const getIpClient = () => {
        try {
            fetch('https://api.ipify.org?format=json')
                .then(response => {
                    return response.json();
                }).then(response => {
                    setIp(response.ip)
                    console.log("mi ip publica " + response.ip);
                    console.log(response);
                    return response.ip;
                })

        } catch (error) {
            console.error(error);
        }
    }

    const handleProfession = (e) => {
        setProfession(e.target.value);
    }
    const handleCuil = (e) => {
        setCuil(e.target.value);
    }
    const handlePhone = (e) => {
        setPhone(e.target.value);
    }
    const handleSubmit = () => {
        let URL = CustomerResource();
        setShow(<Loading />)
        setActive(true);
        const token = getToken();
        let ipPub = getIpClient;
        let idUser = localStorage.getItem("userId")
        const dataUpdate = {
            "birthDate": localStorage.getItem('birthDate'),
            "cellphone": phone,
            "cuit": cuil,
            "phone": phone,
            "dni": cuil,
            "email": localStorage.getItem('email'),
            "id": idUser,
            "userType": "INDIVIDUAL",
            "gender": localStorage.getItem('gender'),
            "points": 1,
            "active": true,
            "ip": ipPub,
            "occupation": profession,
            "user": {
                "id": idUser,
                "login": localStorage.getItem('email')
            }
        }

        let newState = JSON.parse(JSON.stringify(dataUpdate));
        console.log(dataUpdate)
        Cliente.put(CustomerResource() + '/' + idUser, newState, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                return response.data
            }).then(response => {
                console.log(response);
                setShow('')
                setActive(false)
            })

    }
    const countChart = (data) => {
        let lengthField = data.length;
        if (lengthField === 8) {
            return 'validation/dni'
        } else {
            if (lengthField > 8) {
                return 'validation/afip'
            }
        }
    }


    
    let newGender = '';
    let goTOAfip = countChart(cuil);
    
    let options = { day: 'numeric', month: 'long', year: 'numeric' };
    const isEnabled = profession !== '' && cuil !== '' && phone !== '';

    let inProcess = (
        <Grid container xs={8} xl={8} sm={8} justify='flex-end' >
            <Typography style={{
                flexGrow: 1,
                textAlign: "left",
                fontWeight: 600,
                color: "#22C5FD",
                font: " normal normal 12px/12px Poppins",
                marginTop: 35,
                position: 'absolute',
                marginRight: 50
            }}>
                En proceso de verificación
            </Typography>
            <img src={Verify} alt='ok' width='20px' style={{ marginTop: 30, position: 'absolute' }} />
        </Grid>
    );
    let validated = (
        <Grid container xs={8} xl={8} sm={8} justify='flex-end'>
            <img src={Ok} alt='ok' width='20px' style={{ marginTop: 30, position: 'absolute' }} />
        </Grid>
    );
    let toValidateDni = (

        <Grid container xs={8} xl={8} sm={8} justify='flex-end' style={{ marginLeft: -92 }}>

            <Typography style={{
                flexGrow: 1,
                textAlign: "right",
                fontWeight: 700,
                color: "#ACFD00",
                font: " normal normal 21px/21px PoppinsBold",
                marginTop: 30,
                marginLeft: 0,
                position: 'absolute'
            }}>
                +2
            </Typography>

            <img src={Logo} alt='ok' width='20px' style={{ marginLeft: 30, marginTop: 30, position: 'absolute', cursor: 'pointer' }} />
            <Link href={goTOAfip}><img src={Add} alt='ok' width='20px' style={{ marginTop: 30, marginLeft: 75, position: 'absolute', cursor: 'pointer', zIndex: 5 }} /></Link>

        </Grid>

    );
    let toValidate = (
        <Grid container xs={8} xl={8} sm={8} justify='flex-end' style={{ marginLeft: -92 }}>

            <Typography style={{
                flexGrow: 1,
                textAlign: "right",
                fontWeight: 700,
                color: "#ACFD00",
                font: " normal normal 21px/21px PoppinsBold",
                marginTop: 30,
                marginLeft: 0,
                position: 'absolute'
            }}>
                +2
            </Typography>

            <img src={Logo} alt='ok' width='20px' style={{ marginLeft: 30, marginTop: 30, position: 'absolute', cursor: 'pointer' }} />
            <img src={Add} alt='ok' width='20px' style={{ marginTop: 30, marginLeft: 90, position: 'absolute', cursor: 'pointer', zIndex: 5 }} />

        </Grid>

    );
    let toValidateAfit = (
        <Grid container xs={8} xl={8} sm={8} justify='flex-end' style={{ marginLeft: -110 }}>

            <Typography style={{
                flexGrow: 1,
                textAlign: "right",
                fontWeight: 700,
                color: "#ACFD00",
                font: " normal normal 21px/21px PoppinsBold",
                marginTop: 30,
                marginLeft: 0,
                position: 'absolute'
            }}>
                +2
            </Typography>

            <img src={Logo} alt='ok' width='20px' style={{ marginLeft: 30, marginTop: 30, position: 'absolute' }} />
            <Link href='validation/afip'><img src={Add} alt='ok' width='20px' style={{ marginTop: 30, marginLeft: 80, position: 'absolute', cursor: 'pointer', zIndex: 5 }} /></Link>

        </Grid>

    );
    let toValidateAdress = (
        <Grid container xs={8} xl={8} sm={8} justify='flex-end' style={{ marginLeft: -92 }}>

            <Typography style={{
                flexGrow: 1,
                textAlign: "right",
                fontWeight: 700,
                color: "#ACFD00",
                font: " normal normal 21px/21px PoppinsBold",
                marginTop: 30,
                marginLeft: 0,
                position: 'absolute'
            }}>
                +2
            </Typography>

            <img src={Logo} alt='ok' width='20px' style={{ marginLeft: 30, marginTop: 30, position: 'absolute' }} />
            <Link href='validation/direccion'><img src={Add} alt='ok' width='20px' style={{ marginTop: 30, marginLeft: 75, position: 'absolute', cursor: 'pointer', zIndex: 5 }} /></Link>

        </Grid>

    );

    let errorValidate = (
        <Grid container xs={8} xl={8} sm={8} justify='flex-end'>
            <img src={Cross} alt='ok' width='15px' style={{ marginTop: 35, marginLeft: -435, position: 'absolute' }} />
            <Typography style={{
                flexGrow: 1,
                textAlign: "left",
                fontWeight: 600,
                color: "#E94342",
                font: " normal normal 12px/12px Poppins",
                marginTop: 35,
                marginRight: 25,
                position: 'absolute',
            }}>
                No se pudo verificar esta información. <Link underline='always' style={{
                    color: "#E94342",
                }}>Para saber mas clickeá aquí </Link>
            </Typography>
            <img src={Add} alt='ok' width='20px' style={{ marginTop: 32, position: 'absolute' }} />

        </Grid>
    );
    let forValidatedGender = (
        <Grid container xs={8} xl={8} sm={8} justify='flex-end'>
            <Link href='validation/dni'> <img src={Add} alt='ok' width='20px' style={{ marginTop: 30, position: 'absolute', marginLeft: -19,cursor: 'pointer', zIndex: 5 }}/></Link>
        </Grid>
    );
    let forValidatedNacinality= (
        <Grid container xs={8} xl={8} sm={8} justify='flex-end'>
             <Link href='validation/dni'><img src={Add} alt='ok' width='20px' style={{ marginTop: 30, position: 'absolute', marginLeft: -19,cursor: 'pointer', zIndex: 5 }}/></Link>
        </Grid>
    );
 


    if (gender === 'MALE') {
        newGender = 'Masculino'
    } else {
        newGender = 'Femenino'
    }

    return (
        <Grid position="static" color="transparent" style={{
            flexGrow: 1,
            border: 0,
            paddingLeft: 50,
        }} >
            {show}
            <Grid container justify="center" alignItems='flex-start' xs={12} xl={12} sm={12} style={{ marginTop: 30 }} >
                <Grid container xs={12} xl={12} sm={12}>
                    <Typography style={{
                        flexGrow: 1,
                        textAlign: "left",
                        fontWeight: 600,
                        color: "#666666",
                        font: " normal normal 12px/12px Poppins",
                    }}>
                        ¿A que te dedicas?
                    </Typography>
                </Grid>
                <InputBase
                    defaultValue={occupation}
                    fullWidth
                    id="nombre"
                    name='name'
                    inputProps={{ style: { textAlign: 'left' } }}
                    className={classes.formButton2}
                    onChange={handleProfession}
                    disabled={active}
                    required
                // onBlur={}
                />
            </Grid>
            <Grid container alignItems='flex-start' xs={12} xl={12} sm={12} style={{ marginTop: 30 }} >
                <Grid container xs={4} xl={4} sm={4}>
                    <Typography style={{
                        flexGrow: 1,
                        textAlign: "left",
                        fontWeight: 600,
                        color: "#666666",
                        font: " normal normal 12px/12px Poppins",
                    }}>
                        Género
                    </Typography>
                </Grid>
                {forValidatedGender}
                <Grid container xs={12} xl={12} sm={12}>
                    <InputBase
                        defaultValue={newGender}
                        fullWidth
                        id="nombre"
                        name='name'
                        inputProps={{ style: { textAlign: 'left' } }}
                        className={classes.formButton2}
                        disabled={active}
                        // onChange={}
                        required
                    // onBlur={}
                    />
                </Grid>

            </Grid>
            <Grid container alignItems='flex-start' xs={12} xl={12} sm={12} style={{ marginTop: 30 }} >
                <Grid container xs={4} xl={4} sm={4}>
                    <Typography style={{
                        flexGrow: 1,
                        textAlign: "left",
                        fontWeight: 600,
                        color: "#666666",
                        font: " normal normal 12px/12px Poppins",
                    }}>
                        Email
                    </Typography>
                </Grid>
                {validated}
                <Grid container xs={12} xl={12} sm={12}>
                    <InputBase
                        defaultValue={email}
                        fullWidth
                        id="nombre"
                        name='name'
                        inputProps={{ style: { textAlign: 'left' } }}
                        className={classes.formButton2}
                        disabled={active}
                        // onChange={}
                        required
                    // onBlur={}
                    />
                </Grid>
            </Grid>
            <Grid container alignItems='flex-start' xs={12} xl={12} sm={12} style={{ marginTop: 30 }} >
                <Grid container xs={4} xl={4} sm={4}>
                    <Typography style={{
                        flexGrow: 1,
                        textAlign: "left",
                        fontWeight: 600,
                        color: "#666666",
                        font: " normal normal 12px/12px Poppins",
                    }}>
                        Dirección
                    </Typography>
                </Grid>
                {toValidateAdress}
                <Grid container xs={12} xl={12} sm={12}>
                    <InputBase
                        placeholder='Dirección'
                        defaultValue={adresses}
                        fullWidth
                        id="nombre"
                        name='name'
                        inputProps={{ style: { textAlign: 'left' } }}
                        className={classes.formButton2}
                        disabled={active}
                        // onChange={}
                        required
                       // onBlur={(e)=>{
                       //   if (e.target.value.length < 8 && e.target.value.length)
                      // }}
                    />
                </Grid>
            </Grid>
            <Grid container alignItems='flex-start' xs={12} xl={12} sm={12} style={{ marginTop: 30 }} >
                <Grid container xs={4} xl={4} sm={4}>
                    <Typography style={{
                        flexGrow: 1,
                        textAlign: "left",
                        fontWeight: 600,
                        color: "#666666",
                        font: " normal normal 12px/12px Poppins",
                    }}>
                        Teléfono
                    </Typography>
                </Grid>
                {toValidate}
                <Grid container xs={12} xl={12} sm={12}>
                    <InputBase
                        defaultValue={cellphone}
                        fullWidth
                        id="nombre"
                        name='name'
                        inputProps={{ style: { textAlign: 'left' } }}
                        className={classes.formButton2}
                        onChange={handlePhone}
                        disabled={active}
                        required
                    // onBlur={}
                    />
                </Grid>
            </Grid>
            <Grid container alignItems='flex-start' xs={12} xl={12} sm={12} style={{ marginTop: 30 }} >
                <Grid container xs={4} xl={4} sm={4}>
                    <Typography style={{
                        flexGrow: 1,
                        textAlign: "left",
                        fontWeight: 600,
                        color: "#666666",
                        font: " normal normal 12px/12px Poppins",
                    }}>
                        DNI / CUIL
                    </Typography>
                </Grid>
                {toValidateDni}
                <Grid container xs={12} xl={12} sm={12}>
                    <InputBase
                        defaultValue={cuit}
                        fullWidth
                        id="nombre"
                        name='name'
                        inputProps={{ style: { textAlign: 'left' } }}
                        className={classes.formButton2}
                        onChange={handleCuil}
                        disabled={active}
                        required
                    // onBlur={}
                    />
                </Grid>
            </Grid>
            <Grid container alignItems='flex-start' xs={12} xl={12} sm={12} style={{ marginTop: 30 }} >
                <Grid container xs={4} xl={4} sm={4}>
                    <Typography style={{
                        flexGrow: 1,
                        textAlign: "left",
                        fontWeight: 600,
                        color: "#666666",
                        font: " normal normal 12px/12px Poppins",
                    }}>
                        Nacionalidad
                    </Typography>
                </Grid>
                {forValidatedNacinality}
                <Grid container xs={12} xl={12} sm={12}>
                    <InputBase
                        defaultValue={nacionality}
                        fullWidth
                        id="nombre"
                        name='name'
                        inputProps={{ style: { textAlign: 'left' } }}
                        className={classes.formButton2}
                        disabled={active}
                        // onChange={}
                        required
                    // onBlur={}
                    />
                </Grid>
            </Grid>
            <Grid container alignItems='flex-start' xs={12} xl={12} sm={12} style={{ marginTop: 30 }} >
                <Grid container xs={4} xl={4} sm={4}>
                    <Typography style={{
                        flexGrow: 1,
                        textAlign: "left",
                        fontWeight: 600,
                        color: "#666666",
                        font: " normal normal 12px/12px Poppins",
                    }}>
                        Fecha de Nacimiento
                    </Typography>
                </Grid>
                {toValidate}
                <Grid container xs={12} xl={12} sm={12}>
                    <InputBase

                        fullWidth
                        id="nombre"
                        defaultValue={fecha.toLocaleDateString("es-ES", options)}
                        name='name'
                        inputProps={{ style: { textAlign: 'left' } }}
                        className={classes.formButton2}
                        disabled={active}
                        // onChange={}
                        required
                    // onBlur={}
                    />
                </Grid>
            </Grid>
            <Grid container justify='center' xs={12} xl={12} sm={12} style={{ marginTop: 30, marginBottom: 20 }}>
                <Typography style={{
                    flexGrow: 1,
                    textAlign: "left",
                    fontWeight: 400,
                    color: "#A3A3A3",
                    font: " normal normal 14px/14px Poppins"
                }}>
                    ¿Necesitás editar un dato? Contactate con  <Link underline='never' style={{
                        color: "#ACFD00",
                    }}>nuestro soporte </Link>
                </Typography>
            </Grid>
            <Grid container justify='left' xs={12} xl={12} sm={12} style={{ marginTop: 30, marginBottom: 20 }}>
                <Button
                    className={classes.button}
                    disabled={!isEnabled}
                    onClick={handleSubmit}
                >
                    Guardar
                </Button>

            </Grid>
        </Grid >)
}

