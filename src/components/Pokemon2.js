import React from 'react'

const Pokemon2 = ({img, name}) => {
  return (
    <div className='pokemonContainer'>
        <img src={img} alt={name} />
        <h3>{name}</h3>
    </div>
  )
}

export default Pokemon2