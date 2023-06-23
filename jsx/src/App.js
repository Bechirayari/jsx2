import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';


const App = () => {
  return (
    <div>
      <ProfilePhoto/>
      <div style={{textAlign:"center"}}> 
      <FullName/>
      <Address/>
      </div>
    </div>
  )
}

export default App
