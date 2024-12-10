import {CardContacto} from '../../components/CardContacto/CardContacto'
import './ContactoRender.css'

export function ContactoRender() {
  return (
    <div className='container'>
        
        <CardContacto 
        ContactoImg=<img src="images/Contact us-rafiki.png" alt="Descripción de la imagen" />
        />
        <CardContacto 
        ContactoImg=<img src="images/Current location-pana.png" alt="Descripción de la imagen" />
        />
        <CardContacto 
        ContactoImg=<img src="images/Social media-rafiki.png" alt="Descripción de la imagen" />
        />
    </div>
  )
}
