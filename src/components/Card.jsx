import React from 'react'

export default function Card({show}) {
  return (
    // Use to display each one of the movies
    <div>
      <img style={{width: '200px'}} src={show.image} alt={show.title} />
      <h1>{show.title}</h1>
    </div>
  )
}
