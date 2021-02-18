import React from "react";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import CallIcon from "@material-ui/icons/Call";
import { IconButton } from "@material-ui/core";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img src="..." alt="" />
        <h5>Cpoyright | 2020</h5>
        <div className="footer__icons">
          <IconButton>
            <div className="facebook">
              <img src="https://fccenters.org/wp-content/uploads/2019/09/facebook-logo-png-transparent-background.png" />
            </div>
          </IconButton>
          <IconButton>
            <div className="insta">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png" />
            </div>
          </IconButton>
          <IconButton>
            <div className="tweeter">
              <img src="https://www.accuro.org.uk/wp-content/uploads/2020/07/Twitter-logo-2012.png" />
            </div>
          </IconButton>
          <IconButton>
            <div className="yt">
              <img src="https://i.pinimg.com/originals/de/1c/91/de1c91788be0d791135736995109272a.png" />
            </div>
          </IconButton>
        </div>
      </div>
      <div className="footer__right">
        <div className="termcondition">
          <h4>Tearm & conditions</h4>
        </div>
        <div className="call">
          <CallIcon />
          +91 987654321
        </div>
      </div>
    </div>
  );
}

export default Footer;
