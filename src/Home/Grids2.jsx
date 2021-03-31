import React from 'react'


const Grids2 = (props) => {
    return (
        <>
            <div className="col-lg-4">
                <div className="grid2">
                    {props.icon}
                    <p>{props.text}</p>
                </div>
            </div>
        </>
    )
}
export default Grids2
