import React from 'react'
import { GoLocation } from "react-icons/go"
import { HiOutlineMail } from "react-icons/hi"
import { AiOutlinePhone } from "react-icons/ai"
import logo from '../images/logo.png'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="innerbg">
                    <div className="imgdivf">
                        <img src={logo} alt="" />
                    </div>
                    <div className="row m-0">
                        <div className="col-10 mx-auto">
                            <div className="row grids">
                                <div className="col-lg-4 mx-auto grid">
                                    <GoLocation className="icon" />
                                    <h2>Address</h2>
                                    <p>859 550 4254 ScintillareAgency@gmail.com</p>
                                </div>
                                <div className="col-lg-4 mx-auto grid">

                                    <AiOutlinePhone className="icon"/>
                                    <h2>Phone</h2>
                                    <p>859-550-4254</p>
                                </div>
                                <div className="col-lg-4 mx-auto grid">
                                    <HiOutlineMail className="icon" />
                                    <h2>Email</h2>
                                    <p>ScintillareAgency@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lastfooter">
                <h6>© 2020 scintillareagency.com</h6>
                <div className="fimg">
                <img src={logo} alt=""/>
                </div>
            </div>
        </>
    )
}
export default Footer
