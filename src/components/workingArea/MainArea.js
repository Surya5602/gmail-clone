import React from 'react'
import SearchBar from '../searchBar/SearchBar'
import ActiveIcon from '../ActiveIcon/ActiveIcon'
import Icons from '../Icons1/Icons'
import Message from '../MessageArea/Message'
import "./mainarea.css"
function MainArea() {
  return (
    <div className='total'>
      <div className='main-area flex'>
          <SearchBar/>
          <ActiveIcon/>
          <Icons/>
     </div>
       <div>
        <Message/>
    
       </div>
    </div>
  
    
   
  )
}

export default MainArea