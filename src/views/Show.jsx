import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import showService from '../services/showService';
import { Link } from 'react-router-dom';

export default function Show() {
  const { id } = useParams();
  const [show, setShow] = useState({});
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

  const handleDelete = async (id) => {
    try {
      await showService.deleteShow(id)
      navigate('/');
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h2>TV Show details</h2>
      {show &&
          <>
          <div>
            <h1>{show.title}</h1>
            <img src={show.image} alt={show.title} />
            <h3>{show.creator} {show.launched}</h3>
            <h4>{show.genre}</h4>
            <p>{show.description}</p>
          </div>
          <div>
            <button><Link to={`/edit/${show._id}`}>Edit</Link></button>
            <button onClick={() => handleDelete(show._id)}>Delete</button>
          </div>
          </>
      }
    </div>
  )
}
