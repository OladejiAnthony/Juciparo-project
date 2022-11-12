import React from 'react'
import "./ProfileHead.css"
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Icon } from '@iconify/react';
import ProgressBar from 'react-bootstrap/ProgressBar';

function ProfileHead() {

  const now = 60;
  const zero = 0;
  return (
    <div className='profileHead'>
      <div className='avatar__section'>
        <Stack>
          <Avatar sx={{ bgcolor: "white" }}>
            <Icon icon="fontisto:picture" />
          </Avatar>
        </Stack>
        <h4>JMK STORES</h4>
        <div className='profileHead__star'>
          <Icon icon="clarity:favorite-solid" />
          <Icon icon="clarity:favorite-solid" />
          <Icon icon="clarity:favorite-solid" />
          <Icon icon="clarity:favorite-solid" />
          <Icon icon="clarity:favorite-solid" />
        </div>
        <p>
          3.9 from 129 reviews
        </p>
      </div>
      
      <div className='profileHead__deli'>
          <div>
            <h4>Delivery Rate</h4>
            <ProgressBar now={now} label={`${now}%`} />
          </div>
          <div>
            <h4>Communication</h4>
            <ProgressBar now={zero} label={`${zero}%`} />
          </div>
      </div>
      <div className='profileHead__fol'>
          <div className='fol__top'>
            <h4>500 followers</h4>
            <button>Follow</button>
          </div>
          <div className='fol__bottom'>
            <div>

            </div>
            <div>
              
            </div>
          </div>
      </div>
    </div>
  )
}

export default ProfileHead



