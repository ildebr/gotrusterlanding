import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import image from '../../../asset/images/manualValidations/selfie/selfieRegister1.png';
import image2 from '../../../asset/images/manualValidations/selfie/selfieRegister2.png';
import image3 from '../../../asset/images/manualValidations/selfie/selfieRegister3.png';
import image4 from '../../../asset/images/manualValidations/selfie/selfieRegister4.png';
import {Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { Fileload, CustomerResource, ValidatioDetail } from "../../../services/hostConfig";
import {faPaperclip} from "@fortawesome/free-solid-svg-icons";
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
        fontSize: '12px',
        letterSpacing: '-0.02em',
        maxWidth: '500px',
        marginTop: '40px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '12px',
            maxWidth: '350px',
            paddingTop: '40px',
        }
    },

    boton: {
        color: "#ACFD00",
        fontFamily: "Poppins",
        fontWeight: 500,
        fontSize: '16px',
        letterSpacing: '-0.02em',

    },

    texto: {
        color: "#ACFD00",
        fontFamily: "Poppins",
        fontWeight: 600,
        fontSize: '14px',
        letterSpacing: '-0.02em',
        marginBottom: '8px',
        textAlign:'left'
    },
    textoMobile:{
        color: "#ACFD00",
        fontFamily: "Poppins",
        fontWeight: 600,
        fontSize: '14px',
        letterSpacing: '-0.02em',
        marginTop: '32px',
        textAlign:'left',
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        },
    },
    rootDiv: {
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '100px',
        [theme.breakpoints.down('sm')]: {
            marginTop: '30px'
        },
    },
    notMobile:{
        display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop:'48px',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    },
    onlyMobile:{
        marginTop:'16px',
        [theme.breakpoints.up('sm')]: {
            display: 'none'
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


function SelfieRegister(props) {
    const classes = useStyles();
    const [file, setFile] = useState(null)
    const [user, setUser] = useState(null)
    const [name, setName] = useState(null)
    const [active, setActive] = useState(true)
    const [nameImage, setNameImage] = React.useState(true);
    const [show, setShow] = React.useState('');

    const [currentImage, setCurrentImage] = useState(1)
    const [seconds, setSeconds] = useState(10);

   function switchImage() {
        if (currentImage < 1) {
            setCurrentImage(currentImage+1)
        } else {
            setCurrentImage(0)
        }
    }

    useEffect(() => {

        if (seconds > 0) {
            setTimeout(() => setSeconds(seconds - 1), 1000);
        } else {
            setSeconds(10)
            switchImage()

        }
        if (user === null) {
            setUser(localStorage.getItem('userLogin'))
        }


    });

    const formatDate = () => {
        var date = new Date();
        let formatted_date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
        return formatted_date;
    }
    const handleSubmit = () => {
        /*   let URL = CustomerResource(); */
        let URLVal = ValidatioDetail();
        let dateModify = formatDate;
        console.log(dateModify);
        setShow(<LoopCircleLoading />)
        setActive(true);
        const token = getToken();

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
                "id": 5,
            },
            "validationCreationDate": formatDate,
            "validationEnabled": true,
            "validationExtra": "string",
            "validationModificationDate": formatDate,
            "validationName": "SELFIE",
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
            window.open("/validation/selfieReady", '_self');
        }).catch(error => console.log(error));

    }

    const onFileChange = (event, nombre) => {
        let fileName = event.target.files[0].name
        const reader = new FileReader();
        let _file = event.target.files[0];

        const _name = nombre


        reader.onload = function (event) {
            setFile(event.target.result)
            Cliente.post(Fileload(), {
                'file': event.target.result,
                'fileName': _name,
                'user': user,
                'destination': 'selfie'
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
                    Para validar tu Selfie, te pedimos una foto tuya
                </Typography>



                {currentImage === 0 ?
                <div className={classes.notMobile} >
                    <img src={image2} width={300} height={'100%'}/>
                    <div style={{maxWidth:'300px', marginLeft:'34px' }}>
                        <Typography className={classes.texto}>1. En la foto debes sostener tu DNI</Typography>
                        <Typography className={classes.texto}>2. En la foto deberás aparecer de frente</Typography>

                        <Typography className={classes.texto}>3. La foto debe mostrár de tu cintura hacia
                            arriba</Typography>

                        <Typography className={classes.texto}> 4. En la foto debes sostener un papel con la fecha de hoy
                            escrita </Typography>
<Typography className={classes.texto}>Tu letra debe ser legible.</Typography>
                    </div>
                </div>
                    :
                <div className={classes.notMobile} >
                    <img src={image3} width={600} height={'100%'}/>
                </div>
                }


                <Typography className={classes.textoMobile}>
                    Toma una fotografia nítida que no se vea borrosa.
                </Typography>




                <div className={classes.onlyMobile}>

                    <img src={image4} width={300} height={'100%'}/>
                    <div style={{maxWidth:'300px', paddingLeft:'24px', marginTop:'24px'}}>
                    <Typography className={classes.texto}>1. En la foto debes sostener tu DNI</Typography>
                    <Typography className={classes.texto}>2. En la foto deberás aparecer de frente</Typography>

                    <Typography className={classes.texto}>3. La foto debe mostrár de tu cintura hacia
                        arriba</Typography>

                    <Typography className={classes.texto}> 4. En la foto debes sostener un papel con la fecha de hoy
                        escrita </Typography>
                        <Typography  className={classes.texto}>Tu letra debe ser legible.</Typography>
                    </div>
                </div>

                <Typography className={classes.subtitulo} style={{paddingTop: '27px'}}>
                    Adjunte Selfie
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
                                <Typography className={classes.boton}>Selfie</Typography>
                            </Grid>
                            <Grid item={2}>
                                <FontAwesomeIcon icon={faPaperclip} className={nameImage ? classes.imageColorGray : classes.imageColor} />
                            </Grid>
                        </Grid>

                    </Button>

                    <Button className={active ? classes.login2 : classes.login}
                onClick={handleSubmit}
                disabled={active}
                >
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

export default SelfieRegister;