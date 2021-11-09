import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import image from '../../../asset/images/manualValidations/dniRegister.png'
import { Typography, Button, Grid } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip } from '@fortawesome/free-solid-svg-icons'
import InputBase from '@material-ui/core/InputBase'
import Cliente from '../../../setting/cliente'
import Swal from 'sweetalert2'
import {
  Fileload,
  CustomerResource,
  ValidatioDetail,
} from '../../../services/hostConfig'
import { getToken } from '../../../setting/auth-helpers'
import { LoopCircleLoading } from 'react-loadingg'
const useStyles = makeStyles((theme) => ({
  titulo: {
    color: '#FFF',
    fontFamily: 'Poppins',
    fontWeight: 700,
    fontSize: '38px',
    letterSpacing: '-0.02em',
    maxWidth: '670px',
    paddingTop: '40px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '30px',
      maxWidth: '350px',
    },
  },
  subtitulo: {
    color: '#FFF',
    fontFamily: 'Poppins',
    fontWeight: 400,
    fontSize: '27px',
    letterSpacing: '-0.01em',
    maxWidth: '500px',
    paddingTop: '40px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
      maxWidth: '350px',
      paddingTop: '20px',
    },
  },

  boton: {
    color: '#ACFD00',
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontSize: '16px',
    letterSpacing: '-0.02em',
  },

  texto: {
    color: '#666666',
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontSize: '10px',
    letterSpacing: '-0.02em',
    marginTop: '8px',
  },
  rootDiv: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '100px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '30px',
    },
  },
  login: {
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    backgroundColor: '#ACFD00',
    borderRadius: '14px',
    textTransform: 'None',
    width: '300px',
    marginTop: '20px',
    marginBottom: '80px',
    cursor: 'pointer',
  },
  login2: {
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    backgroundColor: '#666666',
    borderRadius: '14px',
    textTransform: 'None',
    width: '300px',
    marginTop: '20px',
    marginBottom: '80px',
    cursor: 'pointer',
  },
  imageColor: {
    color: '#ACFD00',
    fontSize: '18px',
    textAlign: 'center',
    marginRight: '5px',
  },
  imageColorGray: {
    color: '#9b9b9b',
    fontSize: '18px',
    textAlign: 'center',
    marginRight: '5px',
  },
}))

function DniRegister(props) {
  const classes = useStyles()

  const [file, setFile] = useState(null)
  const [user, setUser] = useState(null)
  const [nameFront, setNameFront] = useState(null)
  const [nameDorso, setNameDorso] = useState(null)
  const [active, setActive] = useState(true)
  const [dni, setDni] = React.useState('')
  const [show, setShow] = React.useState('')
  const [nameImage1, setNameImage1] = React.useState(true)
  const [nameImage2, setNameImage2] = React.useState(true)
  const handleDni = (e) => {
    setDni(e.target.value)
    localStorage.setItem('dniCuit', e.target.value)
  }
  const formatDate = () => {
    let date = Date()
    let formatted_date = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}`
    return formatted_date
  }

  const handleSubmit = () => {
    let URL = CustomerResource()
    let URLVal = ValidatioDetail()
    let date = new Date()
    let formatted_date = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}`

    setShow(<LoopCircleLoading />)
    setActive(true)
    const token = getToken()
    let dni = localStorage.getItem('dniCuit')
    let idUser = localStorage.getItem('userId')
    const dataUpdate = {
      active: true,
      birthDate: localStorage.getItem('birthDate'),
      cellphone: localStorage.getItem('cellphone'),
      creationDate: localStorage.getItem('createDate'),
      cuit: dni,
      gender: localStorage.getItem('gender'),
      ip: localStorage.getItem('ip'),
      level: localStorage.getItem('Level'),
      modificationDate: formatDate,
      id: idUser,
      dni: dni,
      email: localStorage.getItem('email'),
      occupation: localStorage.getItem('occupation'),
      user: {
        id: idUser,
        login: localStorage.getItem('email'),
      },
      userType: 'INDIVIDUAL',
    }

    let newState = JSON.parse(JSON.stringify(dataUpdate))
    console.log(dataUpdate)
    Cliente.put(`${URL}/${idUser}`, newState, {
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
          validationName: 'DNI',
          validationStatus: 'PENDING',
        }
        console.log(newValidations)
        Cliente.post(URLVal, newValidations, {
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
            window.open('/validation/dniReady', '_self')
          })
          .catch((error) => console.log(error))
      })
      .then((response) => {
        console.log(response)
        setShow('')
        setActive(false)
      })
      .catch((error) => console.log(error))
  }

  const onFileChangeFront = (event, nombre) => {
    const reader = new FileReader()
    let _file = event.target.files[0]
    let fileName = event.target.files[0].name
    console.log('nombre de imagen', fileName)
    setNameFront(fileName)
    const _name = nombre

    reader.onload = function (event) {
      setFile(event.target.result)

      Cliente.post(Fileload(), {
        file: event.target.result,
        fileName: _name,
        user: user,
        destination: 'DNI',
      }).then((res) => {
        console.log(res)
        setNameImage1(false)
      })
    }
    reader.readAsDataURL(_file)
  }
  const onFileChangeDorso = (event, nombre) => {
    const reader = new FileReader()
    let _file = event.target.files[0]
    let fileName = event.target.files[0].name
    setNameDorso(fileName)
    const _name = nombre

    reader.onload = function (event) {
      setFile(event.target.result)

      Cliente.post(Fileload(), {
        file: event.target.result,
        fileName: _name,
        user: user,
        destination: 'DNI',
      }).then((res) => {
        console.log(res)
        setActive(false)
        setNameImage2(false)
      })
    }
    reader.readAsDataURL(_file)
  }
  useEffect(() => {
    if (user === null) {
      setUser(localStorage.getItem('userLogin'))
    }
  }, [user])

  return (
    <React.Fragment>
      <div className={classes.rootDiv}>
        <img src={image} width={200} height={'100%'} />
        <Typography className={classes.titulo}>
          Para validar tu dni, te pedimos una foto del frente y dorso del mismo,
          donde la información sea legible
        </Typography>

        <Typography className={classes.subtitulo}>
          Número de DNI o Libreta Civica
          {show}
        </Typography>
        <div style={{ width: '300px', marginTop: '4px' }}>
          <InputBase
            onChange={handleDni}
            style={{
              backgroundColor: '#000',
              border: '2px solid #303030',
              filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
              borderRadius: '14px',
              color: '#FFF',
              fontFamily: 'Poppins',
              fontWeight: 600,
              fontSize: '16px',
              letterSpacing: '-0.02em',
              textAlign: 'center',
              marginTop: '4px',
              padding: '10px 0 10px 0',
            }}
            placeholder="DNI"
            inputProps={{ style: { textAlign: 'center' } }}
            onBlur={(e) => {
              let lengthField = e.target.value.length
              if (lengthField !== 8) {
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'El Dni debe contener 8 caracteres',
                  footer: 'GoTruster App',
                })
              }
            }}
          />
        </div>

        <Typography className={classes.subtitulo} style={{ color: '#ACFD00' }}>
          Esta información es solo para propositos de validación y no sera
          compartida con ningún usuario.
        </Typography>

        <Typography
          className={classes.subtitulo}
          style={{ paddingTop: '27px' }}
        >
          Adjunte foto del frente del DNI
        </Typography>

        <Button
          component="label"
          style={{
            width: '300px',
            marginTop: '8px',
            border: '2px solid #303030',
            filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
            borderRadius: '14px',
            backgroundColor: '#000',
            textTransform: 'none',
          }}
        >
          <input
            id="file"
            name="file"
            type="file"
            hidden
            onChange={(e) => onFileChangeFront(e, 'FrenteDNI')}
          />
          <Grid
            container
            direction={'row'}
            style={{ padding: '10px 0 10px 0', cursor: 'pointer' }}
          >
            <Grid item xs={2} />
            <Grid item xs={8}>
              <Typography className={classes.boton}>
                {nameImage1 ? 'Adjuntar Frente' : nameFront}
              </Typography>
            </Grid>
            <Grid item={2}>
              <FontAwesomeIcon
                icon={faPaperclip}
                className={
                  nameImage1 ? classes.imageColorGray : classes.imageColor
                }
              />
            </Grid>
          </Grid>
        </Button>

        <Typography className={classes.texto}>
          Los jpg, png, pdf son válidos.
        </Typography>

        <Typography
          className={classes.subtitulo}
          style={{ paddingTop: '20px' }}
        >
          Adjunte foto del dorso del dorso DNI
        </Typography>

        <Button
          component="label"
          style={{
            width: '300px',
            marginTop: '8px',
            border: '2px solid #303030',
            filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
            borderRadius: '14px',
            backgroundColor: '#000',
            textTransform: 'none',
          }}
        >
          <input
            id="file"
            name="file"
            type="file"
            hidden
            onChange={(e) => onFileChangeDorso(e, 'DorsoDNI')}
          />
          <Grid
            container
            direction={'row'}
            style={{ padding: '10px 0 10px 0', cursor: 'pointer' }}
          >
            <Grid item xs={2} />
            <Grid item xs={8}>
              <Typography className={classes.boton}>
                {nameImage2 ? 'Adjuntar Dorso' : nameDorso}
              </Typography>
            </Grid>
            <Grid item={2}>
              <FontAwesomeIcon
                icon={faPaperclip}
                className={
                  nameImage2 ? classes.imageColorGray : classes.imageColor
                }
              />
            </Grid>
          </Grid>
        </Button>

        <Button
          className={active ? classes.login2 : classes.login}
          disabled={active}
          onClick={handleSubmit}
        >
          <Typography
            style={{
              align: 'center',
              color: '#252525',
              fontFamily: 'Poppins',
              fontSize: '16px',
              fontWeight: 500,
              textAlign: 'center',
              letterSpacing: '-0.02em',
              padding: '5px 15px 5px ',
            }}
          >
            Enviar
          </Typography>
        </Button>
      </div>
    </React.Fragment>
  )
}

export default DniRegister
