import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import withStyles from "@material-ui/core/styles/withStyles";
import {Typography} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { selectSubCategory } from "../../services/hostConfig";
import { getToken } from './../../setting/auth-helpers';


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


const useStyles = makeStyles(theme => ({
    titulo: {
        align: "center",
        color: '#FFF',
        fontFamily: "Poppins",
        fontSize: 12,
        fontWeight: 600,
        textAlign: 'left',
        letterSpacing: '-0.02em',
    },
    titulo1: {
        align: "center",
        color: '#ACFD00',
        fontFamily: "Poppins",
        fontSize: 19,
        fontWeight: 600,
        textAlign: 'left',
        letterSpacing: '-0.02em',
        paddingBottom: '16px'
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

    descripcion:{
        color: '#666666',
        align: "center",
        fontFamily: "Poppins",
        fontSize: '16px',
        fontWeight: 500,
        textAlign: 'left',
        letterSpacing: '-0.02em',
        padding:'16px'
    },
    textfield:{
        '& .MuiFilledInput-root':{
            backgroundColor:'#202020',
            borderRadius:'12px'
        },

        '& textarea':{
            fontFamily: "Poppins",
            fontWeight: 500,
            fontSize: 16,
            letterSpacing: '-0.02em',
            color: '#666666',
        }
    }

}));

function EditTienda(props) {
    const [currency, setCurrency] = React.useState(' ');
    const [months, setMonths] = React.useState(' ');
    const [sub, setSub] = React.useState('');    
    const [subCat, setSubCat] = React.useState([]); 
    const [active, setActive] = React.useState(true)
    const [nameBussines, setNameBussines]= React.useState('');
    const [summary, setSummary]= React.useState('');
    const [description, setDescription]= React.useState('');
    const classes = useStyles();

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };
    const handleMonths = (e) => {
        setMonths(e.target.value);
       
    }
    const handleSub =(e)=>{
        setSub(e.target.value)
    }
    const handleSubCat =(e)=>{
        setSubCat(e.target.value)
    }
    const handleBussines = (e)=>{
        setNameBussines(e.target.value)
        localStorage.setItem('nameBussines',e.target.value)
    }
    const handleSummary = (e)=>{
        setSummary(e.target.value)
        localStorage.setItem('summary',e.target.value)
    }
    const handleDescription =(e)=>{
        setDescription(e.target.value)
        localStorage.setItem('descriptionBussines',e.target.value)
    }

    return (
        <React.Fragment>
            <Grid container direction={"column"}>
                <Grid item>
                    <Typography className={classes.titulo1}>
                        Tienda
                    </Typography>
                </Grid>


                <Grid item style={{width: '100%'}}>
                    <Typography className={classes.titulo}>
                        Nombre de la Tienda
                    </Typography>
                    <div style={{display: 'grid', paddingTop: '4px'}}>
                        <CssTextField placeholder="Elegí tu nombre" onChange={handleBussines}/>
                    </div>
                </Grid>

                <Grid item style={{width: '100%', paddingTop: '32px'}}>
                    <Typography className={classes.titulo}>
                        Actividad de la tienda
                    </Typography>
                    <div style={{display: 'grid', paddingTop: '4px'}}>
                        <CssTextField placeholder="Software & Development Services" onChange={handleSummary} />
                    </div>
                </Grid>

                <Grid item style={{width: '100%', paddingTop: '32px'}}>
                    <Typography className={classes.titulo}>
                        Categoría
                    </Typography>
                    <div style={{display: 'grid', paddingTop: '4px'}}>

                        <Select defaultValue='none' 
                        className={classes.select}
                        value={months}
                        onChange={handleMonths}
                        >
                        {props.categorys.map(category => {
                                return (<option value="none" key={category.id}
                                    value={category.id} style={{
                                        '& .MuiInputBase-root': {
                                            color: '#fff',
                                            align: "center",
                                            fontFamily: "Poppins",
                                            fontSize: '15px',
                                            cursor:'pointer',
                                            fontWeight: 500,
                                            textAlign: 'left',
                                            letterSpacing: '-0.02em',
                                        }}}                                        
                                        onClick={(e) => {
                                            e.preventDefault()
                                            localStorage.setItem('categoryBussines',months)
                                            setActive(false)
                                            let URI = selectSubCategory()+'/'+category.id;
                                            console.log(URI)
                                            const token = getToken();
                                            fetch(URI, {
                                                headers: {
                                                    'Accept': 'application/json',
                                                    'Content-Type': 'application/json',
                                                    'Authorization': `Bearer ${token}`
                                                }
                                            })
                                                .then(response => {                                               
                                                    return response.json();
                                                })
                                                .then(response => {
                                                    setSubCat(response) 
                                                    console.log(response)                                                                                              
                                                    return response;
                                                })
                                                .catch(e => {
                                                    console.log(e);
                                                })                                
                                          
                                        }}>
                                    {category.description}
                                </option>
                                
                                )
                            }
                            )
                        }
                        </Select>


                    </div>
                </Grid>

                <Grid item style={{width: '100%', paddingTop: '32px'}}>
                    <Typography className={classes.titulo}>
                        Subcategoría
                    </Typography>
                    <div style={{display: 'grid', paddingTop: '4px'}}>


                        <Select defaultValue='none' 
                        className={classes.select} 
                        value={sub}
                        onChange={handleSub}
                        disabled={active}>
                            {subCat.map(subCategory => {
                            return (<option value="none" key={subCategory.id}
                            value={subCategory.id} style={{
                                '& .MuiInputBase-root': {
                                    color: '#fff',
                                    align: "center",
                                    fontFamily: "Poppins",
                                    fontSize: '15px',
                                    fontWeight: 500,
                                    textAlign: 'left',
                                    letterSpacing: '-0.02em',
                                },
                            }} onClick={(e) => {
                                e.preventDefault();
                                localStorage.setItem('subCategoryBussines',sub)
                            }}
                                >
                                 {subCategory.name}
                            </option>)
                          
                        })}
                        </Select>


                    </div>
                </Grid>

                <Grid item style={{width: '100%', paddingTop: '32px', marginBottom:'16px'}}>
                    <Typography className={classes.titulo}>
                        Descripción
                    </Typography>
                </Grid>
                <TextField
                    id="filled-multiline-static"

                    multiline
                    rows={6}
                    placeholder={"Contanos un poco de tu marca, tu local, tu estudio, tu empresa..."}
                    onChange={handleDescription}
                    variant="filled"
                    className={classes.textfield}
                />
                <Typography style={{
                    align: "center",
                    color: '#A3A3A3',
                    fontFamily: "Poppins",
                    fontSize: 12,
                    fontWeight: 400,
                    textAlign: 'left',
                    letterSpacing: '-0.02em',
                    marginTop:'8px'
                }}>
                    máx 300 caracteres
                </Typography>

                <Grid item style={{paddingTop:'16px'}}>
                    <Button style={{
                        background: '#ACFD00',
                        boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)',
                        borderRadius:'14px',
                        textTransform:'None',
                        height:'53px',
                        width:'100%'
                    }}>
                        <Typography style={{
                            align: "center",
                            color: '#252525',
                            fontFamily: "Poppins",
                            fontSize: '16px',
                            fontWeight: 500,
                            textAlign: 'center',
                            letterSpacing: '-0.02em',

                        }}>
                            Guardar Cambios
                        </Typography>
                    </Button>
                </Grid>


            </Grid>
        </React.Fragment>

    );
}

export default EditTienda;