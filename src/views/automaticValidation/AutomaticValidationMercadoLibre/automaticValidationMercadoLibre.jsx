import React, { Component } from 'react'
import { Container, Grid, Typography, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import ReputatioNavBar from '../../../components/navBar/reputationNavbar'
import TemporaryDrawer from '../../../components/navBar/mobileDrawer'
import Back from '../../../asset/images/myProfile/back.svg'
import ValidationMercadoLibre from '../../../components/automaticValidation/mercadolibreValidation/validationMercadoLibre'

const styles = (theme) => ({
  root: {
    background: '#000000',
    flexGrow: 1,
  },
  paperContainer: {
    height: '110px',
    marginTop: '2vh',
  },
  background: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    width: 'auto',
  },
  test: {
    zIndex: 1,
  },
  selectedText: {
    color: '#ACFD00',
    font: 'normal normal normal 18px/18px Poppins',
    fontWeight: '500',
    cursor: 'pointer',
  },
  unselectedText: {
    color: '#5F5F5F',
    font: 'normal normal normal 18px/18px Poppins',
    fontWeight: '500',
    cursor: 'pointer',
  },
  validInfo: {
    fontFamily: 'Poppins',
    fontWeight: 700,
    textStyle: 'normal',
    fontSize: '26.63px',
    lineHeight: '39.95px',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  validInfoSubtitle: {
    fontFamily: 'Poppins',
    fontWeight: 500,
    textStyle: 'normal',
    fontSize: '17.76px',
    lineHeight: '26.63px',
    textAlign: 'center',
    color: '#5F5F5F',
  },
  moreButton: {
    fontFamily: 'Poppins',
    fontWeight: 500,
    textStyle: 'normal',
    fontSize: '18px',
    lineHeight: '30px',
    textAlign: 'center',
    color: '#5F5F5F',
    border: '1px solid #1C1C1C',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0)',
    borderRadius: '10px',
    padding: '10px',
    cursor: 'pointer',
  },
  moreButtonMobile: {
    fontFamily: 'Poppins',
    fontWeight: 500,
    textStyle: 'normal',
    fontSize: '15.04px',
    lineHeight: '22.57px',
    letterSpacing: '-0.02',
    textAlign: 'center',
    color: '#FFFFFF',
    border: '1px solid #1C1C1C',
    width: '100%',
    backgroundColor: 'rgba(28,28,28,0.49)',
    borderRadius: '10px',
    padding: '10px',
    cursor: 'pointer',
  },
})

class AutomaticValidationMercadoLibre extends Component {
  constructor(props) {
    super(props)
    this.state = {
      windowWidth: window.innerWidth,
      tab: 0,
      woBussiness: false,
    }
  }
  handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth })
  }
  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
  }
  Tabf = (value) => {
    this.setState({ tab: value })
    console.log(this.state.tab)
  }
  render() {
    function getWindowDimensions() {
      const { innerWidth: width } = window
      return {
        width,
      }
    }
    const { width } = getWindowDimensions()
    const { classes } = this.props

    const checkWoBussiness = (data) => {
      console.log(data)
      this.setState({ woBussiness: data })
    }
    return (
      <React.Fragment>
        <Grid
          container
          className={classes.root}
          component="main"
          maxWidth="md"
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <Grid
            className={classes.test}
            container
            maxWidth="md"
            component="main"
          >
            <Container component="main" maxWidth="md" container>
              <Grid container>
                {width >= 600 ? (
                  <Grid
                    item
                    container
                    xs={4}
                    xl={4}
                    sm={4}
                    className={classes.paperContainer}
                  >
                    <ReputatioNavBar />
                  </Grid>
                ) : (
                  <Grid
                    item
                    container
                    xs={2}
                    xl={2}
                    sm={2}
                    style={{ marginTop: 10, marginLeft: -20 }}
                    alignItems="center"
                  >
                    <TemporaryDrawer />
                  </Grid>
                )}
                {width >= 600 ? (
                  <Grid xs={4} xl={4} sm={4} container justify="center">
                    <Typography
                      style={{
                        flexGrow: 1,
                        marginTop: 40,
                        align: 'center',
                        color: '#FFFFFF',
                        font: ' normal normal 40px/40px Poppins',
                      }}
                    >
                      Truster
                    </Typography>
                  </Grid>
                ) : (
                  <Grid xs={10} xl={10} sm={10} container alignItems="center">
                    <Grid
                      xs={11}
                      xl={11}
                      sm={11}
                      container
                      justify="flex-start"
                    >
                      <Typography
                        style={{
                          position: 'absolute',
                          left: '80px',
                          top: '17px',
                          flexGrow: 1,
                          marginTop: 15,
                          fontWeight: 400,
                          align: 'center',
                          color: '#FFFFFF',
                          font: ' normal normal 24px/24px Poppins',
                        }}
                      >
                        Truster
                      </Typography>
                    </Grid>
                    <Grid
                      xs={1}
                      xl={1}
                      sm={1}
                      container
                      justify="flex-end"
                      style={{ marginTop: 10 }}
                    >
                      <Button href="/">
                        {' '}
                        <img
                          src={Back}
                          alt="Back"
                          width="12px"
                          style={{ marginRight: '-60px' }}
                        />
                      </Button>
                    </Grid>
                  </Grid>
                )}
              </Grid>
              <Grid>
                <ValidationMercadoLibre />
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }
}
export default withStyles(styles, { withTheme: true })(
  AutomaticValidationMercadoLibre
)
