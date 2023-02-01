import React, { useState } from 'react'

const Button = () => {
    // const [color, setColor] = useState(["red", "green", "blue", "purple", "black"])
    const color = ["red", "green", "blue", "purple", "black"]


    const [count, setCount] = useState(0)
    //useState is default value

    const colorChange = () => {
        setCount((count + 1) % 5)
    }
    console.log("msg", count)

    return (
        <div>
            <button style={{ backgroundColor: color[count] }} onClick={colorChange} >change me</button>
        </div>
    )
}

export default Button