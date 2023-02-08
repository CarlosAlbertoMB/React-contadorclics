import React from 'react'

export const Boton = ({operacion,  esClick, manejarClick, colorNumero}) => {
  return (
    <button 
    className={esClick?'btn-click':'btn-restart' }
    onClick={manejarClick}
    >
        {operacion}
    </button>
  )
}
