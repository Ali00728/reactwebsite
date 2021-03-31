import React from 'react'
import { NavLink } from 'react-router-dom'
const HeadSection = () => {
    return (
        <>
        <section className="headSection">
        <div className="col-lg-10 mx-auto">
        <div className="headings">
        <h6>MEET THE scintillareagency</h6>
        <h1>Spark Conversation</h1>
        <h5>About Your Business</h5>
        <div className="hbtns">
        <button className="btn1"><NavLink className="btnlink" to="/services" >See More</NavLink></button>
        <button className="btn2"><NavLink className="btnlink" to="/contact" >Contact</NavLink></button>
        </div>
        </div>
        </div>
             <div className="leftimg">
                 <img src="images/leftheader.png" className="img-fluid" alt=""/>
             </div>
        </section>
       
        </>
    )
}
export default HeadSection
