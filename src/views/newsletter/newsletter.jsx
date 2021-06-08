import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import Header from '../../components/newsletter/header';
import Footer from '../../components/newsletter/footer';
import NewAccount from '../../components/newsletter/newAccount';
import NewPassword from '../../components/newsletter/newPassword';
import ValidationSuccess from "../../components/newsletter/validationSuccess";
import ValidationFailed from "../../components/newsletter/validationFailed";
import ProfileImage from "../../asset/images/newsletter/profileImage.png";
import LevelUp from "../../components/newsletter/levelUp";


const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: "center",
        height: "100%",
        minHeight: "100vh"
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: '768px'
    },
    spacer: {
        height: "1px",
        width: "80%",
        background: "#323232"
    },
    image: {
        marginTop: '30px',
        width: "50%",
        height: "auto",
        paddingBottom: '12px'
    },
    item: {
        marginTop: '30px',
        marginBottom: '30px',
        color: 'white'
    }
});

function Newsletter(props) {
    const {newsType, classes} = props;

    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <Header/>
                <div className={classes.spacer}/>
                <img src={ProfileImage} className={classes.image}/>
                {newsType === 'newAccount' && (
                    <NewAccount/>
                )}
                {newsType === 'newPassword' && (
                    <NewPassword/>
                )}
                {newsType === 'validationSuccess' && (
                    <ValidationSuccess/>
                )}
                {newsType === 'validationFailed' && (
                    <ValidationFailed/>
                )}
                {newsType === 'levelUp' && (
                    <LevelUp/>
                )}
                <div style={{flexGrow: 1}}/>
                <div className={classes.spacer}/>
                <Footer/>
            </div>
        </div>
    );
}

export default withStyles(styles, {withTheme: true})(Newsletter);
