import { useLayoutEffect, useRef, useState } from "react"

export const Character = ({ name, image, species, status }) => {

    const nameRef = useRef()
    const [boxSize, setBoxSize] = useState({
        width: 0,
        height: 0
    })

    useLayoutEffect(() => {
        const { height, width } = nameRef.current.getBoundingClientRect()
        setBoxSize({ height, width })
    }, [name])

    return (
        <blockquote>
            <div className="cart-character">
                <img src={image} alt="character the rick and morty" />
                <span ref={nameRef}> name: {name} </span>
                <span>species: {species} </span>
                <span>status: {status} </span>
            </div>
            <code>{JSON.stringify(boxSize)}</code>
        </blockquote>
    )
}
