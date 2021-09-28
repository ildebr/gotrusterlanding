import React, {useEffect, useState}from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import elipse from "../../asset/images/myBusiness/Ellipse 6.png"
import {Typography} from "@material-ui/core";
import ShareButton from "../../asset/images/myBusiness/buttonShare.svg";
import icon1 from "../../asset/images/myBusiness/icon1.svg";
import icon2 from "../../asset/images/myBusiness/icon2.svg";
import icon3 from "../../asset/images/myBusiness/icon3.svg";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faPlus} from "@fortawesome/free-solid-svg-icons";
import cliente from "./../../setting/cliente";
import {  GetImage,GetJson } from "../../services/hostConfig";

const useStyles = makeStyles(theme => ({
      numberGrid: {
        align: "center",
        color: '#ACFD00',
        fontFamily: "Poppins",
        fontSize: '50px',
        fontWeight: 'bold',
        textAlign: 'center',
        letterSpacing: '-0.03em'
    },
    textGrid: {
        align: "center",
        color: '#FFF',
        fontFamily: "Poppins",
        fontSize: '15px',
        fontWeight: 'normal',
        textAlign: 'center',
        letterSpacing: '-0.02em',
        textTransform: 'uppercase'
    },
    volverText: {
        align: "center",
        color: '#E5E5E5',
        fontFamily: "Poppins",
        fontSize: '19px',
        fontWeight: 'normal',
        textAlign: 'center',
        letterSpacing: '-0.01em',
        textTransform: 'uppercase'
    }


}));

function Header(props) {
    const [user, setUser] = useState(null)   
    const [haveImage, setHaveImage] = useState(false);    
    const classes = useStyles();
    
    function getImages() {
        let json = '';
        cliente.get(GetJson(), {}).then((res) => {
           
            json = res['data']['content']['images']['avatar']            
           
            console.log(json.includes(String(localStorage.getItem('userLogin'))))
            if (json.includes(String(localStorage.getItem('userLogin')))) {
                setHaveImage(true)
                console.log("evaluar")
            }
          

        }).catch(e => {
            console.log(e);
        })

    }
   
    

    useEffect(() => {

        if (user === null) {
            setUser(localStorage.getItem('userLogin'))
            getImages()
            
        }    

    }, [haveImage, user])

    return (
        <React.Fragment>
            <Grid container direction={"column"} >
            {haveImage ?
                            <Grid item>

                                <img
                                    src={'https://truster-bucket.s3.us-west-2.amazonaws.com/images/avatar/' + user + '.png'}
                                    width='200px' height='200px' style={{
                                        borderRadius:'50%',
                                    objectFit:'cover'
                                }}
                                
                                />

                            </Grid>
                            :
                            <Grid item>
                                <img src={elipse} width='160px' height='160px' style={{
                                        borderRadius:'50%',
                                        objectFit:'cover'
                                }}/>
                            </Grid>
                       }

                <Grid item>
                    <Typography style={{
                        align: "center",
                        color: 'rgba(255, 255, 255, 0.95)',
                        fontFamily: "Poppins",
                        fontSize: '55px',
                        fontWeight: 'bold',
                        textAlign: 'center',
                    }}>
                        Anagrama Studio
                    </Typography>

                </Grid>




                <Grid item>
                    <Typography style={{
                        align: "center",
                        color: '#ACFD00',
                        fontFamily: "Poppins",
                        fontSize: '25px',
                        fontWeight: 'normal',
                        textAlign: 'center',
                        letterSpacing: '-0.02em'
                    }}>
                        Software & Development Services
                    </Typography>

                </Grid>
                <Grid item>
                    <Typography style={{
                        align: "center",
                        color: '#777777',
                        fontFamily: "Poppins",
                        fontSize: '16px',
                        fontWeight: 'normal',
                        textAlign: 'center',
                        letterSpacing: '-0.02em'
                    }}>
                        Publicado en truster desde Octubre de 2020
                    </Typography>

                </Grid>

                <Grid container direction={"row"}>
                    <div style={{display:'flex', alignItems: 'center', flexDirection:'row'}}>
                        <FontAwesomeIcon icon={faAngleLeft} style={{
                            color: '#E5E5E5', fontSize: 18, paddingRight:'22px'
                        }}/>
                        <Typography className={classes.volverText}>VOLVER A BÚSQUEDA</Typography>
                    </div>

                    <Grid item>

                    </Grid>

                </Grid>




            </Grid>

        </React.Fragment>
    );
}

export default Header;