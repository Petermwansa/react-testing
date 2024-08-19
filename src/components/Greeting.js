import React, { useState } from 'react'
import Output from './Output';


const Greeting = () => {
    const [changedText, setChangedtext] = useState(false);

    const changetextHandler = () => {
        setChangedtext(true);
    }

  return (
    <div>
      <h2>Hello Peter!</h2>
      {!changedText && <Output>I love React</Output>}
      {changedText && <Output>This was clicked</Output>}
      <button onClick={changetextHandler}>Change Text</button>
    </div>
  )
}

export default Greeting
