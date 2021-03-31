import React from 'react'


const Scard = (props) => {
    return (
        <>
            <div className="col-md-4 cardstyle">
                <div class="card my-4 mx-auto " >
                    <img src={props.imgsrc} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h3 class="card-title">{props.title}</h3>
                        <p class="card-text">Where are people's attention? What platforms are relevant to your business? We get your message to them.</p>
                        <a href="#" class="btn cardbtn">Read More</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Scard
