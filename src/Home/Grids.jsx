import React from 'react'
import HeadingC from './HeadingC'
import GridCard from './GridCard'

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
                            imgsrc="images/grid1.png"
                        />
                    </div>
                    <div className="col-lg-6 ">
                        <GridCard
                            btntext="Fix These Problems"
                            classn="gridtext change"
                            imgsrc="images/grid2.png"
                        />
                    </div>

                </div>
            </div>
        </>
    )
}
export default Grids
