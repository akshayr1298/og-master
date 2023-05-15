import { Stack } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAddressBook} from '@fortawesome/free-solid-svg-icons';
function CandidateProfile (){
         return(
            <div>

            <diV style={{padding:10}}>
            <Card style={{ width: '18rem',height:'6rem' }}>

                <Card.Body>
                <FontAwesomeIcon icon={faAddressBook}  size='80'/>
               
                    Vijay
                    </Card.Body>
            </Card>
            </diV>
                {/* <Card style={{ width: '50rem' }}>
      <Card.Body>
        <Card.Title>Candidate Details</Card.Title> */}
      <Stack direction="horizontal" gap={5} style={{marginLeft:10}} >
      <Card style={{ width: '25rem'  }}>
        <Card.Body>                   
       <div style={{marginLeft:20}}>
        <Stack direction="horizontal" gap={5}>
            <p> Candidate Name </p> 
            <p>Vijay</p>  
        </Stack>
         
        <Stack direction="horizontal" gap={5}>
            <p> Candidate Email </p> 
            <p> Vijay@gmail.com </p>  
        </Stack> 
        <Stack direction="horizontal" gap={5}>
            <p> Candidate Phone </p> 
            <p> 9876543210 </p>  
        </Stack>
        <Stack direction="horizontal" gap={5}>
            <p> Candidate Status </p> 
            <p>Selected</p>  
        </Stack>
        <Stack direction="horizontal" gap={5}>
            <p> Candidate Score </p> 
            <p> 80% </p>  
        </Stack>
        
        </div>
        </Card.Body>
     </Card>

     <Card style={{ width: '25rem' }}>
        <Card.Body>                   
       <div style={{marginLeft:20}}>
        <Stack direction="horizontal" gap={5}>
            <p> Candidate Name </p> 
            <p>Vijay</p>  
        </Stack>
         
        <Stack direction="horizontal" gap={5}>
            <p> Candidate Email </p> 
            <p> Vijay@gmail.com </p>  
        </Stack> 
        <Stack direction="horizontal" gap={5}>
            <p> Candidate Phone </p> 
            <p> 9876543210 </p>  
        </Stack>
        <Stack direction="horizontal" gap={5}>
            <p> Candidate Status </p> 
            <p>Selected</p>  
        </Stack>
        <Stack direction="horizontal" gap={5}>
            <p> Candidate Score </p> 
            <p> 80% </p>  
        </Stack>
        
        </div>
        </Card.Body>
     </Card>
      </Stack>

     
        
      {/* </Card.Body> */}
    {/* </Card> */}
            </div>
         );

}

export default CandidateProfile;