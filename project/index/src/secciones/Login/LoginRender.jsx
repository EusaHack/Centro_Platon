import "./LoginRender.css"
export  function LoginRender() {
  return (
    <div className="container-log">
        <div className="formSection-log">
          <h1 className="title-log">¡HOLA!</h1>
          <p className="txt-log"> Por favor llena los siguientes campos :</p>
          <p className="txt-log">Correo electronico :</p>
          <input className="input-log" type="email" placeholder="Ingresa tu correo"></input>
          <p className="txt-log">Contraseña :</p>
          <input className="input-log" type="password" placeholder="Ingresa tu contraseña"></input>
          <button className="btn-log">INGRESAR</button>
          <a className="vin-log" href="">Olvide contraseña</a>
        </div>
        <div className="imageSection-log">
          <img src="images/login-animation.gif"
            className="image-log"
            alt="Imagen de animación"
          />
        </div>
    </div>
  )
}
