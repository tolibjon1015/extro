import React, { useState } from 'react'

function Modules() {
    const [count, setCount] = useState(1)
    const num = count
    function add() {
        setCount(counter => counter + num)
    }
    function reset() {
        setCount(0)
    }
    return (
        <div>
            <button onClick={add}>+</button>
            <button onClick={reset}>reset</button>
            <span>{count}</span>
        </div>
    )
}

export default Modules