import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Error = () => {
  return (
    <>
    <Navbar />
    <div className="error">
        <h2>Oh! No, Page Not Found!</h2>
        <h3><Link to="/">Back home</Link></h3>
    </div>
    </>
  )
}

export default Error