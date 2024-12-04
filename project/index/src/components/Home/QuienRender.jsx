import "./QuienRender.css"

export  function QuienRender() {
  return (
    <div className="container">
        <div className="text-section">
            <p className="txt-principal">¿Quiénes Somos?</p>
            <p className="txt-secundario">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Duis non efficitur nulla. Fusce quis lacinia ipsum. Nullam 
            commodo nunc ut hendrerit lobortis.
            </p>
            <p className="txt-tercero">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non 
            efficitur nulla. Fusce quis lacinia ipsum. Nullam commodo nunc ut hendrerit 
            lobortis. Pellentesque vehicula eu dui id auctor. Pellentesque tempor venenatis urna, at ornare diam accumsan in. Etiam et erat quis elit.
            </p>
        </div>
        <div className="image-section">
            <img src="images/Psychologist-rafiki.png" alt="Descripción de la imagen" />
        </div>
    </div>
  )
}
