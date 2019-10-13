import React from 'react';

function Footer(props){
	return(
		<div className="footer">
        <div className="container">
            <div className="row ">             
                <div className="col-4 col-sm-4">
                    <h2>Loan Calculator</h2>
                    
                </div>
                
                <div className="col-8 col-sm-8 ">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
    
        </div>
    </div>
	)
}

export default Footer;