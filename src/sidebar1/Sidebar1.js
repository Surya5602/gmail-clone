import React from "react";
import IconButton from "../components/IconButton";
import "./sidebar1.css";
export default function Sidebar1() {
   const list =[
    {url : "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/mail_baseline_nv700_20dp.png", name : "Mail", rowCol : true},
    {url : "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/chat_bubble_baseline_nv700_20dp.png", name : "Chat", rowCol : true},
    {url : "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/gmail_groups_baseline_nv700_20dp.png", name : "Spaces", rowCol : true},
    {url : "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/meet_baseline_nv700_20dp.png", name : "Meet", rowCol : true},
  ]
  return (
    <div className="sidebar">
      <div className="icons">
        <svg
          style={{
            height: 25,
            margin: 20,
            color: "#5f6368",
            opacity: 1,
            fill: "currentcolor",
            overflow: "hidden",
          }}
          focusable="false"
          viewBox="0 0 24 24"
        >
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
        </svg>
        {
          list.map((val,index)=>{
            return (
              <IconButton key={index} src={val.url} name={val.name} column={val.rowCol} />
            )
          })
        }
        </div>
    </div>
  );
}
