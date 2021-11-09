import React, { Component } from 'react'
import { Container, Grid, Typography, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import Rectangle from '../../asset/images/Rectangle 71.svg'
import ReputatioNavBar from '../../components/navBar/reputationNavbar'
import TemporaryDrawer from '../../components/navBar/mobileDrawer'
import MyProfileInfo from '../../components/myProfile/MyProfileInfo'
import MySeccurityMobile from '../../components/myProfile/MySeccurityMobile'
import PassWord from '../../components/myProfile/PassWord'
import Back from '../../asset/images/myProfile/back.svg'
import Profile from '../../components/myProfile/Profile'
import MyEmail from '../../components/myProfile/MyEmail'
import CustomizedSwitches from '../../components/myProfile/Linkages'
import Cliente from './../../setting/cliente'
import { AddressOperations } from './../../services/hostConfig'
import { getToken } from './../../setting/auth-helpers'
const { localStorage } = global.window
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
})

class MyProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      windowWidth: window.innerWidth,
      tab: 0,
    }
  }
  handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth })
  }
  componentDidMount() {
    this.handleLoadDataAdresses()
    window.addEventListener('resize', this.handleResize)
  }
  Tabf = (value) => {
    this.setState({ tab: value })
    console.log(this.state.tab)
  }
  handleLoadDataAdresses = () => {
    const token = getToken()
    let adress = ''
    let nacional = ''
    Cliente.get(AddressOperations(), {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        return response.data
      })
      .then((response) => {
        console.log(response)
        response.forEach(function (currentValue, index, arr) {
          adress += `${currentValue.streetName} ${currentValue.streetNumber}`
          nacional += currentValue.country
        })

        localStorage.setItem('Adresses', adress)
        localStorage.setItem('Nacinality', nacional)
      })
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
    const componentArray = [
      <Profile
        adresses={this.state.adresses}
        nacionality={this.state.nacionality}
      />,
      <PassWord />,
      <MyEmail />,
      <CustomizedSwitches />,
    ]
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
                <Grid
                  item
                  container
                  xs={6}
                  xl={6}
                  sm={6}
                  style={{ marginTop: 10, marginLeft: -20 }}
                  alignItems="center"
                >
                  <TemporaryDrawer />
                </Grid>
                <Grid xs={6} xl={6} sm={6} container alignItems="center">
                  <Grid xs={11} xl={11} sm={11} container justify="flex-start">
                    <Typography
                      style={{
                        marginLeft: '-80%',
                        flexGrow: 1,
                        marginTop: 15,
                        fontWeight: '400',
                        align: 'center',
                        color: '#999999',
                        font: ' normal normal 19px/19px Poppins',
                      }}
                    >
                      Seguridad
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
              </Grid>
              <Grid
                container
                justify="center"
                alignItems="flex-start"
                xs={12}
                xl={12}
                sm={12}
                style={{ marginTop: 150 }}
              >
                <MySeccurityMobile
                  adresses={this.state.adresses}
                  nacionality={this.state.nacionality}
                />
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }
}
export default withStyles(styles, { withTheme: true })(MyProfile)
