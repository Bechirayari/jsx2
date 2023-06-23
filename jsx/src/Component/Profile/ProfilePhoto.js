import React from 'react'
import Image from 'react-bootstrap/Image';
import l1 from '../img/h1.jpg'
import './photo.css'
const ProfilePhoto = () => {
  return (
    <div className='x'>
      <Image src={l1} fluid  style={{ marginLeft:"50%", borderRadius:"50%"}}/>
    </div>
  )
}

export default ProfilePhoto
