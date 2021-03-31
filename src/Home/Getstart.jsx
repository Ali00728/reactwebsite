import React from 'react'
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import { withStyles, makeStyles } from '@material-ui/core/styles';
const Getstart = () => {
  const IOSSlider = withStyles({
    root: {
      color: '#B6902E',
      height: 2,
      paddingBottom :'30px'
    },
    thumb: {
      height: 20,
      width: 20,
      backgroundColor: '#B6902E',
      marginTop: -8,
      border: "5px solid white",
      boxShadow: "-0px 0px 10px rgba(0,0,0,0.5)",
      marginLeft: -8,
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 10px)',
      top: -22,
      '& *': {
        background: 'transparent',
        color: '#000',
      },
    },
    track: {
      height: 8,
      borderRadius: "20px"
    },
    rail: {
      height: 8,
      opacity: 0.5,
      backgroundColor: '#bfbfbf',
      borderRadius: "20px"
    },
    mark: {
      backgroundColor: '#bfbfbf',
      height: 8,
      width: 1,
      marginTop: -3,
    },
    markActive: {
      opacity: 1,
      backgroundColor: 'currentColor',
    },
  })(Slider);

  return (
    <>
      <div className="getstart">
        <div className="bgimg">
          <div className="bgimg2">
            <div className="rightdiv">
              <div className="topheading">
                <h1>Get started for FREE</h1>
                <h2>Aim</h2>
                <p>"I want to help each and every business that I can to reach their marketing potential...
                whether we work together on a monthly basis or not.
                          That's why I will run your first ad outreach for FREE!!"</p>
                <button className="getbtn">Explore more</button>
              </div>
              <div className="lines">
              <label>SOCIAL MEDIA MANGEMENT</label>
                <IOSSlider valueLabelDisplay="on" defaultValue="85" scale={(x) => x ** 1+"%"} />
                <label>INTERNAL MARKERTING</label>
                <IOSSlider valueLabelDisplay="on" defaultValue="65" scale={(x) => x ** 1+"%"} />
                <label>BRAND DEVELOPEMENT</label>
                <IOSSlider valueLabelDisplay="on" defaultValue="91" scale={(x) => x ** 1+"%"} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
export default Getstart
