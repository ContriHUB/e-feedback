import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';


export const Navbar = () => {
  let location = useLocation();
  const navigate = useNavigate();
  const handleLogout =()=>{
    localStorage.removeItem('token');
    navigate("/login");
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <Link className="navbar-brand" to="/">Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    {localStorage.getItem('token') && (
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">Home <span className="sr-only">(current)</span></Link>
              </li>
            )}
      <li className="nav-item">
        <Link className={`nav-link ${location.pathname==="/about"? "active": ""}`} to="/about">About</Link>
      </li>
      <li className="nav-item dropdown">
        
        
      </li>
      
    </ul>
    {!localStorage.getItem('token')?<form className="d-flex">
      <Link className="btn btn-primary mx-2" to="/login" role='button'>Login</Link>
      <Link className="btn btn-primary mx-2" to="/signup" role='button'>Signup</Link>
    </form>: <button onClick={handleLogout} className='btn btn-primary'>Logout</button>}
  </div>
</nav>
    </>
  )
}
