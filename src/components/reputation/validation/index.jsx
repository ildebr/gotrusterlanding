import { Clock, ErrorValidation, Logo, ArrowRight } from 'asset/svg/'
import './styles.css'
import { Link } from '@material-ui/core'

function ItemValidation(props) {
  const { href, alt, srcImg, itemName, view, points, status, logo, display } =
    props

  return (
    <>
      {view && (
        <>
          {display === 'add' ? (
            <>
              {status !== 'APPROVED' && (
                <div
                  className={href ? `containerItem` : `containerItem disabled`}
                >
                  <div className="itemDescription">
                    <img src={srcImg} alt={alt} />
                    <div className="status">
                      {href && status !== 'PENDING' ? (
                        <Link href={href} style={{ textDecoration: 'none' }}>
                          <span className="name">{itemName}</span>
                        </Link>
                      ) : (
                        <span className="name">{itemName}</span>
                      )}
                      {status !== 'APPROVED' && status !== '' && (
                        <span
                          className={`${
                            status !== '' && status !== 'APPROVED' && status
                          }`}
                        >
                          {status === 'REJECTED'
                            ? 'Fallida, a Reintentar'
                            : status === 'PENDING' && 'En Verificación'}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="itemReputation">
                    {status !== 'APPROVED' && status !== '' ? (
                      <>
                        {status === 'PENDING' ? (
                          <Clock />
                        ) : (
                          status === 'REJECTED' && <ErrorValidation />
                        )}
                      </>
                    ) : (
                      <>
                        <span
                          className={`points ${!logo && 'APPROVED'}`}
                        >{`+ ${points}`}</span>
                        {logo && <Logo />}
                        <ArrowRight />
                      </>
                    )}
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              {status === 'APPROVED' && (
                <div className="containerItem">
                  <div className="itemDescription">
                    <img src={srcImg} alt={alt} />
                    <div className="status">
                      {href && display === 'add' ? (
                        <Link href={href} style={{ textDecoration: 'none' }}>
                          <span className="name">{itemName}</span>
                        </Link>
                      ) : (
                        <span className="name">{itemName}</span>
                      )}
                      {status !== 'APPROVED' && status !== '' && (
                        <span
                          className={`${
                            status !== '' && status !== 'APPROVED' && status
                          }`}
                        >
                          {status === 'REJECTED'
                            ? 'Fallida, a Reintentar'
                            : status === 'PENDING' && 'En Verificación'}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="itemReputation">
                    {status !== 'APPROVED' && status !== '' ? (
                      <>
                        {status === 'PENDING' ? (
                          <Clock />
                        ) : (
                          status === 'REJECTED' && <ErrorValidation />
                        )}
                      </>
                    ) : (
                      <>
                        <span
                          className={`points ${!logo && 'APPROVED'}`}
                        >{`+ ${points}`}</span>
                        {logo && <img src={Logo} alt="logo" />}
                        <img
                          src={'/sumReputation/caret-right.svg'}
                          alt="arrow"
                        />
                      </>
                    )}
                  </div>
                </div>
              )}
            </>
          )}
        </>
      )}
    </>
  )
}
export default ItemValidation
