import "./PreguntasRender.css"
import {CardPreguntas} from "../../components/CardPreguntas/CardPreguntas"

export function PreguntasRender() {
  return (
    <div className="container-preg">
        <div className="preguntas">
            <h2>Preguntas Frecuentes</h2>
            <div className="btn-preguntas">
                <CardPreguntas
                txtPreg={"Aliquam et justo sed dui efficitur varius ullamcorper eu el"} />
                <CardPreguntas
                txtPreg={"Aliquam et justo sed dui efficitur varius ullamcorper eu el"} />
                <CardPreguntas
                txtPreg={"Aliquam et justo sed dui efficitur varius ullamcorper eu el"} />
                <CardPreguntas
                txtPreg={"Aliquam et justo sed dui efficitur varius ullamcorper eu el"} />
                <CardPreguntas
                txtPreg={"Aliquam et justo sed dui efficitur varius ullamcorper eu el"} />
            </div>
        </div>
        <div className="preguntas-img">
            <img src="images/Questions-rafiki.png" alt="Descripción de la imagen" />
        </div>
    </div>
  )
}
