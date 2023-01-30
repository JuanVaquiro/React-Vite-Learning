import { useState } from "react"
import { useCounter } from "../hooks"
import { Small } from "./Small"

export const Memorize = () => {
    const { counter, increment } = useCounter(3)
    const [show, setShow] = useState(false)

    return (
        <div>
            <h1>Counter:
                <Small value={counter} />
            </h1>
            <button
                onClick={() => increment()}
            >
                +1
            </button>

            <button
                onClick={() => setShow(!show)}
            >
                Show: {JSON.stringify(show)}
            </button>
        </div>
    )
}
