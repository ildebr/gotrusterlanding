import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import image from '../../../asset/images/manualValidations/afip/afipValidation.png'
import { Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
import InputBase from '@material-ui/core/InputBase'
import {
  Fileload,
  ValidatioDetail,
  CustomerResource,
} from '../../../services/hostConfig'
//import 'rsuite/dist/styles/rsuite-default.css'
import Cliente from '../../../setting/cliente'

import { getToken } from '../../../setting/auth-helpers'
import { LoopCircleLoading } from 'react-loadingg'
import Button from '@material-ui/core/Button'

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
      paddingTop: '40px',
    },
  },

  boton: {
    color: '#666666',
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontSize: '24px',
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

function AfipRegister(props) {
  const classes = useStyles()
  const [file, setFile] = useState(null)
  const [user, setUser] = useState(null)
  const [name, setName] = useState(null)
  const [cuil, setCuil] = React.useState('')
  const [active, setActive] = useState(true)
  const [nameImage, setNameImage] = React.useState(true)
  const [show, setShow] = React.useState('')

  const handleCuil = (e) => {
    setCuil(e.target.value)
    setActive(false)
    localStorage.setItem('cuil/cuit', e.target.value)
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
      cuit: cuil,
      gender: localStorage.getItem('gender'),
      ip: localStorage.getItem('ip'),
      level: localStorage.getItem('Level'),
      modificationDate: formatted_date,
      id: idUser,
      dni: localStorage.getItem('dni'),
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
          validationName: 'CUIL',
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
            window.open('/validation/afipReady', '_self')
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
          Para validar tu CUIL/CUIL proporcionanos tu N°
        </Typography>
        <Typography className={classes.subtitulo} style={{ color: '#ACFD00' }}>
          Esta información es solo para propositos de validación y no sera
          compartida con ningún usuario.
        </Typography>

        <Typography
          className={classes.subtitulo}
          style={{ paddingTop: '27px' }}
        >
          Número CUIL/CUIT
          {show}
        </Typography>

        <div style={{ width: '300px', marginTop: '4px' }}>
          <InputBase
            onChange={handleCuil}
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
            placeholder="CUIL"
            inputProps={{ style: { textAlign: 'center' } }}
          />
        </div>

        <Typography className={classes.texto}>
          Los jpg, png, pdf son válidos.
        </Typography>

        <Button
          className={active ? classes.login2 : classes.login}
          onClick={handleSubmit}
          disabled={active}
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

export default AfipRegister
