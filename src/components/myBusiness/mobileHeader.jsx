import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import background from '../../asset/images/myBusiness/RectangleMobile 4.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faImage } from "@fortawesome/free-solid-svg-icons";
import { Typography } from "@material-ui/core";
import elipse from "../../asset/images/myBusiness/Ellipse 6.png"
import Grid from "@material-ui/core/Grid";
import Cliente from "../../setting/cliente";
import { Fileload, GetImage } from "../../services/hostConfig";
import { LoopCircleLoading } from "react-loadingg";

const useStyles = makeStyles(theme => ({
    background: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    divRectangle: {
        padding: '5px 7px',
        top: 16, right: 10,
        background: '#413f3f',
        mixBlendMode: 'hard-light',
        borderRadius: '3px',
        position: 'absolute',
    },
    divRectangle1: {
        padding: '5px 7px',
        bottom: 16, right: 10,
        background: '#413f3f',
        mixBlendMode: 'hard-light',
        borderRadius: '3px',
        position: 'absolute',
    },
    textOverlay: {
        align: "center",
        color: '#FFF',
        fontFamily: "Poppins",
        fontSize: 8,
        fontWeight: 500,
        textAlign: 'center',
        letterSpacing: '-0.02em',

    }

}));

function waiter() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 7000);
    });
}

function MobileHeader(props) {
    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState(null)
    const [user, setUser] = useState(null)
    const [haveImage, setHaveImage] = useState(false);
    const [haveImageCover, setHaveImageCover] = useState(false);

    function getImages(){
        Cliente.get(GetImage(), {
            params: {
                'user': user,
                'folder': 'avatar'
            }
        }).then(
            res => {
                console.log(res)
               //  setImagesArray(res['data']['fileNames'] )
            }
        )
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
            <div style={{ width: '100%' }}>
                <div className={classes.background}>

                    {loading ?
                        <div style={{ height: '160px' }}>
                            <LoopCircleLoading size='large' color='#ACFD00' />

                        </div>

                        :
                        (user !== null ?
                            <Grid item>

                                <img
                                    src={'https://truster-bucket.s3.us-west-2.amazonaws.com/images/coverNegocio/' + user + '.png'}
                                    width='100%'
                                    style={{ width: '100%' }}
                                
                                />

                            </Grid>
                            :
                            <Grid item>
                                <img src={background} style={{ width: '100%' }} />
                            </Grid>
                        )
                    }

                    <div className={classes.divRectangle}>
                        <Grid container direction={'row'} style={{ display: 'flex', alignItems: 'center' }} component="label">
                            <input
                                id="file"
                                name="file"
                                type="file"
                                hidden
                                onChange={(e) => onFileChangeCover(e)}
                            />
                            <Grid item>
                                <FontAwesomeIcon icon={faImage} style={{
                                    color: '#fff', fontSize: 18, paddingRight: '6px'
                                }} />
                            </Grid>
                            <Grid item>
                                <Typography className={classes.textOverlay}>
                                    Editar Portada
                                </Typography>

                            </Grid>
                        </Grid>

                    </div>
                    <div className={classes.divRectangle1} >
                        <Grid container direction={'row'} style={{ display: 'flex', alignItems: 'center' }} component="label">
                            <input
                                id="file"
                                name="file"
                                type="file"
                                hidden
                                onChange={(e) => onFileChange(e)}
                            />
                            <Grid item>

                                <FontAwesomeIcon icon={faUserCircle} style={{
                                    color: '#fff', fontSize: 18, paddingRight: '6px'
                                }} />
                            </Grid>
                            <Grid item>
                                <Typography className={classes.textOverlay}>
                                    Editar Avatar
                                </Typography>

                            </Grid>
                        </Grid>
                    </div>
                    {loading ?
                        <div style={{ height: '160px' }}>
                            <LoopCircleLoading size='large' color='#ACFD00' />

                        </div>

                        :
                        (user !== null ?

                            <img src={'https://truster-bucket.s3.us-west-2.amazonaws.com/images/avatar/' + localStorage.getItem('userLogin') + '.png'}
                                style={{ width: '35%', height:'50%', borderRadius: '50%', position: 'absolute', bottom: '-35px' }}
                            />


                            :

                            <img src={elipse} style={{ width: '30%', position: 'absolute', bottom: '-35px' }} />

                        )
                    }

                </div>
            </div>
        </React.Fragment>

    );
}

export default MobileHeader;