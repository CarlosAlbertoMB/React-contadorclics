import React, {useEffect, useState} from 'react'



export const Tablero = () => {
  const [colorTexto, setColor] = useState("black");
  const [contador, setContador] = useState(0);
  useEffect(() => {
    verificar()
  });
  const verificar = () => {
    contador <0 ? setColor("red"):setColor("black");
  }
  function realizar(contexto){
    if(contexto === "resta"){
      setContador(contador-1);
    }
    else if(contexto === "suma"){
      setContador(contador+1);
    }
    else if(contexto === "reiniciar"){
      setContador(0);
    }
    verificar();
    

  }
  return (
    <div className='contenedor-general'>
      <div className="contenedor-contador" style={{color:`${colorTexto}`}}>
      <h2 className='contador'>Se han contado {contador} clics</h2>
    </div>
    <div className='contenedor-bottones'>
      <button onClick={() => { realizar("resta") }}>Restar 1</button>
      <button onClick={() => { realizar("suma") }}>Sumar 1</button>
      <button onClick={() => { realizar("reiniciar") }}>Reiniciar</button>
      <button onClick={() => { console.log(colorTexto, contador);}}>Bueno que pedo</button>
    </div>
    </div>
    
  )/*contador<0 ? setColor("red"):setColor("blue")*/
  
}
