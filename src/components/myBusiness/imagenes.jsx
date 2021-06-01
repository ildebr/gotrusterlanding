import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import imagen from "../../asset/images/myBusiness/Rectangle 4.png"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes, faPlus} from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles(theme => ({
    titulo: {
        color: '#fff',
        fontFamily: "Poppins",
        fontSize: '12px',
        fontWeight: 600,
        textAlign: 'left !important' ,
        letterSpacing: '-0.02em'
    },
    rectangle:{
        height:'68px',
        width:'99%',
        background: '#202020',
        borderRadius:'10px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    }

}));

function Imagenes(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Typography className={classes.titulo}>
                Imágenes
            </Typography>
            <Grid container direction={'column'} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>

                <Grid item>
                    <div style={{position:'relative'}}>
                        <img src={imagen} style={{width:'99%', padding:'10px 0 35px 0'}}/>
                        <FontAwesomeIcon icon={faTimes} style={{
                            color: '#E94342', fontSize: "18px",
                            position:'absolute', top:18, right:10
                        }}/>
                    </div>
                </Grid>

                <Grid container direction={"row"} xs={12} spacing={2} style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <Grid item xs={3}>
                        <div className={classes.rectangle}>
                            <FontAwesomeIcon icon={faPlus} style={{
                                color: '#999999', fontSize: "12px",}}/></div>
                    </Grid>

                    <Grid item xs={3}>
                        <div className={classes.rectangle}>
                            <FontAwesomeIcon icon={faPlus} style={{
                                color: '#999999', fontSize: "12px",}}/></div>
                    </Grid>

                    <Grid item xs={3}>
                        <div className={classes.rectangle}>
                            <FontAwesomeIcon icon={faPlus} style={{
                                color: '#999999', fontSize: "12px",}}/></div>
                    </Grid>

                    <Grid item xs={3}>
                        <div className={classes.rectangle}>
                            <FontAwesomeIcon icon={faPlus} style={{
                                color: '#999999', fontSize: "12px",}}/></div>
                    </Grid>
                </Grid>

            </Grid>

        </React.Fragment>
    );
}

export default Imagenes;