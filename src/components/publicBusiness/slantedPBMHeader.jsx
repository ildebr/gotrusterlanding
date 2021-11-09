import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import elipse from '../../asset/images/myBusiness/Ellipse 6.png'
import { Typography } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faStore } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles((theme) => ({
  titulo: {
    color: '#FFF',
    fontFamily: 'Poppins',
    fontSize: '23px',
    fontWeight: 700,
    textAlign: 'center',
    letterSpacing: '-0.02em',
  },
  textGrid: {
    align: 'center',
    color: '#FFF',
    fontFamily: 'Poppins',
    fontSize: '15px',
    fontWeight: 'normal',
    textAlign: 'center',
    letterSpacing: '-0.02em',
    textTransform: 'uppercase',
  },
  volverText: {
    align: 'center',
    color: '#E5E5E5',
    fontFamily: 'Poppins',
    fontSize: '19px',
    fontWeight: 'normal',
    textAlign: 'center',
    letterSpacing: '-0.01em',
    textTransform: 'uppercase',
  },
}))

function SlantedPBMHeader(props) {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Grid container direction={'column'}>
        <Grid item>
          <img src={elipse} style={{ width: '100px' }} />
        </Grid>

        <Grid item>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: '12px',
            }}
          >
            <FontAwesomeIcon
              icon={faStore}
              style={{
                color: '#FFF',
                fontSize: 16,
                paddingRight: '10px',
                paddingLeft: '16px',
              }}
            />
            <Typography className={classes.titulo}>Anagrama Studio</Typography>
          </div>
        </Grid>

        <Grid item>
          <Typography
            style={{
              color: '#ACFD00',
              fontFamily: 'Poppins',
              fontSize: '15px',
              fontWeight: 500,
              textAlign: 'left',
              letterSpacing: '-0.02em',
              paddingLeft: '16px',
            }}
          >
            Software & Development Services
          </Typography>
        </Grid>
        <Grid
          item
          style={{
            display: 'flex',
            justifyContent: 'left',
            paddingLeft: '16px',
          }}
        >
          <div
            style={{
              width: '190px',
              height: '12px',
              marginTop: '16px',
              background: '#252525',
              //opacity: 0.69,
              borderRadius: '7.5px',
            }}
          />
        </Grid>

        <div style={{ display: 'flex', flexDirection: 'row', padding: '16px' }}>
          <Grid item>
            <div
              style={{
                width: '67px',
                height: '48px',
                background: '#0E0E0E',
                borderRadius: '9px',
                marginRight: '12px',
              }}
            />
          </Grid>
          <Grid container direction={'column'}>
            <div
              style={{
                width: '236px',
                height: '20px',
                background: '#0E0E0E',
                borderRadius: '26px',
                marginBottom: '8px',
              }}
            />
            <div
              style={{
                width: '236px',
                height: '20px',
                background: '#0E0E0E',
                borderRadius: '26px',
                marginBottom: '8px',
              }}
            />
            <div
              style={{
                width: '236px',
                height: '20px',
                background: '#0E0E0E',
                borderRadius: '26px',
              }}
            />
          </Grid>
        </div>
      </Grid>
    </React.Fragment>
  )
}

export default SlantedPBMHeader
