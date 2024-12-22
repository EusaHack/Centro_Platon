import "./RegisterRender.css"
import { InputCard } from "../../components/InputCard/InputCard"
export  function RegisterRender() {
  return (
    <div className="container-reg">
        <div className="form-register">
            <h1 className="title-reg">¡HOLA!</h1>
            <p className="txt-reg">Por favor llena los siguientes campos :</p>
            <InputCard
              id="fullName"
              label="Nombre completo"
              placeholder="Nombre completo"
            />
            <InputCard
              id="email"
              label="Correo electrónico"
              type="email"
              placeholder="Correo electrónico"
            />
            <InputCard
              id="birthDate"
              label="Fecha de nacimiento"
              type="date"
              placeholder="Fecha de nacimiento"
            />
            <InputCard
              id="password"
              label="Contraseña"
              type="password"
              placeholder="Ingresa tu contraseña"
            />
            
            <button className="btn-reg">CONFIRMAR REGISTRO</button>
        </div>
        <div className="imageSection-reg">
            <img src="images/register-animation.gif"
                className="image-reg"
                alt="Imagen de animación"
            />
        </div>
    </div>
  )
}
