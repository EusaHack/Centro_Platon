import "./RegisterRender.css"

export  function RegisterRender() {
  return (
    <div className="container-reg">
        <div className="form-register">
            <h1 className="title-reg">¡HOLA!</h1>
            <p className="txt-reg">Por favor llena los siguientes campos :</p>
            <p className="txt-reg">Nombre completo</p>
            <input className="input-reg" placeholder="Nombre completo"></input>
            <p className="txt-reg">Correo electronico</p>
            <input className="input-reg" type="email" placeholder="Correo electronico"></input>
            <p className="txt-reg">Fecha de nacimiento</p>
            <input className="input-reg" placeholder="Fecha de nacimiento"></input>
            <p className="txt-reg">Contraseña</p>
            <input className="input-reg" type="password" placeholder="Ingresa tu contraseña"></input>
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
