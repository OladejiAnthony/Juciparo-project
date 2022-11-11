import React,{useState} from 'react'
import "./Sidebar.css"
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import {SidebarData} from "../Data/Data"


function Sidebar() {
  const [selected, setSelected] = useState(0);

  return (
    <div className='sidebar'>
      {SidebarData.map((item, index) => {
        return (
          <div className = {selected===index ? 'menuItem active' : 'menuItem'}
            key={index}
            onClick={()=>setSelected(index)}
          >
            <Icon icon={item.icon} />
            <Link to={item.heading}>{item.heading}</Link>
          </div>
        )
      })}
        
    </div>
  )
}

export default Sidebar
