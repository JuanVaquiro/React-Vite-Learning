import React from 'react'

export const Small = React.memo(({ value }) => {
    console.log('render compo small')
    return (
        <small>{value}</small>
    )
})
