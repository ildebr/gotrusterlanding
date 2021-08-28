import React from 'react';
import { Grid } from '@material-ui/core';
import Rectangle from '../../asset/images/sesgado/rectanglemobile.svg'

const BlackBoxesMobile = () => {
  return (
    <Grid position="static" color="transparent" style={{
      flexGrow: 1,
      border: 0,
      marginTop: 20,
      backgroundColor: 'rgba(28, 28, 28, 0.49)',
      borderRadius: '15px',
      padding: '25px',
      zIndex: -1
    }} >
      <Grid xs={12} xl={12} sm={12} container style={{marginBottom: '10px'}}>
        <img src={Rectangle} alt='background' width='100%' style={{ objectFit: 'cover'}} />
      </Grid>
      <Grid xs={12} xl={12} sm={12} container style={{ marginBottom: '10px' }}>
        <img src={Rectangle} alt='background' width='100%' style={{ objectFit: 'cover' }} />
      </Grid>
      <Grid xs={12} xl={12} sm={12} container>
        <img src={Rectangle} alt='background' width='100%' style={{ objectFit: 'cover' }} />
      </Grid>
    </Grid >)
}
export default BlackBoxesMobile;
