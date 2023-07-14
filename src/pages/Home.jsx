import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCrop, faCodeBranch, faUserCheck } from '@fortawesome/free-solid-svg-icons';

const Home = () => {

  return (
    <>
      <Header />

      {/* Section-MainBanner */}
      <section className="main-banner">
        <div className="main-content">
          <div className="container text-center">
            <h1 class="c-golden fw-bold mb-4 fs-25">CENTURIAN PARK LOW RISE</h1>
            <p class="mb-4 fs-18"> Building a better society through our vision of perfection.</p>
            <button className="px-3 py-1 border-golden bg-transparent c-golden my-2 h-design">QUICK CONNECT</button>
            <div className="scroll_down">
              <Link exact to="/" />
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </section>
      {/* Section-MainBanner */}

      {/* Section-1 */}
      <section className="home-sec-1 mb-5">
        <div className="container text-center bg-dark p-3 con-sec-1">
          <div className="row">
            <div className="col-md-3 my-3">
              <div className="location borderend">
                <h5 className='c-golden'><FontAwesomeIcon icon={faLocationDot} className='pe-2' />Location</h5>
                <p className='text-white mb-0'>Techzone 4, Greater Noida</p>
              </div>
            </div>
            <div className="col-md-3 my-3">
              <div className="location borderend">
                <h5 className='c-golden'><FontAwesomeIcon icon={faCrop} className='pe-2' />Project Size</h5>
                <p className='text-white mb-0'>5 Acres</p>
              </div>
            </div>
            <div className="col-md-3 my-3">
              <div className="location borderend">
                <h5 className='c-golden'><FontAwesomeIcon icon={faCodeBranch} className='pe-2' />Type</h5>
                <p className='text-white mb-0'>2 & 3 BHK Apartments</p>
              </div>
            </div>
            <div className="col-md-3 my-3">
              <div className="location">
                <h5 className='c-golden'><FontAwesomeIcon icon={faUserCheck} className='pe-2' />Status</h5>
                <p className='text-white mb-0'>Ready To Move</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section-1 */}
    </>
  )
}

export default Home