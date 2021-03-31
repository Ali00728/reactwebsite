import React from 'react'
import HeaderCmpnt from './HeaderCmpnt'
import Footer from './Home/Footer'
const Marketing = () => {
    return (
        <>
            <HeaderCmpnt
                text="Marketing"
            />
            <div className="marketingtext">
                <h1>What Every Business Needs To Know</h1>
                <h4>Mar-ket-ing : (noun) the action or business of promoting products
         or services including market research and advertising.</h4>
                <p>We want everyone to at least understand the very basics of marketing.
          Could one or all of these (4) basic things beholding back the growth of your business?</p>
                <h4>Indicates required field</h4>
            </div>
            <Footer />
        </>
    )
}
export default Marketing
