import React from 'react';

import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap'

const Items = ({  imageUrl, id ,title}) => (
  <Card className = 'col-md-4' >
    <Card.Img src={imageUrl}/>
    <Card.Body>
    <h5 >{title}</h5> 
          helllo
    </Card.Body>
    </Card>

)

export default Items;
