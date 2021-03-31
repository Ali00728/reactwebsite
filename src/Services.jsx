import React from 'react'
import HeaderCmpnt from './HeaderCmpnt'
import HeadingC from './Home/HeadingC';
import Scard from './Home/Scard';
import { Grid2Data } from './Home/SgridData';
import Footer from './Home/Footer'
const Services = () => {
    return (
        <>
            <HeaderCmpnt
                text="Services"
            />
            <div className="serviceGrids">
                <HeadingC
                    h1text="Our Marketing Services"
                    classn=" headings2"
                />
                <div className="col-lg-10 mx-auto">
                    <div className="row g-0">

                        {
                            Grid2Data.map((val, index) => {
                                return <Scard
                                    imgsrc={val.img}
                                    title={val.title}
                                />
                            })
                        }

                    </div>
                </div>
            </div>
            <div className="bneeds">
                <div className="binnerdiv">
                    <div className="text">
                        <h1>The Spark Your Business Needs.</h1>
                        <p>How much of your marketing budget are you wasting? How many new customers could you be attracting?
             How many current customers can you transfer into repeat business? How much potential revenue are you missing out on?</p>
                        <button className="bbtn">Read More</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default Services
