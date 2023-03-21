import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import showService from '../services/showService';

export default function Edit() {
  const { id } = useParams();
  
  const [show, setShow] = useState({
    title: '',
    creator: '',
    launched: '',
    genre: '',
    image: '',
    description: ''
  });
  const navigate = useNavigate();

  const getShow = async () => {
    try {
      const response = await showService.getShow(id);
      setShow(response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getShow()
    // eslint-disable-next-line
  }, [id])

  const handleChange = (e) => {
    setShow(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await showService.editShow(id, show);
      navigate(`/shows/${id}`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h2>Edit show</h2>
      <div>
      <h2>Create a tv show</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" name="title" value={show.title} onChange={handleChange} />
        <label>Creator</label>
        <input type="text" name="creator" value={show.creator} onChange={handleChange} />
        <label>Launched</label>
        <input type="number" name="launched" value={show.launched} onChange={handleChange} />
        <label>Genre</label>
        <input type="text" name="genre" value={show.genre} onChange={handleChange} />
        <label>Image</label>
        <input type="text" name="image" value={show.image} onChange={handleChange} />
        <label>Description</label>
        <input type="text" name="description" value={show.description} onChange={handleChange} />
        <button type="submit">Edit show</button>
      </form>
    </div>
    </div>
  )
}
