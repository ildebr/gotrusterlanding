import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight, faChevronCircleRight} from "@fortawesome/free-solid-svg-icons";
import imagen from "../../asset/images/publicBusiness/Rectangle 4.png";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { GetImage,  UriServices} from '../../services/hostConfig';
import Cliente from './../../setting/cliente'
const useStyles = makeStyles(theme => ({}))

function ImageCarrousel(props) {
    const [imagesArray, setImagesArray] = useState(null)
    const [user, setUser] = useState(props.user)

    const classes = useStyles();


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

        if (imagesArray === null ) {
            getImages();
        }
        //let user = JSON.parse(localStorage.getItem('currentUser'));

    }, [imagesArray,  user]);

    return (
        <React.Fragment>
            <Grid container direction={'column'}>
                <Grid item>
                    <hr style={{width: '88%', marginTop: '11px'}} color='#333333'/>
                </Grid>
                <Grid item>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginTop: '36px',
                        alignItems: 'center',
                        width: '100%'
                    }}>
                        <Button style={{
                            background: '#0F0F0F',
                            borderRadius: '60px',
                            width: '60px',
                            height: '60px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',

                        }}>
                            <FontAwesomeIcon icon={faAngleLeft} style={{

                                color: '#777777', fontSize: "26px", align: 'center',

                            }}/>
                        </Button>
                        <div style={{margin: '0 36px'}}>
                            <img src={imagen} style={{
                                borderRadius: '12px',

                                width: '99%',
                                height: '99%'
                            }}/>
                        </div>
                        <Button style={{
                            background: '#0F0F0F',
                            borderRadius: '60px',
                            width: '60px',
                            height: '60px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <FontAwesomeIcon icon={faAngleRight} style={{

                                color: '#777777', fontSize: "26px", align: 'center',

                            }}/>
                        </Button>
                    </div>
                </Grid>
                <Grid item style={{display:'flex', justifyContent:'center', paddingTop:'24px'}}>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{
                            width: '64px',
                            height: '50px',
                            background: '#ACFD00',
                            marginRight: '5px',
                            borderRadius: '8px'
                        }}/>
                        <div style={{
                            width: '64px',
                            height: '50px',
                            background: '#202020',
                            borderRadius: '8px',
                            margin: '0 5px'
                        }}/>
                        <div style={{
                            width: '64px',
                            height: '50px',
                            background: '#202020',
                            borderRadius: '8px',
                            margin: '0 5px'
                        }}/>

                        <div style={{
                            width: '64px',
                            height: '50px',
                            background: '#202020',
                            borderRadius: '8px',
                            margin: '0 5px'
                        }}/>

                        <div style={{
                            width: '64px',
                            height: '50px',
                            background: '#202020',
                            borderRadius: '8px',
                            margin: '0 5px'
                        }}/>
                        <div style={{
                            width: '64px',
                            height: '50px',
                            background: '#202020',
                            borderRadius: '8px',
                            marginLeft: '5px'
                        }}/>


                    </div>

                </Grid>

            </Grid>


        </React.Fragment>

    );
}

export default ImageCarrousel;