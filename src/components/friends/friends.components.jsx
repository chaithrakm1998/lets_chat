import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import {Card} from 'react-bootstrap';


const Friends = ({imageUrl,id}) => (


   
    <Card className="col-md-4">
        <Card.Img variant="top" src={imageUrl}/>
        <Card.Body>
          
            <Link to= {"detailspage/"+id} className="btn btn-primary">know more</Link>
            
        </Card.Body>


    </Card>
    

    
    )
export default Friends;