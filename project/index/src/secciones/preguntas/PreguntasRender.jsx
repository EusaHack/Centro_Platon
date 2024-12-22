import { useState } from "react";
import "./PreguntasRender.css"
import {CardPreguntas} from "../../components/CardPreguntas/CardPreguntas"
import { CardModal } from "../../components/CardModal/CardModal"

export function PreguntasRender() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPregunta, setSelectedPregunta] = useState("");
  const [selectedRespuesta, setselectedRespuesta] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (pregunta,respuesta,image) => {
    setSelectedPregunta(pregunta);
    setselectedRespuesta(respuesta);
    setSelectedImage(image); // Almacena la pregunta seleccionada
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="container-preg">
        <div className="preguntas">
            <h2>Preguntas Frecuentes</h2>
            <div className="btn-preguntas">
                <CardPreguntas
                txtPreg={"¿Cuál es el rango de edad para la atención a usuarios y qué modalidad se recomienda para los niños?"}
                onClick={() => openModal("¿Cuál es el rango de edad para la atención a usuarios y qué modalidad se recomienda para los niños?"
                        ,"El rango de atención a usuarios va desde los 5 hasta los 70 años de edad. Para los niños, se recomienda que las sesiones sean presenciales, ya que en modalidad en línea pueden presentarse variables que dificulten el buen desarrollo de la terapia.")}  
                />
                <CardPreguntas
                txtPreg={"¿Qué tipo de enfoque se utiliza en la terapia y cómo está estructurado el proceso terapéutico?"}
                onClick={() => openModal("¿Qué tipo de enfoque se utiliza en la terapia y cómo está estructurado el proceso terapéutico?"
                  ,"Se utiliza el enfoque cognitivo-conductual, que se centra en trabajar la conducta problema considerando las conductas, pensamientos, sensaciones y emociones de la persona. Este enfoque brinda herramientas para ayudar al paciente a confrontar situaciones de malestar.")}  
                />
                <CardPreguntas
                txtPreg={"¿Cuántas fases tiene el proceso terapéutico y cuántas sesiones mínimas se requieren por fase?"} 
                onClick={() => openModal("¿Cuántas fases tiene el proceso terapéutico y cuántas sesiones mínimas se requieren por fase?"
                  ,"El proceso terapéutico consta de 5 fases, con un mínimo de 3 sesiones cada una, dependiendo del avance del paciente.","images/PLAN_DE_DESARROLLO.png")} 
                />
                <CardPreguntas
                txtPreg={"¿Los psicólogos pueden emitir un diagnóstico y qué incluye el proceso de valoración?"} 
                onClick={() => openModal("¿Los psicólogos pueden emitir un diagnóstico y qué incluye el proceso de valoración?"
                  ,"No, los psicólogos no pueden emitir un diagnóstico. Sin embargo, realizan una valoración que consiste en una entrevista y, en ciertos casos, pruebas para determinar si existen posibles rasgos de un trastorno. Si se identifican, el paciente es canalizado con un psiquiatra u otro profesional adecuado.")}     
                />
                <CardPreguntas
                txtPreg={"¿Qué formación tienen los psicólogos que imparten la terapia y qué sucede si no pueden llevar un caso?"} 
                onClick={() => openModal("¿Qué formación tienen los psicólogos que imparten la terapia y qué sucede si no pueden llevar un caso?"
                  ,"Los psicólogos que imparten la terapia están especializados en el área clínica y cuentan con diplomados, cursos, talleres, maestrías, y mantienen una formación constante. Si el psicólogo considera que no puede llevar tu caso, se realiza una canalización con otro psicólogo sin inconvenientes.")}  
                />
            </div>
        </div>
        <div className="preguntas-img">
            <img src="images/Questions-rafiki.png" alt="Descripción de la imagen" />
        </div>

        {isModalOpen && (
          <CardModal isOpen={isModalOpen} onClose={closeModal}>
            <h2 className="modal-title">{selectedPregunta}</h2>
            <p className="modal-text">{selectedRespuesta}</p>
            {selectedImage && <img src={selectedImage} alt="Imagen asociada a la pregunta" className="modal-image" />}
            <button className="modal-button" onClick={closeModal}>Cerrar</button>
          </CardModal>
        )}
    </div>
  )
}
