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
import infoImage from '../../asset/images/publicProfile/infoImage.png'
import negocioImagen from '../../asset/images/publicProfile/negocioIcon.svg'

const { localStorage } = global.window
const dummyText =
  'Mi nombre es Daniel, vivo en Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo eros, gravida sed sapien vel, maximus ultrices diam. Duis scelerisque mi sit amet bibendum facilisis. Donec scelerisque lectus ut lectus tincidunt, id bibendum sapien tristique. '

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: 'Poppins',
    fontWeight: 700,
    fontStyle: 'normal',
    fontSize: '23px',
    lineHeight: '29px',
    letterSpacing: '-0.02',
    color: '#FFFFFF',
  },
  description: {
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontStyle: 'normal',
    textAlign: 'left',
    fontSize: '14px',
    lineHeight: '21px',
    letterSpacing: '-0.02',
    color: '#999999',
  },
  subtitle: {
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontStyle: 'normal',
    fontSize: '15px',
    lineHeight: '16px',
    letterSpacing: '-0.02',
    color: '#ACFD00',
  },
  truster: {
    fontFamily: 'Poppins',
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: '13px',
    lineHeight: '19.5px',
    letterSpacing: '-0.02',
    color: '#777777',
  },
  backgroundCut: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
}))

const CompanyTitle = 'Anagrama Studio'
const CompanySubTitle = 'Software & Development Services'
const CompanyTruster = 'Tienda en Truster desde 2021'
const CompanyDescription =
  'International branding, architecture, software and brand positioning firm. Experts in brand development and commercial spaces'

const InfoCard = () => {
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
      <div
        className={classes.backgroundCut}
        style={{ zIndex: 0, marginTop: 0 }}
      >
        <img src={infoImage} alt="background" width={'100%'} height={'100%'} />
      </div>
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
          maxHeight: '310px',
        }}
      >
        <Grid
          item
          container
          alignItems="center"
          justify="center"
          xs={12}
          xl={12}
          sm={12}
        >
          <Grid
            item
            container
            alignItems="center"
            justify="flex-start"
            xs={1}
            xl={1}
            sm={1}
          >
            <img src={negocioImagen} alt="elipseGris" />
          </Grid>
          <Grid
            item
            container
            alignItems="center"
            justify="flex-start"
            xs={11}
            xl={11}
            sm={11}
          >
            <Typography className={classes.title}>{CompanyTitle}</Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justify="flex-start"
          alignItems="center"
          style={{ marginTop: '10px' }}
          xs={12}
          xl={12}
          sm={12}
        >
          <Typography className={classes.subtitle}>
            {CompanySubTitle}
          </Typography>
        </Grid>
        <Grid
          item
          container
          justify="flex-start"
          alignItems="center"
          style={{ marginTop: '10px' }}
          xs={12}
          xl={12}
          sm={12}
        >
          <Typography className={classes.truster}>{CompanyTruster}</Typography>
        </Grid>
        <Grid
          item
          container
          justify="flex-start"
          alignItems="center"
          style={{ marginTop: '10px' }}
          xs={12}
          xl={12}
          sm={12}
        >
          <Typography className={classes.description}>
            {CompanyDescription}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}
export default InfoCard
