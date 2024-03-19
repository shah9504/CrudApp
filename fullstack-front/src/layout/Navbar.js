import React from 'react'
import { Link } from 'react-router-dom'

export default function () {
  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Crud Application</a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  <Link className='btn btn-outline-light'to="/addUser">Add User</Link>
  </div>
</nav>   

    </div>
  )
}
