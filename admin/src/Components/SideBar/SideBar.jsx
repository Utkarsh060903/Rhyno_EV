import React from 'react'
import './SideBar.css'
import {NavLink} from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <NavLink to='/info' className="sidebar-option">
                <p>Customers</p>
            </NavLink>
        </div>
    </div>
  )
}

export default SideBar