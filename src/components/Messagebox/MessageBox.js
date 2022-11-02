import React from 'react'
import Checkbox from '../Checkbox/Checkbox'
import "./messagebox.css"
function MessageBox({From , Subject , Content , Time}) {
  return (
    <div className='messagebox flex'>
        <div className='checkbox-message'>
        <Checkbox/>
        </div>
        <div className="messagestarred" >
        <img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/star_baseline_nv700_20dp.png" alt=""></img>
        </div>
        <div>
                <div className=' message-component flex'>
                    <div className='message-heading' >
                       <p>{From}</p>  
                        </div>
                        <div className='message-body '>
                        <div className='message-subject' >
                          <p>{Subject}</p>  </div>
                            </div>
                            <div className='message-content'> <p> - {Content}</p> </div> 
                            
                            </div>
                          </div>
                           
                            <div className='time-mail'>
                                <p>{Time}</p>
                                
                                </div>
                </div>
  )
}

export default MessageBox