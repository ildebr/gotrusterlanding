import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt, faHome} from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles(theme => ({
    root:{
        position: 'absolute', padding:'34px',
        background: 'rgba(0, 0, 0, 0.61)',


    },

    titulo: {
        align: "center",
        color: '#ACFD00',
        fontFamily: "Poppins",
        fontSize: 26,
        fontWeight: 700,
        textAlign: 'left',
        //letterSpacing: '-0.02em'
    },
    texto1:{
        align: "center",
        color: '#f6f6f6',
        fontFamily: "Poppins",
        fontSize: 33,
        fontWeight: 700,
        textAlign: 'left',
        paddingTop:'16px'

    },
    texto2:{
        align: "center",
        color: '#f6f6f6',
        fontFamily: "Poppins",
        fontSize: 29,
        fontWeight: 500,
        textAlign: 'left',
        paddingTop:'16px'
    }
}));

function Direction(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid container direction={"row"} className={classes.root} >
                <Grid item style={{display: 'flex', width: '100%'}}>
                    <div style={{
                        display: 'flex',
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                        <Typography className={classes.titulo}>Dirección</Typography>
                        <div style={{
                            width: '43px',
                            height: '43px',
                            backgroundColor: '#232323',
                            borderRadius: '25px',
                            display:'flex',alignItems:'center', justifyContent:'center'
                        }}>
                            <FontAwesomeIcon icon={faHome} style={{

                                color: '#ACFD00', fontSize: "22", align: 'center',
                            }}/>
                        </div>

                    </div>
                </Grid>

                <Grid item>
                    <Typography className={classes.texto1}>A</Typography>
                    <Typography className={classes.texto2}>Buenos Aires, Argentina</Typography>
                </Grid>





            </Grid>
            <Grid item style={{ position: 'absolute', top:'66%', left:'45%'}}>
                <div style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: '#565656',
                    borderRadius: '25px',
                    display:'flex',alignItems:'center', justifyContent:'center'
                }}>
                    <FontAwesomeIcon icon={faMapMarkerAlt} style={{

                        color: '#ACFD00', fontSize: "52", align: 'center', top:'-27px', position:'absolute'
                    }}/>


                </div>
            </Grid>
        </React.Fragment>

    );
}

export default Direction;
