import React from "react";

const Header=()=>{
    return(
        <nav className="navbar fixed-top navbar-expand-lg navbar-light white scrolling-navbar">
        <div className="container">
  

          <a className="navbar-brand waves-effect" href="/" target="_blank">
            GIAM
          </a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
  

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
  

            <ul className="navbar-nav mr-auto">
             
              <li className="nav-item">
                <a className="nav-link waves-effect" href="/" target="_blank">User List</a>
              </li>
              <li className="nav-item">
                <a className="nav-link waves-effect" href="/" target="_blank">About</a>
              </li>
            </ul>
   

            <ul className="navbar-nav nav-flex-icons">            
              <li className="nav-item">
                <a href="https://www.linkedin.com/in/prabu-elumalai/" className="nav-link waves-effect" target="_blank">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="https://github.com/PrabuElumalai" className="nav-link waves-effect"
                  target="_blank">
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="mailto:sridevprabu@outlook.com"
                  className="nav-link border border-light rounded waves-effect mr-2" target="_blank">
                  <i className="fas fa-envelope mr-1"></i>Email
                </a>
              </li>
            </ul>
  
          </div>
  
        </div>
      </nav>
        )
}

export default Header;