import { SideNav } from "../NavBar/SideNav"
import { HomeRender } from "./HomeRender"
import { MenuRender } from "./MenuRender"
import { ServiciosRender } from "./ServiciosRender"
import { QuienRender } from "./QuienRender"
import { PreguntasRender } from "./PreguntasRender"

export function Home() {
  return (
    <>
        <SideNav />
        <HomeRender />
        <MenuRender />
        <ServiciosRender />
        <QuienRender />
        <PreguntasRender />
    </>
  )
}
