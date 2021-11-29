import React,{useState} from 'react'

function UseState2() {
    const initial = 0
    const [count, setCount] = useState(initial)

    const decrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount - 1)
        }
    }
    return (
        <>
            <h2>Count {count}</h2>
            <button className="btn btn-primary" onClick={() => setCount(initial)}>Reset</button>
            <button className="btn btn-primary" onClick={() => setCount(count => count+1)}>+1</button>
            <button className="btn btn-primary" onClick={() => setCount(count => count-1)}>-1</button>
            <button className="btn btn-primary" onClick={() => setCount(count => count+5)}>+5</button>
            <button className="btn btn-primary" onClick={decrementFive}>-5</button>
        </>
    )
}

export default UseState2
