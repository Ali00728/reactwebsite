import React from 'react'
import img2 from '../images/grids2bg.png'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import logo from '../images/logoc.png'

const Crousal = () => {
  return (
    <>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img2} className="d-block w-100" alt="..." />
            <div className="carousel-caption ">
              <img src={logo} className="logoimg img-fluid" alt="" />
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
              <h3>Brandon Bross</h3>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="..." />
            <div className="carousel-caption ">
              <img src={logo} className="logoimg img-fluid"  alt="" />
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
              <h3>Lorem Ipsum</h3>
            </div>

          </div>

        </div>
        <div className="cbtns">
          <button className="leftarrow" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <BsArrowLeft />

          </button>
          <button className="rightarrow" data-bs-target="#carouselExampleControls" data-bs-slide="next">

            <BsArrowRight />
          </button>
        </div>
      </div>
    </>

  )
}
export default Crousal
