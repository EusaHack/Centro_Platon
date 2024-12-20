import "./QuienRender.css"

export  function QuienRender() {
  return (
    <div className="container-quien">
        <div className="text-section">
            <p className="txt-principal">¿Quiénes Somos?</p>
            <p className="txt-secundario">
            Somos un centro de atención psicológica con cinco años de experiencia, 
            especializado en terapia para niños, adolescentes y adultos, incluyendo 
            sesiones individuales, de pareja y familiares.
            </p>
            <p className="txt-tercero">
            Ofrecemos también planes empresariales para mejorar el bienestar emocional 
            de los colaboradores y fortalecer la salud integral de los equipos de trabajo.
            </p>
        </div>
        <div className="image-section">
            <img src="images/Psychologist-bro.png" alt="Descripción de la imagen" />
        </div>
    </div>
  )
}
