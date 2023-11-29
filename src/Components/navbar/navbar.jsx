import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <nav class="navbar">
      <div class="navbarLeft">
        <div class="navCompanyLogo">
          <img
            src={require("../../images/OFFICIAL SAHAYATHA LOGO.png")}
            alt="Company Logo"
          />
          <h1>SAHAYATHA</h1>
        </div>
      
      </div>
      <div class="navbarRight">
        <div className="navLinks">
          <div>
            {" "}
            {/* <li */}
              <a href="#">Home</a>
            {/* </li> */}
          </div>
          <div>
            {" "}
         
              <a href="#">Events</a>
          
          </div>
          <div>
          
              <a href="#">About Us</a>
          
          </div>
          <div>
           
              <a href="#">Contact Us</a>
           
          </div>
          <div>
          <button className="donateButton">Donate Now</button>
           
              {/* <a href="#">Images</a> */}
           
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
