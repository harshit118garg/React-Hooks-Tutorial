import React, { useState, useEffect } from 'react'

function UseEffect3() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    useEffect(() => {
        console.log(`useEffect called`)
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            console.log(`Component unmounted`)
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])

    const logMousePosition = (e) => {
        console.log(`Mouse event`)
        setX(e.clientX)
        setY(e.clientY)
    }

    return (
        <>
            <h2>X - {x} and Y - {y}</h2>
        </>
    )
}

export default UseEffect3
