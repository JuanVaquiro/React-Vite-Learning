import heroes from "../data/heroes";

export const getHeroueById = (id) => {

    return heroes.find( (heroe) => heroe.id === id )
    
}

export const getHeroueByOwner =  (getOwner) => {

    return heroes.filter( (heroe) => heroe.owner === getOwner)
}