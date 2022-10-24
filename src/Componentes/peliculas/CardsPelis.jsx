import React from 'react'
import RenderDato from './renderDato'
import { peliculas } from './datos'
import './peliculas.css'

export default function CardsPelis() {
  return (
    <div className='Peli'>
    
        {peliculas.map(datos => {
            return  <RenderDato  
                 key = {datos.id}
                 titulo = {datos.titulo}
                 img = {datos.img}
                 contendo = {datos.contendo}
                />
        })        

        }
        

    </div>
  )
}
