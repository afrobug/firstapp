import React, { useState } from 'react'

const Counter = () => {
    //hooks
    const [count, setCount] = useState(1)

    const substract1 = () => {
        // console.log("hi");
        setCount(count - 1)
    }

    const add1 = () => {
        // console.log("bye");
        setCount(count + 5)
    }
    // console.log("msg", count);

    return (
        <div>
            <button onClick={substract1}>-</button>
            <button>{count}</button>
            <button onClick={add1} >+</button>

        </div>
    )
}

export default Counter