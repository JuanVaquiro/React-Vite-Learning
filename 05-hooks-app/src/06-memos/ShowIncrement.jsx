import React from 'react'

export const ShowIncrement = React.memo(({ increment }) => {

  console.log('render showIncrement')
  return (
    <button onClick={() => {
      increment(5)
    }}
    >
      Incrementar
    </button>
  )
})
