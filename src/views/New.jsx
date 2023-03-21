import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import showService from '../services/showService'

export default function New() {
  const initialState = {
    title: '',
    creator: '',
    launched: '',
    genre: '',
    image: '',
    description: ''
  }
  const [newShow, setNewShow] = useState(initialState);
  const navigate = useNavigate()
  const handleChange = (e) => {
    setNewShow(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const createdShow = await showService.createShow(newShow)
      navigate(`/shows/${createdShow._id}`)
      setNewShow(initialState);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h2>Create a tv show</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" name="title" value={newShow.title} onChange={handleChange} />
        <label>Creator</label>
        <input type="text" name="creator" value={newShow.creator} onChange={handleChange} />
        <label>Launched</label>
        <input type="number" name="launched" value={newShow.launched} onChange={handleChange} />
        <label>Genre</label>
        <input type="text" name="genre" value={newShow.genre} onChange={handleChange} />
        <label>Image</label>
        <input type="text" name="image" value={newShow.image} onChange={handleChange} />
        <label>Description</label>
        <input type="text" name="description" value={newShow.description} onChange={handleChange} />
        <button type="submit">Create show</button>
      </form>
    </div>
  )
}
