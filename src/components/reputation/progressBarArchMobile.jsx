import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
});
const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 5,
    },
    colorPrimary: {
        backgroundColor: '#666666',
    },
    bar: {
        borderRadius: 0,
        backgroundColor: '#ACFD00',
    }
}))(LinearProgress);

const LinearDeterminate = ({ value }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <BorderLinearProgress variant="determinate" value={value} />
        </div>
    );
}

export default LinearDeterminate;