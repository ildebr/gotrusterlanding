import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ElipseGris from '../../asset/images/publicProfile/elipsegris.svg'
import Logo from '../../asset/images/logo.svg'
import Like from '../../asset/images/publicProfile/like.svg'
import ReputationImg from '../../asset/images/reputation/Ellipse 6.png'
import GreenCircle from '../../asset/images/publicProfile/greencircle.svg'
import LinearDeterminate from '../../components/reputation/progressBarArchMobile'
import Ok from '../../asset/images/publicProfile/ok.svg'

const { localStorage } = global.window
const dummyText =
  'Mi nombre es Daniel, vivo en Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo eros, gravida sed sapien vel, maximus ultrices diam. Duis scelerisque mi sit amet bibendum facilisis. Donec scelerisque lectus ut lectus tincidunt, id bibendum sapien tristique. '

const useStyles = makeStyles((theme) => ({
  level: {
    fontFamily: 'Poppins',
    fontWeight: 700,
    fontStyle: 'normal',
    fontSize: '26.63px',
    lineHeight: '30px',
    color: '#FFFFFF',
  },
  prot: {
    fontFamily: 'Poppins',
    fontWeight: 700,
    fontStyle: 'normal',
    fontSize: '26.63px',
    lineHeight: '30px',
    color: '#ACFD00',
  },
  text: {
    fontFamily: 'Poppins',
    fontWeight: 500,
    textAlign: 'left',
    fontStyle: 'normal',
    fontSize: '14px',
    lineHeight: '24px',
    color: '#999999',
  },
}))

const AboutCard = () => {
  const classes = useStyles()
  return (
    <Grid
      position="static"
      color="transparent"
      style={{
        flexGrow: 1,
        border: 0,
        marginTop: 20,
      }}
    >
      <Grid
        container
        alignItems="center"
        justify="center"
        xs={12}
        xl={12}
        sm={12}
        style={{
          backgroundColor: 'rgba(28, 28, 28, 0.49)',
          borderRadius: '10px',
          padding: '10px',
          height: '326px',
        }}
      >
        <Grid
          container
          alignItems="center"
          justify="center"
          xs={12}
          xl={12}
          sm={12}
        >
          <Grid
            container
            alignItems="center"
            justify="flex-start"
            xs={2}
            xl={2}
            sm={2}
          >
            <Typography className={classes.level}>
              Sobre {localStorage.getItem('nombre')}
            </Typography>
          </Grid>
          <Grid
            container
            alignItems="center"
            justify="flex-end"
            xs={10}
            xl={10}
            sm={10}
          >
            <img src={ElipseGris} alt="elipseGris" />
          </Grid>
        </Grid>
        <Grid container justify="flex-start" alignItems="center">
          <Typography className={classes.text}>{dummyText}</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}
export default AboutCard
