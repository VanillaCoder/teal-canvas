import React from 'react';
import './Navbar.css';
import logo from "../images/TestLogo2.png";
export default function Navbar() {
    return (
        <React.Fragment>
            <div className="" >
                <div className='logo-grid' >
                    <img src={logo} className="logo" alt="logo" ></img>
                </div>

                <div className='navbtn-grid' >
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-content" aria-controls="nav-content" aria-expanded="false" aria-label="Toggle navigation" ><i className="fas fa-bars fa-2x nav-btn"></i></button>
                </div>

                <div className='nav-grid collapse' id='nav-content'>
                    <div>
                        <a href="/shop">Shop</a>
                        <a href="/about">About</a>
                        <a href="/contact">Contact</a>
                        <form className="form-inline md-form form-sm active-cyan active-cyan-2 mt-2">
                            <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
                                aria-label="Search"></input>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}


