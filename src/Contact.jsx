import React from 'react'
import HeaderCmpnt from './HeaderCmpnt'
import Footer from './Home/Footer'
const Contact = () => {
     const inputEvent = (e) =>{
         e.preventDefault();
     }
    return (
        <>
            <HeaderCmpnt
                text="Contact"
            />
            <div className="cheading">
                <h1>Contact Us</h1>
            </div>
            <div className="contactform">
            <form action="" onSubmit={inputEvent}>
            <h3>If you have any question fill the form and send message</h3>
            <input type="text" placeholder="Enter Name"/>
            <input type="text" placeholder="Enter Email"/>
            <textarea name="" id="" rows="3" placeholder="Type a message here"></textarea>
            <button   type="submit">Send</button>
            </form>
            </div>
            <Footer/>
        </>
    )
}
export default Contact
