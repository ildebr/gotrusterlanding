import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {Typography, Button, Grid} from "@material-ui/core";
import { GetImage, Fileload, UriServices} from '../../services/hostConfig';
import Cliente from './../../setting/cliente'
import Cross from '../../asset/images/myBusiness/cross.svg'



const useStyles = makeStyles(theme => ({
    titulo: {
        color: '#fff',
        fontFamily: "Poppins",
        fontSize: '12px',
        fontWeight: 600,
        textAlign: 'left !important',
        letterSpacing: '-0.02em',
        [theme.breakpoints.down('md')]: {
            marginBottom:'30px'
        },

    },
    rectangle: {
        height: '68px',
        width: '90px',
        background: '#202020',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'left',
        justifyContent: 'center',
        [theme.breakpoints.down('md')]: {
            height: '68px',
            width: '90px',
        },
    },
    gridFotos: {
        display: 'flex', 
        justifyContent: 'flex-start',
        maxWidth: '400px',
        marginTop: '30px',
        flexDirection: 'row',
        overflowX: 'auto',
        [theme.breakpoints.down('md')]: {
            maxWidth: '300px'
        },
    }

}));

function Imagenes(props) {
    const classes = useStyles();
    const [file, setFile] = useState(null)
    const [imagesArray, setImagesArray] = useState(null)
    const [displayImage, setDisplayImage] = useState(0)
    const [user, setUser] = useState(null)
    const width = props.width;


    const onFileChange = (event) => {
        let fileName = event.target.files[0].name
        const reader = new FileReader();
        let _file = event.target.files[0];

        reader.onload = function (event) {
            setFile(event.target.result)
            Cliente.post(Fileload(), {
                    'file': event.target.result,
                    'fileName': fileName,
                    'user': user,
                    'destination': 'negocio'
                }
            ).then(() => getImages())
        };
        reader.readAsDataURL(_file);
    }

    function getImages() {
        Cliente.get(GetImage(), {
            params: {
                'user': user,
                'folder': 'negocio'
            }
        },).then(
            res => {
                setImagesArray(res['data']['fileNames'])
            }
        )
    }


    useEffect(() => {

        if (user === null) {
            setUser(localStorage.getItem('userLogin'))
        }

        if (imagesArray === null && user !== null) {
            getImages();
        }
        //let user = JSON.parse(localStorage.getItem('currentUser'));

    }, [imagesArray, file, user]);

    return (
        <React.Fragment>

            {width >= 600 ?
                <Typography className={classes.titulo}>
                    Imágenes
                </Typography>
                :
                <Typography className={classes.titulo}>
                    Galeria
                </Typography>
            }
            <Grid container
                  style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}} justify='flex-start'>

                {imagesArray !== null && imagesArray.length > 0 ?

                    <React.Fragment>
                        <Grid item container style={{marginTop: '10px'}}>
                            <div>
                                <div>
                                    <button style={{position: 'absolute', marginLeft: '160px', marginTop: '10px', backgroundColor: 'rgba(0,0,0,0)', border: '1px solid rgba(255,255,255,0)'}}><img src={Cross} alt=''/></button>
                                </div>
                                <img
                                    src={UriServices() + '/' + user + '/images/negocio/' + imagesArray[displayImage]}
                                    style={{width: '100%', borderRadius: '10px', height: '328px', objectFit:'cover'}}/>
                            </div>

                        </Grid>

                    </React.Fragment>
                    : <a/>
                }

                <Grid item className={classes.gridFotos} justify="flex-start">

                    {imagesArray !== null && imagesArray.length > 1 && imagesArray.map((imagen) =>
                        <div onClick={() =>
                            setDisplayImage(imagesArray.indexOf(imagen))

                        }>
                            <img src={UriServices() + '/' + user + '/images/negocio/' + imagen}
                                 style={{
                                     height: '68px',
                                     width: '90px', marginRight: '16px', borderRadius: '10px', objectFit: 'cover'
                                 }}/>
                        </div>
                    )}

                    <Button component="label" className={classes.rectangle}>
                        <FontAwesomeIcon icon={faPlus} style={{
                            color: '#999999', fontSize: "12px",
                        }}/>
                        <input
                            id="file"
                            name="file"
                            type="file"
                            hidden
                            onChange={(e) => onFileChange(e)}
                        />
                    </Button>


                </Grid>

            </Grid>

        </React.Fragment>
    );
}

export default Imagenes;