import React from 'react'
import "./Style.css";
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
  <a className="navbar-brand" href="/"style={{marginLeft:"20px"}}>{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse " id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto" >

      <li className="nav-item" style={{marginLeft:"60px"}}>
        <Link className="nav-link " aria-current="page" to="/">Home</Link>
      </li>

      <li className="nav-item" style={{marginLeft:"60px"}}>
        <Link className="nav-link" to="/about">About</Link>
      </li>

       <li className="nav-item dropdown" style={{marginLeft:"60px"}}>
        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown">
          Dropdown
        </a>
      </li> 

    </ul>
      <div className="d-flex" style={{marginLeft:"650px"}}>
        <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height:'30px',width:'30px', cursor:'pointer'}}></div>
        <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height:'30px',width:'30px', cursor:'danger'}}></div>
        <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{height:'30px',width:'30px', cursor:'success'}}></div>
        <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height:'30px',width:'30px', cursor:'warnin'}}></div>
      </div>

    {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input"  onClick={()=>{props.toggleMode(null)}} type="checkbox" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">EnableDarkMode</label>
    </div>
  </div>

  
</nav>
    </div>
   
  )
}
// Navbar.propTypes={
//     Text:propTypes.string.isRequired
// }
