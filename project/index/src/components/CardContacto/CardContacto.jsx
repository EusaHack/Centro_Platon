import "./CardContacto.css"

export function CardContacto({ContactoImg,txtContac,txtCont1,txtCont2,txtCont3,txtCont4}) {
  return (
    <div className="card-con">
        <div className="card-header-con">
            <h2 className="txt-con"> {txtContac} </h2>
        </div>
        <div className="card-body-con">
            <p className="txt-card-con">{txtCont1}</p>
            <p className="txt-card-ama-con">{txtCont2}</p>
            <p className="txt-card-con">{txtCont3}</p>
            <p className="txt-card-ama-con">{txtCont4}</p>
            {ContactoImg}
        </div>
    </div>
  )
}
