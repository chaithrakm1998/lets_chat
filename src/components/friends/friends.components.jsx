import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import {Card} from 'react-bootstrap';


const Friends =({ title, imageUrl,id}) => (

   
    <Card className="col-md-4">
        <Card.Img variant="top" src={imageUrl}/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
            <Link  to=  {"detailspage/"+id} className="btn btn-success text-center">Know More </Link>
            
        </Card.Body>


    </Card>
    
  
);
export default Friends;