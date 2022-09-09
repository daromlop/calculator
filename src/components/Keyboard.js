import React from 'react';
import './Keyboard.css'; 

export const Keyboard = ({result, setResult}) => {

   const handleClick = e => {
    setResult(result.concat(e.target.name)); /* Se combina los valores que teclea el usuario y se muestra en la pantalla */
  }

  const clear = () => { /* Funcionalidad para el botón Borrar */
    setResult("");
  }

  const backspace = () => { /* Funcionalidad del botón "C" */
    setResult(result.slice(0, result.length - 1));
  }

  const calculate = () => { /* Se obtiene el resultado con el método eval y lo deveulve en string.Si existe un error, se muestra en pantalla "Error" */
    try {
      setResult(eval(result).toString()); 
    } catch(err) {
      setResult("Error");
    }
  }


  return (
       <div className="buttons">
          <button className="operators" onClick={clear} id="clear">Borrar</button>
          <button className="operators" onClick={backspace} id="backspace">C</button>
          <button className="operators" name="/" onClick={handleClick}>&divide;</button>
          <button name="7" onClick={handleClick}>7</button>
          <button name="8" onClick={handleClick}>8</button>
          <button name="9" onClick={handleClick}>9</button>
          <button className="operators" name="*" onClick={handleClick}>&times;</button>
          <button name="4" onClick={handleClick}>4</button>
          <button name="5" onClick={handleClick}>5</button>
          <button name="6" onClick={handleClick}>6</button>
          <button className="operators" name="-" onClick={handleClick}>&ndash;</button>
          <button name="1" onClick={handleClick}>1</button>
          <button name="2" onClick={handleClick}>2</button>
          <button name="3" onClick={handleClick}>3</button>
          <button className="operators" name="+" onClick={handleClick}>+</button>
          <button name="0" onClick={handleClick}>0</button>
          <button name="." onClick={handleClick}>.</button>
          <button className="operators" onClick={calculate} id="result">=</button>
        </div> 
  )
}
