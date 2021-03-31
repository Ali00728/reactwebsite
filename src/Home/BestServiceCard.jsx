import React from 'react'
import bsimg1 from '../images/bsgrid1.png'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const BestServiceCard = (props) => {
    return (
        <>
        <div className="col-md-4 mx-auto  card1">
                 <img src={props.imgSrc1} alt=""/>
                 <div className="cardtext">
                     <h3>{props.title1}</h3>
                     <p>"I want to help each and every business that I can to reach their marketing potential...
                      whether we work together on a monthly basis or not.</p>
                      <button className="bsbtn"><ArrowForwardIcon className="bsbtnicon"b/>Get Started</button>
                 </div>
                 </div>
        </>
    )
}
export default BestServiceCard
