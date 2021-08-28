import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faToggleOn, faAngleDown} from "@fortawesome/free-solid-svg-icons";
import withStyles from "@material-ui/core/styles/withStyles";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";


const useStyles = makeStyles(theme => ({
    texto: {
        color: '#666666',
        fontFamily: "Poppins",
        fontSize: '16px',
        fontWeight: 'normal',
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

function Ubicacion(props) {
    const classes = useStyles();
    const [switchState, setSwitchState] = useState(false)
    return (
        <React.Fragment>
            <Grid container direction={'row'} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '104px',
            }}>

                <Grid item>
                    <Typography style={{
                        color: '#ACFD00',
                        fontFamily: "Poppins",
                        fontSize: '22px',
                        fontWeight: 'normal',
                        textAlign: 'left',
                        letterSpacing: '-0.02em',

                    }}>
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
                <div>
                    <Typography style={{
                        color: '#FFF',
                        fontFamily: "Poppins",
                        fontSize: '14px',
                        fontWeight: 'normal',
                        textAlign: 'left',
                        letterSpacing: '-0.02em',
                        paddingTop: '34px'
                    }}>
                        Dirección
                    </Typography>

                    <Grid container direction={"column"} style={{paddingTop: '34px'}}>
                        <Grid container direction={"row"} style={{display: 'flex'}}>
                            <Grid item xs={9}>
                                <div style={{display: 'grid', paddingRight: '16px'}}>
                                    <CssTextField placeholder="Calle"/>
                                </div>

                            </Grid>
                            <Grid item xs={3}>
                                <div style={{display: 'grid',}}>
                                    <CssTextField placeholder="Numero"/>
                                </div>
                            </Grid>
                        </Grid>

                        <Grid item style={{paddingTop: '44px'}}>
                            <div style={{display: 'grid', paddingTop: '4px'}}>

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
                                        Localidad
                                    </option>
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                </Select>

                            </div>
                        </Grid>

                        <Grid item style={{paddingTop: '44px'}}>
                            <div style={{display: 'grid', paddingTop: '4px'}}>

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
                                        Provincia
                                    </option>
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                </Select>

                            </div>
                        </Grid>


                        <div style={{display: 'grid', paddingTop: '48px'}}>
                            <CssTextField placeholder="Código Postal"/>
                        </div>


                    </Grid>
                </div>
                :
                <a/>
            }

        </React.Fragment>
    );
}

export default Ubicacion;