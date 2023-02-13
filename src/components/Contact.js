import React from 'react';
import './Contact.css'

const status = true;

function Contact() {
    return(
        <div className='Contact'>
            <img className='avatar' src='https://randomuser.me/api/portraits/men/22.jpg' alt=''/>
            <div>
                <p className='name'>Anita Sutton</p>
                <div className='status'>
                    <div className='status-online'></div>
                    <div className='status-text'>{status ? "online" : "offline"}</div>
                </div>            
            </div> 
        </div>
    );
}

export default Contact;