import react from 'react';

function Footer(){
    return(
        <div className="footbottom">
        <hr width="80%" opacity="10px"/>
        <div className="foot">
            <div className="foot1">
        
                <h3>SAcademy.</h3>
                <span>Address: 5th floor, Sangareddy, Telangana - 502001</span><br/>
                <span>Email: feedback@sacademy.com</span>
            </div>

            <div className="foot2">
                <h3>Company</h3>
                <span>About us</span><br/>
                <span>Contact us</span><br/>
                <span>Careers</span><br/>
                <span>Privacy Policy</span><br/>
                <span>Terms of Service</span><br/>
               
                
            </div>

            <div className="foot3">
                <h4>Learn</h4>
                <span>Python</span><br/>
                <span>Java</span><br/>
                <span>HTML/CSS</span><br/>
                <span>DSA</span><br/>
                <span>Mongo DB</span><br/>

            </div>
            <div className="foot4">
                <h4>Practice</h4>
                <span>Course</span><br/>
                <span>Company-wise</span><br/>
                <span>Topic-wise</span><br/>
                <span>How to Begin?</span><br/>

            </div>
        </div>
        <div className="foot5">
            <h4>@SAcademy, All rights reserved</h4>
        </div>
        </div>

    );
}
export default Footer;