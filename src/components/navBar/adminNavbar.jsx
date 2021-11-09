import React, { useEffect, useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import {
  Grid,
  Toolbar,
  Typography,
  Button,
  Hidden,
  Link,
} from '@material-ui/core'
import WindowDimensions from '../../components/UtilityComponents/WindowDimension'
import CerrarSesion from '../../asset/images/sidemenu/cerrarsesion.svg'
import TemporaryDrawer from './mobileDrawer'
import Ok from '../../asset/images/myProfile/ok.svg'
import ProfilePicture from '../../asset/images/admin/profilePicture.png'
import Letter from '../../asset/images/letterLogo.svg'
import Cliente from '../../setting/cliente'
import { GetJson } from '../../services/hostConfig'

const { localStorage } = global.window
const userActive = localStorage.getItem('logueado')
const styles = (theme) => ({
  root: {
    flexGrow: 1,
    border: 0,
    margin: 0,
    marginTop: '2vh',
    height: 217,
  },
  menuButton: {
    marginRight: 2,
  },
  title: {
    marginLeft: 60,
    flexGrow: 1,
    align: 'center',
    color: '#FFFFFF',
    font: ' normal normal 40px/40px Poppins',
  },
  navSign: {
    marginRight: 10,
    color: '#ACFD00',
    fontFamily: 'Poppins',
    fontSize: '16px',
    fontStyle: ' normal',
    fontWeight: '700',
    lineHeight: '24px',
    letterSpacing: ' -0.02em',
    textAlign: 'center',
  },
})

const AdminNavbar = ({ active, recover }) => {
  const { width } = WindowDimensions()
  const isActive = active
  const nameUser = localStorage.getItem('nombre')
  const back = '<'
  let $Show = ''
  if (isActive === 1) {
    $Show = (
      <img
        src={Ok}
        alt="ok"
        width="20px"
        style={{ marginTop: 30, position: 'absolute' }}
      />
    )
  } else {
    $Show = ''
  }
  const [user, setUser] = useState(null)
  const [haveImage, setHaveImage] = useState(false)
  const [haveImageCover, setHaveImageCover] = useState(false)

  function getImages() {
    let json = ''
    let coverPerfil = ''
    Cliente.get(GetJson(), {})
      .then((res) => {
        json = res['data']['content']['images']['perfil']
        coverPerfil = res['data']['content']['images']['coverPerfil']

        if (json.includes(String(localStorage.getItem('userLogin')))) {
          setHaveImage(true)
          console.log()
        } else if (
          coverPerfil.includes(String(localStorage.getItem('userLogin')))
        ) {
          setHaveImageCover(true)
        }
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    if (user === null) {
      setUser(localStorage.getItem('userLogin'))
      getImages()
    }
  }, [haveImage, user])

  return (
    <Grid
      position="static"
      color="primary"
      style={{
        flexGrow: 1,
        border: 0,
        margin: 0,
      }}
    >
      {width >= 600 ? (
        <Grid
          position="static"
          color="transparent"
          style={{
            flexGrow: 1,
            border: 0,
            margin: 0,
            marginTop: '2vh',
            height: 141,
          }}
        >
          <Toolbar>
            <div className="menu-wrap">
              <input type="checkbox" className="toggler" />
              <div className="hamburger">
                <div></div>
              </div>
              <div className="menu">
                <div>
                  <div>
                    <Typography
                      variant="h6"
                      style={{
                        marginLeft: 40,
                        flexGrow: 1,
                        align: 'center',
                        color: '#FFFFFF',
                        font: ' normal normal 40px/40px Poppins',
                        marginBottom: 60,
                      }}
                    >
                      <img src={Letter} />
                    </Typography>

                    <Typography
                      style={{
                        marginLeft: 40,
                        flexGrow: 1,
                        align: 'center',
                        color: '#ACFD00',
                        font: ' normal normal 16px/16px Poppins',
                        marginBottom: 10,
                      }}
                    >
                      BIENVENIDO
                    </Typography>
                    <Typography
                      style={{
                        marginLeft: 40,
                        flexGrow: 1,
                        align: 'center',
                        color: '#FFFFFF',
                        fontWeight: 700,
                        font: ' normal normal 40px/60px Poppins',
                      }}
                    >
                      Admin
                    </Typography>
                    <ul style={{ paddingLeft: '40px' }}>
                      <li>
                        <Link href={userActive ? '/admin/user' : '/'}>
                          Usuarios
                        </Link>
                      </li>
                      <li>
                        <Link href={userActive ? '/admin/business' : '/'}>
                          Negocios
                        </Link>
                      </li>
                    </ul>
                    <hr
                      width={'100%'}
                      size={1}
                      color={'#5e5e5d'}
                      style={{ marginBottom: 30, marginLeft: 20 }}
                    />
                    <ul style={{ paddingLeft: '40px' }}>
                      <li>
                        <Link href={userActive ? '/admin/dnis' : '/'}>
                          DNI's
                        </Link>
                      </li>
                      <li>
                        <Link href={userActive ? '/admin/selfies' : '/'}>
                          Selfies
                        </Link>
                      </li>
                      <li>
                        <Link href={userActive ? '/admin/direcciones' : '/'}>
                          Direcciones
                        </Link>
                      </li>
                      <li>
                        <Link href={userActive ? '/admin/cuils' : '/'}>
                          CUIL's
                        </Link>
                      </li>
                    </ul>
                    <hr
                      width={'100%'}
                      size={1}
                      color={'#5e5e5d'}
                      style={{ marginBottom: 30, marginLeft: 20 }}
                    />
                    <ul
                      style={{
                        paddingLeft: '40px',
                        display: 'grid',
                        justifyContent: 'center',
                      }}
                    >
                      <li>
                        <Link
                          href="/"
                          style={{
                            color: '#5e5e5d',
                            fontSize: 15,
                            display: 'flex',
                            alignItems: 'center',
                            columnGap: '6px',
                          }}
                        >
                          <img
                            src={CerrarSesion}
                            alt="cerrarsesion"
                            style={{ width: '14px', height: '14px' }}
                          />
                          Cerrar Sesión
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {isActive ? (
              <Typography
                variant="h6"
                style={{
                  marginLeft: 145,
                  flexGrow: 1,
                  marginTop: 15,
                  align: 'center',
                  color: '#FFFFFF',
                  font: ' normal normal 40px/40px Poppins',
                  //marginBottom: 217
                }}
              >
                <Link href="https://gotruster.com/">
                  <img src={Letter} />
                </Link>
              </Typography>
            ) : (
              <Typography
                variant="h6"
                style={{
                  marginLeft: 77,
                  flexGrow: 1,
                  marginTop: 15,
                  align: 'center',
                  color: '#FFFFFF',
                  font: ' normal normal 40px/40px Poppins',
                  //marginBottom: 217
                }}
              >
                <img src={Letter} />
              </Typography>
            )}

            <Hidden xsDown>{$Show}</Hidden>
            <Typography
              style={{
                color: '#ACFD00',
                fontFamily: 'Poppins',
                fontSize: '16px',
                fontStyle: ' normal',
                marginTop: 15,
                fontWeight: '700',
                lineHeight: '24px',
                letterSpacing: ' -0.02em',
                textAlign: 'left',
              }}
            >
              &nbsp;&nbsp;&nbsp;{' '}
            </Typography>

            {haveImage ? (
              <img
                src={`https://truster-bucket.s3.us-west-2.amazonaws.com/images/perfil/${localStorage.getItem(
                  'userLogin'
                )}.png`}
                style={{
                  marginTop: 30,
                  marginRight: 15,
                  height: 50,
                  width: 50,
                  borderRadius: '50%',
                  objectFit: 'cover',
                }}
              />
            ) : (
              <img
                src={ProfilePicture}
                style={{
                  marginTop: 30,
                  marginRight: 15,
                  height: 50,
                  width: 50,
                }}
              />
            )}

            <Typography
              style={{
                marginTop: 15,
              }}
            >
              {' '}
              <Button
                href="/"
                style={{
                  color: '#FFFFFF',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  fontStyle: ' normal',
                  width: '155px',
                  height: '52px',
                  marginTop: 15,
                  fontWeight: '700',
                  lineHeight: '24px',
                  letterSpacing: ' -0.02em',
                  textAlign: 'center',

                  marginRight: 0,
                  background: 'rgba(231, 231, 231, 0.05)',
                  opacity: '0.8',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  borderRadius: '63px',
                  textTransform: 'none',
                }}
              >
                <Typography
                  style={{
                    color: '#FFFFFF',
                    fontSize: '16px',
                    fontStyle: ' normal',
                    textTransform: 'none',
                    fontFamily: 'Poppins',
                    marginTop: 15,
                  }}
                >
                  {nameUser}
                  <Typography
                    style={{
                      paddingLeft: 0,
                      width: '155px',
                      color: '#ACFD00',
                      font: 'normal normal normal 11px/12px PoppinsBold',
                      textTransform: 'none',
                      marginBottom: 15,
                    }}
                  >
                    Cerrar Sesión
                  </Typography>
                </Typography>
              </Button>
            </Typography>
          </Toolbar>
        </Grid>
      ) : (
        <Grid
          container
          position="static"
          color="transparent"
          style={{
            flexGrow: 1,
            border: 0,
            margin: 0,
            height: 80,
          }}
        >
          <Grid
            container
            xs={2}
            xl={2}
            sm={2}
            justify="center"
            style={{ alignContent: 'flex-start' }}
          >
            <TemporaryDrawer />
          </Grid>
          {active === 0 ? (
            <Grid container xs={10} xl={10} sm={10}>
              <Grid container xs={2} xl={2} sm={2} justify="flex-start">
                <Typography
                  variant="h6"
                  style={{
                    marginLeft: 10,
                    flexGrow: 1,
                    marginTop: 20,
                    color: '#FFFFFF',
                    font: ' normal normal 35px/35px Poppins',
                  }}
                >
                  Truster
                </Typography>
              </Grid>
              {recover === 1 ? (
                <Grid container xs={10} xl={10} sm={10} justify="flex-end">
                  <button
                    style={{
                      backgroundColor: 'rgba(0,0,0,0)',
                      marginTop: 18,
                      width: 80,
                      height: 35,
                      color: '#ACFD00',
                      font: 'normal normal normal 18px/24px PoppinsBold',
                      border: '2px solid',
                      borderColor: '#ACFD00',
                      borderRadius: 5,
                      textTransform: 'none',
                    }}
                  >
                    Log In
                  </button>
                </Grid>
              ) : (
                ''
              )}
            </Grid>
          ) : (
            <Grid
              container
              xs={9}
              xl={9}
              sm={9}
              justify="flex-end"
              alignContent="flex-start"
              style={{ marginTop: 0, marginLeft: 20 }}
            >
              <Button
                style={{
                  color: '#999999',
                  fontSize: 25,
                  paddingLeft: '100%',
                  font: ' normal normal 35px/35px PoppinsBold',
                }}
                href="/"
              >
                {' '}
                {back}{' '}
              </Button>
            </Grid>
          )}
        </Grid>
      )}
    </Grid>
  )
}
export default withStyles(styles, { withTheme: true })(AdminNavbar)
