import React from 'react'

const GridCard = (props) => {
    return (
        <>
            <div className="gridcard">
                <div className="imgdiv mx-auto">
                    <img src={props.imgsrc} alt="" />
                    <div className={props.classn}>
                        <h2>Lorem Ipsum</h2>
                        <p>Most businesses have a hard time marketing and advertising efficiently.
                         We help you implement strategies to make your business become the topic of conversation</p>
                        <button className="gridbtn">{props.btntext}</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default GridCard
