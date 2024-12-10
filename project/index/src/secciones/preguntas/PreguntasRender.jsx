import "./PreguntasRender.css"
import {CardPreguntas} from "../../components/CardPreguntas/CardPreguntas"

export function PreguntasRender() {
  return (
    <div className="container">
        <div className="preguntas">
            <h2>Preguntas Frecuentes</h2>
            <div className="btn-preguntas">
                <CardPreguntas />
                <CardPreguntas />
                <CardPreguntas />
                <CardPreguntas />
                <CardPreguntas />
            </div>
        </div>
        <div className="preguntas-img">
            <img src="images/Questions-rafiki.png" alt="Descripción de la imagen" />
        </div>
    </div>
  )
}
