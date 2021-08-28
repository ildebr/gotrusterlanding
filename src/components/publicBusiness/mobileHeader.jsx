import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import background from '../../asset/images/myBusiness/RectangleMobile 4.png';
import elipse from "../../asset/images/myBusiness/Ellipse 6.png"

const useStyles = makeStyles(theme => ({
    background: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    divRectangle: {
        padding:'5px 7px',
        top: 16, right: 10,
        background: '#413f3f',
        mixBlendMode: 'hard-light',
        borderRadius: '3px',
        position: 'absolute',
    },
    divRectangle1: {
        padding:'5px 7px',
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
    const classes = useStyles();
    return (
        <React.Fragment>
            <div style={{width: '100%'}}>
                <div className={classes.background}>
                    <img src={background} style={{width: '100%'}}/>
                    <img src={elipse} style={{width:'30%', position:'absolute', bottom:'-35px'}}/>
                </div>
            </div>
        </React.Fragment>

    );
}

export default MobileHeader;