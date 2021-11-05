import React, {useState} from 'react';
import Grid from "@material-ui/core/Grid";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStore, faShareAlt, faUserShield, faThumbsUp} from "@fortawesome/free-solid-svg-icons";
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import moment from 'moment'
import 'moment/locale/es';

const useStyles = makeStyles(theme => ({
    titulo: {
        align: "center",
        color: '#FFF',
        fontFamily: "Poppins",
        fontSize: 23,
        fontWeight: 700,
        textAlign: 'center',
        letterSpacing: '-0.02em',
    },
    subtitulo: {
        color: '#ACFD00',
        fontFamily: "Poppins",
        fontSize: 15,
        fontWeight: 500,
        textAlign: 'left',
        letterSpacing: '-0.02em',
        paddingTop: '4px'
    },
    subtituloAlt: {
        color: '#777',
        fontFamily: "Poppins",
        fontSize: 13,
        fontWeight: 400,
        textAlign: 'left',
        letterSpacing: '-0.02em',
        paddingTop: '4px'
    },
    divRectangle: {
        background: '#151515',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'row', alignItems: 'center',
        padding:'15px 28px'
    },
    numero:{
        color: '#ACFD00',
        fontFamily: "Poppins",
        fontSize: 27,
        fontWeight: 700,
        textAlign: 'center',
        letterSpacing: '-0.03em',
        paddingRight: '32px'
    },
    textoRectangle:{
        color: '#FFF',
        fontFamily: "Poppins",
        fontSize: 14,
        fontWeight: 400,
        textAlign: 'left',
        letterSpacing: '-0.02em',
    },
}));

function MobileTrustUsers(props) {

    const classes = useStyles();
    const [trust, setTrust] = useState(false)
    const {summary, description, name, createDate}= props
    return (
        <React.Fragment>
            <Grid container direction={"column"}>
                <Grid container direction={"row"} style={{padding: '16px'}}>
                    <Grid item xs={11}>
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <FontAwesomeIcon icon={faStore} style={{
                                color: '#fff', fontSize: 15, paddingRight: '8px'
                            }}/>
                            <Typography className={classes.titulo}>
                                {name}
                            </Typography>
                        </div>
                        <Typography className={classes.subtitulo}>{summary}</Typography>
                        <Typography className={classes.subtituloAlt}>Tienda en Truster {moment(createDate).format('YYYY')} </Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <FontAwesomeIcon icon={faShareAlt} style={{
                            color: '#ACFD00', fontSize: 23, paddingRight: '6px',
                            position: 'relative', top: '8px'
                        }}/>
                    </Grid>
                </Grid>

                <Grid item>
                    <div className={classes.divRectangle}>
                        <FontAwesomeIcon icon={faUserShield} style={{
                            color: '#777', fontSize: 20,  paddingRight:'16px'
                        }}/>
                        <Typography className={classes.numero}>
                            +0
                        </Typography>
                        <Typography className={classes.textoRectangle}>
                            Usuarios Truster ya validaron este negocio
                        </Typography>
                    </div>
                    <div className={classes.divRectangle} style={{margin:'16px 0'}}>
                        <FontAwesomeIcon icon={faThumbsUp} style={{
                            color: '#777', fontSize: 20,  paddingRight:'16px'
                        }}/>
                        <Typography className={classes.numero}>
                            +0
                        </Typography>
                        <Typography className={classes.textoRectangle}>
                            Usuarios ya confían en este negocio
                        </Typography>
                    </div>
                </Grid>


                <Grid item>
                    {trust ?
                        <Button onClick={() => setTrust(!trust)} style={{
                            background: '#ACFD00',
                            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                            borderRadius: '14px',
                            textTransform: 'None',
                            width:'100%',

                        }}
                        >
                            <div style={{flexDirection: 'row', display: 'flex', padding: '8px 15px'}}>


                                <Typography style={{
                                    align: "center",
                                    color: '#252525',
                                    fontFamily: "Poppins",
                                    fontSize: '20px',
                                    fontWeight: 600,
                                    textAlign: 'center',
                                    letterSpacing: '-0.02em',


                                }}>
                                    Confias en {name}
                                </Typography>
                            </div>


                        </Button> :
                        <Button onClick={() => setTrust(!trust)} style={{

                            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                            borderRadius: '14px',
                            textTransform: 'None',
                            width:'100%',
                            border: '1px solid #ACFD00'


                        }}>
                            <div style={{flexDirection: 'row', display: 'flex', padding: '8px 15px'}}>


                                <Typography style={{
                                    align: "center",
                                    color: '#ACFD00',
                                    fontFamily: "Poppins",
                                    fontSize: '20px',
                                    fontWeight: 600,
                                    textAlign: 'center',
                                    letterSpacing: '-0.02em',


                                }}>
                                    Confias en {name}?
                                </Typography>
                            </div>


                        </Button>
                    }
                </Grid>
            </Grid>
        </React.Fragment>
    );

}

export default MobileTrustUsers;