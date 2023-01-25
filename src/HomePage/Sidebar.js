import React,{useState} from 'react'
import "./Sidebar.css"
import { Link, useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react';
import {CategoryList, SidebarData} from "../Data/Data"
//import { List } from '@mui/material';


function Sidebar() {
  const [showDiv, setShowDiv] = useState(false);
  const onClick = () => setShowDiv(!showDiv);
  
  //const navigate = useNavigate();

  return (
    <div className='sidebar'>
      {SidebarData.map((item, index) => {
        return (
          <>
          <div className = {index ? 'menuItem active' : 'menuItem'}
            key={index}
            onClick={onClick}
          >
            <Icon icon={item.icon} />
            <Link>
              {item.title}
            </Link>
          </div>
          {/* {showDiv ? (
            <div 
              className='categoryList'
            >
              {
                CategoryList.map((list, ind) => {
                  return (
                    <>
                      <ul>
                        <li>{list.headOne}</li>
                        <li>{list.textOneA}</li>
                        <li>{list.textOneB}</li>
                        <li>{list.textOneC}</li>
                        <li>{list.textOneD}</li>
                      </ul>
                      <ul>
                        <li>{list.headTwo}</li>
                        <li>{list.textTwoA}</li>
                        <li>{list.textTwoB}</li>
                        <li>{list.textTwoC}</li>
                        <li>{list.textTwoD}</li>
                      </ul>
                      <ul>
                        <li>{list.headThree}</li>
                        <li>{list.textThreeA}</li>
                        <li>{list.textThreeB}</li>
                        <li>{list.textThreeC}</li>
                        <li>{list.textThreeD}</li>
                      </ul>
                      <ul>
                        <li>{list.headFour}</li>
                        <li>{list.textFourA}</li>
                        <li>{list.textFourB}</li>
                        <li>{list.textFourC}</li>
                        <li>{list.textFourD}</li>
                      </ul>
                    </>  
                  )
                })
              }
            </div>
          )
          : null
        } */}
          </>
        )
      })}
    </div>
  )
}

export default Sidebar
