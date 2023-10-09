import React,{useState,useEffect} from 'react'
import {
    Link
  } from "react-router-dom";
import DividePartySheets from './DividePartySheets';

function Navbar({userId}) {

  // const[partySheet,setPartySheet] =  useState(sheets)

    return (
        <div className="navbar-main">
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
        <Link className="navbar-brand nav-style" onClick={ (event) => event.preventDefault() }>Sample Assessment</Link>
        {/* <p className="nav-style">Sample Assessment</p> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
        <li className="nav-item">
  
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Party Sheets
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <DividePartySheets/>
          </ul>
        </li> */}
      </ul>
    </div>
    
    <span class="navbar-text">
        Logged In: {userId}
      </span>
  </div>
</nav>
</div>
    )
}

export default Navbar
