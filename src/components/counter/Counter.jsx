import React, { useState } from 'react'
import "./counter.css"

function Counter() {
    const [count, setCount] = useState(0)
    const increase = () => {
        setCount(mainCount => mainCount + 1);
    };
    const reset = () => {
        setCount(0)
    }
    return (
        <div>

        </div>
    )
}

export default Counter