import React from 'react'
import MessageBox from '../Messagebox/MessageBox'
import "./switchingtabs.css"
function SwitchingTabs() {
  return (
    <div className='switchtabs'>
    <div className="mytabs">
    <img className="mytabimg" src='https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/inbox_baseline_nv700_20dp.png' alt='inbox'/>
        <input type="radio" id="tabfree" name="mytabs" checked  />
        <label htmlFor="tabfree">Primary</label>
        <div className="tab">
            <MessageBox/>
            <MessageBox/>
            <MessageBox/>
            <MessageBox/>
            <MessageBox/>
            <MessageBox/>
            <MessageBox/>
            <MessageBox/>
            <MessageBox/>
            <MessageBox/>
            <MessageBox/>
            <MessageBox/>
            <MessageBox/>
            <MessageBox/>
            <MessageBox/>
            <MessageBox/>
            <MessageBox/>
            <MessageBox/>
            <MessageBox/>
            <MessageBox/>
            <MessageBox/>
    </div>
    <img className="mytabimg" src='https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/sell_baseline_nv700_20dp.png' alt='promotions'/>
        <input type="radio" id="tabsilver" name="mytabs" />
        <label htmlFor="tabsilver">Promotions</label>
        <div className="tab">
            <MessageBox/>
            <MessageBox/>
            <MessageBox/>
            <MessageBox/>
            <MessageBox/>
            <MessageBox/>
            <MessageBox/>
            <MessageBox/>
            <MessageBox/>
            <MessageBox/>
            <MessageBox/>
            <MessageBox/>
            <MessageBox/>
            <MessageBox/>
            <MessageBox/>
            <MessageBox/>
        </div>
        <img className="mytabimg" src='https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/group_baseline_nv700_20dp.png' alt='promotions'/>
        <input type="radio" id="tabgold" name="mytabs"  />
        <label htmlFor="tabgold">Social</label>
        <div className="tab">
        <MessageBox/>
            <MessageBox/>
            <MessageBox/>
            <MessageBox/>
            <MessageBox/>
            <MessageBox/>
            <MessageBox/>
            <MessageBox/>
            <MessageBox/>
            <MessageBox/>
            <MessageBox/>
            <MessageBox/>
            <MessageBox/>
            <MessageBox/>
            <MessageBox/>
        </div>
    </div>
    </div>
  )
}

export default SwitchingTabs