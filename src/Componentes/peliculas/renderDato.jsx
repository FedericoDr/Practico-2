import React from 'react'
import './peliculas.css'

export default function RenderDato(props) {
  return (
    <div className='Tarjeta'>
        <ul>
        <img className='imagen'  src={props.img} width="100px" />
            <li className='Date'> { props.titulo} </li>
            <li className='Date'> { props.contendo} </li>
        </ul>
    </div>
  )
};
