import React from 'react'
import validationsJson from './validations.json'

import ItemValidation from './validation'
function ValidationsChecked(props) {
  const { loading, validations } = props

  return (
    <div className="containerValidations">
      <div className="title">
        <span>Validaciones Exitosas</span>
      </div>
      <div className="validations">
        {!loading &&
          validationsJson.map((res, index) => (
            <ItemValidation
              href={res.href}
              key={res.validationName}
              srcImg={res.logo}
              alt={res.display}
              itemName={res.display}
              points={res.points}
              display="checked"
              view={validations[index].view}
              status={validations[index].status}
            />
          ))}
        <ItemValidation
          srcImg="/sumReputation/direction.svg"
          alt="correo"
          itemName="Correo"
          points="2"
          display="checked"
          view={true}
          status="APPROVED"
        />
      </div>
    </div>
  )
}
export default ValidationsChecked
