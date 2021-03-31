import React from 'react'
import HeadingC from './HeadingC'
import GridCard from './GridCard'
import gridimg1 from '../images/1grid1.png'
import gridimg2 from '../images/1grid2.png'

const Grids = () => {
    return (
        <>
            <div className="gridSection py-5 col-lg-10 mx-auto">
                <HeadingC
                    h1text="What is Lorem Ipsum?"
                    classn="headings2"
                />
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
        </>
    )
}
export default Grids
