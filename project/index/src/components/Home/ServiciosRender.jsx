import { CardServicios } from "../CardServicios/CardServicios"
import "./ServiciosRender.css"

export function ServiciosRender() {
  return (
    <div className="container-ser">
        <div className="titulo-cards">
          <h1>NUESTROS SERVICIOS</h1>
        </div>
        <div className="cards-ser">
          <CardServicios 
          nameService="TERAPIA INDIVIDUAL" 
          iconService={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-6">
                          <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                        </svg>} 
          txtService="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non efficitur nulla. 
              Fusce quis lacinia ipsum. Nullam commodo nunc ut hendrerit lobortis. Pellentesque 
              vehicula eu dui id auctor. Pellentesque tempor venenatis urna"    
          />

          <CardServicios 
          nameService="TERAPIA EN PAREJA" 
          iconService={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-6">
                          <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                        </svg>} 
          txtService="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non efficitur nulla. 
              Fusce quis lacinia ipsum. Nullam commodo nunc ut hendrerit lobortis. Pellentesque 
              vehicula eu dui id auctor. Pellentesque tempor venenatis urna"    
          />

          <CardServicios 
          nameService="TERAPIA FAMILIAR" 
          iconService={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-6">
                        <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
                        <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                      </svg>} 
          txtService="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non efficitur nulla. 
              Fusce quis lacinia ipsum. Nullam commodo nunc ut hendrerit lobortis. Pellentesque 
              vehicula eu dui id auctor. Pellentesque tempor venenatis urna"    
          />
        </div>
    </div>
  )
}
