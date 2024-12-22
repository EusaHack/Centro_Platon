
import { SideNavTwo } from "../../components/NavBarTwo/SideNavTwo"
import { RegisterRender } from "./RegisterRender"
import { HomeIcon } from "../../components/icons/HomeIcon"


const menuItems = [
  { type: "link", href: "/", text: "Inicio", icon: HomeIcon},
  {
    type: "button",
    href: "/login",
    text: "Iniciar sesión",
    color: "#1b2a4f",
    sombraColor: "#314b8b",
    colorTexto: "#fff",
  }
];


export function Register() {
  return (
    <>
        <SideNavTwo menuItems={menuItems}/>
        <RegisterRender />
    </>
  )
}
