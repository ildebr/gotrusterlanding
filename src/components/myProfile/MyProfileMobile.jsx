import React, {useEffect, useState}from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Link, Button } from '@material-ui/core';
import ReputationImg from '../../asset/images/reputation/perfil.jpg'
import Ok from '../../asset/images/myProfile/ok.svg'
import Add from '../../asset/images/myProfile/add.svg'
import Verify from '../../asset/images/myProfile/verify.svg'
import InputBase from '@material-ui/core/InputBase';
import Logo from '../../asset/images/reputation/logo.svg'
import Cliente from './../../setting/cliente'
import { getToken } from './../../setting/auth-helpers';

import {Fileload, CustomerResource, AddressOperations, ValidatioDetailByCustomer} from "../../services/hostConfig";
import Loading from '../Loading';
import { LoopCircleLoading } from "react-loadingg";
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
        textTransform: 'none',
    },
    formButton2: {
        marginTop: theme.spacing(1),
        height: 40,

        border: '1px solid',
        borderBottomColor: '#2C2C2C',
        fontWeight: 500,
        borderTop: 'red',
        borderRight: 'red',
        borderLeft: 'red',
        color: "white",
        font: 'normal normal normal 16px/16px Poppins',
        "&:hover": {
            borderTop: 'red',
            borderRight: 'red',
            borderLeft: 'red',
            border: '2px solid',
            borderColor: '#ACFD00',
        },
    },

    input: {
        '&::placeholder': {
            textOverflow: 'ellipsis !important',
            color: 'blue'
        }
    }
}));


function waiter() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 7000);
    });
}
export default function MyProfileMobile(props) {
    const [profession, setProfession] = React.useState('');
    const [cuil, setCuil] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [ipPublic,setIp] = React.useState('');
    const [show, setShow] = React.useState('');
    const [active, setActive] = React.useState(false);
    const [file, setFile] = useState(null)
    const [user, setUser] = useState(null)
    const [fechaCreate, setFechaCreate] = useState(false);    
    const [loading, setLoading] = useState(false);
    
    ////
    const [dni, setDni] = React.useState('')   
    const [phon, setPhon] = React.useState('')
    const [adre, setAdresses] = React.useState('')
    const [cui, setCui] = React.useState('')
    const [selfie, setSelfie] = React.useState('')
    const [loadAdre, setLoadAdre]= React.useState('')
    const [loadNac, setLoadNac]= React.useState('')

     const onFileChange = (event) => {
        let fileName = event.target.files[0].name
        const reader = new FileReader();
        let _file = event.target.files[0];

        setLoading(true)
        reader.onload = async function (event) {
            setFile(event.target.result)
            Cliente.post(Fileload(), {
                    'file': event.target.result,
                    'fileName': fileName,
                    'user': user,
                    'destination': 'perfil'
                }
            )
            //     .then(() => {
            //         getImages()
            //     }
            // )
            await waiter()
          
            window.location.reload()
        };

        reader.readAsDataURL(_file);

    }
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
    useEffect(() => {
       setUser(localStorage.getItem('userLogin'))
        handleLoadDataAdresses();        
        loadValidation();  
        var fecha = new Date(localStorage.getItem('createDate'));
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        setFechaCreate(fecha.toLocaleDateString("es-ES", options));    

    }, [ file, user]);

    const handleProfession = (e) => {
        setProfession(e.target.value);
    }
    const handleCuil = (e) => {
        setCuil(e.target.value);
    }
    const handleDni = (e) => {
        setDni(e.target.value);
        localStorage.setItem('dni', e.target.value)
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
        let dni = cuil ;
        let idUser = localStorage.getItem("userId")
        const dataUpdate = {
            "id": idUser,
            "dni":dni,
            "email":"iportuondo37@gmail.com",
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
    const addDefaultPofileImage = e => {
        e.target.src = ReputationImg
    }

    const handleLoadDataAdresses = (e) => {

        const token = getToken();
        let adress = '';
        let nacional = '';
        Cliente.get(AddressOperations(), {
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
                response.forEach(function (currentValue, index, arr) {
                    adress += currentValue.streetName + ' ' + currentValue.streetNumber;
                    nacional += currentValue.country;

                });

                setLoadAdre(adress)
                setLoadNac(nacional)

            })
    }
    function evaluateStatus(estado) {
        let validations='';       
        if(estado == "PENDING" ){
            validations=(
                <Grid container xs={1} xl={1} sm={1} justify='flex-end' style={{ marginLeft: -35 }} >
            
                <Typography style={{
                     flexGrow: 1,
                     textAlign: "right",
                     fontWeight: 700,
                     color: "#ACFD00",
                     font: " normal normal 21px/21px PoppinsBold",
                     marginTop: 30,
                     marginRight: 20,
                     position: 'absolute'
                 }}>
                     +2
                 </Typography>
                 <img src={Logo} alt='ok' width='20px' style={{ marginLeft: 3, marginTop: 30, position: 'absolute' }} />
                 <Link href={goTOAfip}><img src={Add} alt='ok' width='20px' style={{ marginTop: 30, position: 'absolute', marginLeft: 15,cursor:'pointer', zIndex: 5  }}  /></Link>
                 
             </Grid>
        
            );
        }
        if ( estado== "APPROVED"){
            validations = (
                <Grid container xs={1} xl={1} sm={1} justify='flex-end'>
                <img src={Ok} alt='ok' width='20px' style={{ marginTop: 30, position: 'absolute' }} />
            </Grid>
            );
        }
        if ( estado == "PROCESSING"){
            validations =(
                <Grid container xs={12} xl={12} sm={12} justify='flex-start' style={{marginBottom: 25}}>
                <Grid container xs={11} xl={11} sm={11} justify='flex-start'>
                    <Typography style={{
                        flexGrow: 1,
                        textAlign: "left",
                        fontWeight: 600,
                        color: "#22C5FD",
                        font: " normal normal 12px/12px Poppins",
                        marginTop: 15,
                        position: 'absolute',
                        marginRight: 50
                    }}>
                        En proceso de verificación
                    </Typography>
                </Grid>
                <Grid container xs={1} xl={1} sm={1} justify='flex-end'>
                    <img src={Verify} alt='ok' width='20px' style={{ marginTop: 10, position: 'absolute' }} />
                </Grid>
    
            </Grid>
              )
        }
        if (estado == "REJECTED"){
            validations=(  <Grid container justify='flex-start' xs={12} xl={12} sm={12} style={{ marginTop: 15, marginBottom: 5 }}>
            <Grid container xs={10} xl={10} sm={10} justify='flex-start'>
                <Typography style={{
                    flexGrow: 1,
                    textAlign: "left",
                    fontWeight: 600,
                    color: "#E94342",
                    font: " normal normal 12px/12px Poppins",
                    marginRight: 25,
                }}>
                    No se pudo verificar esta información. <Link underline='always' style={{
                        color: "#E94342",
                    }}>Para saber mas clickeá aquí </Link>
                </Typography>
            </Grid>
            <Grid container xs={2} xl={2} sm={2} justify='flex-end'>
                <img src={Add} alt='ok' width='20px' />
            </Grid>
        </Grid>);
            
        } 
        console.log("Entre 2")
       return validations;
    }
    function loadValidation() {
        const token = getToken();
        const idCustomer = localStorage.getItem("customerId")
        Cliente.get(ValidatioDetailByCustomer() + '/' + idCustomer, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                return response.data
            }).then(response => {
              
                console.log("validation", response)
                for (let index = 0; index < response.length; index++) {
                    const element = response[index].validationName;  
                    console.log("Este es el elemento ",element)                   
                    if (element == "DNI") {
                       
                        setDni(evaluateStatus(response[index].validationStatus));
                    }
                    if (element == "ADDRESS") {
                        
                        setAdresses(evaluateStatus(response[index].validationStatus));
                    }
                    if (element == "SELFIE") {
                        setSelfie(evaluateStatus(response[index].validationStatus));
                       
                    }
                    if (element == "CELLPHONE") {
                       
                        setPhon(evaluateStatus(response[index].validationStatus))
                    }
                    if (element == "CUIL") {
                       
                        setCui(evaluateStatus(response[index].validationStatus));
                    }
                    
                }
               
            })
    } 

    let occupation = localStorage.getItem('occupation') === 'null' ? 'Agregue su ocupación' : localStorage.getItem('occupation');
    let gender = localStorage.getItem('gender');

    let cellphone = localStorage.getItem('cellphone') === 'string' ? '(xxx)-(xxxx-xxxx)' : localStorage.getItem('cellphone');
    let cuit1 = localStorage.getItem('cuit') === 'string' ? 'xx-xxxxxxxx-x  ' : localStorage.getItem('cuit');

    let email = localStorage.getItem('email');
    let dnipro = localStorage.getItem('dni') === 'string' ? ' xxxxxxxx ' : localStorage.getItem('dni');

    let adresses = localStorage.getItem('Adresses') === '' ? 'Dirección' : localStorage.getItem('Adresses');
    let nacionality = localStorage.getItem('Nacinality') === '' ? 'Nacionalidad' : localStorage.getItem('Nacinality');
    let newGender = '';
    let goTOAfip = countChart(cuil);
    let fecha = new Date(localStorage.getItem('birthDate'));
    let options = { day: 'numeric', month: 'long', year: 'numeric' };
    const isEnabled = profession !== '' && cuil !== '' ;


  
    let validated = (
        <Grid container xs={1} xl={1} sm={1} justify='flex-end'>
            <img src={Ok} alt='ok' width='20px' style={{ marginTop: 30, position: 'absolute' }} />
        </Grid>
    );
    let toValidate = (
        <Grid container xs={1} xl={1} sm={1} justify='flex-end' style={{ marginLeft: -35 }} >
            
           <Typography style={{
                flexGrow: 1,
                textAlign: "right",
                fontWeight: 700,
                color: "#ACFD00",
                font: " normal normal 21px/21px PoppinsBold",
                marginTop: 30,
                marginRight: 20,
                position: 'absolute'
            }}>
                +2
            </Typography>
            <img src={Logo} alt='ok' width='20px' style={{ marginLeft: 3, marginTop: 30, position: 'absolute' }} />
            <img src={Add} alt='ok' width='20px' style={{ marginTop: 30, position: 'absolute', marginLeft: 35, }}  />
            
        </Grid>
    );

    if (gender === 'MALE') {
        newGender = 'Masculino'
    } else {
        newGender = 'Femenino'
    }
    const namefull = localStorage.getItem("nombre") + ' ' + localStorage.getItem("apellido");
    const classes = useStyles();
    return (
        <Grid position="static" color="transparent" style={{
            flexGrow: 1,
            border: 0,
            marginTop: -150,
        }} > 
            <Grid container justify="center" alignItems='flex-start' xs={12} xl={12} sm={12} >
                <Grid container justify="flex-start" xs={7} xl={7} sm={7} style={{ paddingRight: 20 }}>
                    <Grid container xs={12} xl={12} sm={12}>
                        <Typography style={{
                            flexGrow: 1,
                            marginTop: 20,
                            textAlign: "left",
                            fontWeight: "700",
                            color: "#FFFFFF",
                            font: " normal normal 23px/23px PoppinsBold",
                        }}>
                            {namefull}
                        </Typography>
                    </Grid>
                    <Grid container xs={12} xl={12} sm={12}>
                        <Typography style={{
                            flexGrow: 1,
                            marginTop: 10,
                            textAlign: "left",
                            fontWeight: "500",
                            color: "#ACFD00",
                            font: " normal normal 16px/16px Poppins",
                        }}>
                            {occupation}
                        </Typography>
                    </Grid>
                    <Grid container xs={12} xl={12} sm={12}>
                        <Typography style={{
                            flexGrow: 1,
                            marginTop: 10,
                            textAlign: "left",
                            fontWeight: "400",
                            color: "#777777",
                            font: " normal normal 13px/13px Poppins",
                        }}>
                            Miembro Truster desde {fechaCreate}
                        </Typography>
                    </Grid>
                    {show}
                </Grid>
                <Grid container justify="flex-end" xs={5} xl={5} sm={5} style={{ paddingLeft: 20 }}>
                {loading ? <LoopCircleLoading size='large' color='#ACFD00' />
                            :
                            

                    <Grid container xs={12} xl={12} sm={12}>
                        <img src={'https://truster-bucket.s3.us-west-2.amazonaws.com/images/perfil/' + localStorage.getItem('userLogin') + '.png'} alt='reputationimg' width='100px' height='100px' style={{
                                borderRadius: '50%',                                
                                objectFit: 'cover'
                            }}
                            onError={addDefaultPofileImage} 
                            />
                    </Grid>
                    
                    }
                    <Grid container xs={12} xl={12} sm={12} component="label">
                         <input
                            id="file"
                            name="file"
                            type="file"
                            hidden
                            onChange={(e) => onFileChange(e)}
                        />
                        <Typography style={{
                            flexGrow: 1,
                            marginTop: 10,
                            textAlign: "center",
                            fontWeight: "400",
                            color: "#A3A3A3",
                            font: " normal normal 12px/12px Poppins",
                        }}>
                            editar
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container alignItems='flex-start' xs={12} xl={12} sm={12} style={{ marginTop: 30 }} >
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
                <Grid container xs={11} xl={11} sm={11}>
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
                {validated}
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
                <Grid container xs={11} xl={11} sm={11}>
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
                <Grid container xs={11} xl={11} sm={11}>
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
                {adre}
                <Grid container xs={12} xl={12} sm={12}>
                    <InputBase
                        value={loadAdre}
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
                <Grid container xs={11} xl={11} sm={11}>
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
                {phon}
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
                <Grid container xs={11} xl={11} sm={11}>
                    <Typography style={{
                        flexGrow: 1,
                        textAlign: "left",
                        fontWeight: 600,
                        color: "#666666",
                        font: " normal normal 12px/12px Poppins",
                    }}>
                        DNI 
                    </Typography>
                </Grid>
                {dni}
                <Grid container xs={12} xl={12} sm={12} justify='flex-start'>
                    <InputBase
                        defaultValue={dnipro}
                        fullWidth
                        id="nombre"
                        name='name'
                        inputProps={{ style: { textAlign: 'left' } }}
                        className={classes.formButton2}
                        onChange={handleDni}
                        disabled={active}
                        required
                    // onBlur={}
                    />
                </Grid>
            </Grid>
            <Grid container alignItems='flex-start' xs={12} xl={12} sm={12} style={{ marginTop: 30 }} >
                <Grid container xs={11} xl={11} sm={11}>
                    <Typography style={{
                        flexGrow: 1,
                        textAlign: "left",
                        fontWeight: 600,
                        color: "#666666",
                        font: " normal normal 12px/12px Poppins",
                    }}>
                        CUIL 
                    </Typography>
                </Grid>
                {cui}
                <Grid container xs={12} xl={12} sm={12} justify='flex-start'>
                    <InputBase
                        defaultValue={cuit1}
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
                <Grid container xs={11} xl={11} sm={11}>
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
                {validated}
                <Grid container xs={12} xl={12} sm={12}>
                    <InputBase
                        value={loadNac}
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
                <Grid container xs={11} xl={11} sm={11}>
                    <Typography style={{
                        flexGrow: 1,
                        textAlign: "left",
                        fontWeight: 600,
                        color: "#666666",
                        font: " normal normal 12px/12px Poppins",
                    }}>
                        Fecha de nacimiento
                    </Typography>
                </Grid>
                {dni}
                <Grid container xs={12} xl={12} sm={12}>
                    <InputBase
                        defaultValue={fecha.toLocaleDateString("es-ES", options)}
                        fullWidth
                        id="fecha"
                        name='date'
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
                    textAlign: "center",
                    fontWeight: 400,
                    color: "#A3A3A3",
                    font: " normal normal 16px/16px Poppins"
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
        </Grid>)
}

