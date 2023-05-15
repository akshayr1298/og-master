import React, { useState } from 'react';
import Dashboard from './Dashboard';
import Card from 'react-bootstrap/Card';
import '../App.css';

function Package() {
    const [selectedMenu, setSelectedMenu] = useState('menu1');


    const data = [
        { month: "January", check: '10k', year: 2020 },
        { month: "February", check: '15k', year: 2020 },
        { month: "March", check: '20k', year: 2020 },
        { month: "April", check: '25k', year: 2020 },
        { month: "May", check: '30k', year: 2020 },
      ];

    const handleMenuClick = (menu) => {
        setSelectedMenu(menu);
    };
  
    return (
     <Dashboard>
<div style={{ display: "flex", flexWrap: "wrap" }}>
  {data.map((item, index) => (
    <div key={item.month} style={{ flexBasis: "50%" }}>
      <Card style={{ width: "18rem", backgroundColor: "white", borderRadius: 20 ,display:'flex',margin:15,padding:10}}>
        <div style={{ textAlign: "center", flex:'33%'}}>
          <p style={{fontWeight:'bold'}}>Subscription</p>
          <p>{item.month}</p>
        </div>
        <div style={{ textAlign: "center" ,flex:'33%'}}>
          <p style={{fontWeight:'bold'}}>Amount</p>
          <p>{item.check}</p>
        </div>
        <div style={{ textAlign: "center" ,flex:'33%'}}>
          <p style={{fontWeight:'bold'}}>Year</p>
          <p>{item.year}</p>
        </div>
      </Card>
      {/* {index % 2 === 1 && <div style={{ flexBasis: "100%" }}></div>} */}
    </div>
  ))}
</div>
</Dashboard>


    );
}

export default Package;