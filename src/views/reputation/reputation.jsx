import React, { useEffect, useState } from 'react'
import { Container, Grid, Typography, Link } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import ReputatioNavBar from 'components/navBar/reputationNavbar'
import TemporaryDrawer from 'components/navBar/mobileDrawer'
import ReputationProfile from 'components/reputation/reputationProfile'
import ReputationProfileMobile from 'components/reputation/reputationProfileMobile'
import NextArch from 'components/reputation/nextArch'
import NextArchMobile from 'components/reputation/nextArchMobile'
import SumReputation from 'components/reputation/sumreputation'
import Letter from 'asset/images/letterLogo.svg'
import Cliente from 'setting/cliente'
import ValidationsChecked from 'components/reputation/validationsChecked'
import Banner from 'components/reputation/banner'
import { getToken } from 'setting/auth-helpers'
import {
  ValidatioDetailByCustomer,
  CustomerResource,
} from 'services/hostConfig'
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
})

function Reputation(props) {
  const { classes } = props
  const [width, setWidth] = useState(window.innerWidth)
  const [tab, setTab] = useState(false)
  const [validations, setValidations] = useState([
    { validationName: 'DNI', status: '', enabled: true, view: true },

    {
      validationName: 'CELLPHONE',
      status: '',
      enabled: false,
      view: true,
    },
    { validationName: 'CUIL', status: '', enabled: false, view: true },
    {
      validationName: 'SELFIE',
      status: '',
      enabled: false,
      view: true,
    },
    {
      validationName: 'ADDRESS',
      status: '',
      enabled: false,
      view: true,
    },
    { validationName: 'MELI', status: '', enabled: false, view: true },
    { validationName: 'LINKEDIN', status: '', enabled: false, view: true },
    { validationName: 'INSTAGRAM', status: '', enabled: false, view: true },
    { validationName: 'FACEBOOK', status: '', enabled: false, view: true },
  ])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    function updateWidth() {
      const width = document.body.clientWidth
      setWidth(width)
    }
    updateWidth()
    window.addEventListener('resize', updateWidth)
    const token = getToken()
    let userId = localStorage.getItem('userId')
    Cliente.get(`${CustomerResource()}/${userId}`, {
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
        localStorage.setItem('points', response.points)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  })

  useEffect(() => {
    const token = getToken()
    const idCustomer = localStorage.getItem('customerId')
    Cliente.get(`${ValidatioDetailByCustomer()}/${idCustomer}`, {
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
        let aux = validations
        let auxRes = []
        let nextEnabled = []
        let approved = []
        //     console.log("data de fecth", response);
        response.map((res) => {
          auxRes.push({
            validationName: res.validationName,
            status: res.validationStatus,
          })
        })
        aux.map((res) => {
          auxRes.map((result) => {
            if (result.validationName === res.validationName) {
              res.status = result.status
              if (result.status === 'APPROVED') {
                nextEnabled.length === 0 &&
                  nextEnabled.push(
                    'DNI',
                    'CELLPHONE',
                    'CUIL',
                    'SELFIE',
                    'ADDRESS'
                  )
                nextEnabled.length === 5 &&
                  nextEnabled.push(
                    'DNI',
                    'CELLPHONE',
                    'CUIL',
                    'SELFIE',
                    'ADDRESS',
                    'MELI',
                    'LINKEDIN',
                    'INSTAGRAM',
                    'FACEBOOK'
                  )
                approved.push(res.validationName)
              }
            }
          })
          //approved.push(res.validationName);
        })
        //  console.log("aprovado", approved);
        //  console.log("next", nextEnabled);
        //console.log("aux", aux);
        aux.map((res, index) => {
          if (approved.length >= 5) {
            res.enabled = true
          } else {
            if (res.validationName === nextEnabled[index]) {
              //   console.log('es igual', res.validationName);
              res.enabled = true
            }
          }
        })
        //   console.log("aux despues", aux);

        setValidations(aux)
        setLoading(false)
      })
  }, [])
  const handleTab = () => {
    setTab((tab) => !tab)
  }

  return (
    <Grid
      container
      className={classes.root}
      component="main"
      maxWidth="md"
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      <Banner />
      <Grid className={classes.test} container maxWidth="md" component="main">
        <Container component="main" maxWidth="md" container justify="center">
          <Grid container>
            <Grid
              item
              container
              xs={4}
              xl={4}
              sm={4}
              className={classes.paperContainer}
            >
              {width >= 600 ? <ReputatioNavBar /> : <TemporaryDrawer />}
            </Grid>
            {width >= 600 ? (
              <Grid xs={4} xl={4} sm={4} container justify="center">
                <Typography
                  style={{
                    flexGrow: 1,
                    marginTop: 35,
                    align: 'center',
                    color: '#FFFFFF',
                    font: ' normal normal 40px/40px Poppins',
                  }}
                >
                  <Link href="https://gotruster.com/">
                    <img src={Letter} alt="" />
                  </Link>
                </Typography>
              </Grid>
            ) : (
              <Grid xs={8} xl={8} sm={8} container justify="flex-start">
                <Typography
                  style={{
                    marginLeft: '-40%',
                    flexGrow: 1,
                    marginTop: 40,
                    align: 'center',
                    color: '#999999',
                    font: ' normal normal 26px/26px Poppins',
                  }}
                >
                  Mi Reputación
                </Typography>
              </Grid>
            )}
          </Grid>
          <Grid container justify="center">
            {width >= 600 ? <ReputationProfile /> : <ReputationProfileMobile />}
          </Grid>
          {width < 600 ? (
            tab ? (
              <Grid
                container
                xs={12}
                xl={12}
                sm={12}
                justify="center"
                style={{
                  maxWidth: '100%',
                  marginTop: 40,
                  paddingLeft: '10%',
                  paddingRight: '10%',
                }}
                alignItems="center"
              >
                <Grid
                  container
                  xs={6}
                  xl={6}
                  sm={6}
                  justify="center"
                  onClick={() => handleTab()}
                >
                  <Typography
                    style={{
                      flexGrow: 1,
                      align: 'center',
                      color: '#999999',
                      font: ' normal normal 16px/16px PoppinsBold',
                    }}
                  >
                    Sumá Puntos
                  </Typography>
                  <hr style={{ width: '100%' }} color="#333333" />
                </Grid>
                <Grid
                  container
                  xs={6}
                  xl={6}
                  sm={6}
                  justify="center"
                  onClick={() => handleTab()}
                >
                  <Typography
                    style={{
                      flexGrow: 1,
                      align: 'center',
                      color: '#ffffff',
                      font: ' normal normal 16px/16px PoppinsBold',
                    }}
                  >
                    Próximos Logros
                  </Typography>
                  <hr style={{ width: '100%' }} color="#ffffff" />
                </Grid>
              </Grid>
            ) : (
              <Grid
                container
                xs={12}
                xl={12}
                sm={12}
                justify="center"
                style={{
                  maxWidth: '100%',
                  marginTop: 40,
                  paddingLeft: '10%',
                  paddingRight: '10%',
                }}
                alignItems="center"
              >
                <Grid
                  container
                  xs={6}
                  xl={6}
                  sm={6}
                  justify="center"
                  onClick={() => handleTab()}
                >
                  <Typography
                    style={{
                      flexGrow: 1,
                      align: 'center',
                      color: '#ffffff',
                      font: ' normal normal 16px/16px PoppinsBold',
                    }}
                  >
                    Sumá Puntos
                  </Typography>
                  <hr style={{ width: '100%' }} color="#ffffff" />
                </Grid>
                <Grid
                  container
                  xs={6}
                  xl={6}
                  sm={6}
                  justify="center"
                  onClick={() => handleTab()}
                >
                  <Typography
                    style={{
                      flexGrow: 1,
                      align: 'center',
                      color: '#999999',
                      font: ' normal normal 16px/16px PoppinsBold',
                    }}
                  >
                    Próximos Logros
                  </Typography>
                  <hr style={{ width: '100%' }} color="#333333" />
                </Grid>
              </Grid>
            )
          ) : (
            ''
          )}
          {width >= 600 ? (
            <>
              <NextArch />
              <SumReputation loading={loading} validations={validations} />
            </>
          ) : tab ? (
            <NextArchMobile />
          ) : (
            <SumReputation loading={loading} validations={validations} />
          )}

          <Grid container>
            {width >= 600 && (
              <ValidationsChecked loading={loading} validations={validations} />
            )}
          </Grid>
        </Container>
      </Grid>
    </Grid>
  )
}
export default withStyles(styles, { withTheme: true })(Reputation)
