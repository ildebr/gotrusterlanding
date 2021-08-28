import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import button1 from "../../asset/images/myBusiness/button1.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";
import Select from "@material-ui/core/Select";
import { AllCategory } from "../../services/hostConfig";
import { getToken } from './../../setting/auth-helpers';
import Cliente from "../../setting/cliente";

const useStyles = makeStyles(theme => ({
    titulo: {
        color: '#fff',
        fontFamily: "Poppins",
        fontSize: '12px',
        fontWeight: 600,
        textAlign: 'left',
        letterSpacing: '-0.02em'
    },
    texto: {
        color: '#666666',
        fontFamily: "Poppins",
        fontSize: '16px',
        fontWeight: 'normal',
        textAlign: 'left',
        letterSpacing: '-0.02em',
        paddingTop: '6px'
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
    textfield: {
        '& .MuiFilledInput-multiline': {
            padding: '12px 0 0 0'
            //backgroundColor:'#202020',
            //borderRadius:'12px'
        },

        '& textarea': {
            fontFamily: "Poppins",
            fontWeight: 400,
            fontSize: 19,
            letterSpacing: '-0.02em',
            color: '#999999',
        },
        '& .MuiFilledInput-underline:before': {
            //borderBottomColor: '#2C2C2C',
            borderBottom: ' 3px solid #2C2C2C',
        },
        '& .MuiFilledInput-underline:after': {
            //borderBottomColor: '#2C2C2C',
            borderBottom: ' 3px solid #2C2C2C',
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

const CssTextField_Alt = withStyles({
    root: {
        '& .MuiFormControl-root': {
            display: 'grid',
        },
        '& .MuiInputLabel-root': {
            color: '#ACFD00',
            align: "center",

            fontFamily: "Poppins",
            fontSize: '16px',
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
            color: '#ACFD00',
            align: "center",
            fontFamily: "Poppins",
            fontSize: '16px',
            fontWeight: 500,
            textAlign: 'left',
            letterSpacing: '-0.02em',
        },

        '& .MuiFormHelperText-root': {
            color: '#fff'
        }
    },

})(TextField);


function Tienda() {
    const classes = useStyles();

    const handleSubmit = (e) => {
        let URI = AllCategory();
        const token = getToken();
        let category = [];

        Cliente.get(URI, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                console.log(response.data)
                return response.data.json();
            }).then(response => {
                for (let index = 0; index < response.length; index++) {
                    const element = response[index];
                    category.push(element)
                }
                return category
            }).then(response => {
                console.log(response)
            })
            .catch(e => {
                console.log(e);
            })

    }

    return (
        <React.Fragment>
            <Grid container direction={"column"}>
                <Grid item>
                    <Typography className={classes.titulo}>
                        Nombre de la tienda
                    </Typography>

                    <div style={{ display: 'grid', padding: '8px 0' }}>
                        <CssTextField_Alt placeholder="Anagrama Studio" />
                    </div>

                </Grid>

                <Grid item style={{ paddingTop: '27px' }}>
                    <Typography className={classes.titulo}>
                        Actividad de la Tienda
                    </Typography>
                    <div style={{ display: 'grid', paddingTop: '4px' }}>
                        <CssTextField placeholder="A que se dedica tu negocio o servicio?" />
                    </div>

                </Grid>

                <Grid item style={{ paddingTop: '36px' }}>
                    <Typography className={classes.titulo}>
                        Categoría
                    </Typography>

                    <div style={{ display: 'grid', paddingTop: '4px' }}>


                        <Select defaultValue='none' className={classes.select}>
                            {/*handleSubmit.map(category => {
                                return (<option value="none" disabled key={category.id}
                                    value={category.id} >
                                    {category.description}
                                </option>)
                            }
                            )
                        */}
                         <option value="none" disabled style={{
                                '& .MuiInputBase-root': {
                                    color: '#fff',
                                    align: "center",
                                    fontFamily: "Poppins",
                                    fontSize: '15px',
                                    fontWeight: 500,
                                    textAlign: 'left',
                                    letterSpacing: '-0.02em',
                                },
                            }}>
                                Elegí la categoría
                            </option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </Select>
                    </div>

                </Grid>


                <Grid item style={{ paddingTop: '36px' }}>
                    <Typography className={classes.titulo}>
                        Subcategorìa
                    </Typography>
                    <div style={{ display: 'grid', paddingTop: '4px' }}>


                        <Select defaultValue='none' className={classes.select}>
                            <option value="none" disabled style={{
                                '& .MuiInputBase-root': {
                                    color: '#fff',
                                    fontFamily: "Poppins",
                                    fontSize: '15px',
                                    fontWeight: 500,
                                    textAlign: 'left',
                                    letterSpacing: '-0.02em',
                                },
                            }}>
                                Elegí la subcategoría
                            </option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </Select>


                    </div>

                </Grid>

                <Grid item style={{ paddingTop: '66px' }}>
                    <Typography className={classes.titulo}>
                        Descripción
                    </Typography>
                    <div style={{ display: 'grid', paddingTop: '4px' }}>
                        <TextField
                            id="filled-multiline-static"

                            multiline
                            rows={6}
                            placeholder={"International branding, architecture, software and brand positioning firm. Experts in brand development and commercial spaces."}

                            variant="filled"
                            className={classes.textfield}
                        />
                    </div>
                </Grid>

            </Grid>


        </React.Fragment>
    );
}

export default Tienda;