import { SideNav } from "../NavBar/SideNav"
import { HomeRender } from "./HomeRender"
import { MenuRender } from "./MenuRender"
import { ServiciosRender } from "./ServiciosRender"
export function Home() {
  return (
    <>
        <SideNav />
        <HomeRender />
        <MenuRender />
        <ServiciosRender />
    </>
  )
}
