import React from 'react'
import Checkbox from '../Checkbox/Checkbox'
import "./messagebox.css"
function MessageBox() {
    const list = [
        {
         From : "Myntra",
         Subject: "From one sneakerhead to another",
         Content: "You might want to check this out If you would prefer not receiving our emails, please click here to unsubscribe.  ",
         Time: "1.24 PM"
        }
       
    ]
   
  return (
    <div className='messagebox flex'>
        <div className='checkbox-message'>
        <Checkbox/>
        </div>
        <div className="messagestarred" >
        <img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/star_baseline_nv700_20dp.png" alt=""></img>
        </div>
        <div>
            {
        list.map((value , index)=>{
            return(
                <div className=' message-component flex'>
                    <div className='message-heading' key={index}>
                        <p> {value.From}</p>
                        </div>
                        <div className='message-body '>
                        <div className='message-subject' >
                            <p>{value.Subject} </p></div>
                           <div className='message-content'><p>- {value.Content}</p></div> 
                            
                            </div>
                            <div className='time-mail'>
                                <p>{value.Time}</p>
                                </div>
                </div>
            )

})
}
        </div>
            
        
    </div>
  )
}

export default MessageBox