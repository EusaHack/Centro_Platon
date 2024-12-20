import {CardContacto} from '../../components/CardContacto/CardContacto'
import './ContactoRender.css'

export function ContactoRender() {
  return (
    <div className='container-contac'>
        <CardContacto 
        ContactoImg={<img src="images/Contact us-rafiki.png" alt="Descripción de la imagen" />}
        txtContac = {"Contacto"} 
        txtCont1={"No. telefóno"}
        txtCont2={"5616357179 , 5616357179"}
        txtCont3={"Correos"}
        txtCont4={"info@centroeducativoplaton.com.mx centroeducativoplaton@gmail.com"}
        />
        <CardContacto 
        ContactoImg={<img src="images/Current location-pana.png" alt="Descripción de la imagen" />}
        txtContac = {"Ubicaciones"}
        txtCont1={<a href='https://maps.app.goo.gl/X5VZzcRYrGbiUqXw9' style={{ color: "#ffde61" }}>Dr. José María Vertiz
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
        </a>}
        txtCont2={<a href='https://maps.app.goo.gl/9suNDbdjbRPMgRcB7' style={{ color: "#ffde61" }}>Av. Tlahuac 521
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
        </a>}
        txtCont3={<a href='https://maps.app.goo.gl/sWMKYRWEiSoGdAJy7' style={{ color: "#ffde61" }}>Pernambuco 853
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
        </a>}
        txtCont4={<br/>}
        />
        <CardContacto 
        ContactoImg={<img src="images/Social media-rafiki.png" alt="Descripción de la imagen" />}
        txtContac = {"Redes sociales"}
        txtCont1={<a href='#' style={{ color: "#1b2a4f" }}>Facebook
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg></a>
        }
        txtCont2={<a href='#' style={{ color: "#1b2a4f" }}>Instagram
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg></a>}
        txtCont3={<a href='#' style={{ color: "#1b2a4f" }}>Tiktok
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg></a>}
        txtCont4={<br/>}  
        />
    </div>
  )
}
