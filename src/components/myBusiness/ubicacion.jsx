import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faToggleOn, faAngleDown} from "@fortawesome/free-solid-svg-icons";


const useStyles = makeStyles(theme => ({
    texto: {
        color: '#666666',
        fontFamily: "Poppins",
        fontSize: '16px',
        fontWeight: 'normal',
        textAlign: 'left',
        letterSpacing: '-0.02em',
    }
}));

function Ubicacion(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid container direction={'row'} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '104px',
            }}>

                <Grid item>
                    <Typography style={{
                        color: '#ACFD00',
                        fontFamily: "Poppins",
                        fontSize: '22px',
                        fontWeight: 'normal',
                        textAlign: 'left',
                        letterSpacing: '-0.02em',

                    }}>
                        Ubicación
                    </Typography>
                </Grid>
                <Grid item>
                    <FontAwesomeIcon icon={faToggleOn} style={{
                        color: '#ACFD00', fontSize: "22px",
                    }}/>

                </Grid>
            </Grid>

            <Typography style={{
                color: '#FFF',
                fontFamily: "Poppins",
                fontSize: '14px',
                fontWeight: 'normal',
                textAlign: 'left',
                letterSpacing: '-0.02em',
                paddingTop: '34px'
            }}>
                Dirección
            </Typography>

            <Grid container direction={"column"} style={{paddingTop: '34px'}}>
                <Grid container direction={"row"} style={{display: 'flex'}}>
                    <Grid item xs={9}>
                        <Typography className={classes.texto}>
                            Calle
                        </Typography>
                        <hr style={{margin: '11px 25px 0 0',}} color='#333333'/>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography className={classes.texto}>
                            Número
                        </Typography>
                        <hr style={{width: '100%', marginTop: '11px'}} color='#333333'/>
                    </Grid>
                </Grid>

                <Grid item style={{paddingTop: '44px'}}>
                    <Grid container direction={"row"}
                          style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Grid item>
                            <Typography className={classes.texto}>
                                Localidad
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

                <Grid item style={{paddingTop: '44px'}}>
                    <Grid container direction={"row"}
                          style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Grid item>
                            <Typography className={classes.texto}>
                                Provincia
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

                <Grid item style={{paddingTop: '44px'}}>

                    <Typography className={classes.texto}>
                        Código Postal
                    </Typography>
                </Grid>
                <hr style={{width: '100%', marginTop: '11px'}} color='#333333'/>

            </Grid>


        </React.Fragment>
    );
}

export default Ubicacion;