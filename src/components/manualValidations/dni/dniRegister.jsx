import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import image from '../../../asset/images/manualValidations/dniRegister.png';
import { Typography, Button, Grid } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { Input } from 'rsuite';
import Cliente from "../../../setting/cliente";
import { Fileload } from "../../../services/hostConfig";

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
        maxWidth: '500px',
        paddingTop: '40px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '12px',
            maxWidth: '350px',
            paddingTop: '20px',
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
        color: "#666666",
        fontFamily: "Poppins",
        fontWeight: 500,
        fontSize: '10px',
        letterSpacing: '-0.02em',
        marginTop: '8px'
    },
    rootDiv: {
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '100px',
        [theme.breakpoints.down('sm')]: {
            marginTop: '30px'
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
        cursor:'pointer',        
    },
    login2: {
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        backgroundColor: '#666666',
        borderRadius: '14px',
        textTransform: 'None',
        width: '300px',
        marginTop: '20px',
        marginBottom: '80px',       
        cursor:'pointer',        
    },

}))


function DniRegister(props) {
    const classes = useStyles();

    const [file, setFile] = useState(null)
    const [user, setUser] = useState(null)
    const [name, setName] = useState(null)
    const [active, setActive] = useState(true)

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
                'destination': 'DNI'
            }
            ).then(setActive(false))
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
                <img src={image} width={200} height={'100%'} />
                <Typography className={classes.titulo}>
                    Para validar tu dni, te pedimos una foto del frente y dorso del mismo, donde la información sea
                    legible
                </Typography>

                <Typography className={classes.subtitulo}>
                    Numero de DNI o Libreta Civica
                </Typography>
                <div style={{ width: '300px', marginTop: '4px' }}>

                    <Input style={{
                        backgroundColor: '#000',
                        border: '2px solid #303030',
                        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
                        borderRadius: '14px',
                        color: "#FFF",
                        fontFamily: "Poppins",
                        fontWeight: 600,
                        fontSize: '16px',
                        letterSpacing: '-0.02em',
                        textAlign: 'center',
                        marginTop: '4px',
                        padding: '10px 0 10px 0'
                    }} placeholder="DNI" />
                </div>

                <Typography className={classes.subtitulo} style={{ color: '#ACFD00' }}>
                    Esta información es solo para propositos de validación y no sera compartida con ningún usuario.
                </Typography>

                <Typography className={classes.subtitulo} style={{ paddingTop: '27px' }}>
                    Adjunte foto del frente del DNI
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
                        id="file"
                        name="file"
                        type="file"
                        hidden
                        onChange={
                            (e) => onFileChange(e, 'FrenteDNI')}
                    />
                    <Grid container direction={'row'} style={{ padding: '10px 0 10px 0', cursor: 'pointer' }}>
                        <Grid item xs={2} />
                        <Grid item xs={8}>
                            <Typography className={classes.boton}>Adjuntar Frente</Typography>
                        </Grid>
                        <Grid item={2}>
                            <FontAwesomeIcon icon={faPaperclip} style={{
                                color: '#ACFD00',
                                fontSize: '18px',
                                textAlign: 'center',
                                marginRight: '5px'
                            }} />
                        </Grid>
                    </Grid>

                </Button>

                <Typography className={classes.texto}>
                    Los jpg, png, pdf son válidos.
                </Typography>

                <Typography className={classes.subtitulo} style={{ paddingTop: '20px' }}>
                    Adjunte foto del dorso del dorso DNI
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
                        id="file"
                        name="file"
                        type="file"
                        hidden
                        onChange={(e) => onFileChange(e, 'DorsoDNI')}
                    />
                    <Grid container direction={'row'} style={{ padding: '10px 0 10px 0', cursor: 'pointer' }}>
                        <Grid item xs={2} />
                        <Grid item xs={8}>
                            <Typography className={classes.boton}>Adjuntar Dorso</Typography>
                        </Grid>
                        <Grid item={2}>
                            <FontAwesomeIcon icon={faPaperclip} style={{
                                color: '#ACFD00',
                                fontSize: '18px',
                                textAlign: 'center',
                                marginRight: '5px'
                            }} />
                        </Grid>


                    </Grid>

                </Button>


                <Button className={active ? classes.login2: classes.login}
                    disabled={active}
                    href={'/validation/dniReady'}
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

export default DniRegister;