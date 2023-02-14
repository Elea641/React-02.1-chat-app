import PropTypes from 'prop-types';
import React from 'react';
import './Contact.css'

function Contact(props) {
    return(
        <div className='Contact'>
            <img className='avatar' src={props.image} alt={props.name} />
            <div>
                <p className='name'>{props.name}</p>
                <div className='status'>
                    <div className={props.online ? 'status-online' : 'status-offline'}></div>
                    <div className='status-text'>{props.status}</div>
                </div>            
            </div> 
        </div>
    );
}
Contact.prototypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
}
export default Contact;