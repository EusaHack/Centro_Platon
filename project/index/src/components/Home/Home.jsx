import { SideNav } from "../NavBar/SideNav"
import { HomeRender } from "./HomeRender"
import { MenuRender } from "./MenuRender"
export function Home() {
  return (
    <>
        <SideNav />
        <HomeRender />
        <MenuRender />
    </>
  )
}
