import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Button as MuiButton} from '@material-ui/core';
import arrowIcon from '../../asset/images/newsletter/arrow.png'

const useStyles = makeStyles({
    button: {
        border: '1px solid #ACFD00',
        boxSizing: 'border-box',
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
        borderRadius: '12px'
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '80px'
    },
    text: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '12px',
        letterSpacing: '-0.02em',
        color: '#FFFFFF',
        textTransform: "capitalize",
        padding: '6px 16px'
    },
    arrow: {
        height: '6px',
        width: 'auto',
        paddingLeft: '10px'
    }
});

function Button(props) {
    const {children} = props;
    const classes = useStyles();
    return (
        <MuiButton {...props} className={classes.button} classes={{text: classes.text}}>
            <div className={classes.content}>
                {children}
                <div style={{flexGrow: 1}}/>
                <img src={arrowIcon} className={classes.arrow}/>
            </div>
        </MuiButton>
    );
}

export default Button;
