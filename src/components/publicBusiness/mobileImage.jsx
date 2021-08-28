import React from 'react';
import imagen from '../../asset/images/publicBusiness/Rectangle 4.png';
import {makeStyles} from "@material-ui/core/styles";
import {Button} from "@material-ui/core";
import {Typography} from "@material-ui/core";
const useStyles = makeStyles(theme => ({
    buton:{
        width:'100%',
        background: '#151515',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '8px',
        padding:'14px',
        marginTop:'8px'
    },
    texto:{
        color: '#FFF',
        fontFamily: "Poppins",
        fontSize: 16,
        fontWeight: 500,
        textAlign: 'center',
        letterSpacing: '-0.02em',
        textTransform:'none'
    }
}))
function MobileImage(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div style={{paddingTop:'20px'}}>
                <img src={imagen} style={{ width:'100%',
                    borderRadius: '13px'}}/>
                    <Button className={classes.buton}>
                        <Typography className={classes.texto}>Ver Galería</Typography>
                    </Button>
            </div>
        </React.Fragment>

    );
}

export default MobileImage;