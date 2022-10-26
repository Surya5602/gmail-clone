import React from 'react'

import "./IconButton1.css"
function IconButton1({src, name}) {
    return (
      <div className={`icon-btn1 flex`}>
          <div className="icon-btn-image1">
              <img src={src} alt="" />
          </div>
          <div className='icon-btn-name1'>{name}</div>
      </div>
    )
  }
  
  export default IconButton1