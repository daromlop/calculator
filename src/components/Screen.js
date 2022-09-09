import React from 'react';
import './Screen.css';

export const Screen = ({result}) => { /* Se envia result como parámetro y se muestra en la pantalla */
  return (
    <div>
      <form>
          <input type="text" value={result}/>
      </form>
    </div>
  )
}
