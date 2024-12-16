import { SideNav } from "../components/NavBar/SideNav"
import { HomeRender } from "../secciones/index/HomeRender"
import { ServiciosRender } from "../secciones/servicios/ServiciosRender"
import { QuienRender } from "../secciones/quienessomos/QuienRender"
import { PreguntasRender } from "../secciones/preguntas/PreguntasRender"
import { ContactoRender } from "../secciones/contacto/ContactoRender"

export function Home() {
  return (
    <>
        <SideNav />
        <div id="inicio">
          <HomeRender />
        </div>
        <div id="servicios">
          <ServiciosRender />
        </div>
        <div id="quienessomos">
          <QuienRender />
        </div>
        <div id="preguntas">
          <PreguntasRender />
        </div>
        <div id="contacto">
          <ContactoRender />
        </div>
    </>
  )
}
