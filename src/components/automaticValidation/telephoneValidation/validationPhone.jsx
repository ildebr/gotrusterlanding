import React, { Component, useState, useEffect } from 'react'
import { Container, Grid, Typography, Button } from '@material-ui/core'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import InputBase from '@material-ui/core/InputBase'
import { SMSValidations, ValidatioDetail } from '../../../services/hostConfig'
import eyePhone from '../../../asset/images/automaticvalidation/phone/eyePhone.png'
import WindowDimensions from '../../../components/UtilityComponents/WindowDimension'
import cliente from '../../../setting/cliente'
import { LoopCircleLoading } from 'react-loadingg'
import { getToken } from './../../../setting/auth-helpers'
import Swal from 'sweetalert2'

const { localStorage } = global.window
const useStyles = makeStyles((theme) => ({
  mainText: {
    fontFamily: 'Poppins',
    fontWeight: 700,
    fontStyle: 'normal',
    fontSize: '38px',
    lineHeight: '51px',
    letterSpacing: '-0.02',
    textAlign: 'center',
    color: '#FFFFFF',
    width: '60%',
  },
  mainTextMobile: {
    fontFamily: 'Poppins',
    fontWeight: 700,
    fontStyle: 'normal',
    fontSize: '25px',
    lineHeight: '30px',
    letterSpacing: '-0.02',
    textAlign: 'center',
    color: '#FFFFFF',
    width: '80%',
  },
  register: {
    textAlign: 'left',
    fontFamily: 'Poppins',
    fontWeight: 800,
    fontStyle: 'normal',
    fontSize: '37.81px',
    lineHeight: '46.22px',
    color: '#ACFD00',
  },
  truster: {
    textAlign: 'left',
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontStyle: 'normal',
    fontSize: '21.01px',
    lineHeight: '29.41px',
    color: '#FFFFFF',
  },
  inputTitle: {
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontWeight: 600,
    fontStyle: 'normal',
    fontSize: '12px',
    lineHeight: '18px',
    color: '#FFFFFF',
  },
  ubtext: {
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontStyle: 'normal',
    fontSize: '11px',
    lineHeight: '15px',
    letterSpacing: '-0.02',
    color: '#666666',
    width: '25%',
  },
  ubtextMobile: {
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontStyle: 'normal',
    fontSize: '11px',
    lineHeight: '15px',
    letterSpacing: '-0.02',
    color: '#666666',
    width: '90%',
  },
  formButton2: {
    marginTop: theme.spacing(1),
    height: 50,
    border: '1px solid',
    borderColor: '#999999',
    borderRadius: '15px',
    color: 'white',
    font: 'normal normal normal 16px/22px Poppins',
    textAlignLast: 'center',
    '&:hover': {
      border: '2px solid',
      borderColor: '#ACFD00',
    },
  },
  button: {
    marginTop: theme.spacing(1),
    backgroundColor: '#ACFD00',
    borderRadius: 15,
    padding: 15,
    textAlignLast: 'center',
    textTransform: 'none',
    border: '1px solid',
    borderColor: '#ACFD00',
    fontFamily: 'Poppins',
    fontWeight: 600,
    fontStyle: 'normal',
    fontSize: '18px',
    lineHeight: '27px',
    letterSpacing: '-0.02',
    color: '#252525',
    cursor: 'pointer',
    width: '300px',
  },
  buttonMobile: {
    marginTop: theme.spacing(1),
    backgroundColor: '#ACFD00',
    borderRadius: 15,
    padding: 10,
    textAlignLast: 'center',
    textTransform: 'none',
    border: '1px solid',
    borderColor: '#ACFD00',
    fontFamily: 'Poppins',
    fontWeight: 600,
    fontStyle: 'normal',
    fontSize: '18px',
    lineHeight: '27px',
    letterSpacing: '-0.02',
    color: '#252525',
    cursor: 'pointer',
    width: '90%',
  },
  cbutton: {
    marginTop: theme.spacing(1),
    backgroundColor: 'rgba(0,0,0,0)',
    borderRadius: 15,
    padding: 15,
    textAlignLast: 'center',
    textTransform: 'none',
    border: '2px solid',
    borderColor: '#FFFFFF',
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontStyle: 'normal',
    fontSize: '18px',
    lineHeight: '27px',
    letterSpacing: '-0.02',
    color: '#FFFFFF',
    cursor: 'pointer',
    width: '150px',
  },
  cbuttonMobile: {
    marginTop: theme.spacing(1),
    backgroundColor: 'rgba(0,0,0,0)',
    borderRadius: 15,
    padding: 10,
    textAlignLast: 'center',
    textTransform: 'none',
    border: '2px solid',
    borderColor: '#FFFFFF',
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontStyle: 'normal',
    fontSize: '18px',
    lineHeight: '27px',
    letterSpacing: '-0.02',
    color: '#FFFFFF',
    cursor: 'pointer',
    width: '90%',
  },
  nomsg: {
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontStyle: 'normal',
    fontSize: '12px',
    lineHeight: '18px',
    color: '#999999',
  },
  soporte: {
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontWeight: 700,
    fontStyle: 'normal',
    fontSize: '12px',
    lineHeight: '18px',
    color: '#ACFD00',
    cursor: 'pointer',
  },
}))

const MainText = `Para validar tu teléfono, te enviaremos un sms con un código de seguridad.`
const RegisterText = `Registrate y accede a todo el perfil de ${localStorage.getItem(
  'nombre'
)}`
const Text =
  'Utiliza el formato +541167880000, solo son válidos teléfonos argentinos. Ingresar sin codigo de area.'
const SentText = 'No utilices guiones , el código es valido durante 1 minuto'

const ValidationPhone = () => {
  const { width } = WindowDimensions()
  const [Sent, setSent] = useState(false)
  const [to, setTo] = useState('')
  const [sendCode, setsendCode] = useState('')
  const [code, setCode] = useState('')
  const [active, setActive] = useState(true)
  const [submit, setSubmit] = useState(false)
  const [error, setError] = useState(false)
  const [show, setShow] = React.useState(false)

  const [values, setValues] = useState({
    phone: '',
    code: '',
    confirmation: '',
  })
  const [checkCode, setCheckCode] = useState(false)
  const classes = useStyles()
  const namefull =
    localStorage.getItem('nombre') + ' ' + localStorage.getItem('apellido')

  const handleTo = (e) => {
    setTo(e.target.value)
  }
  const toggleSend = () => {
    //  handlenSubmit();
    setSubmit((submit) => !submit)
  }
  const toggleRSend = () => {
    handleVerifyCode()
  }
  const handleCode = (e) => {
    setCode(e.target.value)
    console.log('probando esta parte', e.target.value)
  }

  const handleValues = (e) => {
    const aux = { ...values }
    if (e.target.name === 'code') {
      e.target.value.length <= 4 && (aux[e.target.name] = e.target.value)
    } else {
      console.log(e.target.value.length)
      e.target.value.length < 11 && (aux[e.target.name] = e.target.value)
    }
    setValues(aux)
  }

  const handleVerifyCode = (e) => {
    let URLVal = ValidatioDetail()
    let idUser = localStorage.getItem('userId')
    let date = new Date()
    let formatted_date =
      date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
    console.log('Codigo recibido', code)
    console.log('Codigo tecleado', sendCode)
    // debugger
    if (parseInt(values.code) === values.confirmation) {
      setShow(<LoopCircleLoading />)
      setActive(true)
      const token = getToken()
      const newValidations = {
        customer: {
          id: idUser,
          user: {
            id: idUser,
            login: localStorage.getItem('email'),
          },
        },
        points: {
          id: 1,
        },
        validationCreationDate: formatted_date,
        validationEnabled: true,
        validationExtra: 'string',
        validationModificationDate: formatted_date,
        validationName: 'CELLPHONE',
        validationStatus: 'APPROVED',
      }
      console.log(newValidations)
      cliente
        .post(URLVal, newValidations, {
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
          window.open('/completedAutomaticvalidationphone', '_self')
        })
        .catch((error) => console.log(error))
    } else {
      //  setSent(true);
      //   setShow(false);
      setActive(true)
      setValues({
        code: '',
        confirmation: values.confirmation,
        phone: values.phone,
      })
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El codigo insertado no es correcto',
        footer: 'GoTruster',
      })
    }
  }
  let $show = show
  let $wait = ''
  if ($show) {
    $wait = <LoopCircleLoading />
  } else {
    $wait = ''
  }
  useEffect(() => {
    let Url = SMSValidations()
    if (submit) {
      if (values.phone !== '') {
        //  setShow(true);
        //setActive(true);
        const dataRegister = {
          to: `+54${values.phone}`,
        }

        cliente
          .post(Url, dataRegister, {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          })
          .then((response) => {
            //  setTo("");
            const aux = { ...values }
            aux.confirmation = response.data
            aux.phone = ''
            setValues(aux)
            setCheckCode(true)
            //setShow(false);
            //setsendCode(response.data);
            //  setActive(true);
            //   setSent(true);
          })
      }
      setActive(true)
      setSubmit(false)
    }
  }, [submit])
  const reset = () => {
    setValues({ phone: '', code: '', confirmation: '' })
    setActive(true)
    setCheckCode(false)
  }
  useEffect(() => {
    !checkCode && setSubmit(false)
    checkCode && setActive(true)
  }, [checkCode])
  useEffect(() => {
    console.log(values)

    if (values.code.length === 4 || values.phone.length === 10) {
      setActive(false)
    } else {
      setActive(true)
    }
  }, [values])
  const check = (e) => {
    console.log('valus', e)
    e.target.name === 'phone'
      ? values.phone.length === 10 && setSubmit(true)
      : values.code.length === 4 && handleVerifyCode()
    e.preventDefault()
  }
  return (
    <Grid
      position="static"
      color="transparent"
      style={{
        flexGrow: 1,
        border: 0,
        marginTop: 40,
      }}
    >
      <Grid xs={12} xl={12} sm={12} container justify="center">
        <img src={eyePhone} alt="eyePhone" width="120px" />
      </Grid>
      <Grid
        xs={12}
        xl={12}
        sm={12}
        container
        style={{ marginTop: '30px' }}
        justify="center"
      >
        {width >= 600 ? (
          <Typography className={classes.mainText}>{MainText}</Typography>
        ) : (
          <Typography className={classes.mainTextMobile}>{MainText}</Typography>
        )}
      </Grid>
      {!checkCode ? (
        <Grid
          xs={12}
          xl={12}
          sm={12}
          container
          style={{ marginTop: '30px' }}
          justify="center"
        >
          <form
            style={{
              width: width >= 600 ? '40%' : '90%',
              marginTop: 10,
              justifyContent: 'center',
              alignContent: 'center',
            }}
            // onSubmit={this.handleSubmit}
            onSubmit={(e) => check(e)}
            name="phone"
            noValidate
          >
            <Typography className={classes.inputTitle}>
              Teléfono
              {$wait}
            </Typography>
            <InputBase
              placeholder="1599122331"
              fullWidth
              id="telefono"
              name="phone"
              value={values.phone}
              inputProps={{ style: { textAlign: 'left' } }}
              className={classes.formButton2}
              onChange={(e) => handleValues(e)}
              required
            />
          </form>
        </Grid>
      ) : (
        <Grid
          xs={12}
          xl={12}
          sm={12}
          container
          style={{ marginTop: '30px' }}
          justify="center"
        >
          <form
            style={{
              width: width >= 600 ? '40%' : '90%',
              marginTop: 10,
              justifyContent: 'center',
              alignContent: 'center',
            }}
            // onSubmit={this.handleSubmit}
            name="code"
            onSubmit={(e) => check(e)}
            noValidate
          >
            <Typography className={classes.inputTitle}>Código</Typography>
            <InputBase
              placeholder="0000"
              fullWidth
              id="codigo"
              name="code"
              value={values.code}
              inputProps={{ style: { textAlign: 'left' } }}
              className={classes.formButton2}
              onChange={(e) => handleValues(e)}
              required
            />
          </form>
        </Grid>
      )}

      <Grid
        xs={12}
        xl={12}
        sm={12}
        container
        style={{ marginTop: '10px' }}
        justify="center"
      >
        {width >= 600 ? (
          <Typography className={classes.ubtext}>
            {!checkCode ? Text : SentText}
          </Typography>
        ) : (
          <Typography className={classes.ubtextMobile}>
            {!checkCode ? Text : SentText}
          </Typography>
        )}
      </Grid>
      <Grid
        xs={12}
        xl={12}
        sm={12}
        container
        style={{ marginTop: '20px' }}
        justify="center"
      >
        {width >= 600 ? (
          <Grid
            xs={5}
            xl={5}
            sm={5}
            container
            style={{ marginTop: '10px', marginLeft: '-30px' }}
            justify="flex-end"
          >
            {!checkCode ? (
              <a href={'/reputation'}>
                <Button className={classes.cbutton}>Cancelar</Button>
              </a>
            ) : (
              <Button className={classes.cbutton} onClick={() => reset()}>
                Atras
              </Button>
            )}
          </Grid>
        ) : (
          <Grid
            xs={12}
            xl={12}
            sm={12}
            container
            style={{ marginTop: '10px' }}
            justify="center"
          >
            {!checkCode ? (
              <Button
                className={classes.buttonMobile}
                disabled={active}
                onClick={toggleSend}
              >
                Enviar SMS
              </Button>
            ) : (
              <Button
                className={classes.buttonMobile}
                disabled={active}
                onClick={toggleRSend()}
              >
                Verificar
              </Button>
            )}
          </Grid>
        )}
        {width >= 600 ? (
          <Grid
            xs={7}
            xl={7}
            sm={7}
            container
            style={{ marginTop: '10px', marginLeft: '30px' }}
            justify="flex-start"
          >
            {!checkCode ? (
              <Button
                className={classes.button}
                disabled={active}
                onClick={() => toggleSend()}
              >
                Enviar SMS
              </Button>
            ) : (
              <Button
                className={classes.button}
                disabled={active}
                onClick={() => toggleRSend()}
              >
                Verificar
              </Button>
            )}
          </Grid>
        ) : (
          <Grid
            xs={12}
            xl={12}
            sm={12}
            container
            style={{ marginTop: '10px' }}
            justify="center"
          >
            {!checkCode ? (
              <a href="/reputation">
                <Button className={classes.cbuttonMobile}>Cancelar</Button>
              </a>
            ) : (
              <Button className={classes.cbuttonMobile} onClick={() => reset()}>
                Atras
              </Button>
            )}
          </Grid>
        )}
      </Grid>
      <Grid
        xs={12}
        xl={12}
        sm={12}
        container
        style={{ marginTop: '40px', marginBottom: '50px' }}
        justify="center"
      >
        <Typography className={classes.nomsg} style={{ marginRight: '5px' }}>
          ¿No te llega el mensaje?
        </Typography>
        <Typography className={classes.soporte}>Contactá a soporte</Typography>
      </Grid>
    </Grid>
  )
}
export default ValidationPhone
