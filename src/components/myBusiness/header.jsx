import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import elipse from "../../asset/images/myBusiness/Ellipse 6.png"
import {Typography} from "@material-ui/core";
import ShareButton from "../../asset/images/myBusiness/buttonShare.svg";
import icon1 from "../../asset/images/myBusiness/icon1.svg";
import icon2 from "../../asset/images/myBusiness/icon2.svg";
import icon3 from "../../asset/images/myBusiness/icon3.svg";
import Cliente from "../../setting/cliente";
import {Fileload, GetJson} from "../../services/hostConfig";
import {LoopCircleLoading} from "react-loadingg";

const useStyles = makeStyles(theme => ({
    test: {
        zIndex: 1
    },
    paperContainer: {
        height: '110px',
        marginTop: '2vh',
    },

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
    }


}));


function waiter() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 7000);
    });
}

function Header(props) {
    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState(null)
    const [user, setUser] = useState(null)
    const [haveImage, setHaveImage] = useState(false);
    const [haveImageCover, setHaveImageCover] = useState(false);

    function getImages() {

        let json = '';
        let coverPerfil = '';
        Cliente.get(GetJson()).then((res) => {
            //
             console.log(res['data']['content']['images']['coverPerfil'])

            json = res['data']['content']['images']['avatar']
            coverPerfil = res['data']['content']['images']['coverPerfil']
            console.log(json);
            console.log(coverPerfil);
            if (json.includes(String(localStorage.getItem('userLogin')))) {
                setHaveImage(true)
                
            } else            
            if (coverPerfil.includes(String(localStorage.getItem('userLogin')))) {
                setHaveImageCover(true)
                console.log('Entre a ver')
            }

            setLoading(false)

        }).catch(e => {
            console.log(e);
        })

    }

    const onFileChange = (event) => {

        let fileName = event.target.files[0].name
        const reader = new FileReader();
        let _file = event.target.files[0];


        setLoading(true)
        reader.onload = async function (event) {
            setFile(event.target.result)
            Cliente.post(Fileload(), {
                    'file': event.target.result,
                    'fileName': fileName,
                    'user': user,
                    'destination': 'avatar'
                }
            )
            //     .then(() => {
            //         getImages()
            //     }
            // )
            await waiter()
            getImages()
            window.location.reload()
        };

        reader.readAsDataURL(_file);

    }

    const onFileChangeCover = (event) => {

        let fileName = event.target.files[0].name
        const reader = new FileReader();
        let _file = event.target.files[0];

        setLoading(true)
        reader.onload = function (event) {
            setFile(event.target.result)
            Cliente.post(Fileload(), {
                    'file': event.target.result,
                    'fileName': fileName,
                    'user': user,
                    'destination': 'coverNegocio'
                }
            ).then(() => {
                    waiter().then(() => {
                        setLoading(false)
                        window.location.reload();
                    })

                }
            )
        };

        reader.readAsDataURL(_file);
    }


    useEffect(() => {


        if (user === null) {
            setUser(localStorage.getItem('userLogin'))
            getImages()
        }



    }, [haveImage, user, loading]);
    return (
        <React.Fragment>
            <Grid container direction={"column"}>

                {loading ?
                    <div style={{height: '160px'}}>
                        <LoopCircleLoading size='large' color='#ACFD00'/>

                    </div>

                    :
                    (haveImage ?
                        <Grid item>

                            <img
                                src={'https://truster-bucket.s3.us-west-2.amazonaws.com/images/avatar/' + localStorage.getItem('userLogin') + '.png'}
                                width='160px' height='160px'
                                style={{objectFit: 'cover', borderRadius: '50%',}}
                                //     src={
                                //         UriServices() + '/' + user + '/images/perfil/' + imagesArray[0]}
                                //     width='160px' height='160px' style={{
                                //     borderRadius:'50%',
                                //     objectFit:'cover'
                                // }}
                            />

                        </Grid>
                        :
                <Grid item>
                    <img src={elipse} style={{width: '160px'}}/>
                </Grid>
                    )
                }
                <Grid component="label">
                    <input
                        id="file"
                        name="file"
                        type="file"
                        hidden
                        onChange={(e) => onFileChange(e)}
                    />
                    <Typography style={{
                        align: "center",
                        color: 'rgba(255, 255, 255, 0.95)',
                        fontFamily: "Poppins",
                        fontSize: '11px',
                        fontWeight: 500,
                        textAlign: 'center',
                        paddingTop: 15,
                        letterSpacing: '-0.02em',
                        cursor: 'pointer'
                    }}>
                        Editar Avatar
                    </Typography>
                </Grid>


                <Grid item style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>

                    <div style={{position: 'relative'}}>
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
                        <div style={{
                            position: 'absolute', right: '-30px',
                            top: '0'
                        }}>
                            <img src={ShareButton} alt='share button'/>
                        </div>
                    </div>
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

                <Grid container direction={"row"}>
                    <Grid item xs={2}/>
                    <Grid container direction={"column"} xs
                          style={{display: 'flex', alignItems: 'center'}}>
                        <Grid item style={{display: "flex", alignItems: 'center'}}>
                            <img src={icon1} style={{paddingRight: '16px'}}/>
                            <Typography className={classes.numberGrid}>
                                +0
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.textGrid}>
                                consultas este mes
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container direction={"column"} xs
                          style={{display: 'flex', alignItems: 'center'}}>
                        <Grid item style={{display: "flex", alignItems: 'center'}}>
                            <img src={icon2} style={{paddingRight: '16px'}}/>
                            <Typography className={classes.numberGrid}>
                                +0
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.textGrid}>
                                Usuarios que confían
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid item xs={2} style={{display: "flex", alignItems: 'flex-end', justifyContent: 'flex-end'}} component="label">
                        <div style={{display: "flex", alignItems: 'center', paddingBottom: '8px'}}>
                            <img src={icon3} style={{paddingRight: '8px'}}/>


                            <input
                                id="file"
                                name="file"
                                type="file"
                                hidden
                                onChange={(e) => onFileChangeCover(e)}
                            />
                            <Typography
                                style={{
                                    align: "center",
                                    color: '#D4D4D4',
                                    fontFamily: "Poppins",
                                    fontSize: '14px',
                                    fontWeight: 'normal',
                                    textAlign: 'center',
                                    letterSpacing: '-0.02em'
                                }}
                            >
                                Editar Cover
                            </Typography>
                        </div>
                    </Grid>
                </Grid>


            </Grid>

        </React.Fragment>
    );
}

export default Header;
