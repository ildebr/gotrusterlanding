import React from 'react';
import { Grid } from '@material-ui/core';
import Square from '../../asset/images/sesgado/square.svg'
import SRectangle from '../../asset/images/sesgado/shortrectangle.svg'
import BRectangle from '../../asset/images/sesgado/bigrectangle.svg'

const BlackBoxes = () => {
  return (
    <Grid position="static" color="transparent" style={{
      flexGrow: 1,
      border: 0,
      marginTop: 20,
    }} >
      <Grid xs={12} xl={12} sm={12} container>
        <Grid xs={4} xl={4} sm={4} container justify='flex-end' style={{ marginRight: '20px' }}>
          <Grid xs={3} xl={3} sm={3} container justify='flex-end' style={{ paddingRight: '10px' }}>
            <img src={Square} alt='background' />
          </Grid>
          <Grid xs={9} xl={9} sm={9} container justify='flex-end'  >
            <Grid xs={12} xl={12} sm={12} container justify='flex-end' >
              <img src={SRectangle} alt='background' />
            </Grid>
            <Grid xs={12} xl={12} sm={12} container justify='flex-end' >
              <img src={SRectangle} alt='background' />
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={4} xl={4} sm={4} container justify='flex-end' style={{ marginLeft: '20px' }}>
          <Grid xs={3} xl={3} sm={3} container justify='flex-end' style={{ paddingRight: '10px' }}>
            <img src={Square} alt='background' />
          </Grid>
          <Grid xs={9} xl={9} sm={9} container justify='flex-end' >
            <Grid xs={12} xl={12} sm={12} container justify='flex-end' >
              <img src={SRectangle} alt='background' />
            </Grid>
            <Grid xs={12} xl={12} sm={12} container justify='flex-end' >
              <img src={SRectangle} alt='background' />
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={4} xl={4} sm={4} container justify='flex-end' style={{ marginRight: '-50px', marginLeft: '10px', borderRadius: 15 }}>
          <Grid xs={12} xl={12} sm={12} container justify='flex-end' style={{ paddingRight: '10px', borderRadius: 15 }}>
            <img src={BRectangle} width='100%' alt='background' style={{ objectFit: 'cover', borderRadius: 15 }} />
          </Grid>
        </Grid>
      </Grid>
    </Grid >)
}
export default BlackBoxes;
