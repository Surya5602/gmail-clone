import React ,{ useState} from 'react';
import IconButton1 from '../IconButton1'
import "../contentArea/contentArea.css"
export default function Content() {
  var [bool , setBool] = useState(true);
  const changeStyle1 = (r) => {
    for(let i in list){
     list[i].active=false
    }
    list[r].active=true;
    setState(list)
  };
  const changeStyle = (r) => {
    for(let i in list2 ){
     list2[i].active=false
    }
    for(let i in list){
      list[i].active=false
     }
    list2[r].active=true;
    setState1(list2)
  };
  const list = [
    {url : "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/inbox_baseline_nv700_20dp.png",url1:"https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/inbox_fill_baseline_p900_20dp.png" ,name:"Inbox" ,active:true},
    {url : "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/star_baseline_nv700_20dp.png",url1:"https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/star_fill_baseline_p900_20dp.png", name:"Starred",active:false },
    {url : "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/schedule_baseline_nv700_20dp.png", url1:"https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/schedule_fill_baseline_p900_20dp.png", name:"Snoozed" ,active:false},
    {url : "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/send_baseline_nv700_20dp.png", url1:"https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/send_fill_baseline_p900_20dp.png",name:"Sent",active:false },
    {url : "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/draft_baseline_nv700_20dp.png",url1:"	https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/draft_fill_baseline_p900_20dp.png", name:"Drafts",active:false },
  ]
  const list2 = [
    {url : "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/label_important_baseline_nv700_20dp.png",url1:"	https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/label_important_fill_baseline_p900_20dp.png", name:"Important",active:false },
    {url : "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/schedule_send_baseline_nv700_20dp.png",url1:"	https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/schedule_send_fill_baseline_p900_20dp.png", name:"Scheduled",active:false },
    {url : "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/stacked_email_baseline_nv700_20dp.png",url1:"	https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/stacked_email_fill_baseline_p900_20dp.png", name:"All Mail",active:false },
    {url : "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/report_baseline_nv700_20dp.png", url1:"https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/report_fill_baseline_p900_20dp.png",name:"Spam" ,active:false},
    {url : "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/delete_baseline_nv700_20dp.png",url1:"https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/delete_fill_baseline_p900_20dp.png", name:"Trash" ,active:false},
    {url : "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/label_baseline_nv700_20dp.png", url1 : "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/label_baseline_nv700_20dp.png",name:"Categories" ,active:false},
    {url : "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/settings_baseline_nv700_20dp.png", url1 : "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/settings_baseline_nv700_20dp.png",name:"Manange labels" ,active:false},
    {url : "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/add_large_baseline_nv700_20dp.png", url1 : "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/add_large_baseline_nv700_20dp.png", name:"Create new label" ,active:false}
  ]
  const [state, setState] = useState([...list]);
  const [state1, setState1] = useState([...list2]);
  
  return (
    <div className='MainPage'>
    <img className='Gmail-logo' src={"https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"} alt="logo"/>
    <div className='compose' >
      <img className='compose-logo' src={'https://www.gstatic.com/images/icons/material/system_gm/1x/create_black_24dp.png'} alt="compose-logo" />
      <p>Compose</p>
    </div>
    <div>
      {
        state.map((value,index)=>{
          return(
         <IconButton1 key={index} src={value.active ? value.url1: value.url} name={value.name} index={index} onClick={changeStyle1}  ></IconButton1>
          )
        })
      }
      <div onClick={()=>setBool(!bool)}><IconButton1 src={bool?"https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/expand_more_baseline_nv700_20dp.png":"	https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/expand_less_baseline_nv700_20dp.png"} name={bool?"More":"Less"} onClick={changeStyle1} /></div>
     
      {
        bool?
          <></>
          :
          state1.map((value,index)=>{
            return(
           <IconButton1 key={index} src={value.active?value.url1:value.url} name={value.name} onClick={changeStyle} index={index}></IconButton1>
            )
          })

      }

      <div className='labels flex'>
        <p>Labels</p>
        <img classname="labelimage" src={"https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/add_large_baseline_nv700_20dp.png"} alt="plus symbol"></img>

      </div>
    </div>
    </div>
  )
}
