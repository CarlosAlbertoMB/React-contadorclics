import React from 'react'

export const Contador = (props) => {
  return (
    <div className='contador' style={{color:`${props.colorContador}`}}>
        {props.numeroClicks}
    </div>
  )
}
