import { useState } from "react";
import PropTypes from "prop-types";
import "./SideNavTwo.css";
import { ButtonTxt } from "../Button/Buttontxt";

export function SideNavTwo({ menuItems }) {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <img src="images/logo-azul.png" alt="Centro Platón" className="logo-img" />
        </div>
        
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          {menuItems.map((item, index) => (
            <li key={index}>
              {item.type === "link" && (
                <a href={item.href} className="text-list">
                  {item.icon && <item.icon className="size-6" />}
                  {item.text}
                </a>
              )}
              {item.type === "button" && (
                <ButtonTxt
                  txtButton={item.text}
                  to={item.href}
                  color={item.color}
                  sombraColor={item.sombraColor}
                  colorTexto={item.colorTexto}
                />
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="menu-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  )
}
// PropTypes validation
SideNavTwo.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      href: PropTypes.string,
      text: PropTypes.string.isRequired,
      icon: PropTypes.elementType, // Opcional, si se pasa un componente de ícono
      color: PropTypes.string, // Solo para botones
      sombraColor: PropTypes.string, // Solo para botones
      colorTexto: PropTypes.string, // Solo para botones
    })
  ).isRequired,
};