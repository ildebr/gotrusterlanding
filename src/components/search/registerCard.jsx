import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import {
  CssBaseline,
  Grid,
  Container,
  Typography,
  Button,
} from '@material-ui/core'
import RegisterImg from '../../asset/images/search/registerImg.png'

const styles = (theme) => ({
  navBar: {
    height: '110px',
    marginTop: '2vh',
  },
  searchBar: {
    marginTop: '10vh',
    padding: '0px 20px',
  },
  title: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    textAlign: 'left',
    fontWeight: 700,
    fontSize: '27px',
    lineHeight: '29px',
    letterSpacing: '-0.02em',
    color: '#FFFFFF',
    zIndex: 2,
  },
  categoryButton: {
    background: '#111111',
    border: '1px solid #2C2C2C',
    boxSizing: 'border-box',
    borderRadius: '10.63px',

    padding: '0px 20px',

    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '45px',
    color: '#FFFFFF',
    alignItems: 'center',
    textAlign: 'center',
  },
  subTitle: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '19px',
    lineHeight: '22px',
    letterSpacing: '-0.01em',
    color: '#FFFFFF',
    textAlign: 'left',
    zIndex: 2,
  },
  subtitleDiv: {
    marginTop: '5vh',
    padding: '0px 20px',
  },
  results: {
    marginTop: '5vh',
    padding: '0px 20px',
  },
  categorySearchBar: {
    marginTop: '5vh',
    padding: '0px 20px',
  },
  inputTitle: {
    color: '#FFFFFF',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '16.1404px',
    lineHeight: '24Ppx',
    letterSpacing: '-0.02em',
    textAlign: 'left',
  },
  select: {
    height: '40px',
    width: '100%',
    borderBottom: '2px solid',
    borderColor: '#2C2C2C',
    color: '#666666',
    justifyContent: 'flex-start',
    textAlign: 'left',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '18.4461px',
    lineHeight: '28px',
    letterSpacing: '-0.02em',
    minWidth: '200px',
  },
  register: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '17px',
    lineHeight: '25.5px',
    letterSpacing: '-0.01em',
    color: '#ACFD00',
    textAlign: 'right',
    zIndex: 2,
  },
  disabledSelect: {
    borderBottom: '2px solid',
    borderColor: 'rgba(0, 0, 0, 0.87) !important',
    color: '#666666',
    opacity: '0.5 !important',
  },
  icon: {
    fill: '#999999',
  },
  background: {
    position: 'absolute',
    display: 'flex',
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '265px',
    width: '100%',
    padding: '10px',
  },
})

function RegisterCard(props) {
  const { classes } = props
  const [openCategories, setOpenCategories] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedSubCategory, setSelectedSubCategory] = useState('')

  return (
    <div>
      <CssBaseline />
      <Grid container className={classes.root} component="main" maxWidth="md">
        <div className={classes.background}>
          <img src={RegisterImg} alt="background" />
        </div>
        <Grid
          container
          item
          justify="flex-start"
          xs={12}
          style={{ padding: 20 }}
        >
          <Typography className={classes.title}>
            Publicá tu negocio gratis en Truster
          </Typography>
        </Grid>
        <Grid
          container
          item
          justify="flex-start"
          xs={12}
          style={{ padding: 20, paddingTop: 30 }}
        >
          <Grid container item justify="flex-start" xs={6}>
            <Typography className={classes.subTitle}>
              Elevá tu reputación
            </Typography>
          </Grid>
          <Grid
            container
            item
            justify="flex-end"
            alignItems="flex-end"
            xs={6}
            style={{ paddingTop: 20 }}
          >
            <Typography className={classes.register}>Regístrate</Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles, { withTheme: true })(RegisterCard)
