import React from 'react'
import SearchBar from '../searchBar/SearchBar'
import ActiveIcon from '../ActiveIcon/ActiveIcon'
import Icons from '../Icons/Icons'
import "./mainarea.css"
function MainArea() {
  return (
    <div className='main-area flex'>
          <SearchBar/>
          <ActiveIcon/>
          <Icons/>
    </div>
   
  )
}

export default MainArea