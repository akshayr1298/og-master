import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { FaBell,FaUser} from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
  return (
<div style={{display: 'flex', alignItems: 'center',width:'100', height:'8%', justifyContent: 'flex-end', backgroundColor:'gray'}}>
  <div style={{display: 'flex', alignItems: 'flex-end', alignContent:'flex-end',marginRight:10}}>
 
    <Button  style={{marginRight:10,borderRadius: '10px',display: 'flex', alignItems: 'center',borderColor:'white',backgroundColor:'gray'}}>  <FaBell style={{ color: 'red',marginRight:5 }} size={22} />Upgrade</Button>
    <Button  style={{marginRight:10,borderRadius: '10px',display: 'flex', alignItems: 'center',borderColor:'white',backgroundColor:'gray'}}><FaBell style={{ color: 'red',marginRight:5  }} size={22} /> Notification</Button>
    <Link to="/Profile" className="nav-link"> <Button style={{marginRight:10,borderRadius: '10px',display: 'flex', alignItems: 'center',borderColor:'white',backgroundColor:'gray'}}><FaUser style={{ color: 'red',marginRight:5 }} size={22} /> Profile</Button></Link>
   
  </div>  
</div>
  );
}

export default Header;