import './App.css';
import { Tablero } from './Componentes/Tablero';
import {Boton} from './Componentes/Boton';
import {Contador} from './Componentes/Contador'
import React, { useEffect, useState } from 'react';




function App() {
  const [numeroClicks, setNumeroClicks] = useState(0);
  const [colorN, setColorN] = useState("blue");
  useEffect(() => {
    check()
  })
  const manejarClick = () => {
    check();
    setNumeroClicks(numeroClicks + 1);
    
  }
  const reiniciar = () => {
    check();
    setNumeroClicks(0);
    
  }
  const restarClic = () => {
    check();
    setNumeroClicks(numeroClicks - 1);
    
  }

  function check() {
    
    
    
    if(numeroClicks < 0){
      setColorN("red");
    }
    else if(numeroClicks >= 0){
      setColorN("black");
    }
  }
  

  return (
    <div className="App">
      <header className="header-app">
        <h1>Contador de clics</h1>
      </header>
      <Boton
      operacion="Clic"
      esClick={true}
      manejarClick={manejarClick}
      
      />
      <Boton
      operacion="Reiniciar"
      esClick={false}
      manejarClick={reiniciar}
      
      />
      <Boton
      operacion="RestarClic"
      esClick={false}
      manejarClick={restarClic}
      c
      />
      <Contador
      numeroClicks={numeroClicks}
      colorContador={colorN}
      />
      <Tablero/>
    </div>
  );
}

export default App;
