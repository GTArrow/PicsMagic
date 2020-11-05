import React from 'react';
import {Link} from 'react-router-dom';

function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 offset-sm-2 col-sm-6">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/helpcenter">Help Center</Link></li>
                    </ul>
                </div>
                <div className="col-6 col-sm-4">
                    <h5>Contact Us</h5>
                    <address>
		              <i className="fa fa-phone fa-lg"></i>: +3678882736<br />
		              <i className="fa fa-fax fa-lg"></i>: +852 8765 4321<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:picsmagic@mcmaster.ca">
                      magic@mcmaster.ca</a>
                    </address>
                </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2020 PicsMagic</p>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}

export default Footer;