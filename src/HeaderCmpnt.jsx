import React from 'react'

const HeaderCmpnt = (props) => {
    return (
        <>
            <div className="headerbg">
                <div className="hinnerbg">
                <div className="centertext">
                <h1>{props.text}</h1>
                </div>
                
                </div>
            </div>
        </>
    )
}
export default HeaderCmpnt