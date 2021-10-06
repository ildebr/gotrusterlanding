import React,  { useEffect, useState } from 'react';
import {makeStyles} from "@material-ui/core/styles";
import image from '../../../asset/images/manualValidations/afip/afipValidation.png';
import {Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperclip} from "@fortawesome/free-solid-svg-icons";
import {Input} from 'rsuite';
import { Fileload, ValidatioDetail } from "../../../services/hostConfig";
//import 'rsuite/dist/styles/rsuite-default.css'
import Cliente from "../../../setting/cliente";

import { getToken } from '../../../setting/auth-helpers';
import { LoopCircleLoading } from 'react-loadingg';
import Button from "@material-ui/core/Button";


const useStyles = makeStyles(theme => ({
    titulo: {
        color: "#FFF",
        fontFamily: "Poppins",
        fontWeight: 700,
        fontSize: '38px',
        letterSpacing: '-0.02em',
        maxWidth: '670px',
        paddingTop: '40px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '30px',
            maxWidth: '350px',
        }
    },
    subtitulo: {
        color: "#FFF",
        fontFamily: "Poppins",
        fontWeight: 400,
        fontSize: '27px',
        letterSpacing: '-0.01em',
        maxWidth:'500px',
        paddingTop: '40px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '12px',
            maxWidth: '350px',
            paddingTop: '40px',
        }
    },

    boton: {
        color: "#666666",
        fontFamily: "Poppins",
        fontWeight: 500,
        fontSize: '24px',
        letterSpacing: '-0.02em',

    },

    texto: {
        color: "#666666",
        fontFamily: "Poppins",
        fontWeight: 500,
        fontSize: '10px',
        letterSpacing: '-0.02em',
        marginTop: '8px'
    },
    rootDiv:{
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop:'100px',
        [theme.breakpoints.down('sm')]: {
            marginTop:'30px'
        },
    },
    login: {
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        backgroundColor: '#ACFD00',
        borderRadius: '14px',
        textTransform: 'None',
        width: '300px',
        marginTop: '20px',
        marginBottom: '80px',
        cursor: 'pointer',
    },
    login2: {
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        backgroundColor: '#666666',
        borderRadius: '14px',
        textTransform: 'None',
        width: '300px',
        marginTop: '20px',
        marginBottom: '80px',
        cursor: 'pointer',
    },
    imageColor: {
        color: '#ACFD00',
        fontSize: '18px',
        textAlign: 'center',
        marginRight: '5px'
    },
    imageColorGray: {
        color: '#9b9b9b',
        fontSize: '18px',
        textAlign: 'center',
        marginRight: '5px'
    }
}))


function AfipRegister(props) {
    const classes = useStyles();
    const [file, setFile] = useState(null)
    const [user, setUser] = useState(null)
    const [name, setName] = useState(null)
    const [active, setActive] = useState(true)
    const [nameImage, setNameImage] = React.useState(true);
    const [show, setShow] = React.useState('');

    

    const handleSubmit = () => {
        /*   let URL = CustomerResource(); */
        let URLVal = ValidatioDetail();       
       
        setShow(<LoopCircleLoading />)
        setActive(true);
        const token = getToken();
        var date = new Date();
        let formatted_date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
        let idUser = localStorage.getItem("userId")       
        const newValidations = {
            "customer": {
                "id": idUser,
                "user": {
                    "id": idUser,
                    "login": localStorage.getItem('email')
                }
            },
            "points": {
                "id": 4,
            },
            "validationCreationDate": formatted_date,
            "validationEnabled": true,
            "validationExtra": "string",
            "validationModificationDate": formatted_date,
            "validationName": "CUIL",
            "validationStatus": "PENDING"
        }
        console.log(newValidations)
        Cliente.post(URLVal, newValidations, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }).then(response => {
            return response.data
        }).then(response => {
            console.log(response)
            setShow('')
            setActive(false)
            window.open("/validation/afipReady", '_self');
        }).catch(error => console.log(error));

    }

    const onFileChange = (event, nombre) => {
        let fileName = event.target.files[0].name
        const reader = new FileReader();
        let _file = event.target.files[0];
        setName(_file.name);
        //let size = _file.size; 
        const _name = nombre


        reader.onload = function (event) {
            setFile(event.target.result)
            Cliente.post(Fileload(), {
                'file': event.target.result,
                'fileName': _name,
                'user': user,
                'destination': 'documentos'
            }
            ).then(res =>{
                setActive(false);
                setNameImage(false);
            })
        };
        reader.readAsDataURL(_file);
    }
   
    useEffect(() => {

        if (user === null) {
            setUser(localStorage.getItem('userLogin'))
        }
    }, [user]);
    return (
        <React.Fragment>
            <div className={classes.rootDiv}>
                <img src={image} width={200} height={'100%'}/>
                <Typography className={classes.titulo}>
                    Para validar tu CUIL/CUIL proporcionanos tu N°
                </Typography>
                <Typography className={classes.subtitulo} style={{color: '#ACFD00'}}>
                    Esta información es solo para propositos de validación y no sera compartida con ningún usuario.
                </Typography>

                <Typography className={classes.subtitulo} style={{paddingTop: '27px'}}>
                    Adjunte CUIL
                </Typography>

                <Button component="label" style={{
                        width: '300px', marginTop: '8px',
                        border: '2px solid #303030',
                        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
                        borderRadius: '14px',
                        backgroundColor: '#000',
                        textTransform: 'none'

                    }}>
                        <input
                            className={classes.boton}
                            id="file"
                            name="file"
                            type="file"
                            hidden
                            onChange={
                                (e) => onFileChange(e, 'Factura')}


                        />
                        <Grid container direction={'row'} style={{ padding: '10px 0 10px 0', cursor: 'pointer' }}>

                            <Grid item xs={8}>
                                <Typography className={classes.boton}>{nameImage ? 'Adjuntar Cuil' : name}</Typography>
                            </Grid>
                            <Grid item={2}>
                                <FontAwesomeIcon icon={faPaperclip} className={nameImage ? classes.imageColorGray : classes.imageColor} />
                            </Grid>
                        </Grid>

                    </Button>

                <Typography className={classes.texto}>
                    Los jpg, png, pdf son válidos.
                </Typography>

                <Button className={active ? classes.login2 : classes.login}
                onClick={handleSubmit}
                disabled={active}>
                    <Typography style={{
                        align: "center",
                        color: '#252525',
                        fontFamily: "Poppins",
                        fontSize: '16px',
                        fontWeight: 500,
                        textAlign: 'center',
                        letterSpacing: '-0.02em',
                        padding: '5px 15px 5px ',

                    }}>
                        Enviar
                    </Typography>
                </Button>


            </div>
        </React.Fragment>
    );
}

export default AfipRegister;