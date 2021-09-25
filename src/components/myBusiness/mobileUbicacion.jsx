import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Switch from '@material-ui/core/Switch';
import {Typography} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
const dataSourceAvailable = require('./../../services/provincias.json');
const dataSourceAvailableLocal = require('./../../services/municipios.json');



const useStyles = makeStyles(theme => ({
    titulo1: {
        align: "center",
        color: '#ACFD00',
        fontFamily: "Poppins",
        fontSize: 19,
        fontWeight: 600,
        textAlign: 'left',
        letterSpacing: '-0.02em',
    },
    subtitulo: {
        align: "center",
        color: '#fff',
        fontFamily: "Poppins",
        fontSize: 12,
        fontWeight: 600,
        textAlign: 'left',
        letterSpacing: '-0.02em',
    },
    select: {

        '& .MuiSelect-select':
            {
                color: '#666666',
                align: "center",
                fontFamily: "Poppins",
                fontSize: '15px',
                fontWeight: 600,
                textAlign: 'left',
                letterSpacing: '-0.02em',
            },

        "& .MuiSvgIcon-root": {
            color: "#999999",
        },
        "&:before": {
            borderBottomColor: "#999999",
            bottom: '-10px',
        },
        "&:after": {
            borderBottomColor: "#999999",
            bottom: '-10px',
        },
    },
}));


const CssTextField = withStyles({
    root: {

        '& .MuiFormControl-root': {
            display: 'grid',
        },
        '& .MuiInputLabel-root': {
            color: '#666666',
            align: "center",

            fontFamily: "Poppins",
            fontSize: '15px',
            fontWeight: 500,
            textAlign: 'left',
            letterSpacing: '-0.02em',
        },
        '& .MuiInput-underline-root': {
            color: '#fff'
        },

        '& label.Mui-focused': {
            color: '#2C2C2C',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#2C2C2C',
            bottom: '-10px',
        },
        '& .MuiInput-underline:before': {
            borderBottomColor: '#2C2C2C',
            bottom: '-10px',
        },

        '& .MuiInputBase-input': {
            color: '#fff',
            align: "center",
            fontFamily: "Poppins",
            fontSize: '15px',
            fontWeight: 500,
            textAlign: 'left',
            letterSpacing: '-0.02em',
        },

        '& .MuiFormHelperText-root': {
            color: '#fff'
        }
    },
})(TextField);

const AntSwitch = withStyles((theme) => ({
    root: {
        width: 28,
        height: 16,
        padding: 0,
        display: 'flex',
    },
    switchBase: {
        padding: 2,
        color: '#000000',
        '&$checked': {
            transform: 'translateX(12px)',
            color: '#000000',
            '& + $track': {
                opacity: 1,
                backgroundColor: '#ACFD00',
                borderColor: '#ACFD00',
            },
        },
    },
    thumb: {
        width: 12,
        height: 12,
        boxShadow: 'none',
    },
    track: {
        //border: `1px solid ${theme.palette.grey[500]}`,
        borderRadius: 16 / 2,
        opacity: 1,
        backgroundColor: theme.palette.common.white,
    },
    checked: {},
}))(Switch);

function MobileUbicacion(props) {
    const classes = useStyles();
    const [switchState, setSwitchState] = useState(false)
    const [imageAddCount, setImageAddCount] = useState(1)
    const [province, setProvince] = React.useState([]);
    const [localidad, setLocalidad] = React.useState([]);
    const [local, setLocal] = React.useState([]);
    const [Adress, setAdress] = React.useState('');
    const [postal, setPostal] = React.useState('');
    const [number, setNumber] = React.useState('');

    const handleProvinceChange = (e) => {      
        setProvince(e.target.value)
        localStorage.setItem("provinceBussines",e.target.value)
       
    }
    const handleLocal=(e)=>{
        setLocal(e.target.value)
        localStorage.setItem("localBussines",e.target.value)
    }  
    const handleAdresses =(e)=>{
        setAdress(e.target.value)
        localStorage.setItem("adressBussines",e.target.value)
    }
    const handlePostal =(e)=>{
        setPostal(e.target.value)
        localStorage.setItem("postalBussines",e.target.value)
    }
    const handleNumber =(e)=>{
        setNumber(e.target.value)
        localStorage.setItem("numberBussines",e.target.value)
    }
    
    const handleDataSourceAvailableLocal =(e) =>{
        e.preventDefault();
        let dataNewArrayLocal =[];
        let local ='';
        let provincias ='';
        let provincia = province;
        for (let index = 0; index < dataSourceAvailableLocal.length; index++) {
             let element = dataSourceAvailableLocal[index];
            local = element.nombre;
            console.log(local)
            provincias = element["provincia"]["nombre"]; 
            console.log(provincias)
            if (provincia === provincias){
                dataNewArrayLocal.push(local)
            }
            
        }
       // console.log(dataNewArrayLocal)
        setLocalidad(dataNewArrayLocal)
        return dataNewArrayLocal;
    }

    return (
        <React.Fragment>
            <Grid container direction={'column'} style={{marginTop:'60px', marginBottom:'32px'}}>
                <Grid container direction={"row"}
                      style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Grid item>
                        <Typography className={classes.titulo1}>
                            Ubicación
                        </Typography>
                    </Grid>
                    <Grid item>
                        <AntSwitch
                            checked={switchState}
                            onChange={() => setSwitchState(!switchState)}
                            name="checkedA"

                        />
                    </Grid>
                </Grid>
                {switchState ?
                    <Grid container direction={"column"} style={{paddingTop: '16px'}}>
                        <Typography className={classes.subtitulo}>
                            Dirección
                        </Typography>
                        <Grid container direction={"row"} style={{paddingTop: '16px'}}>
                            <Grid item xs={9} style={{paddingRight: '16px'}}>
                                <div style={{display: 'grid', paddingTop: '4px'}}>
                                    <CssTextField placeholder="Calle" onChange={handleAdresses} value={Adress}/>
                                </div>
                            </Grid>
                            <Grid item xs={3}>
                            <div style={{display: 'grid', paddingTop: '4px'}}>
                                <CssTextField placeholder="N°" onChange={handleNumber} value={number}/>
                            </div>
                        </Grid>

                        </Grid>
                        <Grid item style={{display: 'grid', paddingTop: '32px'}}>

                            <Select defaultValue='none' 
                            className={classes.select}
                            onChange={handleProvinceChange}
                            value={province}      
                            >
                            {dataSourceAvailable.map(provinces => {
                                       return ( <option key={provinces.nombre}
                                            value={provinces.nombre}  style={{
                                                '& .MuiInputBase-root': {
                                                    color: '#fff',
                                                    align: "center",
                                                    fontFamily: "Poppins",
                                                    fontSize: '15px',
                                                    fontWeight: 500,
                                                    textAlign: 'left',
                                                    letterSpacing: '-0.02em',
                                                },
                                            }}
                                        >{provinces.nombre}</option>)
                                        
                                    })
                                }

                                
                            </Select>

                        </Grid>
                        <Grid item style={{display: 'grid', paddingTop: '32px'}}>

                            <Select defaultValue='none' 
                            className={classes.select}
                            onChange={handleLocal}
                            value={local}
                            onClick={handleDataSourceAvailableLocal}                      
                            >
                                {localidad.map(locality => {
                                       return ( <option key={locality}
                                            value={locality} 
                                            style={{
                                                '& .MuiInputBase-root': {
                                                    color: '#fff',
                                                    align: "center",
                                                    fontFamily: "Poppins",
                                                    fontSize: '15px',
                                                    fontWeight: 500,
                                                    textAlign: 'left',
                                                    letterSpacing: '-0.02em',
                                                },
                                            }} onClick={(e)=>{
                                                localStorage.setItem("localBussines",locality.nombre)
                                             }}>{locality}</option>)})
                                        }
                              
                            </Select>

                        </Grid>

                        <Grid item style={{display: 'grid', paddingTop: '32px'}}>
                            <CssTextField placeholder="Código Postal" onChange={handlePostal} value={postal}/>
                        </Grid>

                        <Grid item style={{paddingTop: '56px'}}>
                            {/*<Typography className={classes.subtitulo}>*/}
                            {/*    Galería*/}
                            {/*</Typography>*/}
                        </Grid>
                        {/*<Button*/}
                        {/*    onClick={*/}
                        {/*        () => setUser([user, <User/>])*/}
                        {/*    }*/}
                        {/*>*/}
                        {/*    <Typography style={{color: '#fff'}}>*/}
                        {/*        +1*/}
                        {/*    </Typography>*/}

                        {/*</Button>*/}

                        {/*<div style={{overflowX: 'scroll', whiteSpace: 'nowrap', width: '200px'}}>*/}

                        {/*    {user}*/}

                        {/*</div>*/}


                    {/*<div style={{width:'100vw',*/}
                    {/*    position:'relative',*/}
                    {/*    marginLeft: '-50vw',*/}
                    {/*    left:'50%',*/}
                    {/*    overflow:'scroll'}}>*/}
                    {/*<Grid container direction={"row"} style={{*/}
                    {/*    width:'max-content',*/}
                    {/*    marginTop:'16px'*/}
                    {/*    }}>*/}
                    {/*    <img src={imagen}*/}
                    {/*    style={{*/}
                    {/*        width:'168px',*/}
                    {/*        height:'133px',*/}
                    {/*        marginLeft:'22px'*/}
                    {/*    }}*/}
                    {/*    />*/}
                    {/*    <div style={{*/}
                    {/*        width:'168px',*/}
                    {/*        height:'133px',*/}
                    {/*        borderRadius:'18px',*/}
                    {/*        backgroundColor:'#202020',*/}
                    {/*        margin:'0 22px',*/}
                    {/*        display:'flex',*/}
                    {/*        justifyContent:'center',*/}
                    {/*        alignItems:'center'*/}
                    {/*    }}>*/}
                    {/*        <FontAwesomeIcon icon={faPlus} style={{*/}
                    {/*            color: '#999999', fontSize: 18*/}
                    {/*        }}/>*/}
                    {/*    </div>*/}
                    {/*    <div style={{*/}
                    {/*        width:'168px',*/}
                    {/*        height:'133px',*/}
                    {/*        borderRadius:'18px',*/}
                    {/*        backgroundColor:'#202020',*/}
                    {/*        marginRight:'22px',*/}
                    {/*        display:'flex',*/}
                    {/*        justifyContent:'center',*/}
                    {/*        alignItems:'center'*/}
                    {/*    }}>*/}
                    {/*        <FontAwesomeIcon icon={faPlus} style={{*/}
                    {/*            color: '#999999', fontSize: 18*/}
                    {/*        }}/>*/}
                    {/*    </div>*/}


                    {/*</Grid>*/}
                    {/*</div>*/}

                    {/*<Imagenes/>*/}

                    </Grid>
                    :
                    <a/>

                }

            </Grid>

        </React.Fragment>

    );
}

export default MobileUbicacion;