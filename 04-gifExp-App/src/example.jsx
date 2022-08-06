import { useEffect, useState } from 'react'

const Example = () => {

    const [first, setfirst] = useState(0)
    
    useEffect(() => {
        document.title = `You Clicked ${first} times`
    })

    return (
        <div>
            <h2>Example</h2>
            <p>you cliks {first} times</p>
            <button onClick={() => { setfirst(first+1) }}>
                Click me
            </button>
        </div>
    )
}

export default Example