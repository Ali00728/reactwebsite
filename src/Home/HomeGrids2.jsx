import React from 'react'
import HeadingC from './HeadingC'
import Grids2 from './Grids2'
import PaymentIcon from '@material-ui/icons/Payment';
import PostAddIcon from '@material-ui/icons/PostAdd';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
const HomeGrids2 = () => {
    return (
        <>
            <div className="homegrids2">
                <div className="internalbg">
                    <HeadingC
                        h1text="The Scintillare Process"
                        classn=" headings2 changecolor"
                    />
                    <div className="col-10 mx-auto">
                        <div className="row m-0">
                            <Grids2
                                icon=<PaymentIcon className='icon1'/>
            text="We listen to what your marketing and advertising goals are."
        />
        <Grids2
                                icon=<PostAddIcon className='icon1'/>
            text="We look at your current marketing content and distribution efforts to help you improve."
        />
        <Grids2
                                icon=<WorkOutlineIcon className='icon1'/>
            text="Implement your new process to help your business grab attention and shine."
        />

        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default HomeGrids2
