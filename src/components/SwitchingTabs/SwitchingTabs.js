import React, { useEffect, useState } from "react";
import MessageBottom from "../MessageBottom/MessageBottom";
import MessageBox from "../Messagebox/MessageBox";
import "./switchingtabs.css";
function SwitchingTabs() {
  const list = {
    Primary: [
      {
        From: "Myntra",
        Subject: "From one sneakerhead to another",
        Content:
          "You might want to check this out If you would prefer not receiving our emails, please click here to unsubscribe.  ",
        Time: "1.24 PM",
      },
      {
        From: "Myntra",
        Subject: "From one sneakerhead to another",
        Content:
          "You might want to check this out If you would prefer not receiving our emails, please click here to unsubscribe.  ",
        Time: "1.24 PM",
      },
      {
        From: "Myntra",
        Subject: "From one sneakerhead to another",
        Content:
          "You might want to check this out If you would prefer not receiving our emails, please click here to unsubscribe.  ",
        Time: "1.24 PM",
      },
    ],
    Promotions: [
      {
        From: "Flipkart",
        Subject: "From one sneakerhead to another",
        Content:
          "You might want to check this out If you would prefer not receiving our emails, please click here to unsubscribe.  ",
        Time: "1.24 PM",
      },
      {
        From: "Flipkart",
        Subject: "From one sneakerhead to another",
        Content:
          "You might want to check this out If you would prefer not receiving our emails, please click here to unsubscribe.  ",
        Time: "1.24 PM",
      },
      {
        From: "Flipkart",
        Subject: "From one sneakerhead to another",
        Content:
          "You might want to check this out If you would prefer not receiving our emails, please click here to unsubscribe.  ",
        Time: "1.24 PM",
      },
    ],
    Social: [
      {
        From: "Instagram",
        Subject: "From one sneakerhead to another",
        Content:
          "You might want to check this out If you would prefer not receiving our emails, please click here to unsubscribe.  ",
        Time: "1.24 PM",
      },
      {
        From: "Instagram",
        Subject: "From one sneakerhead to another",
        Content:
          "You might want to check this out If you would prefer not receiving our emails, please click here to unsubscribe.  ",
        Time: "1.24 PM",
      },
      {
        From: "Instagram",
        Subject: "From one sneakerhead to another",
        Content:
          "You might want to check this out If you would prefer not receiving our emails, please click here to unsubscribe.  ",
        Time: "1.24 PM",
      },
    ],
  };

  const [state, setState] = useState("Primary");
  const [List, setList] = useState(list[state]);
  useEffect(() => {
    setList(list[state]);
  }, [state]);
  const imgName = [
    {
      img: "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/inbox_baseline_nv700_20dp.png",
      name: "Primary",
    },
    {
      img: "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/sell_baseline_nv700_20dp.png",
      name: "Promotions",
    },
    {
      img: "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/group_baseline_nv700_20dp.png",
      name: "Social",
    },
  ];

  return (
    <div className="switchtabs ">
      <div className="tab mytabs flex">
        {imgName.map((value, index) => {
          return (
            <div
              className="singletab flex"
              key={index}
              onClick={() => {
                setState(value.name);
              }}
            >
              <div className="tabimg">
                <img src={value.img} alt="tabs" />
              </div>
              <div className="tabname">
                <p>{value.name}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="tabmessage">
        {List?.map((value, index) => {
          return (
            <MessageBox
              From={value.From}
              Subject={value.Subject}
              Content={value.Content}
              Time={value.Time}
            />
          );
        })}
      </div>
      <MessageBottom />
    </div>
  );
}

export default SwitchingTabs;
