import { SideNavTwo } from "../../components/NavBarTwo/SideNavTwo"
import { LoginRender } from "./LoginRender"
import { HomeIcon } from "../../components/icons/HomeIcon"

const menuItems = [
  { type: "link", href: "/", text: "Inicio", icon: HomeIcon},
  {
    type: "button",
    href: "/register",
    text: "Regístrate",
    color: "#1b2a4f",
    sombraColor: "#314b8b",
    colorTexto: "#fff",
  }
];

export function Login() {
  return (
    <>
        <SideNavTwo menuItems={menuItems}/>
        <LoginRender />
    </>
  )
}
