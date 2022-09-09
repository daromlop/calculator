import './App.css';
import { useState } from 'react';
import './App.css';
import { Keyboard } from './components/Keyboard';
import { Screen } from './components/Screen';

function App() {

  const [result, setResult] = useState(""); /* Se crea una variable de estado para mostrar y editar el resultado */

  return (
    <div className="App">
      <div className="container">
        <Screen result={result} /> {/* Componente que muestra la pantalla de la calculadora */}
        <Keyboard result={result} setResult={setResult} /> {/* Componente que muestra el teclado de la calculadora */}
      </div>
    </div>
  );
}

export default App;
