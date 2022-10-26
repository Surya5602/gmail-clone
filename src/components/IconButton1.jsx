import React from 'react'

import "./IconButton1.css"
function IconButton1({src, name , onClick , index}) {
    return (
      <div className={`icon-btn1 flex `} onClick={()=>{onClick(index)}}>
          <div className="icon-btn-image1">
              <img src={src} alt="" />
          </div>
          <div className='icon-btn-name1'>{name}</div>
      </div>
    )
  }
  
  export default IconButton1