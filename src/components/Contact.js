import PropTypes from 'prop-types';
import React from 'react';
import './Contact.css'

function Contact(props) {
    return(
        <div className='Contact'>
            <img className='avatar' src={props.url} alt={props.name} />
                <div className='status'>
                <h4 className="name">{props.name}</h4>
            {props.online ? 
              <div className="status">
                  <span className="status-online"></span>
                  <p className="status-text">online</p>
              </div>
            :
              <div className="status">
                  <span className="status-offline"></span>
                  <p className="status-text">offline</p>
              </div>
            }
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