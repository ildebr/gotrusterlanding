import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import button1 from "../../asset/images/myBusiness/button1.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles(theme => ({
    titulo: {
        color: '#fff',
        fontFamily: "Poppins",
        fontSize: '12px',
        fontWeight: 600,
        textAlign: 'left',
        letterSpacing: '-0.02em'
    },
    texto: {
        color: '#666666',
        fontFamily: "Poppins",
        fontSize: '16px',
        fontWeight: 'normal',
        textAlign: 'left',
        letterSpacing: '-0.02em',
        paddingTop: '6px'
    }
}));

function Tienda() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid container direction={"column"}>
                <Grid item>
                    <Typography className={classes.titulo}>
                        Nombre de la tienda
                    </Typography>
                    <Typography className={classes.texto} style={{
                        color: '#ACFD00'
                    }}>
                        Anagrama Studio
                    </Typography>

                </Grid>
                <hr style={{width: '100%', marginTop: '11px'}} color='#333333'/>
                <Grid item style={{paddingTop: '27px'}}>
                    <Typography className={classes.titulo}>
                        Actividad de la Tienda
                    </Typography>
                    <Typography className={classes.texto}>
                        A que se dedica tu negocio o servicio?
                    </Typography>

                </Grid>
                <hr style={{width: '100%', marginTop: '11px'}} color='#333333'/>

                <Grid item style={{paddingTop: '27px'}}>
                    <Typography className={classes.titulo}>
                        Categoría
                    </Typography>
                    <Grid container direction={"row"}
                          style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'}}>
                        <Grid item>
                            <Typography className={classes.texto}>
                                Elegí la categoría
                            </Typography>
                        </Grid>
                        <Grid item>
                            <FontAwesomeIcon icon={faAngleDown} style={{
                                color: '#999999', fontSize: "12px",
                            }}/>
                        </Grid>
                    </Grid>

                </Grid>
                <hr style={{width: '100%', marginTop: '11px'}} color='#333333'/>

                <Grid item style={{paddingTop: '27px'}}>
                    <Typography className={classes.titulo}>
                        Subcategorìa
                    </Typography>
                    <Grid container direction={"row"}
                          style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'}}>
                        <Grid item>
                            <Typography className={classes.texto}>
                                Elegí la subcategoría
                            </Typography>
                        </Grid>
                        <Grid item>
                            <FontAwesomeIcon icon={faAngleDown} style={{
                                color: '#999999', fontSize: "12px",
                            }}/>
                        </Grid>
                    </Grid>

                </Grid>
                <hr style={{width: '100%', marginTop: '11px'}} color='#333333'/>

                <Grid item style={{paddingTop: '66px'}}>
                    <Typography className={classes.titulo}>
                        Descripción
                    </Typography>
                    <Typography style={{
                        color: '#666666',
                        fontFamily: "Poppins",
                        fontSize: '19px',
                        fontWeight: 'normal',
                        textAlign: 'left',
                        letterSpacing: '-0.02em',
                        paddingTop: '24px'
                    }}>
                        International branding, architecture, software and brand positioning firm. Experts in brand
                        development and commercial spaces.
                    </Typography>
                </Grid>
                <hr style={{width: '100%', marginTop: '40px'}} color='#333333'/>

            </Grid>


        </React.Fragment>
    );
}

export default Tienda;