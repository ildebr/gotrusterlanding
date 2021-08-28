import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faThumbsUp, faUserShield} from "@fortawesome/free-solid-svg-icons";
import {Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    titulo1: {
        align: "center",
        color: '#ACFD00',
        fontFamily: "Poppins",
        fontSize: 19,
        fontWeight: 600,
        textAlign: 'left',
        letterSpacing: '-0.02em',
    },
    divRow: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    numbersGrid: {
        align: "center",
        color: '#ACFD00',
        fontFamily: "Poppins",
        fontSize: 75,
        fontWeight: 700,
        textAlign: 'left',
        letterSpacing: '-0.03em',
    },
    textGrid: {
        align: "center",
        color: '#E5E5E5',
        fontFamily: "Poppins",
        fontSize: 20,
        fontWeight: 500,
        textAlign: 'left',
        letterSpacing: '-0.02em',
        width: '210px',
        paddingLeft: '24px'
    },
    boton: {
        background: '#ACFD00',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '14px',
        textTransform: 'None'
    }

}));

function TrustUsers(props) {
    const classes = useStyles();

    const [trust, setTrust] = useState(false)

    return (
        <React.Fragment>
            <Grid container direction={"row"} style={{display: 'flex', justifyContent: 'center', alignItems:'center'}}>
                <div className={classes.divRow}>
                    <FontAwesomeIcon icon={faThumbsUp} style={{
                        color: '#ACFD00', fontSize: 22, paddingRight: '10px'
                    }}/>
                    <Typography className={classes.numbersGrid}>
                        86
                    </Typography>
                    <Typography className={classes.textGrid}>
                        Usuarios ya confían en Anagrama Studio
                    </Typography>


                    <FontAwesomeIcon icon={faUserShield} style={{
                        color: '#ACFD00', fontSize: 22, paddingRight: '10px', paddingLeft: '24px'
                    }}/>
                    <Typography className={classes.numbersGrid}>
                        122
                    </Typography>
                    <Typography className={classes.textGrid}>
                        Usuarios truster ya validaron Anagrama
                    </Typography>


                    {trust ?
                        <Button onClick={() => setTrust(!trust)} style={{
                            background: '#ACFD00',
                            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                            borderRadius: '14px',
                            textTransform: 'None',
                            marginLeft: '24px',

                        }}
                        >
                            <div style={{flexDirection: 'row', display: 'flex', padding: '8px 15px'}}>

                                <FontAwesomeIcon icon={faThumbsUp} style={{
                                    color: '#000', fontSize: 24, paddingRight: '16px'
                                }}/>
                                <Typography style={{
                                    align: "center",
                                    color: '#252525',
                                    fontFamily: "Poppins",
                                    fontSize: '20px',
                                    fontWeight: 600,
                                    textAlign: 'center',
                                    letterSpacing: '-0.02em',


                                }}>
                                    Confias en Anagrama
                                </Typography>
                            </div>


                        </Button> :
                        <Button onClick={() => setTrust(!trust)} style={{

                            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                            borderRadius: '14px',
                            textTransform: 'None',
                            marginLeft: '24px',

                            //width:'260px',
                            border: '1px solid #ACFD00'


                        }}>
                            <div style={{flexDirection: 'row', display: 'flex', padding: '8px 15px'}}>

                                <FontAwesomeIcon icon={faThumbsUp} style={{
                                    color: '#ACFD00', fontSize: 24, paddingRight: '16px'
                                }}/>
                                <Typography style={{
                                    align: "center",
                                    color: '#ACFD00',
                                    fontFamily: "Poppins",
                                    fontSize: '20px',
                                    fontWeight: 600,
                                    textAlign: 'center',
                                    letterSpacing: '-0.02em',


                                }}>
                                    Confias en Anagrama?
                                </Typography>
                            </div>


                        </Button>
                    }


                </div>


            </Grid>

        </React.Fragment>
    );
}

export default TrustUsers;