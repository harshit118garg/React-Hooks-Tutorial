import React, { useState } from 'react'
import UseEffect3 from './UseEffect3'

function UseEffect4() {

    const [display, setDisplay] = useState(false)

    return (
        <>
            <button onClick={() => setDisplay(!display)} className="btn btn-primary">Toggle Display</button>
            {display && <UseEffect3 />}
        </>
    )
}

export default UseEffect4
