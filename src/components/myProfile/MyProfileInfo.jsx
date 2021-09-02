import React, {useEffect, useState} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Grid, Typography, Button} from '@material-ui/core';
import ReputationImg from '../../asset/images/reputation/perfil.jpg'
import Cover from '../../asset/images/myProfile/cover.svg'
import Logo from '../../asset/images/reputation/logo.svg'
import Cliente from "../../setting/cliente";
import {Fileload, GetImage,UriServices} from "../../services/hostConfig";
import {LoopCircleLoading} from "react-loadingg";


const {localStorage} = global.window;
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


const MyProfileInfo = ({modifiedCover}) => {
    const namefull = localStorage.getItem("nombre") + ' ' + localStorage.getItem("apellido");

    const [file, setFile] = useState(null)
    const [user, setUser] = useState(null)
    const [imagesArray, setImagesArray] = useState(null)
    const [imagesArrayCover, setImagesArrayCover] = useState(null)
    const [loading, setLoading] = useState(false);


    const onFileChange = (event) => {

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
                    'destination': 'perfil'
                }
            ).then(() => {

                    getImages('perfil')
                    setLoading(false)

            }
            )
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
                    'destination': 'cover'
                }
            ).then(() => {
                    setLoading(false)
                    window.location.reload();
                }
            )
        };

        reader.readAsDataURL(_file);
    }

    function getImages(folder) {
        Cliente.get(GetImage(), {
            params: {
                'user': user,
                'folder': folder
            }
        },).then(
            res => {
                if (folder === 'cover') {
                    setImagesArrayCover(res['data']['fileNames'])
                }
                else{
                    setImagesArray(res['data']['fileNames'])
                }

                console.log(res)
            }
        )
    }

    useEffect(() => {

        if (user === null) {
            setUser(localStorage.getItem('userLogin'))
        }

        if (imagesArray === null && user !== null) {
            getImages('perfil');
        }

        // if (imagesArrayCover === null && user !== null) {
        //     getImages('cover');
        // }
        //let user = JSON.parse(localStorage.getItem('currentUser'));

    }, [imagesArray, file, user, loading]);
    let occupation = localStorage.getItem('occupation')=='null'? '': localStorage.getItem('occupation');
    return (
        <Grid position="static" color="transparent" style={{
            flexGrow: 1,
            border: 0,
            marginTop: 60,
        }}>
            <Grid container alignItems='center'>
                <Grid container xs={9} xl={9} sm={9} justify="center" alignItems='center'>
                    <Grid container justify='flex-start' xs={12} xl={12} sm={12} alignItems='center'
                          style={{marginBottom: 20}}>
                        <Typography style={{
                            align: "left",
                            color: "#FFFFFF",
                            font: " normal normal 60px/60px PoppinsBold",
                            paddingRight: 10
                        }}>
                            {namefull}
                        </Typography>
                    </Grid>
                    <Grid container justify='flex-start' xs={12} xl={12} sm={12} alignItems='center'
                          style={{marginBottom: 20}}>
                        <Typography style={{
                            font: 'normal normal normal 24px/24px Poppins',
                            textAlign: 'center',
                            letterSpacing: '-0.02em',
                            color: '#ACFD00'
                        }}>
                            {occupation}
                        </Typography>
                    </Grid>
                    <Grid container justify='flex-start' xs={12} xl={12} sm={12} alignItems='center'
                          style={{marginBottom: 20}}>
                        <Typography style={{
                            font: 'normal normal normal 18px/18px Poppins',
                            textAlign: 'center',
                            letterSpacing: '-0.02em',
                            color: '#FFFFFF'
                        }}>
                            Miembro Truster desde Septiembre / 2021
                        </Typography>
                    </Grid>
                    <Grid container justify='flex-start' xs={12} xl={12} sm={12} alignItems='center' component="label">
                        <img src={Cover} alt='cover'/>



                        <input
                            id="file"
                            name="file"
                            type="file"
                            hidden
                            onChange={(e) => onFileChangeCover(e)}
                        />

                        <Typography style={{
                            marginLeft: 20,
                            align: "center",
                            color: "#A3A3A3",
                            font: " normal normal 14px/14px Poppins",
                            paddingRight: 10,
                            cursor: 'pointer'
                        }}>
                            Editar Cover
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container justify='flex-end' xs={3} xl={3} sm={3} style={{marginTop: -10}}>
                    <Grid container justify='flex-end'>

                        {loading ? <LoopCircleLoading size='large' color='#ACFD00'/>
                        :
                            (imagesArray !== null && imagesArray.length > 0 ?



                                <Grid container justify='flex-end' xs={11} xl={11} sm={11}>

                                    <img
                                        src={
                                            UriServices() + '/' + user + '/images/perfil/' + imagesArray[0]}
                                        width='160px' height='160px' style={{
                                        borderRadius:'50%',
                                        objectFit:'cover'
                                    }}
                                    />

                                </Grid>

                                : <Grid container justify='flex-end' xs={11} xl={11} sm={11}>
                                    <img src={ReputationImg} alt='test' width='160px' height='160px' style={{
                                        borderRadius:'50%',
                                        objectFit:'cover'
                                    }} />
                                </Grid>
                            )
                        }



                        <Grid container justify='flex-end' xs={1} xl={1} sm={1}
                              style={{marginTop: 130, marginLeft: -30}}>
                            <img src={Logo} alt='logo'/>
                        </Grid>
                    </Grid>
                    <Grid container justify='flex-end' component="label">
                        {/*<Button component="label">*/}

                        <input
                            id="file"
                            name="file"
                            type="file"
                            hidden
                            onChange={(e) => onFileChange(e)}
                        />

                        <Typography style={{
                            marginTop: 15,
                            marginRight: 30,
                            textAlign: "center",
                            color: "#A3A3A3",
                            font: " normal normal 14px/14px Poppins",
                            cursor: 'pointer'
                        }}>
                            Editar Foto
                        </Typography>
                        {/*</Button>*/}


                    </Grid>

                </Grid>

            </Grid>
        </Grid>)
}
export default withStyles(styles, {withTheme: true})(MyProfileInfo);
