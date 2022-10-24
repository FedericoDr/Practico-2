import React, { useState } from 'react'


import ('./contador.css')


export default function Contador() {
    const [counter, setCounter] = useState(0)

    return (
        <div className='contador'>
            <button onClick={() => { setCounter(counter + 1) }}>+ 1</button>
            <button onClick={() => { setCounter(counter - 1) }}>- 1 </button>
            <button onClick={() => { setCounter(counter + 5) }}>+ 5</button>
            <button onClick={() => { setCounter(counter - 5) }}>- 5</button>
            <p>contador: {counter}</p>
        </div>
    )
}
