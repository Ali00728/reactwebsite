import React from 'react'
import HeadingC from './HeadingC'
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import {TextField} from '@material-ui/core';
const Subscribe = () => {
    return (
        <>
            <div className="subscribe">
                <div className="internalbg">
                    <HeadingC
                        h1text="Subscribe to our newsletter"
                        classn="headings2 changecolor"
                    />
                    <div className="input1">
                    <input type="text"/>
                    <Button className="sendbtn" >Send<SendIcon/></Button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Subscribe
