import React, {useEffect, useState} from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button} from '@material-ui/core';
import ReputationImg from '../../asset/images/reputation/perfil.jpg'
import ShareButton from '../../asset/images/reputation/Group 25.svg'
import Logo from '../../asset/images/reputation/logo.svg'
import GreyLogo from '../../asset/images/reputation/greylogo.svg'
import LinearDeterminate from './progressBarArchMobile'
import Cliente from "../../setting/cliente";
import {GetJson} from "../../services/hostConfig";
const { localStorage } = global.window;
const styles = theme => ({
    root: {
        flexGrow: 1,
        border: 0,
        margin: 0,
        marginTop: '2vh',
        height: 217,
    },
    menuButton: {
        marginRight: 2,
    },
    title: {
        marginLeft: 60,
        flexGrow: 1,
        align: "center",
        color: "#FFFFFF",
        font: " normal normal 40px/40px Poppins",
    },
    navSign: {
        marginRight: 10,
        color: '#ACFD00',
        fontFamily: 'Poppins',
        fontSize: '16px',
        fontStyle: ' normal',
        fontWeight: '700',
        lineHeight: '24px',
        letterSpacing: ' -0.02em',
        textAlign: 'center'
    },
});


const ReputationProfile = () => {
    const [user, setUser] = useState(null)
    const [imagesArray, setImagesArray] = useState(null)
    const [haveImage, setHaveImage] = useState(false); 
    const [haveImageCover, setHaveImageCover] = useState(false);

    function getImages() {

        let json = '';
        let coverPerfil = '';
        Cliente.get(GetJson(), {}).then((res) => {
            //
            // console.log(res['data']['content']['images'])

            json = res['data']['content']['images']['perfil']
            coverPerfil = res['data']['content']['images']['coverPerfil']

            if (json.includes(String(localStorage.getItem('userLogin')))) {
                setHaveImage(true)
                console.log()
            }
            else if ( coverPerfil.includes(String(localStorage.getItem('userLogin')))) {
                setHaveImageCover(true)
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
    const namefull = localStorage.getItem("nombre") + ' ' + localStorage.getItem("apellido");
    let occupation = localStorage.getItem('occupation')=='null'? '': localStorage.getItem('occupation');
    let points = localStorage.getItem('points')=='null'? '': localStorage.getItem('points');
    let nextLevel = localStorage.getItem('points')=='null'? '': 54 - parseInt(localStorage.getItem('points'));
    return (
        <Grid position="static" color="transparent" style={{
            flexGrow: 1,
            border: 0,
            margin: 0,
        }} >

            <Grid container>
                <Grid container justify='flex-start' xs={4} xl={4} sm={4}>
                {haveImage ? 
                            <Grid container justify='flex-end' xs={11} xl={11} sm={11}>

                                <img
                                    src={'https://truster-bucket.s3.us-west-2.amazonaws.com/images/perfil/' + localStorage.getItem('userLogin') + '.png'}
                                    width='250px' height='250px' style={{
                                        borderRadius:'50%',
                                    objectFit:'cover'
                                }}
                                />

                            </Grid>
                            : <Grid container justify='flex-end' xs={11} xl={11} sm={11}> 
                            <img src={ReputationImg} alt='test' width='250px' height='250px'style={{
                                        borderRadius:'50%',
                                        objectFit:'cover'
                                }}/>
                            </Grid>
                        }
                   
                </Grid>
                <Grid container xs={10} xl={8} sm={8}>
                    <Grid container>
                        <Grid container justify='flex-start' xs={8} xl={8} sm={8} alignItems='center' >
                            <Typography style={{
                                textAlign: "left",
                                color: "#FFFFFF",
                                font: " normal normal 30px/30px PoppinsBold",
                                paddingRight: 10
                            }}>
                                {namefull}
                            </Typography>
                            <button style={{
                                backgroundColor: 'rgba(0,0,0,0)',
                                color: '#ACFD00',
                                font: 'normal normal normal 14px/14px PoppinsBold',
                                border: '2px solid',
                                height: 30,
                                borderColor: '#ACFD00',
                                borderRadius: 5,
                                marginTop: 5,
                                textTransform: 'none',
                            }}>Rookie</button>
                        </Grid >
                        <Grid container justify='flex-end' xs={4} xl={4} sm={4} alignItems='center'>
                            <Typography style={{
                                textAlign: "left",
                                color: "#888888",
                                font: " normal normal 14px/14px Poppins",
                                textAlign: 'center',
                                paddingRight: 10
                            }}>
                                Compartir Perfil
                            </Typography>
                            <Button href ={'/sharemyprofile'} style={{
                                backgroundColor: 'rgba(0,0,0,0)',
                                border: '1px solid',
                                borderColor: 'rgba(0,0,0,0)',
                            }}>
                                <img src={ShareButton} alt='share button' />
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container justify='flex-start' style={{ marginTop: 5 }}>
                        <Typography style={{
                            font: 'normal normal normal 24px/24px Poppins',
                            textAlign: 'center',
                            letterSpacing: '-0.02em',
                            color: '#ACFD00'
                        }}>
                            {occupation}
                        </Typography>
                    </Grid>
                    <Grid container justify='flex-start'>
                        <Typography style={{
                            font: 'normal normal normal 18px/18px Poppins',
                            textAlign: 'center',
                            letterSpacing: '-0.02em',
                            color: '#FFFFFF'
                        }}>
                            Miembro Truster desde Septiembre / 2021
                        </Typography>
                    </Grid>
                    <Grid container justify='flex-start' alignItems='center'>
                        <LinearDeterminate value={points} />
                    </Grid>
                    <Grid container alignItems='center'>
                        <Grid container justify='flex-start' xs={6} xl={6} sm={6} alignItems='center'>
                            <Grid container justify='flex-start' xs={12} xl={12} sm={12} alignItems='center'>
                                <img src={Logo} alt='logo' />
                                <Typography style={{
                                    font: 'normal normal normal 50px/50px PoppinsBold',
                                    textAlign: 'center',
                                    marginLeft: 5,
                                    letterSpacing: '-0.02em',
                                    color: '#ACFD00'
                                }}>
                                    {points}
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography style={{
                                    font: 'normal normal normal 16px/16px Poppins',
                                    textAlign: 'center',
                                    marginLeft: 5,
                                    letterSpacing: '-0.02em',
                                    color: '#ACFD00'
                                }}>
                                    Puntos Truster
                                </Typography>
                            </Grid>
                        </Grid >
                        <Grid container justify='flex-end' xs={6} xl={6} sm={6} alignItems='center'>
                            <Grid container justify='flex-end' xs={12} xl={12} sm={12} alignItems='center'>
                                <img src={GreyLogo} alt='logo' />
                                <Typography style={{
                                    font: 'normal normal normal 50px/50px PoppinsBold',
                                    textAlign: 'center',
                                    marginLeft: 5,
                                    letterSpacing: '-0.02em',
                                    color: '#888888'
                                }}>
                                   {nextLevel}
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography style={{
                                    font: 'normal normal normal 16px/16px Poppins',
                                    textAlign: 'center',
                                    marginLeft: 5,
                                    letterSpacing: '-0.02em',
                                    color: '#888888'
                                }}>
                                    Siguiente Nivel
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>)
}
export default withStyles(styles, { withTheme: true })(ReputationProfile);
