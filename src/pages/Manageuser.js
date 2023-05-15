import React, { useState,ScrollView, useEffect } from 'react';
import {Card,Button,Modal,Form,Alert, Table} from 'react-bootstrap';
import Dashboard from './Dashboard';




function Manageuser() {
    const [date, setDate] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [username,setUsername] = useState('');
    const [role,setRole] = useState('');
    const [show, setShow] = useState(false);


    const Jsondata = [
        {id:1,name:'raju',role:'HR',date:'12-05-2022'},
        {id:2,name:'Karan sinha',role:'HR',date:'12-05-2022'},
        {id:3,name:'raju',role:'HR',date:'12-05-2022'},
        {id:4,name:'raju',role:'HR',date:'12-05-2022'},
        {id:5,name:'raju',role:'HR',date:'12-05-2022'},
        {id:6,name:'Karan sinha',role:'HR',date:'12-05-2022'},
        {id:7,name:'raju',role:'HR',date:'12-05-2022'},
        {id:8,name:'raju',role:'HR',date:'12-05-2022'},
        {id:9,name:'raju',role:'HR',date:'12-05-2022'},
        {id:10,name:'Karan sinha',role:'HR',date:'12-05-2022'},
        {id:11,name:'raju',role:'HR',date:'12-05-2022'},
        {id:12,name:'raju',role:'HR',date:'12-05-2022'},
        {id:13,name:'raju',role:'HR',date:'12-05-2022'},
        {id:14,name:'Karan sinha',role:'HR',date:'12-05-2022'},
        {id:15,name:'raju',role:'HR',date:'12-05-2022'},
        {id:16,name:'raju',role:'HR',date:'12-05-2022'},
        {id:17,name:'raju',role:'HR',date:'12-05-2022'},
        {id:18,name:'Karan sinha',role:'HR',date:'12-05-2022'},
        {id:19,name:'raju',role:'HR',date:'12-05-2022'},
        {id:20,name:'raju',role:'HR',date:'12-05-2022'},
        {id:21,name:'raju',role:'HR',date:'12-05-2022'},
        {id:22,name:'Karan sinha',role:'HR',date:'12-05-2022'},
        {id:23,name:'raju',role:'HR',date:'12-05-2022'},
        {id:24,name:'raju',role:'HR',date:'12-05-2022'},
    ];

    const pageSize = 12;
  const [currentPage, setCurrentPage] = useState(0);

  const goToNextPage = () => {
    setCurrentPage(page => page + 1);
  }

  const goToPreviousPage = () => {
    setCurrentPage(page => page - 1);
  }

  const startIndex = currentPage * pageSize;
  const endIndex = startIndex + pageSize;
  const currentSubset = Jsondata.slice(startIndex, endIndex);



  const handlesubmit = (event) => {
    event.preventDefault();
  
    console.log("hi", username, role);
    if (username === '' || role === '') {
        setShowModal(true);
        setShow(true);
    } else {
      setShowModal(false);
      setRole('');
      setUsername('');
    }
  }
    

    const handleShowModal = () => {
        setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };
  

    const handleDateChange = (event) => {
      setDate(event.target.value);
    };

   const handlesub = () =>{
    setShowModal(false);
   }



   const toast = (
    <Alert show={show} variant="success" style={{width:'80%'}}>
    <p>
        All fields are required
    </p>
    <hr />
    <div className="d-flex justify-content-end">
      <Button onClick={() => setShow(false)} variant="outline-success">
        Close me
      </Button>
    </div>
  </Alert>
  );

  return (
    <Dashboard>
    <div style={{display: 'flex'}}>
      
        <div style={{flex:'60%'}}>
        <div style={{}}>
            <div style={{marginTop:10}}>
            <h3>List Of Users</h3>
            </div>

  <Table striped style={{ boxShadow: '0px 0px 10px 5px rgba(0,0,0,0.25)' ,marginTop:'6%'}}>
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Role</th>
        <th>Date of Joining</th>
      </tr>
    </thead>
    <tbody>
    {currentSubset.map(item => (
        <tr  key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.role}</td>
          <td>{item.date}</td>
        </tr>
      ))}
    </tbody>
  </Table>
  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
      <Button variant="primary" onClick={goToPreviousPage} disabled={currentPage === 0}>
         Prev..
      </Button>
      <div style={{ display: 'inline-block',marginLeft:10,marginRight:10 }}>{currentPage}</div>
      <Button variant="primary" onClick={goToNextPage} disabled={endIndex >= Jsondata.length}>
      Next
      </Button>
  </div>
</div>
        </div>
        <div style={{flex:'40%'}}>
            <center>
            <div style={{marginTop:10}}>
            <h3>Add Users</h3>
            </div>
    {showModal == true ?
        null
        :
        <Button variant="primary" onClick={handleShowModal}>
        Add User
      </Button>
        }
        {toast}
{showModal ? (
  <div style={{ marginTop: '8%', width: '80%', backgroundColor: 'white', boxShadow: '0px 0px 10px 5px rgba(0,0,0,0.25)' }}>
    <Form style={{ padding: 6 }}>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="disabledTextInput">Name</Form.Label>
        <Form.Control id="disabledTextInput" placeholder="User Name" defaultValue={username} onChange={(e) => setUsername(e.target.value)} />
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledSelect">Role</Form.Label>
          <Form.Select id="disabledSelect" value={role} onChange={(e) => setRole(e.target.value)} placeholder="Select">
  <option value="" disabled defaultValue>Select Role</option>
  <option value="Hr">Hr</option>
  <option value="Manager">Manager</option>
</Form.Select>
        </Form.Group>
        <Form.Label htmlFor="disabledTextInput">Join Date</Form.Label>
        <Form.Control type="date" id="date" name="date" />
      </Form.Group>
      <Button type="submit" onClick={(event) => handlesubmit(event)}>Submit</Button>
    </Form>
  </div>
) : null}
            </center>
        </div>
    </div>
    </Dashboard>
  );
}

export default Manageuser;
