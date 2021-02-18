import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQFwYTSF4H9Ojg/company-logo_200_200/0/1604895955276?e=2159024400&v=beta&t=LQvnb1x_Z-0Iy9xX6m2K4Yk_Ano94SotA8NgVPEH3nE" />
      </div>
      <div className="header__right">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Team</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
