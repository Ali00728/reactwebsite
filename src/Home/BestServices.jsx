import React from 'react'
import HeadingC from './HeadingC'
import BestServiceCard from './BestServiceCard'
import {Bestservicedata} from './SgridData'

const BestServices = () => {
    return (
        <>
            <div className="bServices">
                <HeadingC
                    h1text="Our Best Services"
                    classn="headings2"
                />
                <div className="servicesCard">
                    <div className="row m-0">
                        <div className="col-lg-10 mx-auto">
                            <div className="row">
                            {Bestservicedata.map((value,index) =>{
                                return <BestServiceCard
                                    imgSrc1 = {value.image}
                                    title1 = {value.title1}
                                />
                            })}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BestServices
