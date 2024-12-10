import { ButtonTxt } from "../../components/Button/Buttontxt";
import "./HomeRender.css";
export function HomeRender() {
    return (
        <div className="container">
            <div className="textSection">
                <h1>ATENCIÓN PSICOLÓGICA</h1>
                <h2>Enfoque</h2>
                <h3>cognitivo-conductal</h3>
                <p>Brindamos terapia psicologica presencial y en linea.</p>
                <div className="buttonContainer">
                    <ButtonTxt txtButton="Conocenos más" to="/" color="#bbc7ee" sombraColor="#93a0c8" colorTexto="#1b2a4f"/>
                    <ButtonTxt txtButton="Regístrate" to="/register" color="#1b2a4f" sombraColor="#314b8b" colorTexto="#fff"/>
                </div>
            </div>
            <div className="imageSection">
                <img src="images/animation-home.gif"
                    className="image"
                    alt="Imagen de animación"
                />
            </div>
        </div>
    )
}
