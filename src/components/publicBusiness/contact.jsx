import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import Grid from "@material-ui/core/Grid";
import headset from "../../asset/images/publicBusiness/headset-user.svg";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    titulo: {
        align: "center",
        color: '#FFF',
        fontFamily: "Poppins",
        fontSize: 30,
        fontWeight: 700,
        textAlign: 'left',
        [theme.breakpoints.down('sm')]: {
            fontSize: 21
        },
    },
    root: {
        padding: '34px',
        //background: 'rgba(0, 0, 0, 0.61)',
    },
    texto: {
        align: "center",
        color: '#999999',
        fontFamily: "Poppins",
        fontSize: 16,
        fontWeight: 500,
        textAlign: 'left',
        letterSpacing: '-0.02em',
        paddingTop: '32px',
        [theme.breakpoints.down('sm')]: {
            fontSize: 13
        },
    },
    form: {
        color: '#FFF',
        fontFamily: "Poppins",
        fontSize: 12,
        fontWeight: 600,
        textAlign: 'left',
        letterSpacing: '-0.02em',
        padding: '16px 0'
    },
    boton:{
        background: '#ACFD00',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '14px',
        textTransform: 'None',
        [theme.breakpoints.down('xs')]: {
            width:'100%'
        },
    }
}));
const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#666666',
        },
        '& .MuiInput-underline:after': {
            border: '2px solid #303030',
            borderRadius: '14px'
        },
        '& .MuiInputLabel-root': {
            color: '#666666',
            align: "center",

            fontFamily: "Poppins",
            fontSize: '15px',
            fontWeight: 500,
            textAlign: 'left',
            letterSpacing: '-0.02em',
        },
        '& .MuiInputBase-input': {
            color: '#fff',
            align: "center",
            fontFamily: "Poppins",
            fontSize: '15px',
            fontWeight: 500,
            textAlign: 'left',
            letterSpacing: '-0.02em',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                border: '2px solid #303030',
                borderRadius: '14px',
                width: '100%'
            },
            '&:hover fieldset': {
                border: '2px solid #303030',
                borderRadius: '14px',
                width: '100%'
            },
            '&.Mui-focused fieldset': {
                border: '2px solid #303030',
                borderRadius: '14px',
                width: '100%'
            },
        },
    },
})(TextField);

function Contact(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid container direction={"row"} className={classes.root}>
                <Grid item style={{display: 'flex', width: '100%'}}>
                    <div style={{
                        display: 'flex',
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                        <Typography className={classes.titulo}>Contactanos</Typography>
                        <div style={{
                            width: '43px',
                            height: '43px',
                            backgroundColor: '#232323',
                            borderRadius: '25px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}>
                            <img src={headset}/>
                        </div>

                    </div>
                </Grid>

                <Typography className={classes.texto}>
                   
                </Typography>

                <Grid item xs={12} style={{paddingRight: '32px'}}>
                    <div style={{display: 'grid', paddingTop: '4px'}}>
                        <Typography className={classes.form}>Nombre</Typography>
                        <CssTextField
                            label="Ingrese su nombre"
                            variant="outlined"
                            id="custom-css-outlined-input"
                        />
                    </div>
                    <div style={{display: 'grid', paddingTop: '4px'}}>
                        <Typography className={classes.form}>Email</Typography>
                        <CssTextField
                            label="Ingrese su email"
                            variant="outlined"
                            id="custom-css-outlined-input"
                        />
                    </div>
                    <div style={{display: 'grid', paddingTop: '4px', paddingBottom:'24px'}}>
                        <Typography className={classes.form}>Mensaje</Typography>
                        <CssTextField
                            id="outlined-multiline-static"
                            label="Ingrese su mensaje"
                            multiline
                            rows={6}

                            variant="outlined"

                        />
                    </div>
                </Grid>
                <Grid item style={{display: 'flex', justifyContent: 'flex-end', width:'100%', paddingRight:'16px'}}>
                    <Button className={classes.boton} >
                        <Typography style={{
                            align: "center",
                            color: '#252525',
                            fontFamily: "Poppins",
                            fontSize: '16px',
                            fontWeight: 500,
                            textAlign: 'center',
                            letterSpacing: '-0.02em',
                            padding: '10px 15px 9px ',

                        }}>
                            Enviar
                        </Typography>
                    </Button>
                </Grid>


            </Grid>


        </React.Fragment>

    );
}

export default Contact;