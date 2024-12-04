import "./CardContacto.css"

export function CardContacto({ContactoImg}) {
  return (
    <div className="card-con">
        <div className="card-header-con">
            <h2 className="txt-con"> Contacto </h2>
        </div>
        <div className="card-body-con">
            <p className="txt-card-con">No. telefono</p>
            <p className="txt-card-ama-con">No. telefono</p>
            <p className="txt-card-con">Correo</p>
            <p className="txt-card-ama-con">Correo</p>
            {ContactoImg}
        </div>
    </div>
  )
}
