import React from 'react';
import "./style/header.css";
import $ from "jquery";

// images
import logo from "/homeimages/logo2.png"

export default function MainHeader()
{
    




  return (
      <div className='Header'>
          <div className='navDiv'>
              <div className='logoDiv'>
                <a href="/" title="home">
                <img className='logoimg' src={logo} alt="my-logo" />
                </a>
                <h1>GYM</h1>
              </div>
              
              <nav id='mainNav'>
                  <ul className='nav-list list-unstyled'>
                      <li className='nav-list-item'>
                          <a className='nav-list-link' href="/">Home</a>
                      </li>
                      <li className='nav-list-item'>
                          <a className='nav-list-link' href="/trainors">Trainors</a>
                      </li>
                      <li className='nav-list-item'>
                          <a className='nav-list-link' href="/membership">Membership</a>
                      </li>
                      <li className='nav-list-item'>
                          <a className='nav-list-link' href="/sessions">Sessions</a>
                      </li>
                      <li className='nav-list-item'>
                          <a className='nav-list-link' href="/hours">Hours</a>
                      </li>
                      <li className='nav-list-item'>
                          <a className='nav-list-link' href="/contact">Contact</a>
                      </li>
                  </ul>
              </nav>
          </div>
          <div className='burger-menu-div'>
              <button title="menu" className='burger-menu'
                  onClick={() =>
                  {
                      $("#mainBarMenu").slideToggle(600)
                  }}
              >
                 <i className="fa-solid fa-bars fa-2x"></i>
              </button>
              
              <div id='mainBarMenu' style={{ display: "none" }}>
                  <ul className='bar-list list-unstyled'>
                      <li className='bar-list-item'>
                          <a className='bar-list-link text-decoration-none' href="/">Home</a>
                      </li>
                      <li className='bar-list-item'>
                          <a className='bar-list-link text-decoration-none' href="/trainors">Trainors</a>
                      </li>
                      <li className='bar-list-item'>
                          <a className='bar-list-link text-decoration-none' href="/membership">Membership</a>
                      </li>
                      <li className='bar-list-item'>
                          <a className='bar-list-link text-decoration-none' href="/sessions">Sessions</a>
                      </li>
                      <li className='bar-list-item'>
                          <a className='bar-list-link text-decoration-none' href="/hours">Hours</a>
                      </li>
                      <li className='bar-list-item'>
                          <a className='bar-list-link text-decoration-none' href="/contact">Contact</a>
                      </li>
                  </ul>
              </div>
          </div>

          
          
          <div className='qoutesDiv'>
              
              <div className='firstqoute'>
                  <p className='qouteP'>
                      your fitness is our mission
                  </p>
              </div>

              <div className='joinbtn-div'>
                  <a href="/membership">
                      <button className='btn btn-danger joinbtn'>
                          JOIN GYM NOW
                      </button>
                  </a>
              </div>

              <div className='firstqoute'>
                  <p className='qouteP'>
                      BUILD A STRONG BODY FOR A HEALTHY LIFE
                  </p>
              </div>

              
          </div>

          
          
    </div>
  )
}


