import React from 'react'
import "./messagetop.css"
import logo from "../../Assets/images/keyboard-solid.svg"
import Checkbox from '../Checkbox/Checkbox'
function MessageTop() {
  return (
  
    <div className='message-top-total flex'>
   <div className='left-side flex'>
    <Checkbox />
    <div className='icons2 flex'>
    <div className='downcheck'>
        <img src='https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/arrow_drop_down_baseline_nv700_20dp.png' alt='downcheck'></img>
    </div>
    <div className='reload-btn'>
        <img src='https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/refresh_baseline_nv700_20dp.png' alt='reload-button'></img>
    </div>
    <div className='three-dot'>
        <img src='https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/more_vert_baseline_nv700_20dp.png' alt='three-dot'></img>

    </div>
    </div>
    </div>
    <div className='right-side flex'>
      <div className='pagination flex'>
       <p>1-50 of 3,346</p>
      </div>
      <div className='arrows flex'>
        <div className='left-aarow'>
          <img src='https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/chevron_left_baseline_nv700_20dp.png' alt='left-arrow'></img>
        </div>
        <div className='right-aarow'>
            <img src='https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/chevron_right_baseline_nv700_20dp.png' alt='right-arrow'></img>
        </div>
      </div>
      <div className='keyboard'>
        <img src={logo} alt="logo"></img>
      </div>
      <div className='downbutton'>
        <img src="https://www.gstatic.com/images/icons/material/system_gm/1x/arrow_drop_down_black_20dp.png" alt="arrow"></img>
      </div>

    </div>
   </div>
   
  )
}

export default MessageTop