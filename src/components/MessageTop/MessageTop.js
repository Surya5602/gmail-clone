import React from 'react'
import "./messagetop.css"
function MessageTop() {
  return (
    <div className='message-top-total flex'>
   <div className='left-side flex'>
    <div className='checkbox'>
    <input type="checkbox" ></input>
    </div>
    <div className='icons2 flex'>
    <div className='downcheck'>
        <img src='https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/arrow_drop_down_baseline_nv700_20dp.png'></img>
    </div>
    <div className='reload-btn'>
        <img src='https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/refresh_baseline_nv700_20dp.png'></img>
    </div>
    <div className='three-dot'>
        <img src='https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/more_vert_baseline_nv700_20dp.png'></img>

    </div>
    </div>
    </div>
    <div className='right-side'>
      <div className='pagination flex'>
       <p>1-50 of 3,346</p>
      </div>

    </div>
   </div>
  )
}

export default MessageTop