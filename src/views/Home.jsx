import React, { useState, useEffect } from 'react'
import showService from '../services/showService'
import { Link } from 'react-router-dom'
import Card from '../components/Card'

export default function Home() {

  const [shows, setShows] = useState([]);

  const getAllShows = async () => {
    try {
      const response = await showService.getShows();
      setShows(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllShows()
  }, [])

  return (
    <div>
      <h2>Home</h2>
      {shows && shows.map((elem) => {
        return (
          <div key={elem._id}>
            <Card show={elem} />
            <Link to={`/shows/${elem._id}`}>See details</Link>
          </div>
        )
      })}
    </div>
  )
}
