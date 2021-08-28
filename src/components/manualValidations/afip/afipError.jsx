import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import image from '../../../asset/images/manualValidations/afip/afipError.png';
import {Typography} from "@material-ui/core";
//import 'rsuite/dist/styles/rsuite-default.css'
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
            fontSize: '20px',
            maxWidth: '350px',
            paddingTop: '20px',
        }
    },
    subtitulo2: {
        color: "#AAFF00",
        fontFamily: "Poppins",
        fontWeight: 400,
        fontSize: '27px',
        letterSpacing: '-0.01em',
        maxWidth:'500px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px',
            maxWidth: '350px',

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
    rootDiv:{
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop:'100px',
        [theme.breakpoints.down('sm')]: {
            marginTop:'30px'
        },
    },

    mobileDiv: {
        display:'flex', flexDirection:'row',
        [theme.breakpoints.down('sm')]: {
            display:'none'
        },
    },
    mobileDiv2:{
        display:'flex', flexDirection:'column', width:'100%', justifyContent:'center',
        [theme.breakpoints.up('sm')]: {
            display:'none'
        },
    }
}))


function AfipError(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.rootDiv}>
                <img src={image} width={200} height={'100%'}/>
                <Typography className={classes.titulo}>
                    Bienvenido, lamentablemente no pudimos validar tu CUIT/CUIL
                </Typography>
                <Typography className={classes.subtitulo}>
                    No te preocupes, podes volver a intentarlo las veces que precises.
                </Typography>

                <Typography className={classes.subtitulo2} style={{ paddingTop: '20px'}}>
                    Si no sabes que puede haber
                </Typography>

                <div style={{display:'flex', flexDirection:'row'}}>
                    <Typography  className={classes.subtitulo2}>
                        salido mal, lee
                    </Typography>
                    <Typography  className={classes.subtitulo2} style={{textDecoration:'underline', paddingLeft:'8px', cursor:'pointer'}}>
                        este artículo
                    </Typography>

                </div>


                <div className={classes.mobileDiv}>

                    <Button style={{
                        background: '#000',
                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                        borderRadius: '14px',
                        textTransform: 'None',
                        // width: '300px',
                        marginTop: '35px',
                        marginBottom: '80px',
                        border: '2px solid #FFFFFF',
                        marginRight:'25px'
                    }}>
                        <Typography style={{
                            align: "center",
                            color: '#FFF',
                            fontFamily: "Poppins",
                            fontSize: '16px',
                            fontWeight: 500,
                            textAlign: 'center',
                            letterSpacing: '-0.02em',
                            padding: '5px 15px 5px ',

                        }}>
                            Despues
                        </Typography>
                    </Button>

                    <Button style={{
                        background: '#ACFD00',
                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                        borderRadius: '14px',
                        textTransform: 'None',
                        // width: '300px',
                        marginTop: '35px',
                        marginBottom: '80px'
                    }}>
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
                            Reintentar Ahora
                        </Typography>
                    </Button>
                </div>
                <div className={classes.mobileDiv2}>
                    <Button style={{
                        background: '#ACFD00',
                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                        borderRadius: '14px',
                        textTransform: 'None',
                        // width: '300px',
                        marginTop: '35px',
                        marginBottom: '20px',

                    }}>
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
                            Reintentar Ahora
                        </Typography>
                    </Button>
                    <Button style={{
                        background: '#000',
                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                        borderRadius: '14px',
                        textTransform: 'None',
                        // width: '300px',

                        marginBottom: '80px',
                        border: '2px solid #FFFFFF',

                    }}>
                        <Typography style={{
                            align: "center",
                            color: '#FFF',
                            fontFamily: "Poppins",
                            fontSize: '16px',
                            fontWeight: 500,
                            textAlign: 'center',
                            letterSpacing: '-0.02em',
                            padding: '5px 15px 5px ',

                        }}>
                            Despues
                        </Typography>
                    </Button>


                </div>




            </div>
        </React.Fragment>
    );
}

export default AfipError;