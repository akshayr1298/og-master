import React, { useState,useRef,useEffect} from 'react';
import { FaBell,FaUser,FaCheckCircle } from 'react-icons/fa';
import myImage from '../images/ogLogo.png';
import Profile from './Profile';
import Verufy from './Verify';
import Package from './Package';
import Header from './Header';
import Manageuser from './Manageuser';
// import Profile from './Profile';
import '../App.css';
import { Link } from 'react-router-dom';

function getScrollHeight(element) {
  return Math.round((element.scrollHeight - element.clientHeight) / 10);
}

function Dashboard({children}) {
    const [selectedMenu, setSelectedMenu] = useState('menu1');
    const handleMenuClick = (menu) => {
      console.log("hi",menu);
        setSelectedMenu(menu);
    };
  
    return (
    <div className="cont">
        <div className="left-pane">
          <div  style={{ width: '16rem', backgroundColor:'#36454F',height: '100vh',  borderRadius: 20 }}> 
              <center>
               <img src={myImage} alt="My Image" style={{ width: '200px', height: '150px',marginTop:-5}}/>
                <hr style={{width:'70%',marginTop:-5}}></hr>
                <div style={{margin:15}}>
                <Link to="/Manageuser" className="nav-link">
                    <div style={{ display: 'flex', alignItems: 'center', paddingLeft:'15%', borderRadius:15, paddingTop:10, paddingBottom:10, backgroundColor: selectedMenu === 'menu1' ? 'lightskyblue' : 'transparent' }} onClick={() => handleMenuClick('menu1')}>
                       <FaUser color='white' size={25} style={{ paddingRight:10 }} />
                       <p style={{ color:'white', fontWeight:'bold', margin: 0 }}>Manage company users</p>
                    </div>
                    </Link>
                    <Link to="/Package" className="nav-link">
                    <div style={{display: 'flex', alignItems: 'center', paddingLeft:'15%', borderRadius:15, paddingTop:10, paddingBottom:10,backgroundColor: selectedMenu === 'menu2' ? 'lightskyblue' : 'transparent' }} onClick={() => handleMenuClick('menu2')}>
                         <FaCheckCircle size={25}  color='white' style={{paddingRight:10}}/><p style={{ color:'white', fontWeight:'bold', margin: 0}}>Packages</p>
                    </div>
                    </Link>
                    <Link to="/Verufy" className="nav-link">
                    <div style={{display: 'flex', alignItems: 'center', paddingLeft:'15%', borderRadius:15, paddingTop:10, paddingBottom:10,backgroundColor: selectedMenu === 'menu3' ? 'lightskyblue' : 'transparent' }} onClick={() => handleMenuClick('menu3')}>
                        <FaCheckCircle size={25}  color='white' style={{paddingRight:10}}/>
                        <p style={{ color:'white', fontWeight:'bold', margin: 0}}>Candidate List</p>
                    </div>
                    </Link>
                    <div style={{display: 'flex', alignItems: 'center', paddingLeft:'15%', borderRadius:15, paddingTop:10, paddingBottom:10,backgroundColor: selectedMenu === 'menu4' ? 'lightskyblue' : 'transparent' }} onClick={() => handleMenuClick('menu4')}>
                        <FaCheckCircle size={25}  color='white' style={{paddingRight:10}}/>
                        <p style={{ color:'white', fontWeight:'bold', margin: 0}}>Employee List</p>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', paddingLeft:'15%', borderRadius:15, paddingTop:10, paddingBottom:10,backgroundColor: selectedMenu === 'menu5' ? 'lightskyblue' : 'transparent' }} onClick={() => handleMenuClick('menu5')}>
                        <FaCheckCircle size={25}  color='white' style={{paddingRight:10}}/>
                        <p style={{ color:'white', fontWeight:'bold', margin: 0}}>Verify</p>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', paddingLeft:'15%', borderRadius:15, paddingTop:10, paddingBottom:10,backgroundColor: selectedMenu === 'menu6' ? 'lightskyblue' : 'transparent' }} onClick={() => handleMenuClick('menu6')}>
                        <FaBell size={25}  color='white' style={{paddingRight:10}}/>
                        <p style={{ color:'white', fontWeight:'bold', margin: 0}}>Settings</p>
                    </div>
                </div>
              </center>
          </div>
        </div>
        <div className="right-pane">
          <Header />
            {children}
        </div>


      </div>
    );
}

export default Dashboard;