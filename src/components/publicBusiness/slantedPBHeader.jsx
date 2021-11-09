import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import elipse from '../../asset/images/myBusiness/Ellipse 6.png'
import { Typography } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles((theme) => ({
  numberGrid: {
    align: 'center',
    color: '#ACFD00',
    fontFamily: 'Poppins',
    fontSize: '50px',
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: '-0.03em',
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

function SlantedPbHeader(props) {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Grid container direction={'column'}>
        <Grid item>
          <img src={elipse} style={{ width: '100px' }} />
        </Grid>

        <Grid item>
          <Typography
            style={{
              align: 'center',
              color: 'rgba(255, 255, 255, 0.95)',
              fontFamily: 'Poppins',
              fontSize: '55px',
              fontWeight: 700,
              textAlign: 'center',
            }}
          >
            Anagrama Studio
          </Typography>
        </Grid>

        <Grid item>
          <Typography
            style={{
              align: 'center',
              color: '#ACFD00',
              fontFamily: 'Poppins',
              fontSize: '25px',
              fontWeight: 'normal',
              textAlign: 'center',
              letterSpacing: '-0.02em',
            }}
          >
            Software & Development Services
          </Typography>
        </Grid>
        <Grid item style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            style={{
              width: '382px',
              height: '15px',
              marginTop: '16px',
              background: '#4B4B4B',
              opacity: 0.69,
              borderRadius: '11px',
            }}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default SlantedPbHeader
