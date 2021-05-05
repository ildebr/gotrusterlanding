import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from '@material-ui/icons/Menu';
import { Grid, Toolbar, Typography, IconButton, Hidden, Link } from '@material-ui/core';

const styles = theme => ({
    root: {
        flexGrow: 1,
        border: 0,
        margin: 0,
        marginTop: '2vh',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        marginLeft: 60,
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
            // marginRight: '0px',
            color: '#ACFD00',
            fontFamily: 'Poppins',
            fontSize: '16px',
            fontStyle: ' normal',
            fontWeight: '700',
            lineHeight: '24px',
            letterSpacing: ' -0.02em',
            textAlign: 'left',
            border: '1px',
            borderRadius: '20px',
            borderColor: '#ACFD00',

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

        },
    },

});


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            isMenuOpen: false,
            isActive: this.props.active
        };
    }

    render() {
        const { classes} = this.props;        
        let $Show = '';
        if (this.state.isActive === "1") {
            $Show = (<Typography><Link href="/"  className={classes.authWrapper}> Log in</Link></Typography>)
        } else {
            $Show = ''
        }

        return (
            <Grid position="static" color="transparent" className={classes.root}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="transparent" aria-label="menu">
                        <MenuIcon style={{ color: '#FFFFFF' }} />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Truster
                    </Typography>
                    <Hidden xsDown>
                        {$Show}
                    </Hidden>
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


                    <Typography
                    > <Link href="/register" style={{
                        color: '#FFFFFF',
                        fontFamily: 'Poppins',
                        fontSize: '16px',
                        fontStyle: ' normal',
                        fontWeight: '700',
                        lineHeight: '24px',
                        letterSpacing: ' -0.02em',
                        textAlign: 'center',
                        marginRight: 0,
                    }}>Registrate</Link></Typography>

                </Toolbar>
            </Grid>
        );
    }
}
export default withStyles(styles, { withTheme: true })(Navbar);
