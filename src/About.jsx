import React from 'react'
import HeaderCmpnt from './HeaderCmpnt'
import HeadingC from './Home/HeadingC';
import GridCard from './Home/GridCard'
import Footer from './Home/Footer'
import gridimg1 from './images/1grid1.png'
import gridimg2 from './images/1grid2.png'
const About = () => {
    return (
        <>
            <HeaderCmpnt
                text="About Us"
            />
            <div className="aboutus">
                <HeadingC
                    h1text="About Us"
                    classn="headings2"
                />
            </div>
            <div className="col-lg-10 mx-auto">


                <div className="row g-0">
                    <div className="col-lg-6 ">
                        <GridCard
                            btntext="Ignite Your Journey"
                            classn="gridtext"
                            imgsrc={gridimg1}
                        />
                    </div>
                    <div className="col-lg-6 ">
                        <GridCard
                            btntext="Fix These Problems"
                            classn="gridtext change"
                            imgsrc={gridimg2}
                        />
                    </div>

                </div>
            </div>
            <div className="centertext">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
             Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
               Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            </div>
            <Footer/>
        </>
    )
}
export default About