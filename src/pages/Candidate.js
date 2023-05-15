


import '../css/candidate.css'
import React from 'react';
import {Button, Dropdown, ButtonToolbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faEye, faEdit,faTrash} from '@fortawesome/free-solid-svg-icons';
import { Link} from 'react-router-dom';

import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
// import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import CandidateProfile from './CandidateProfile';
const Data =[
  {id:"1",
    Candiadate_Name:"anil",
    Candiadate_Email:"@hdhasvdanil",
    Status:"selected",
    check:"checked",
    ActiveStatus:"2days",
    Score:"25%",
    Action:"Delate"
  },
  {id:"2",
    Candiadate_Name:"anil",
    Candiadate_Email:"@hdhasvdanilf",
    Status:"selected",
    check:"checked",
    ActiveStatus:"2days",
    Score:"25%",
    Action:"Delate"
  },
  {id:"3",
    Candiadate_Name:"anil",
    Candiadate_Email:"@hdhasvdanil",
    Status:"selected",
    check:"checked",
    ActiveStatus:"2days",
    Score:"25%",
    Action:"Delate"
  },
  {id:"4",
    Candiadate_Name:"anil",
    Candiadate_Email:"@hdhasvdanil",
    Status:"selected",
    check:"checked",
    ActiveStatus:"2days",
    Score:"25%",
    Action:"Delate"
  },
  {id:"5",
    Candiadate_Name:"anil",
    Candiadate_Email:"@hdhasvdanil",
    Status:"selected",
    check:"checked",
    ActiveStatus:"2days",
    Score:"25%",
    Action:"Delate"
  },
  {id:"6",
    Candiadate_Name:"anil",
    Candiadate_Email:"@hdhasvdanil",
    Status:"selected",
    check:"checked",
    ActiveStatus:"2days",
    Score:"25%",
    Action:"Delete"
  }
]


function Candidate() {

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={e => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </a>
  ));

  function prePage(){
    if(currentPage !== firstIndex){
     setCurrentPage(currentPage-1)
    }
 }
 function chngesCPage(id){
 setCurrentPage(id)
 }
 function NextPage(){
   if(currentPage !== lastIndex){
     setCurrentPage(currentPage+1)
    }
 }


 

  const [currentPage,setCurrentPage]=useState(1)
  const recordPerPage = 2;
  const lastIndex=currentPage*recordPerPage;
  const firstIndex=lastIndex-recordPerPage;
  const records = Data.slice(firstIndex,lastIndex);
  const npage =Math.ceil(Data.length / recordPerPage)
  const numbers=[...Array(npage+1).keys()].slice(1)
  return (
    <div className="App" style={{marginInline:40,marginTop:20, backgroundColor:"LightGray"}}>
      <div style={{padding:20}}>
         <Stack direction="horizontal" gap={3} >
            <Button variant="outline-danger" className="btn-outline-dark" style={{ ':hover': { color: '#fff', backgroundColor: '#dc3545', borderColor: '#dc3545' } }}>+ Add Candidate</Button>
            <Button variant="outline-secondary">+ Bulk Import</Button>
          </Stack>
      </div>
      
        <Card style={{marginTop:20}}>
        <Card.Body>
        <table className='table'>
        <thead>
           <th>SN</th>
           <th>Candiate name</th>
           <th>Candidate Email</th>
           <th>Status </th>
           <th>Check </th>
           <th>Last Activity</th>
           <th>Score </th>
           <th>Action </th>
        </thead>
        <tbody>
     {records.map((item, i) => (
    <tr key={i}>
      <td>{item.id}</td>
      <td>{item.Candiadate_Name}</td>
      <td>{item.Candiadate_Email}</td>
      <td>
      <Form.Select aria-label="Default select example">
      <option>Status</option>
      <option value="Interview">Interview</option>
      <option value="Selected">Selected</option>
      <option value="Offered">Offered</option>
      <option value="Accepted">Accepted</option>
    </Form.Select>
      </td>
      <td>
      <Form.Select aria-label="Default select example">
      <option>Check</option>
      <option value="Ghosted">Ghosted</option>
      <option value="In-Process">In Process</option>
      <option value="Accepted">Accepted</option>
    </Form.Select>
      </td>
      <td>{item.ActiveStatus}</td>
      <td>{item.Score}</td>
      <td>
      <div style={{marginInline:1}}>
      <ButtonToolbar className='dropdown-border'>
        <Dropdown id="dropdown-basic" variant="success">
          <Dropdown.Toggle as={CustomToggle}>
            <FontAwesomeIcon icon={faEllipsisV} />
            
          </Dropdown.Toggle>
          <Dropdown.Menu className='dropdown-border'>
            
            <Dropdown.Item eventKey="1">
            <Link to="/CandidateProfile">
            <Stack direction="horizontal" gap={2}>
               <FontAwesomeIcon icon={faEye} mr="5"/>
                  View
              </Stack>
            </Link>
            </Dropdown.Item>
            <Dropdown.Item eventKey="1">
              <Stack direction="horizontal" gap={2}>
               <FontAwesomeIcon icon={faEdit} mr="5"/>
               Edit
              </Stack>
            </Dropdown.Item>
            <Dropdown.Item eventKey="1">
              <Stack direction="horizontal" gap={2}>
               <FontAwesomeIcon icon={faTrash} mr="5"/>
               Delete
              </Stack>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </ButtonToolbar>
      </div>
      
      </td>
    </tr>
    ))}
    </tbody>
      </table>


      <nav style={{display:'flex',justifyContent:'flex-end'}}>
         <ul className='pagination'>
           <li className='page-item'>
            <a href='#'className='page-link' onClick={prePage}>Pre</a>
           </li>
           {
            numbers.map((item ,i)=>(
              <li className={`page-item${currentPage===item ? 'active': ''}}`} key={i}>
            <a href='#'className='page-link' onClick={()=>chngesCPage(item)}>{item}</a>
           </li>
            ))
           }
           <li className='page-item'>
            <a href='#'className='page-link' onClick={NextPage}>Next</a>
           </li>
    </ul>
  </nav>
        </Card.Body>
      </Card> 
           
<div>
 
  
</div>
      

    </div>
  );
}

export default Candidate;

