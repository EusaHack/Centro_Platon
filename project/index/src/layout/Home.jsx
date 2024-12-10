import { SideNav } from "../components/NavBar/SideNav"
import { HomeRender } from "../secciones/index/HomeRender"
import { MenuRender } from "../secciones/menu/MenuRender"
import { ServiciosRender } from "../secciones/servicios/ServiciosRender"
import { QuienRender } from "../secciones/quienessomos/QuienRender"
import { PreguntasRender } from "../secciones/preguntas/PreguntasRender"
import { ContactoRender } from "../secciones/contacto/ContactoRender"

export function Home() {
  return (
    <>
        <SideNav />
        <HomeRender />
        <MenuRender />
        <ServiciosRender />
        <QuienRender />
        <PreguntasRender />
        <ContactoRender />
    </>
  )
}
