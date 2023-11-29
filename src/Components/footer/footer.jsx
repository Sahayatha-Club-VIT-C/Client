import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footerDiv">
      <div className="footerLeft">
        <div className="footerClubinfo">
          <div className="footerClubInfoTop">
            <img src={require("../../images/OFFICIAL SAHAYATHA LOGO.png")} />
            <h1>SAHAYATHA</h1>
          </div>

          <div>Your Contribution Their Transformation</div>
        </div>
        <div className="footerContactinfo">
          <h3>Reach Out To Contribute</h3>
          <hr></hr>
          <div className="contactInfoDiv">
            <p>President</p>
            <p>9898989898</p>
          </div>
          <div className="contactInfoDiv">
            <p>President</p>
            <p>9898989898</p>
          </div>
        
        </div>
      </div>
      <div className="footerRight">
        <div className="footerLinks">
          <div className="footerLinksDiv">
            <img src={require("../../images/youtube.png")} />

            <a href="#">SAHAYATHAVITC</a>
          </div>
          <div className="footerLinksDiv">
            <img src={require("../../images/instagram.png")} />

            <a href="#">@SAHAYATHA_CLUB_VITC</a>
          </div>
          <div className="footerLinksDiv">
            <img src={require("../../images/linkedin (1).png")} />

            <a href="#">SAHAYATHA-CLUB-VITC-SAHAYATHA</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
