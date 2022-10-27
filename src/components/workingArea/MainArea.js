import React from 'react'
import SearchBar from '../searchBar/SearchBar'
import ActiveIcon from '../ActiveIcon/ActiveIcon'
import "./mainarea.css"
function MainArea() {
  return (
    <div className='main-area flex'>
          <SearchBar/>
          <ActiveIcon/>
    </div>
   
  )
}

export default MainArea