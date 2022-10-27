import React from "react";
import "./activeicon.css";
function ActiveIcon() {
  return (
    <div className="Active-button flex">
      <div className="color-component"></div> <p>Active</p>
      <div className="down-arrow"><svg width="24px" height="24px" fill="grey" viewBox="0 0 24 24" class="Ye"><path d="M7 10l5 5 5-5z"></path><path d="M0 0h24v24H0z" fill="none" style ={{color:"rgb(60,64,67)"}}></path></svg></div>
    </div>
  );
}

export default ActiveIcon;
