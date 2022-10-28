import React from 'react'
import "./Sidebar.css"
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';

function Sidebar() {
  return (
    <div className='sidebar'>
        <Link to="">
          <Icon icon="icon-park-solid:lipstick" />
          Health & Beauty
        </Link>
        <Link to="">
          <Icon icon="charm:home" />
          Home & Office
        </Link>
        <Link to="">
          <Icon icon="bi:phone" />
          Phone & Tablet
        </Link>
        <Link to="">
          <Icon icon="gridicons:computer" />
          Computers
        </Link>
        <Link to="">
          <Icon icon="icon-park:clothes-crew-neck" />
          Fashion
        </Link>
        <Link to="">
          <Icon icon="fluent-mdl2:game" />
          Games
        </Link>
        <Link to="">
          <Icon icon="clarity:car-line" />
          Automobile
        </Link>
        <Link to="">
          <Icon icon="mdi:television-classic" />
          Electronics
        </Link>
        <Link to="">
          <Icon icon="bx:help-circle" />
          Others
        </Link>
    </div>
  )
}

export default Sidebar
