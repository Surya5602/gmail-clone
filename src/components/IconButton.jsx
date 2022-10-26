import React from 'react'

import "./IconButton.css"

function IconButton({src, name, column, onClick, index}) {
  return (
    <div className={`icon-btn ${column ? "flex-column" : "flex"}`} onClick={()=>{onClick(index)}}>
        <div className="icon-btn-image">
            <img src={src} alt="" />
        </div>
        <div className='icon-btn-name'>{name}</div>
    </div>
  )
}

export default IconButton