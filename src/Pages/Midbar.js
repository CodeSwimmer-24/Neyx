import React from "react";
import "./Midbar.css";
import EventNoteOutlinedIcon from "@material-ui/icons/EventNoteOutlined";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
function MidBar() {
  return (
    <div className="midbar">
      <div className="midbar__celendar">
        <EventNoteOutlinedIcon />
        <p>
          Calendars – online and print friendly – for any year and month and
          including public holidays and observances for countries worldwide.
        </p>
      </div>
      <div className="midbar__wollet">
        <AccountBalanceWalletOutlinedIcon />
        <p>
          Calendars – online and print friendly – for any year and month and
          including public holidays and observances for countries worldwide.
        </p>
      </div>
      <div className="midbar__laptop">
        <LaptopMacIcon />
        <p>
          Calendars – online and print friendly – for any year and month and
          including public holidays and observances for countries worldwide.
        </p>
      </div>
    </div>
  );
}

export default MidBar;
