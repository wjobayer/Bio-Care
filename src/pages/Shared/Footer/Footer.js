import { faFacebook, faGithub, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer">
            <div className="icon">
            <h4><FontAwesomeIcon icon={faFacebook} /></h4>
            <h4><FontAwesomeIcon icon={faLinkedin} /></h4>
            <h4><FontAwesomeIcon icon={faTwitter} /></h4>
            <h4><FontAwesomeIcon icon={faYoutube} /></h4>
            <h4><FontAwesomeIcon icon={faGithub} /></h4>
            </div>
            <p>Copyright © 2021 Jobayers Depelopment | operated by Development Agency | New Airport Road, Bananai, Dhaka-1212
</p>
        </div>
    );
};

export default Footer;