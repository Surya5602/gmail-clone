import React ,{ useState} from 'react';
import IconButton1 from '../components/IconButton1'
import logo from '../Assets/images/cmail-removebg-preview.png'
import "./contentArea.css"
export default function Content() {
 
  var [bool , setBool] = useState(true);

  const list = [
    {url : "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/inbox_baseline_nv700_20dp.png", name:"Inbox" },
    {url : "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/star_baseline_nv700_20dp.png", name:"Starred" },
    {url : "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/schedule_baseline_nv700_20dp.png", name:"Snoozed" },
    {url : "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/send_baseline_nv700_20dp.png", name:"Sent" },
    {url : "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/draft_baseline_nv700_20dp.png", name:"Drafts" },
  ]
  const list2 = [
    {url : "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/label_important_baseline_nv700_20dp.png", name:"Important" },
    {url : "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/schedule_send_baseline_nv700_20dp.png", name:"Scheduled" },
    {url : "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/stacked_email_baseline_nv700_20dp.png", name:"All Mail" },
    {url : "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/report_baseline_nv700_20dp.png", name:"Spam" },
    {url : "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/delete_baseline_nv700_20dp.png", name:"Trash" },
    {url : "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/label_baseline_nv700_20dp.png", name:"Categories" },
    {url : "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/settings_baseline_nv700_20dp.png", name:"Manange labels" },
    {url : "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/add_large_baseline_nv700_20dp.png", name:"Create new label" }
  ]

  
  return (
    <div className='MainPage'>
    <img className='Gmail-logo' src={logo} alt="logo"/>
    <div className='compose' >
      <img className='compose-logo' src={'https://www.gstatic.com/images/icons/material/system_gm/1x/create_black_24dp.png'} alt="compose-logo" />
      <p>Compose</p>
    </div>
    <div>
      {
        list.map((value,index)=>{
          return(
         <IconButton1 key={index} src={value.url} name={value.name}></IconButton1>
          )
        })
      }
      <div onClick={()=>setBool(!bool)}><IconButton1 src={"https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/expand_more_baseline_nv700_20dp.png"} name={bool?"More":"Less"} /></div>
     
      {
        bool?
          <></>
          :
          list2.map((value,index)=>{
            return(
           <IconButton1 key={index} src={value.url} name={value.name}></IconButton1>
            )
          })

      }

      <div className='icon-btn1 labels flex'>
        <p>Labels</p>
        <IconButton1 src={"https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/add_large_baseline_nv700_20dp.png"}></IconButton1>

      </div>
     
     
    </div>
    </div>
  )
}
