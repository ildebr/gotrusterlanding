import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
        height: 1
    }
}));

const CircularDeterminate = ({ givenValue }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CircularProgress size={135} variant="determinate" value={givenValue} thickness={1.5} style={{ 'color': '#ACFD00', 'border': '#666666' }} />
        </div>
    );
}
export default CircularDeterminate;