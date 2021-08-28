import React from 'react';
import Facebook from '../../asset/images/myProfile/facebook.svg'
import Meli from '../../asset/images/myProfile/meli.svg'
import LinkedIn from '../../asset/images/myProfile/linkedin.svg'
import Checked from '../../asset/images/myProfile/checked.svg'
import UnChecked from '../../asset/images/myProfile/unchecked.svg'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Logo from '../../asset/images/reputation/logo.svg'
import { Button } from '@material-ui/core';


const CustomizedSwitches = () => {
    const [Face, setFace] = React.useState(true);
    const [Linked, setLinked] = React.useState(true);

    function Switch(value) {
        if (value === 0) {
            setFace(!Face)
        }
        if (value === 1) {
            setLinked(!Linked)
        }

    }

    return (
        <Grid position="static" color="transparent" style={{
            flexGrow: 1,
            border: 0,
            paddingLeft: 50,
        }} >
            <Typography style={{
                textAlign: 'left',
                color: '#ACFD00',
                font: 'normal normal normal 19px/19px Poppins',
                fontWeight: 600,
                marginBottom: 70
            }}>
                Vinculaciones
            </Typography>
            <Grid container style={{ marginBottom: 40 }}>
                <Grid container alignItems='flex-start' justify="flex-start" xs={2} xl={2} sm={2}>
                    <img src={Facebook} alt='facebook' />
                </Grid>
                <Grid container style={{}} justify="flex-start" xs={8} xl={8} sm={8}>
                    <Typography style={{
                        color: '#ffffff',
                        font: 'normal normal normal 20px/20px Poppins',
                        fontWeight: 500,
                    }}>
                        Facebook
                    </Typography>
                </Grid>
                <Grid container justify="flex-end" xs={2} xl={2} sm={2}>
                    <img src={Face ? Checked : UnChecked} alt='checked' onClick={() => Switch(0)} />
                </Grid>
            </Grid>
            <hr width="100%" color='#2C2C2C' size={1} />
            <Grid container style={{ marginBottom: 40, marginTop: 50 }}>
                <Grid container alignItems='flex-start' justify="flex-start" xs={2} xl={2} sm={2}>
                    <img src={Meli} alt='mercadolibre' />
                </Grid>
                <Grid container style={{}} justify="flex-start" xs={5} xl={5} sm={5}>
                    <Typography style={{
                        color: '#ffffff',
                        font: 'normal normal normal 20px/20px Poppins',
                        fontWeight: 500,
                    }}>
                        Mercado Libre
                    </Typography>
                </Grid>
                <Grid container justify="flex-end" xs={5} xl={5} sm={5}>
                    <Grid container alignItems='flex-start' justify="flex-end" xs={12} xl={12} sm={12} style={{ marginTop: - 10 }}>
                        <Typography style={{
                            color: '#ACFD00',
                            font: 'normal normal normal 21px/21px Poppins',
                            fontWeight: 700,
                            marginRight: 5,
                            marginTop: 10
                        }}>
                            +2
                        </Typography>
                        <img src={Logo} alt='logo' width='20px' style={{ marginTop: 10, marginRight: 30 }} />
                        <Button style={{
                            backgroundColor: '#ACFD00',
                            width: 100,
                            font: 'normal normal normal 16px/16px Poppins',
                            fontWeight: 500,
                            height: 40,
                            textTransform:'none',
                            border: '2px solid',
                            borderColor: '#ACFD00',
                            borderRadius: 15,
                            textTransform: 'none',
                        }}
                        href={'/automaticvalidationmercadolibre'}>
                            Vincular
                        </Button>
                    </Grid>

                </Grid>
            </Grid>
            <hr width="100%" color='#2C2C2C' size={1} />
            <Grid container style={{ marginBottom: 40, marginTop: 40 }}>
                <Grid container alignItems='flex-start' justify="flex-start" xs={2} xl={2} sm={2}>
                    <img src={LinkedIn} alt='linkedin' />
                </Grid>
                <Grid container style={{}} justify="flex-start" xs={8} xl={8} sm={8}>
                    <Typography style={{
                        color: '#ffffff',
                        font: 'normal normal normal 20px/20px Poppins',
                        fontWeight: 500,
                    }}>
                        LinkedIn
                    </Typography>
                </Grid>
                <Grid container justify="flex-end" xs={2} xl={2} sm={2}>
                    <img src={Linked ? Checked : UnChecked} alt='checked' onClick={() => Switch(1)} />
                </Grid>
            </Grid>

        </Grid>
    );
}
export default CustomizedSwitches;