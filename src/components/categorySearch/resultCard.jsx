import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import MasterBadge from '../../asset/images/categorySearch/masterBadge.svg';
import OkayIcon from '../../asset/images/categorySearch/okayIcon.svg';
import RegisterCard from '../../components/search/registerCard';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '265px',
        width: '100%',
        padding: '10px',
        marginTop: '25px'
    },
    information: {},
    infoRow: {
        paddingTop: '8px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    name: {
        fontFamily: "Poppins",
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '16px',
        lineHeight: '22px',
        letterSpacing: '-0.02em',
        color: '#FFFFFF',
        textAlign: 'left'
    },
    category: {
        fontFamily: "Poppins",
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '13px',
        lineHeight: 1,
        letterSpacing: '-0.01em',
        color: '#ACFD00',
        textAlign: 'left'
    },
    points: {
        fontFamily: "Poppins",
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '34px',
        letterSpacing: '-0.03em',
        color: '#ACFD00',
        textAlign: 'right'
    },
    totalPoints: {
        fontFamily: "Poppins",
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '19px',
        lineHeight: '42px',
        letterSpacing: '-0.03em',
        color: '#999999',
        textAlign: 'right'
    },
    recommendations: {
        fontFamily: "Poppins",
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '12px',
        lineHeight: '18px',
        letterSpacing: '-0.02em',
        color: '#999999',
    }
});

function ResultCard(props) {
    const { data } = props;
    const classes = useStyles();

    return (
        <div>
            {data.name == 'register' ? <RegisterCard /> :
                <div className={classes.root}>
                    <img src={data.image} />
                    <div className={classes.information}>
                        <div className={classes.infoRow}>
                            <div>
                                <Typography className={classes.name}>
                                    {data.name}
                                </Typography>
                                <Typography className={classes.category}>
                                    {data.category}
                                </Typography>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }}>
                                <Typography className={classes.points}>
                                    {data.points}
                                </Typography>
                                <Typography className={classes.totalPoints}>
                                    {'/28'}
                                </Typography>
                            </div>
                        </div>
                        <div className={classes.infoRow} style={{ paddingTop: '0px' }}>
                            <img src={OkayIcon} style={{ marginRight: '3px' }} />
                            <Typography className={classes.recommendations}>
                                {`${data.recommendations} usuarios recomiendan`}
                            </Typography>
                            <div style={{ flexGrow: 1 }} />
                            <img src={MasterBadge} />
                        </div>
                    </div>
                </div> }
        </div>
        
    );
}

export default ResultCard;
