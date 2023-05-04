import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';

// Make the navbar sticky bruh.
//  <Navbar sticky="top" />


        // const changegreen = ()=>{
        //   document.body.style.backgroundColor = '#35C649'
        // }
        // const changeyellow = ()=>{
        //   document.body.style.backgroundColor = '#CAB911'
        // }
        // const changered = ()=>{
        //   document.body.style.backgroundColor = '#C15031'
        // }

export default function Navbar(props) {
  return (
     
    
    <div>
       <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} mb-3`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-a active" aria-current="page" href="#">Home</a>
        </li>
        {/* <li className="nav-item mx-3">
          <a className="nav-a" href="#">About</a>
        </li> */}
      
      </ul>
      <div className='container'>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary mx-1" type="submit">Search</button>
      </form>
      </div>
    </div>
  </div>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
      <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">DarkMode</label>
    </div>

    {/* <div className="dropdown mx-4"/>
  <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Colored Background
  </button> */}

  {/* <ul className="dropdown-menu">
    <li><a className="dropdown-item" onClick={props.changegreen} href="#">Green</a></li>
    <li><a className="dropdown-item" onClick={props.changered} href="#">Red</a></li>
    <li><a className="dropdown-item" onClick={props.changeyellow} href="#">Yellow</a></li>
  </ul> */}

</nav>
    </div>
  )
}


Navbar.defaultProps = {
    title: "Enter your title here"
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,  // not giving error for isRequired also. [chck]
    About: PropTypes.string,        // for wtf reason it is getting compiled ???   see see bru it is getting compiled but see the console, the error is visible in the console hehe. Now solve it. And yes do check consoles
                }