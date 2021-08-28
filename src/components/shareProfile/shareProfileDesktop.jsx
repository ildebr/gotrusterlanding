import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import imagen from "../../asset/images/shareProfile/imagenShareProfile.png";
import {Typography} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    root: {
        background: '#000000',
        flexGrow: 1,
    },
    paperContainer: {
        height: '90px',
        marginTop: '2vh',

    },
    titulo:{
        color: '#FFF',
        fontFamily: "Poppins",
        fontSize: '40px',
        fontWeight: 700,
        textAlign: 'center' ,
        letterSpacing: '-0.02em',
        paddingTop:'64px'
    },
    subtitulo:{
        color: '#ACFD00',
        fontFamily: "Poppins",
        fontSize: '30px',
        fontWeight: 400,
        textAlign: 'center' ,
        letterSpacing: '-0.02em',
        paddingTop:'30px'
    }
}));

const CssTextField = withStyles({
    root: {

        '& .MuiFormControl-root': {
            display: 'grid',
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
        '& .MuiInput-underline-root': {
            color: '#fff'
        },

        '& label.Mui-focused': {
            color: '#2C2C2C',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#2C2C2C',
            bottom: '-10px',
        },
        '& .MuiInput-underline:before': {
            borderBottomColor: '#2C2C2C',

            bottom: '-10px',
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

        '& .MuiFormHelperText-root': {
            color: '#fff'
        },

        '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline': {
        borderColor: '#666666',
            borderRadius:'14px',
            width:'240px'
            }
    },
})(TextField);

function ShareProfileDesktop(props) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>

                <img src={imagen} style={{width:'150px', paddingRight: '47px', marginTop:'80px'}}/>
                <Typography className={classes.titulo}>
                    Compartí tu perfil
                </Typography>
                <Typography className={classes.subtitulo}>
                    La información compartida no divulgará datos personales, sólo estadísticas de confianza.
                </Typography>

                <div style={{display: 'flex', paddingTop: '4px', width:'300px', paddingLeft:'45px', marginTop:'50px'}}>
                    <CssTextField
                        disabled
                        label="https://truster.app/V=123123312"
                        variant="outlined"
                    />

                </div>

                <div style={{marginTop:'24px'}}>
                    <Button style={{
                        background: '#ACFD00',
                        boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)',
                        borderRadius:'14px',
                        textTransform:'None',
                        height:'53px',
                        width:'256px'
                    }}>
                        <Typography style={{
                            align: "center",
                            color: '#252525',
                            fontFamily: "Poppins",
                            fontSize: '24px',
                            fontWeight: 500,
                            textAlign: 'center',
                            letterSpacing: '-0.02em',

                        }}>
                            Copiar Link
                        </Typography>
                    </Button>
                </div>



            </div>
        </React.Fragment>
    );
}

export default ShareProfileDesktop;