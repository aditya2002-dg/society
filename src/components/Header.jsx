import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { NavLink, Link } from 'react-router-dom';

const Header = () => {

    return (
        <>
            <section className='head-1 bg-dark bbottom-golden'>
                <div className='container-fluid'>
                    <div className='row align-items-center'>
                        <div className='col-md-6'>
                            <ul className='list-group list-group-horizontal justify-content-center'>
                                <li className="list-group-item border-0 bg-transparent ps-0 fs-15"><Link to='/'
                                    onClick={() => window.location = 'tel:+919637524680'}
                                    className="text-white"><FontAwesomeIcon icon={faPhone} className='pe-2' beatFade />+919637524680</Link></li>
                                <li className="list-group-item border-0 bg-transparent px-0 fs-15"><Link to='/'
                                    onClick={() => window.location = 'mailto:cplraoa@gmail.com'}
                                    className="text-white"><FontAwesomeIcon icon={faEnvelope} className='pe-2' beatFade />cplraoa@gmail.com</Link></li>
                            </ul>
                        </div>
                        <div className='col-md-6'>
                            <ul className="list-group list-group-horizontal border-0 bg-transparent justify-content-center">
                                <li className="nav-item fs-15 pe-2">
                                    <button className="nav-link px-3 py-1 border-golden bg-transparent c-golden my-2 h-design">QUICK CONNECT</button>
                                </li>
                                <li className="nav-item fs-15">
                                    <button className="nav-link px-3 py-1 border-golden bg-transparent my-2 c-golden h-design">SIGN IN</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section >
            <section className='head-2 bg-dark'>
                <nav className="navbar navbar-expand-lg bg-transparent">
                    <div className="container-fluid">
                        <Link classname="navbar-brand" exact to="/"><span className='fs-5 fw-bold c-golden'>CENTURIAN PARK LOW RISE</span></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                                <li className="nav-item pe-2 fs-15">
                                    <NavLink className="nav-link fw-bold" aria-current="page"
                                        exact to="/">HOME</NavLink>
                                </li>
                                <li className="nav-item pe-2 fs-15">
                                    <NavLink className="nav-link fw-bold" aria-current="page"
                                        exact to="/about">ABOUT US</NavLink>
                                </li>
                                <li className="nav-item dropdown pe-2 fs-15">
                                    <NavLink className="nav-link dropdown-toggle fw-bold" exact to='/*'
                                        role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        PROJECTS
                                    </NavLink>
                                    <ul className="dropdown-menu bg-dark border-golden">
                                        <li><NavLink className="dropdown-item fs-15" exact to="/residential">RESIDENTIAL</NavLink>
                                        </li>
                                        <li><NavLink className="dropdown-item fs-15" exact to="/commercial">COMMERCIAL</NavLink></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown pe-2 fs-15">
                                    <NavLink className="nav-link fw-bold" exact to="/check-maintenance  " aria-current="page">
                                        CHECK MAINTENANCE
                                    </NavLink>
                                </li>
                                <li className="nav-item dropdown pe-2 fs-15">
                                    <NavLink className="nav-link fw-bold" exact to="/career" aria-current="page">
                                        CAREER
                                    </NavLink>
                                </li>
                                <li className="nav-item dropdown pe-2 fs-15">
                                    <NavLink className="nav-link fw-bold" exact to="/important-notices" aria-current="page">
                                        IMPORTANT NOTICES
                                    </NavLink>
                                </li>
                                <li className="nav-item pe-2 fs-15">
                                    <NavLink className="nav-link fw-bold" aria-current="page" exact to="/contact">CONTACT US</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>

        </>
    )
}

export default Header