import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from '@material-ui/icons/Menu';
import { Grid, Toolbar, Typography, Button, IconButton, Hidden } from '@material-ui/core';

const styles = theme => ({
    root: {
        flexGrow: 1,
        border: 0,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        align: "center",
        color: "#FFFFFF",
        font: " normal normal 40px/40px Poppins",
    },
    navSign: {
        marginRight: 10,
        color: '#ACFD00',
        fontFamily: 'Poppins',
        fontSize: '16px',
        fontStyle: ' normal',
        fontWeight: '700',
        lineHeight: '24px',
        letterSpacing: ' -0.02em',
        textAlign: 'center'
    },
    authWrapper: {
        [theme.breakpoints.up('xs')]: {
            marginRight: '0px',
            color: '#ACFD00',
            fontFamily: 'Poppins',
            fontSize: '16px',
            fontStyle: ' normal',
            fontWeight: '700',
            lineHeight: '24px',
            letterSpacing: ' -0.02em',
            textAlign: 'left',
            border:'1px',
            borderRadius:'20px',
            borderColor:'#ACFD00',
            textTransform: 'lowercase',            
        },
        [theme.breakpoints.up('ls')]: {            
            color: '#ACFD00',
            fontFamily: 'Poppins',
            fontSize: '16px',
            fontStyle: ' normal',
            fontWeight: '700',
            lineHeight: '24px',
            letterSpacing: ' -0.02em',
            textAlign: 'left',
            textTransform: 'lowercase',
        },
    },
    
});


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            isMenuOpen: false

        };
    }

    render() {
        const { classes, handleClick, handleCloseClick } = this.props;
        const { anchorEl, isMenuOpen } = this.state;
        return (
            <Grid position="static" color="transparent" className={classes.root}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="transparent" aria-label="menu">
                        <MenuIcon style={{ color: '#FFFFFF' }} />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Truster
                    </Typography>
                    <Button
                       className={classes.authWrapper}> Log in</Button>
                    <Typography
                        style={{
                            color: '#ACFD00',
                            fontFamily: 'Poppins',
                            fontSize: '16px',
                            fontStyle: ' normal',
                            fontWeight: '700',
                            lineHeight: '24px',
                            letterSpacing: ' -0.02em',
                            textAlign: 'left'
                        }} >&nbsp;&nbsp;&nbsp;       </Typography>
                   <Hidden xsDown>
                    <Typography
                        style={{
                            color: '#FFFFFF',
                            fontFamily: 'Poppins',
                            fontSize: '16px',
                            fontStyle: ' normal',
                            fontWeight: '700',
                            lineHeight: '24px',
                            letterSpacing: ' -0.02em',
                            textAlign: 'right',
                            marginRight: 0,
                        }} > Registrate</Typography>
                      </Hidden>  
                </Toolbar>
            </Grid>
        );
    }
}
export default withStyles(styles, { withTheme: true })(Navbar);
