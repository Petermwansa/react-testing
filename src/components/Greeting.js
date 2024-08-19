import React, { useState } from 'react'

const Greeting = () => {
    const [changedText, setChangedtext] = useState(false);

    const changetextHandler = () => {
        setChangedtext(true);
    }

  return (
    <div>
      <h2>Hello Peter!</h2>
      {!changedText && <p>I love React</p>}
      {changedText && <p>This was clicked</p>}
      <button onClick={changetextHandler}>Change Text</button>
    </div>
  )
}

export default Greeting
