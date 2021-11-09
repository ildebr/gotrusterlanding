import React, { useState, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Grid, Typography } from '@material-ui/core'
import { Modal } from './Modal'
import { BaseURLImage } from './../../services/hostConfig'
import DniFront from '../../asset/images/admin/dni/dniFront.png'
import SelfieImage from '../../asset/images/reputation/perfil.jpg'
import { useConfirm } from 'material-ui-confirm'

const useStyles = makeStyles({
  root: {
    paddingBottom: '24px',
    paddingTop: '24px',
  },
  date: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '14.2371px',
    lineHeight: '19px',
    letterSpacing: '-0.02em',
    color: '#E5E5E5',
  },
  label: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '19px',
    letterSpacing: '-0.02em',
    color: '#E5E5E5',
  },
  selfieImage: {
    width: 237,
    height: 144,
  },
  ampliar: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '11.32px',
    lineHeight: '20px',
    letterSpacing: '-0.02em',
    color: '#ACFD00',
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  dniImage: {
    width: 237,
    height: 144,
  },
  acceptButton: {
    background: '#ACFD00',
    boxShadow: '0px 2.78102px 2.78102px rgba(0, 0, 0, 0.25)',
    borderRadius: '7.25px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '13.20px',
    lineHeight: '0px',
    letterSpacing: '-0.02em',
    color: '#252525',
    width: '131px',
    height: '37.25px',
    '&:hover': {
      background: '#ACFD00',
    },
  },
  rejectButton: {
    border: '1.7148px solid #666666',
    filter: 'drop-shadow(0px 2.78102px 2.78102px rgba(0, 0, 0, 0.25))',
    borderRadius: '7.25156px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '13.20px',
    lineHeight: '0px',
    letterSpacing: '-0.02em',
    color: '#999999',
    width: '131px',
    height: '37.25px',
  },
})

const IMAGE_DOCUMENT_PATH = 'DNI/'
const IMAGE_SELFIE_PATH = 'selfie/'

function SelfieRow(props) {
  const { data, handleApprove, handleReject, disabled } = props
  const classes = useStyles()
  const [showModal1, setShowModal1] = useState(false)
  const [showModal2, setShowModal2] = useState(false)
  const docFrontImageRef = useRef()
  const selfieImageRef = useRef()
  const confirm = useConfirm()

  const openModal = (index) => {
    console.log(index)
    switch (index) {
      case 1:
        setShowModal1((prev) => !prev)
        break
      case 2:
        setShowModal2((prev) => !prev)
        break
    }
  }

  const setDefaultImage = (e, defImage) => {
    e.target.src = defImage
  }

  const handleApproveRow = (data) => {
    confirm({
      title: '¿Estas Seguro?',
      description: `Esta seguro de aprobar a ${data.name} ${data.lastName}.`,
      cancellationText: 'Cancelar',
      confirmationText: 'Aceptar',
      confirmationButtonProps: { autoFocus: true },
    })
      .then(() => handleApprove(data))
      .catch(() => console.log('Aprobacion cancelada.'))
  }

  const handleRejectRow = (data) => {
    confirm({
      title: '¿Estas Seguro?',
      description: `Esta seguro de rechazar a ${data.name} ${data.lastName}.`,
      cancellationText: 'Cancelar',
      confirmationText: 'Aceptar',
      confirmationButtonProps: { autoFocus: true },
    })
      .then(() => handleReject(data))
      .catch(() => console.log('Rechazo cancelado.'))
  }

  return (
    <Grid
      container
      spacing={4}
      direction="column"
      className={classes.root}
      alignItems="flex-start"
    >
      <Grid item className={classes.date}>
        {data.date}
      </Grid>
      <Grid item container spacing={4} direction="row" justify="flex-start">
        <Grid
          item
          xs={3}
          container
          spacing={2}
          direction="column"
          alignItems="flex-start"
        >
          <Grid item xs>
            <Typography className={classes.label}>Selfie</Typography>
          </Grid>
          <Grid item xs>
            <img
              ref={selfieImageRef}
              src={`${BaseURLImage() + IMAGE_SELFIE_PATH + data.email}.png`}
              onError={(e) => setDefaultImage(e, SelfieImage)}
              className={classes.selfieImage}
              onClick={() => openModal(1)}
            />
            <Modal
              showModal={showModal1}
              setShowModal={setShowModal1}
              imageRef={selfieImageRef}
            />
          </Grid>
          <Grid item xs>
            <Typography
              className={classes.ampliar}
              onClick={() => openModal(1)}
            >
              + Ampliar
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          xs={3}
          container
          spacing={2}
          direction="column"
          alignItems="flex-start"
        >
          <Grid item xs>
            <Typography className={classes.label}>Documento</Typography>
          </Grid>
          <Grid item xs>
            <img
              ref={docFrontImageRef}
              src={`${BaseURLImage() + IMAGE_DOCUMENT_PATH + data.email}/${
                data.email
              }-frente.png`}
              onError={(e) => setDefaultImage(e, DniFront)}
              className={classes.dniImage}
              onClick={() => openModal(2)}
            />
            <Modal
              showModal={showModal2}
              setShowModal={setShowModal2}
              imageRef={docFrontImageRef}
            />
          </Grid>
          <Grid item xs>
            <Typography
              className={classes.ampliar}
              onClick={() => openModal(2)}
            >
              + Ampliar
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          xs={3}
          container
          spacing={2}
          direction="column"
          justify="center"
          alignItems="flex-start"
        >
          <Grid item>
            <Button
              disabled={disabled}
              onClick={() => handleApproveRow(data)}
              className={classes.acceptButton}
            >
              Aprobar
            </Button>
          </Grid>
          <Grid item>
            <Button
              disabled={disabled}
              onClick={() => handleRejectRow(data)}
              className={classes.rejectButton}
            >
              Rechazar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default SelfieRow
