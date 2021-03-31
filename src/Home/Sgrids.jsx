import React from 'react'
import Scard from './Scard'
import HeadingC from './HeadingC'
import Grid1Data from './SgridData'
const Sgrids = () => {
    return (
        <>
            <div className="serviceGrids">
                <HeadingC
                    h1text="Our Marketing Services"
                    classn=" headings2"
                />
                <div className="col-lg-10 mx-auto">
                    <div className="row g-0">

                        {
                            Grid1Data.map((val, index) => {
                                return <Scard
                                    imgsrc={val.img}
                                    title={val.title}
                                />
                            })
                        }

                    </div>
                </div>
            </div>

        </>
    )
}
export default Sgrids
