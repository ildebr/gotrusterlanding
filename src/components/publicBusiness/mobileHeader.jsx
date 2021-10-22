import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import background from '../../asset/images/myBusiness/RectangleMobile 4.png';
import elipse from "../../asset/images/myBusiness/Ellipse 6.png"
import cliente from "./../../setting/cliente";
import { GetImage, GetJson } from "../../services/hostConfig";

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


function MobileHeader(props) {
    const [user, setUser] = useState(null)
    const [haveImage, setHaveImage] = useState(false);
    const [haveImageCover, setHaveImageCover] = useState(false);
    const classes = useStyles();

    /* function getImages() {
        let json = '';
        let coverNegocio = '';
        cliente.get(GetJson(), {}).then((res) => {

            json = res['data']['content']['images']['avatar']
            coverNegocio = res['data']['content']['images']['coverPerfil']

            if (json.includes(String(localStorage.getItem('userLogin')))) {
                setHaveImage(true)
                console.log()
            }
            if (coverNegocio.includes(String(localStorage.getItem('userLogin')))) {
                setHaveImageCover(true)
            }


        }).catch(e => {
            console.log(e);
        })

    } */
   /*  function getImagesCover(){
        cliente.get(GetImage(), {
            params: {
                'user': this.state.user,
                'folder': 'coverNegocio'
            }
        }).then(
            res => {
                // console.log(res)
                this.setState({ imagesArray: res['data']['fileNames'] })
            }
        )
    } */
    function addDefaultCoverImage (e ){
        e.target.src = background
    }   
    function addDefaultAvatarImage (e){
        e.target.src = elipse
    }   

    useEffect(() => {

        if (user === null) {
            setUser(localStorage.getItem('userLogin'))
          /*   getImages()
            getImagesCover() */
        }

    }, [haveImage, haveImageCover, user])

    return (
        <React.Fragment>
            <div style={{ width: '100%' }}>
                <div className={classes.background}>
                  
                        <img
                            src={'https://truster-bucket.s3.us-west-2.amazonaws.com/images/coverNegocio/' + user + '.png'}
                            width='100%'
                            style={{ width: '100%' }}
                            onError={addDefaultCoverImage}
                        /> 
                        <img
                            src={'https://truster-bucket.s3.us-west-2.amazonaws.com/images/avatar/' + localStorage.getItem('userLogin') + '.png'}
                            width='120px' height='120px' style={{
                                position: 'absolute',
                                bottom: '-35px',
                                borderRadius: '50%',
                                objectFit: 'cover'
                            }}
                            onError={addDefaultAvatarImage}
                        />

                       
                </div>
            </div>
        </React.Fragment>

    );
}

export default MobileHeader;