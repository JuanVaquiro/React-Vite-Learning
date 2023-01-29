
export const Character = ({ name, image, species, status }) => {
    return (
        <blockquote>
            <div className="cart-character">
                <img src={image} alt="character the rick and morty" />
                <span>name: {name} </span>
                <span>species: {species} </span>
                <span>status: {status} </span>
            </div>
        </blockquote>
    )
}
