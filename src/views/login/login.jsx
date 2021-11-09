import React, { Component } from 'react'
import {
  CssBaseline,
  Grid,
  Box,
  Container,
  Typography,
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import NavBar from '../../components/navBar/navbarLogin'
import Link from '@material-ui/core/Link'
import InputBase from '@material-ui/core/InputBase'
import { ReactComponent as Logo } from '../../asset/images/logo.svg'
import auth from './../../setting/auth'
import Loading from './../../components/Loading'
import { getToken, deleteToken } from './../../setting/auth-helpers'
import {
  Account,
  CustomerResource,
  loaderServices,
} from './../../services/hostConfig'
//import WindowDimensions from "../../components/UtilityComponents/WindowDimension"
import Cliente from './../../setting/cliente'
const { localStorage } = global.window
const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#000000',
  },

  authWrapper: {
    [theme.breakpoints.up('sm')]: {
      marginTop: '214px',
    },
    [theme.breakpoints.down('lg')]: {
      marginTop: '0px',
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: '100px',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '0px',
    },
    backgroundColor: '#000000',
  },
  paperContainer: {
    backgroundColor: '#000000',
    backgroundSize: 'cover',
    width: '1937px',
    //height: '217px',
    marginTop: '2vh',
  },
  paperWelcome: {
    position: 'flex',
    //marginLeft: '20px',
    //width: '931px',
    //height: '89px',
    fontFamily: 'PoppinsBold',
    fontStyle: 'normal',
    fontWeight: ' bold',
    fontSize: '40px',
    lineHeight: '40px',
    alignItems: 'center',
    textAlign: 'center',
    letterSpacing: '-0.02em',
    color: '#FFFFFF',
  },
  paperHight: {
    marginTop: '2vh',
    position: 'flex',
    marginLeft: '250px',
    width: '931px',
    height: '47px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: ' bold',
    fontSize: '30px',
    lineHeight: '40px',
    alignItems: 'center',
    textAlign: 'center',
    letterSpacing: '-0.01em',
    color: ' #ACFD00',
  },
  paperContainer2: {
    backgroundColor: '#000000',
    backgroundSize: 'cover',
    width: '1937px',
    height: '317px',
  },
  paperContainer3: {
    backgroundColor: '#000000',
    backgroundSize: 'cover',
    width: '1937px',
    height: '217px',
  },
  paperWelcome1: {
    alignItems: 'center',
    position: 'flex',
    //marginLeft: '5px',
    //width: '931px',
    //height: '89px',
    fontFamily: 'PoppinsBold',
    fontStyle: 'normal',
    fontWeight: 1000,
    fontSize: '50px',
    //lineHeight: '40px',
    textAlign: 'center',
    letterSpacing: '-0.02em',
    color: '#ACFD00',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#ACFD00',
    marginTop: '2vh',
    height: '56px',
  },
  textStyle: {
    margin: theme.spacing(3, 0, 2),
    marginTop: '2vh',
    borderRadius: '100px',
    borderColor: '#FFFFFF',
    alignItems: 'center',
    backgroundColor: 'transparent',
    opacity: '50px',
  },
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    font: 'normal normal normal 18px/24px Roboto',
    letterSpacing: '0px',
    textAlign: 'center',
  },
  login: {
    backgroundColor: '#ACFD00',
    width: '100%',
    maxWidth: 316,
    border: '1px solid',
    borderColor: '#ACFD00',
    cursor: 'pointer',
    borderRadius: 15,
    font: 'normal normal normal 18px/24px Poppins',
    height: 50,
    marginTop: theme.spacing(3),
  },
  formButton: {
    marginTop: theme.spacing(1),
    height: 50,
    maxWidth: 316,
    border: '1px solid',
    borderColor: '#999999',
    borderRadius: 15,
    color: 'white',
    autoComplete: 'off',
    font: 'normal normal normal 16px/22px Poppins',
    '&:hover': {
      border: '2px solid',
      borderColor: '#ACFD00',
      borderRadius: 15,
    },
    '& .MuiFilledInput-root': {
      background: 'rgb(232, 241, 250)',
    },
  },
  errorFormButton: {
    marginTop: theme.spacing(1),
    height: 50,
    maxWidth: 316,
    border: '2px solid',
    borderColor: '#E94342',
    borderRadius: 15,
    color: 'white',
    font: 'normal normal normal 16px/22px Poppins',
  },

  normaltext: {
    fontSize: 16,
    color: '#999999',
    fontFamily: 'Poppins',
    marginTop: theme.spacing(2),
  },
  inputTitle2: {
    color: '#E94342',
    font: 'normal normal normal 14px/14px Poppins',
    fontSize: '14px',
    marginTop: theme.spacing(2),
  },
})

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      password: '',
      error: '',
      textError: '',
      ruta: '/',
      show: false,
      userType: '',
      idUser: '',
      email: '',
      firtsName: '',
      lastName: '',
      userLogin: '',
      enabledComponent: false,
      windowWidth: window.innerWidth,
    }
    this._handleChangeValue = this._handleChangeValue.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this._handleChangeValuePass = this._handleChangeValuePass.bind(this)
  }

  _handleChangeValue = (e) => {
    e.preventDefault()
    this.setState({ name: e.target.value })
  }
  _handleChangeValuePass = (e) => {
    e.preventDefault()
    this.setState({ password: e.target.value })
  }
  handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth })
  }
  componentDidMount() {
    fetch(loaderServices())
    localStorage.clear()
    localStorage.setItem('formato', 'undefined')
    localStorage.setItem('thisEmail', 'undefined')
    localStorage.setItem('logueado', false)

    window.addEventListener('resize', this.handleResize)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let name = this.state.name
    let pass = this.state.password
    let userType = ''
    let idUser = ''
    let emailUser = ''
    let loginvar = ''
    if (name === '' || pass === '') {
      this.setState({
        error: 'error',
        textError: '*El Usuario o la contraseña no esta especificada',
        name: '',
      })
      //deleteToken(e);
    } else {
      this.setState({
        show: true,
        enabledComponent: true,
      })
      auth
        .login(name, pass)
        .then(() => {
          const token = getToken()
          console.log(token)
          if (token !== 'undefined') {
            fetch(Account(), {
              method: 'get',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              },
            })
              .then((response) => {
                console.log(response.status)
                return response.json()
              })
              .then((response) => {
                console.log(response)

                this.setState({
                  firtsName: response.firstName,
                  LastName: response.lastName,
                })
                return response.id
              })
              .then((response) => {
                idUser = response
                localStorage.setItem('userId', response)
                Cliente.get(CustomerResource() + '/' + response, {
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

                    loginvar = response.email
                    emailUser = response.email
                    this.setState({
                      userType: response.userType,
                      userId: idUser,
                      userLogin: loginvar,
                      email: emailUser,
                    })
                    localStorage.setItem('userType', this.state.userType)
                    localStorage.setItem('customerId', response.id)
                    localStorage.setItem('userLogin', this.state.userLogin)
                    localStorage.setItem('nombre', this.state.firtsName)
                    localStorage.setItem('apellido', this.state.lastName)
                    localStorage.setItem('email', this.state.email)
                    ///////////////////////////////////////
                    localStorage.setItem('birthDate', response.birthDate)
                    localStorage.setItem('cellphone', response.cellphone)
                    localStorage.setItem('cuit', response.cuit)
                    localStorage.setItem('dni', response.dni)
                    localStorage.setItem('gender', response.gender)
                    localStorage.setItem('occupation', response.occupation)
                    localStorage.setItem('points', response.points)
                    localStorage.setItem('Level', response.level)
                    localStorage.setItem('ip', response.ip)
                    localStorage.setItem('createDate', response.creationDate)
                    localStorage.setItem('cellphone', response.cellphone)
                    //////////////////////////////////////

                    localStorage.setItem('logueado', true)
                    console.log(
                      'Este usuario es el que busco',
                      this.state.userType
                    )
                    if (this.state.userType === 'INDIVIDUAL') {
                      window.open('/reputation', '_self')
                      this.setState({
                        show: false,
                        enabledComponent: false,
                      })
                    } else if (this.state.userType === 'ADMIN') {
                      window.open('/admin/user', '_self')
                      this.setState({
                        show: false,
                        enabledComponent: false,
                      })
                    }
                  })
                  .catch((error) => {
                    console.error('Error:', error)
                    this.setState({
                      show: false,
                      enabledComponent: false,
                    })
                  })
              })
          } else {
            this.setState({
              error: 'error',
              textError:
                '*Tu usuario o contraseña no son correctos, por favor revisa tus datos',
              name: '',
              show: false,
              enabledComponent: false,
            })

            // deleteToken(e);
          }
        })
        .catch((error) => console.error('Error:', error))
    }
  }
  render() {
    function getWindowDimensions() {
      const { innerWidth: width } = window
      return {
        width,
      }
    }

    const { classes } = this.props
    const { width } = getWindowDimensions()
    let $show = this.state.show
    let $wait = ''
    let $textError = this.state.textError
    if ($show) {
      $wait = <Loading />
    } else {
      $wait = (
        <Link href="https://gotruster.com/">
          <Logo width="50" height="50" />
        </Link>
      )
    }
    return (
      <div style={{ backgroundColor: '#000000' }}>
        <Grid container className={classes.root} component="main" maxWidth="md">
          <Container component="main" maxWidth="md">
            <Grid item container xs={12} className={classes.paperContainer}>
              <NavBar active={0} />
            </Grid>
            <Container
              component="main"
              maxWidth="md"
              style={{ alignItems: 'center' }}
            >
              <Box className={classes.authWrapper}>
                <CssBaseline />
                <Box mx="auto">
                  <Box className={classes.authHeader}>{$wait}</Box>
                </Box>
                <div className={classes.paper}>
                  <Box>
                    <Typography className={classes.paperWelcome1}>
                      {' '}
                      Truster.
                      <br />
                    </Typography>
                    <Typography className={classes.paperWelcome}>
                      Tu punto de confianza.{' '}
                    </Typography>
                  </Box>
                  <Grid justify="center" container>
                    {width > 600 ? (
                      <form
                        style={{
                          width: '70%',
                          marginTop: 30,
                          justifyContent: 'center',
                          alignContent: 'center',
                          textAlign: 'center',
                        }}
                        onSubmit={this.handleSubmit}
                        noValidate
                      >
                        <InputBase
                          placeholder="Usuario / Email"
                          fullWidth
                          id="email"
                          name="name"
                          autocomplete="off"
                          helperText={<font color="red">{$textError}</font>}
                          inputProps={{ style: { textAlign: 'center' } }}
                          className={classes.formButton}
                          disabled={this.state.enabledComponent}
                          onChange={this._handleChangeValue}
                          onClick={(e) => {
                            e.preventDefault()
                            const token = getToken()
                            console.log(token)
                            if (token == 'undefined') {
                              deleteToken(e)
                              this.setState({
                                error: '',
                                textError: '',
                              })
                            }
                          }}
                        />
                        <InputBase
                          placeholder="Contraseña"
                          fullWidth
                          color="white"
                          type="password"
                          name="password"
                          autocomplete="off"
                          disabled={this.state.enabledComponent}
                          inputProps={{ style: { textAlign: 'center' } }}
                          className={classes.formButton}
                          onChange={this._handleChangeValuePass}
                          onClick={(e) => {
                            e.preventDefault()
                            const token = getToken()
                            console.log(token)
                            if (token == 'undefined' && this.state.name == '') {
                              deleteToken(e)
                              this.setState({
                                error: '',
                                textError: '',
                              })
                            }
                          }}
                        />

                        <button
                          type="submit"
                          fullWidth
                          className={classes.login}
                        >
                          Log In
                        </button>
                        <Grid container>
                          <Grid item xs>
                            <Link
                              href="/passrecover"
                              style={{ textDecoration: 'none' }}
                            >
                              <Typography className={classes.normaltext}>
                                ¿Olvidaste contraseña?
                              </Typography>
                            </Link>
                          </Grid>
                        </Grid>
                        <Grid container>
                          <Grid item xs>
                            <Typography className={classes.normaltext}>
                              ¿No tenés cuenta?{' '}
                              <Link
                                href="/register"
                                style={{ color: '#ACFD00' }}
                              >
                                Registrate
                              </Link>
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid container>
                          <Grid item xs>
                            <Typography className={classes.inputTitle2}>
                              {$textError}
                            </Typography>
                          </Grid>
                        </Grid>
                      </form>
                    ) : (
                      <form
                        style={{
                          width: '100%',
                          marginTop: 30,
                          justifyContent: 'center',
                          alignContent: 'center',
                          textAlign: 'center',
                        }}
                        onSubmit={this.handleSubmit}
                        noValidate
                      >
                        <InputBase
                          placeholder="Usuario / Email"
                          fullWidth
                          id="email"
                          name="name"
                          helperText={<font color="red">{$textError}</font>}
                          inputProps={{ style: { textAlign: 'center' } }}
                          className={classes.formButton}
                          disabled={this.state.enabledComponent}
                          onChange={this._handleChangeValue}
                          onClick={(e) => {
                            e.preventDefault()
                            const token = getToken()
                            console.log(token)
                            if (token == 'undefined') {
                              deleteToken(e)
                              this.setState({
                                error: '',
                                textError: '',
                              })
                            }
                          }}
                        />
                        <InputBase
                          placeholder="Contraseña"
                          fullWidth
                          color="white"
                          type="password"
                          name="password"
                          inputProps={{ style: { textAlign: 'center' } }}
                          className={classes.formButton}
                          disabled={this.state.enabledComponent}
                          onChange={this._handleChangeValuePass}
                          onClick={(e) => {
                            e.preventDefault()
                            const token = getToken()
                            console.log(token)
                            if (token == 'undefined' && this.state.name == '') {
                              deleteToken(e)
                              this.setState({
                                error: '',
                                textError: '',
                              })
                            }
                          }}
                        />
                        <button
                          type="submit"
                          fullWidth
                          className={classes.login}
                        >
                          Log In
                        </button>
                        <Grid container>
                          <Grid item xs>
                            <Link
                              href="/passrecover"
                              style={{ textDecoration: 'none' }}
                            >
                              <Typography className={classes.normaltext}>
                                ¿Olvidaste contraseña?
                              </Typography>
                            </Link>
                          </Grid>
                        </Grid>
                        <Grid container>
                          <Grid item xs>
                            <Typography className={classes.normaltext}>
                              ¿No tenés cuenta?{' '}
                              <Link
                                href="/register"
                                style={{ color: '#ACFD00' }}
                              >
                                Registrate
                              </Link>
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid container>
                          <Grid item xs>
                            <Typography className={classes.inputTitle2}>
                              {$textError}
                            </Typography>
                          </Grid>
                        </Grid>
                      </form>
                    )}
                  </Grid>
                </div>
              </Box>
            </Container>
          </Container>
        </Grid>
      </div>
    )
  }
}
export default withStyles(styles, { withTheme: true })(Login)
